import { Container, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';

export function NumberTheory() {
	return (
		<>
			<NavBar />

            <Stack textAlign={'center'} align={'center'}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '1xl' }}
                    lineHeight={'110%'}
                    >
                        <Text as={'span'} color={'blue.400'}>Number Theory</Text>
                </Heading>
            </Stack>

		</>
	);
}