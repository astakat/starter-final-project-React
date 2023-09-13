import { Card, CardBody, CardFooter, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Tag } from '@chakra-ui/react'
import { Link } from "react-router-dom"


export const EventsPageCard = ({ event, categories, clickFn }) => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            onClick={() => clickFn(event)}
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={event.image}
                alt={event.title}
            />

            <Stack>
                <CardBody>
                    <Heading size='xl'>{event.title}</Heading>

                    <Text py='2'>
                        {event.description}
                    </Text>
                    <Text color='blue' fontSize='m'>
                        Starts: {event.startTime}
                    </Text>
                    <Text color='blue' fontSize='m'>
                        Ends:{event.endTime}
                    </Text>
                </CardBody>

                <CardFooter>
                    <Flex gap={2}>
                        {categories.filter((e) => event.categoryIds.includes(e.id)).map((category) => (
                            <Tag colorScheme='pink' key={category.categoryIds}>{category.name}</Tag>))}
                    </Flex>
                    {/* <Button variant='solid' colorScheme='blue'>
                        Buy Latte
                    </Button> */}
                </CardFooter>
            </Stack>
        </Card>
    )

}
