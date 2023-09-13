import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Center, Container } from "@chakra-ui/react"
import { useLoaderData, Link } from "react-router-dom"

export const loader = async ({ params }) => {
  const event = await fetch(`http://localhost:3000/events/${params.eventId}`);
  // const post = await fetch(`http://localhost:3000/posts/${params.postId}`);
  const categories = await fetch("http://localhost:3000/categories")
  console.log(event)
  return {
    event: await event.json(),
    // post: await post.json(),
    categories: await categories.json(),
  };
};

export const EventPage = () => {
  const { event, categories } = useLoaderData();
  return (
    <Container borderRadius={50} margin={20} bgGradient="linear(to-l, #fafcfc, #1689c9)" >

      <Heading mb={4}>Title: {event.title}</Heading>
      <Text mb={4}>Description: {event.description}</Text>
      <Center mb={4}><img src={event.image} width={300} /></Center>
      <Button mb={4} w="fit-content" colorScheme='pink' mt='24px' onClick={() => clickFn()} >
        Back to portfolio overview
      </Button>

    </Container>)
};
