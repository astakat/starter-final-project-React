import React from 'react';
// import { events, categories, users } from '/events.json'
import { EventsPageCard } from '../components/EventsPageCard';
import { SimpleGrid } from '@chakra-ui/react'
import { useLoaderData, Link } from 'react-router-dom';

export const loader = async () => {
  const events = await fetch("http://localhost:3000/events");
  const categories = await fetch("http://localhost:3000/categories");
  console.log(events)
  return {
    events: await events.json(),
    categories: await categories.json(),
  }
}

export const EventsPage = () => {

  const { events, categories } = useLoaderData();

  return (
    <SimpleGrid columns={[1, 2]} spacing={10}>
      {events.map((event) => (
        <>
          <Link to={`event/${event.id}`}>
            <EventsPageCard key={event.id} event={event} categories={categories} />
          </Link>
        </>
      ))}

    </SimpleGrid>
  )
};


{/* clickFn={clickFn} <Heading>List of events:
  {events.map(event => <div>{event.title}; {event.description}</div>)}
</Heading>; */}