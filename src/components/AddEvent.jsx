import { Form, redirect, useLoaderData } from "react-router-dom";
import {
    Checkbox,
    CheckboxGroup,
    Stack,
    Input,
    Button
} from '@chakra-ui/react'

export const action = async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    console.log("formData", formData)
    const newId = await fetch(
        "http://localhost:3000/events", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
    })
        .then((res) => res.json())
        .then((json) => json.id)
    return redirect(`/event/${newId}`);
};

export const loader = async () => {
    const users = await fetch("http://localhost:3000/users");
    return {
        users: await users.json(),
    }
}

export const AddEvent = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <Form method="post">
            <span>Event: </span>
            <Input name="title" placeholder='event title' />
            <span>Description: </span>
            <Input name="description" placeholder='event description' />
            <span>Categories: </span>
            <CheckboxGroup colorScheme='pink' >
                <Stack spacing={[1, 5]} direction={['column', 'row']} defaultValue={["1"]}>
                    {/* dit klopt nog niet; hoe maak ik van de aangevinkte box een categoryIds 1 of 2? Ik krijg alleen de laatste value... */}
                    <Checkbox name="categoryIds" value="1" >Games</Checkbox>
                    <Checkbox name="categoryIds" value="2" >Sports</Checkbox>
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
        </Form>
    )
}
