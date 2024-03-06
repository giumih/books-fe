import './App.css';
import useSWR from 'swr'
import axios from 'axios';
import { baseURL } from './constants';
import { Book } from './data/book';
import  BookComponent from './components/bookComponent';
import { Button } from '@mui/material';
import { useState } from 'react';
import CreateBook from './components/createBookComponent';

function App() {
  const fetcher = (url: string) => axios.get(url).then(res => {setLoading(false); return res.data});
  const { data, error, mutate } = useSWR(baseURL, fetcher);
  const [newBook, setNewBook] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) return (<div>Error fetching books.</div>);

  const deleteBook = async (id: number) => {
    setLoading(true);
    await axios.delete(`${baseURL}/${id}`).then(res => res.data);
    await mutate({data});
    setLoading(false);
  }

  const addBook = () => {
    setNewBook(true);
  }

  const createBook = async (values: Book) => {
    setLoading(true);
    await axios.post(baseURL, values)
    await mutate({data});
    setLoading(false);
    setNewBook(false);
  }

  const updateBook = async (values: Book) => {
    setLoading(true);
    await axios.put(`${baseURL}/${values.id}`, values)
    await mutate({data});
    setLoading(false);
  }

  return (
    <>
      {!loading ? (
        <>
          {data.length > 0 && data.map((book: Book) => (
            <BookComponent book={book} deleteBook={deleteBook} updateBook={updateBook}></BookComponent>
          ))
          }
          {
            newBook ? 
              (
                <CreateBook hookCall={createBook}></CreateBook>
              ) :
              (<Button onClick={() => addBook()}>Add a book</Button>)
          }
        </>
      ) : (
        <div>Data is loading</div>
        )
      }
    </>
  );
}

export default App;
