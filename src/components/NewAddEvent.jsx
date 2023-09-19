import { useState } from "react";
import {
    Checkbox,
    CheckboxGroup,
    Stack,
    Input,
    Button
} from '@chakra-ui/react'


export const NewAddEvent = ({ createEvent }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        createEvent({ title, description, image, category });

        setTitle("");
        setDescription("");
        setImage("");
        setCategory([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <span>Event: </span>
            <Input
                type="text"
                value={title}
                placeholder='event title'
                onChange={(e) => setTitle(e.target.value)}
            />
            <span>Description: </span>
            <Input
                type="text"
                value={description}
                placeholder='event description'
                onChange={(e) => setDescription(e.target.value)}
            />
            <span>
                <image
                    type="url"
                    value={image}
                    placeholder='image link'
                    onChange={(e) => setImage(e.target.value)}
                ></image>
            </span>
            <span>Categories: </span>
            <CheckboxGroup colorScheme='pink' >
                <Stack spacing={[1, 5]} direction={['column', 'row']} defaultValue={["1"]}>
                    <Checkbox
                        name="categoryIds"
                        value="1" >
                        Games</Checkbox>
                    <Checkbox
                        name="categoryIds"
                        value="2" >
                        Sports</Checkbox>
                </Stack>
            </CheckboxGroup>
            <span>Start time:</span>
            <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
            />
            <span>End time:</span>
            <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
            />
            <Button type="submit" colorScheme='pink'>Add event!</Button>

        </form>
    )
}

// https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg