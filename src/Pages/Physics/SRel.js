import { Heading, VStack, Stack, Text } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';
import { Slide } from '../../Components/Slide';

export function SRel() {
	return (
		<>
			<NavBar />

            <Stack textAlign={'center'} align={'center'}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '4xl', sm: '5xl', md: '1xl' }}
                    lineHeight={'110%'}
                    >
                        <Text as={'span'} color={'blue.400'}>Special Relativity</Text>
                </Heading>
            </Stack>

            <VStack paddingY={100} spacing={150} align={"center"}>
                <Slide number={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="https://docs.google.com/presentation/d/1-IyBCMHnuoH5M5hNzZ37sQEvxT7PM4VyMORxeNNMQHo/edit#slide=id.p"/>
                <Slide number={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="https://docs.google.com/presentation/d/1-IyBCMHnuoH5M5hNzZ37sQEvxT7PM4VyMORxeNNMQHo/edit#slide=id.p"/>
                <Slide number={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="https://docs.google.com/presentation/d/1-IyBCMHnuoH5M5hNzZ37sQEvxT7PM4VyMORxeNNMQHo/edit#slide=id.p"/>
            </VStack>
		</>
	);
}
