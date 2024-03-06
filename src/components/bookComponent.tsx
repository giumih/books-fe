import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import CreateBook from "./createBookComponent";

const BookComponent = ({book, deleteBook, updateBook}: any) => {
    const [isUpdating, setIsUpdating] = useState(false);

    const triggerUpdate = () => {
        setIsUpdating(true);
    }
    
    return (
        <>
        {
            !isUpdating ? (
                <Box sx={{ minWidth: 275 }} mb={2}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {book.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {book.author}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {book.genre}
                            </Typography>
                            <Typography variant="body2">
                                {book.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => triggerUpdate()}>Update</Button>
                            <Button size="small" onClick={() => deleteBook(book.id)}>Delete</Button>
                        </CardActions>
                    </Card>
                </Box>
            )
        : 
            (<CreateBook initialVals={book} hookCall={updateBook}></CreateBook>)
        }
        </>
        
    
    )
}

export default BookComponent