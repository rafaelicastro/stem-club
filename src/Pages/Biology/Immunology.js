import { Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';
import { Slide } from '../../Components/Slide';

export function Immunology() {
	return (
		<>
			<NavBar />
			<Container maxW={'5xl'}>
				<Stack
					textAlign={'center'}
					align={'center'}
					spacing={{ base: 8, md: 20 }}
					py={{ base: 7, md: 7 }}
				>
                    <Heading
                        textAlign={'center'} align={'center'}
                        fontWeight={600}
                        fontSize={{ base: '4xl', sm: '5xl', md: '1xl' }}
                        lineHeight={'110%'}
                    >
                        <Text as={'span'} color={'blue.400'}>Immunology</Text>
                    </Heading>

                    <VStack align={"center"} spacing={150}>
                        <Slide
                            title="The Immune System"
                            desc="The immune system is an integral part of biology -- it's how the body protects itself from unwanted invaders. In this presentation, learn more about exactly what it is, and how the immune system functions."
                            link="https://docs.google.com/presentation/d/1Y460WhkLspSJal9UMvf0bgtfEjRfEXA1-fYB0zmLu9Y/edit?pli=1#slide=id.p"/>
                    </VStack>
				</Stack>
			</Container>
		</>
	);
}