import { Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { NavBar } from '../Components/NavBar';
import { Desmos } from '../Components/Desmos';

export function Projects() {
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
                        <Text as={'span'} color={'yellow.400'}>STEM Club Projects</Text>
                    </Heading>

                    <VStack align={"center"} spacing={150}>
                        <Desmos
                            title="Happy Halloween!"
                            desc="Enjoy this graph art made by one of our own members in Desmos. To view the equations that make this up, click 'edit on Desmos', and enjoy!"
                            link="https://www.desmos.com/calculator/fwrlxvw4lf?embed"
                        />
                        <Desmos
                            title="Spacetime Calculator"
                            desc="Change the velocity of a reference frame to see how the axes of a spacetime graph are affected! This is accomplished using the Lorentz Transformations, a critical part of Special Relativity."
                            link="https://www.desmos.com/calculator/6euyxwvna4?embed"
                        />
                    </VStack>
				</Stack>
			</Container>
		</>
	);
}