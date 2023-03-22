import { Container, Heading, Highlight, Stack, Text, VStack } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';
import { Slide } from '../../Components/Slide';

export function AMC() {
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
                        <Highlight
								query='AMC'
								styles={{ px: '5', py: '2', rounded: 'full', bg: 'blue.400' }}
						>
								AMC
						</Highlight>
                    </Heading>

                    <VStack align={"center"} spacing={150}>
                        <Slide
                            title="Competitive Math Prep"
                            desc="Math competitions can be pretty scary, especially when you don't know how they work, or what type of questions will be on them. In this presentation, learn exactly that, and preview some questions given on past exams!"
                            link="https://docs.google.com/presentation/d/1B0O21li_asT1Hr7upeGeKcoVfboZcSOh8qcy4bsoBZc/edit#slide=id.p"/>
                    </VStack>
				</Stack>
			</Container>
		</>
	);
}
