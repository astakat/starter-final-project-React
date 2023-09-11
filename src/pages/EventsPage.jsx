import React from 'react';
import { events, categories, users } from '/events.json'
import { EventsPageCard } from '../components/EventsPageCard';
import { SimpleGrid } from '@chakra-ui/react'

export const EventsPage = () => {
  return (
    <SimpleGrid columns={[1, 2]} spacing={10}>
      {events.map((event) => (
        <EventsPageCard key={event.id} event={event} categories={categories} users={users} />))}
    </SimpleGrid>
  )
};


{/* clickFn={clickFn} <Heading>List of events:
  {events.map(event => <div>{event.title}; {event.description}</div>)}
</Heading>; */}