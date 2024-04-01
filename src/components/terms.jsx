import React, { useEffect } from 'react';
import { Text, Stack, OrderedList, ListItem, Button, Container, Heading, Box } from '@chakra-ui/react'

function Terms({ onClickSubmit, onClickTryAgain }) {

  useEffect(() => {
    const bodyElement = document.body;
    bodyElement.style.height = '100%';
    return () => {
      bodyElement.style.height = '';
    };
  }, []);

  return (
    <Container className="container" maxWidth={['100%', '1000px']} margin={"0 auto"} p={"0 20px"} >
      <Stack display={'flex'} flexDir={'column'} height={"100%"} gap={'0px'} >
        <Heading as='h1' size={['3xl', '4xl']} align={["center"]} fontWeight={'600'} mt={'40px'} >  Terms and Conditions
        </Heading>
        <OrderedList mt={'40px'}>
          <ListItem >
            <Box>
              <Text color={"#d60000"} fontSize={['xl', '2xl']} fontWeight={'600'} css='text-wrap:pretty'>Open and Honest Communication:</Text>
              <Text textAlign={'left'} fontSize={['xl', '2xl']} fontWeight={'600'} p={'10px 0 0 10px'} css='text-wrap:pretty'>
                Mutual commitment to express thoughts, feelings, and needs clearly and respectfully.
              </Text>
            </Box>
          </ListItem>
          <ListItem fontSize={['xl', '2xl']}>
            <Box>
              <Text color={"#d60000"} fontSize={['xl', '2xl']} fontWeight={'600'} css='text-wrap:pretty'>Mutual Respect:</Text>
              <Text textAlign={'left'} fontSize={['xl', '2xl']} fontWeight={'600'} p={'10px 0 0 10px'} css='text-wrap:pretty'>
                Commitment to treat each other with respect, consideration, and empathy in all interactions.
              </Text>
            </Box>
          </ListItem>
          <ListItem fontSize={['xl', '2xl']}>
            <Box>
              <Text color={"#d60000"} fontSize={['xl', '2xl']} fontWeight={'600'} css='text-wrap:pretty'>Mutual Support:</Text>
              <Text textAlign={'left'} fontSize={['xl', '2xl']} fontWeight={'600'} p={'10px 0 0 10px'} css='text-wrap:pretty'>
                Being present to support each other through challenges and celebrate successes, fostering an atmosphere of trust and collaboration.
              </Text>
            </Box>
          </ListItem>
          <ListItem fontSize={['xl', '2xl']}>
            <Box>
              <Text color={"#d60000"} fontSize={['xl', '2xl']} fontWeight={'600'} css='text-wrap:pretty'>Personal Space:</Text>
              <Text textAlign={'left'} fontSize={['xl', '2xl']} fontWeight={'600'} p={'10px 0 0 10px'} css='text-wrap:pretty'>
                Respecting and valuing each other's need for individual time and space to grow, explore personal interests, and maintain autonomy.
              </Text>
            </Box>
          </ListItem>
          <ListItem fontSize={['xl', '2xl']}>
            <Box>
              <Text color={"#d60000"} fontSize={['xl', '2xl']} fontWeight={'600'} css='text-wrap:pretty'>Acceptance and Understanding:</Text>
              <Text textAlign={'left'} fontSize={['xl', '2xl']} fontWeight={'600'} p={'10px 0 0 10px'} css='text-wrap:pretty'>
                Accepting individual differences and understanding that each person is unique, with their own strengths, weaknesses, and life experiences.
              </Text>
            </Box>
          </ListItem>
          <ListItem fontSize={['xl', '2xl']}>
            <Box>
              <Text color={"#d60000"} fontSize={['xl', '2xl']} fontWeight={'600'} css='text-wrap:pretty'>Constructive Conflict Resolution:</Text>
              <Text textAlign={'left'} fontSize={['xl', '2xl']} fontWeight={'600'} p={'10px 0 0 10px'} css='text-wrap:pretty'>
                Commitment to address conflicts calmly, respectfully, and constructively, seeking solutions that benefit both parties.
              </Text>
            </Box>
          </ListItem>
          <ListItem fontSize={['xl', '2xl']}>
            <Box>
              <Text color={"#d60000"} fontSize={['xl', '2xl']} fontWeight={'600'} css='text-wrap:pretty'>Personal and Mutual Growth:</Text>
              <Text textAlign={'left'} fontSize={['xl', '2xl']} fontWeight={'600'} p={'10px 0 0 10px'} css='text-wrap:pretty'>
                Supporting each other's personal growth and committing to grow together as a couple, learning and evolving continuously.
              </Text>
            </Box>
          </ListItem>
          <ListItem fontSize={['xl', '2xl']}>
            <Box>
              <Text color={"#d60000"} fontSize={['xl', '2xl']} fontWeight={'600'} css='text-wrap:pretty'>Commitment to Health and Well-being:</Text>
              <Text textAlign={'left'} fontSize={['xl', '2xl']} fontWeight={'600'} p={'10px 0 0 10px'} css='text-wrap:pretty'>
                Prioritizing the physical, mental, and emotional health of both members of the couple, promoting a healthy lifestyle and mutual care.
              </Text>
            </Box>
          </ListItem>
          <ListItem fontSize={['xl', '2xl']}>
            <Box>
              <Text color={"#d60000"} fontSize={['xl', '2xl']} fontWeight={'600'} css='text-wrap:pretty'>Trust and Loyalty:</Text>
              <Text textAlign={'left'} fontSize={['xl', '2xl']} fontWeight={'600'} p={'10px 0 0 10px'} css='text-wrap:pretty'>
                Building and maintaining mutual trust, being honest, faithful, and reliable with each other at all times.
              </Text>
            </Box>
          </ListItem>
          <ListItem fontSize={['xl', '2xl']}>
            <Box>
              <Text color={"#d60000"} fontSize={['xl', '2xl']} fontWeight={'600'} css='text-wrap:pretty'>Celebration of Love, Connection, and Family:</Text>
              <Text textAlign={'left'} fontSize={['xl', '2xl']} fontWeight={'600'} p={'10px 0 0 10px'} css='text-wrap:pretty'>
                Valuing and celebrating love, connection, shared intimacy, and the dream of building a family together, fostering an atmosphere of romance, joy, and gratitude in the relationship.
              </Text>
            </Box>
          </ListItem>
        </OrderedList>
        <Text color={'#d60000'} textAlign={'center'} fontSize={['xl', '2xl']} fontWeight={'600'} mt={'20px'}>
          These terms and conditions are designed to establish a solid foundation for a healthy, loving, lasting relationship with the vision of building a family together.
        </Text>
        <Stack direction={['column']} width={'100%'} mt={"40px"} mb={'40px'}>
          <Button fontSize='xl' backgroundColor={"#ff2644"} color={'#FFF'} variant='solid' mt='20px' fontWeight={'600'} onClick={onClickSubmit}>
            Acept
          </Button>
          <Button fontSize='xl' backgroundColor={"#ff2644"} color={'#FFF'} variant='solid' mt='20px' fontWeight={'600'} onClick={onClickTryAgain}>
            Decline
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Terms
