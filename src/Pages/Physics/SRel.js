import { Container, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';
import Logo from '../../Images/logo.png';

export function SRel() {
	return (
		<>
			<NavBar />

            <Stack textAlign={'center'} align={'center'}>
                <Heading
                    fontWeight={600} // TODO decide on weight
                    fontSize={{ base: '3xl', sm: '4xl', md: '1xl' }}
                    lineHeight={'110%'}
                    >
                        <Text as={'span'} color={'blue.400'}>Special Relativity</Text>
                </Heading>
            </Stack>

		</>
	);
}
