import { Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';
import { Slide } from '../../Components/Slide';

export function NumberTheory() {
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
                        <Text as={'span'} color={'blue.400'}>Number Theory</Text>
                    </Heading>

                    <VStack align={"center"} spacing={150}>
                        <Slide
                            title="Triangular Numbers"
                            desc="The sum of all integers from 1 to n, triangular numbers are a quintessential mathematical tool, and also just pretty cool. In this presentation, learn how to use & derive triangular numbers, along with tetrahedral numbers."
                            link="https://docs.google.com/presentation/d/1Ch1U65ePzzeeWppGdqe5G3SPwGC3x81uNvkPE0xitMQ/edit#slide=id.g145e6e02281_1_65"/>
                    </VStack>
				</Stack>
			</Container>
		</>
	);
}