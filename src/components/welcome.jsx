import React, { useState, useEffect, useRef } from 'react';
import { Container, Button, Heading, Stack, Text } from '@chakra-ui/react';

function Welcome({ setShowTerms, setShowTryAgain }) {
  const headerText = useRef("Hello Diana 👻 ");
  const parraf1 = useRef("I admire you, and there's something I'd like to ask...");
  const parraf2 = useRef("Would you do me the honor of being my girlfriend? 🌹🥰");
  const [speedHeader] = useState(100); // typing speedParraf in milliseconds
  const [speedParraf] = useState(50); // typing speedParraf in milliseconds
  const [delay] = useState(400); // Half-second delay before starting the second text
  const [content1, setContent1] = useState('');
  const [content2, setContent2] = useState('');
  const [content3, setContent3] = useState('');
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const animateText = async () => {
      for (let i = 0; i < headerText.current.length; i++) {
        await new Promise(resolve => setTimeout(resolve, speedHeader));
        setContent1(headerText.current.substring(0, i + 1));
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      for (let i = 0; i < parraf1.current.length; i++) {
        await new Promise(resolve => setTimeout(resolve, speedParraf));
        setContent2(parraf1.current.substring(0, i + 1));
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      for (let i = 0; i < parraf2.current.length; i++) {
        await new Promise(resolve => setTimeout(resolve, speedParraf));
        setContent3(parraf2.current.substring(0, i + 1));
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      setShowButtons(true);
    };

    animateText();

    return () => {
    };
  }, []);

  return (
    <Container maxWidth={['100%', '1000px']} margin={"0 auto"}  >
      <Stack display={'flex'} flexDir={'column'} gap={"40px"}  >
        <Heading as='h1' size='4xl' align={["center"]} fontWeight={'600'} mt={'40px'}>
          {content1}
        </Heading>
        <Stack direction={['column']} width={'100%'} gap={"20px"} >
          <Text fontSize={['4xl', '4xl']} fontWeight={'600'} textAlign={'center'} >
            {content2}
          </Text>
          <Text fontSize={['4xl', '4xl']} fontWeight={'600'} textAlign={'center'} >
            {content3}
          </Text>
        </Stack>
        {showButtons && (
          <Stack direction={['column']} width={'100%'} gap="20px" maxWidth={['100%', '100%']} alignSelf='center'>
            <Button fontSize='xl' backgroundColor={"#ff2644"} color={'#FFF'} variant='solid' fontWeight={'600'} onClick={() => setShowTerms(true)}>
              Yes
            </Button>
            <Button fontSize='xl' backgroundColor={"#ff2644"} color={'#FFF'} variant='solid' fontWeight={'600'} onClick={() => setShowTryAgain(true)}>
              No
            </Button>
          </Stack>
        )}
      </Stack>
    </Container>

  );
}

export default Welcome;
