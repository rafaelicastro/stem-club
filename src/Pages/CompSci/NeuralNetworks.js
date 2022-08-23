import { Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';
import { Slide } from '../../Components/Slide';

export function NeuralNetworks() {
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
                        <Text as={'span'} color={'blue.400'}>Neural Networks</Text>
                </Heading>

                    <VStack align={"center"} spacing={150}>
                        <Slide
                            title="An introduction to neural networks"
                            desc="Neural networks, programs designed to simulate the brain, are one of the best ways to implement a variety of features, which include anything from facial recognition to predicting the weather. In this presentation, learn how they work, and how to utilize them."
                            link="https://docs.google.com/presentation/d/1TO9D0QtJcv45OH_vhO6_aKQeQRtkmvbnYuzE9Fy1xO4/edit?usp=sharing"
                        />
                    </VStack>
				</Stack>
			</Container>
		</>
	);
}