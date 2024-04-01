
import { useEffect } from 'react';
import JSConfetti from 'js-confetti';
import { Container, Heading, Text, Stack } from '@chakra-ui/react'

function Congrats() {
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    const canvas = document.getElementById('root')

    jsConfetti.addConfetti({
      emojis: ['👽', '🌺', ' 👻'],
      emojiSize: 80,
      confettiNumber: 100,
    });

    const confettiInterval = setInterval(() => {
      jsConfetti.addConfetti({
        emojis: ['👽', '🌺', ' 👻'],
        emojiSize: 80,
        confettiNumber: 100,
      });
    }, 10000);

    return () => clearInterval({ canvas, confettiInterval });
  }, []);

  return (
    <Container className="container" maxWidth={['100%', '1000px']} margin={"0 auto"} >
      <Stack display={'flex'} flexDir={'column'} maxWidth={['100%', '800px']} gap={"20px"} margin={"0 auto"} height={"100%"}>
        <Heading as='h1' size={['2xl', '4xl']} align={["center"]} fontWeight={'600'} mb='20px' mt={'40px'} >  Congratulations !</Heading>
        <Text textAlign={'center'} fontSize={['xl', '3xl']} fontWeight={'600'} css='text-wrap:balance'>
          Now, with your love as our guide, we will walk together towards a future filled with adventures and laughter.</Text>
        <Text textAlign={'center'} fontSize={['xl', '3xl']} fontWeight={'600'} css='text-wrap:balance'>
          Our hearts united, will light the way to the realization of our deepest dreams.
        </Text>
        <Text textAlign={'center'} fontSize={['xl', '3xl']} fontWeight={'600'} css='text-wrap:balance'>
          Each day will be a blank page waiting to be written with stories of love and happiness.
        </Text>
        <Text textAlign={'center'} fontSize={['xl', '3xl']} fontWeight={'600'} css='text-wrap:balance'>
          We will build castles in the air and turn them into sturdy fortresses, where our hopes and desires intertwine in an eternal dance.
        </Text>
        <Text textAlign={'center'} fontSize={['xl', '3xl']} fontWeight={'600'} css='text-wrap:balance'>
          Because with you, every moment is a dream come true! 🌺❤️✨
        </Text>
      </Stack>
    </Container>
  );
}

export default Congrats;
