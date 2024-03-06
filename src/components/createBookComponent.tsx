import { Button } from "@mui/base";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { BookForm } from "../data/bookForm";

const CreateBook = ({hookCall, initialVals = null}: any) => {
    const initialValues: BookForm = initialVals ||  {
        name: '',
        author: '',
        genre: '',
        description: ''
      };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                hookCall(values);
          }}
        >
            <Box sx={{ minWidth: 275 }} mb={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Form>
                            <Typography mb={1} variant="h6">
                                Name 
                                <Field id="name" name="name" placeholder="Name" initialValues={initialValues.name} />
                            </Typography>  
                            <Typography mb={1} variant="h6">
                                Author 
                                <Field id="author" name="author" placeholder="Author" initialValues={initialValues.author} />
                            </Typography>                        
                            <Typography mb={1} variant="h6">
                                Genre 
                                <Field id="genre" name="genre" placeholder="Genre" initialValues={initialValues.genre}/>
                            </Typography>  
                            <Typography mb={1} variant="h6">
                                Description 
                                <Field id="description" name="description" placeholder="Description" initialValues={initialValues.description}/>
                            </Typography>  
                            <Button type="submit">Submit</Button>
                        </Form>
                    </CardContent>
                </Card>
            </Box>
        </Formik>
    )
}

export default CreateBook