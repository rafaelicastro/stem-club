import { Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';
import { Slide } from '../../Components/Slide';

export function Manim() {
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
                        <Text as={'span'} color={'blue.400'}>Manim</Text>
                </Heading>

                    <VStack align={"center"} spacing={150}>
                        <Slide title={"An introduction to mathematical animations"} desc="Popularized by famous math YouTuber 3Blue1Brown, Manim is a python library designed to help people create their own mathematical animations, similar to his own videos. In this presentation, learn how to begin using Manim for your animations." link="https://docs.google.com/presentation/d/1QROK1gFemeVfRaSNJlKfOCYxtuLiw3XJ/edit#slide=id.p1"/>
                    </VStack>
				</Stack>
			</Container>
		</>
	);
}