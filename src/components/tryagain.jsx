import { Text, Stack, Button, Container, Heading } from '@chakra-ui/react';

function TryAgain({ onClickReset }) {

    return (
        <Container className="container">
            <Stack gap={"60px"}>
                <Heading as='h1' size={['3xl', '4xl']} align={["center"]} fontWeight={'600'} mt={'40px'} lineHeight={"1.6 !important"}>
                    Are you sure? 🥹🥀
                </Heading>
                <Text textAlign={'center'} fontSize={['3xl', '3xl']} fontWeight={'600'} width={'100%'} mb={"20px"} >
                    Alright... So, it looks like you'll have to do 50 burpees or give it another shot!
                </Text>
                <Button fontSize='xl' backgroundColor={"#ff2644"} color={'#FFF'} variant='solid' fontWeight={'600'} onClick={onClickReset}>
                    Try Again
                </Button>
            </Stack>
        </Container>
    );
}

export default TryAgain;