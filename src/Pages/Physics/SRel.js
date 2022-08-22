import { Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';
import { Slide } from '../../Components/Slide';

export function SRel() {
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
                        <Text as={'span'} color={'blue.400'}>Special Relativity</Text>
                    </Heading>

                    <VStack align={"center"} spacing={150}>
                        <Slide
							title="SR: An Introduction"
							desc="Ever wonder where E=mc^2 comes from? In this presentation, you'll learn about some of the most drastic effects (such as time dilation & length contraction) SR has, why they exist, and some of the history behind it, as well."
							link="https://docs.google.com/presentation/d/1UJjmQE2EFdPmBXB0mcg3lJXOzkCzkjDU/edit?usp=sharing&ouid=101258490025201476859&rtpof=true&sd=true"/>
                    </VStack>
				</Stack>
			</Container>
		</>
	);
}