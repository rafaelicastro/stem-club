import ReactGoogleSlides from "react-google-slides";
import { VStack, Text } from '@chakra-ui/react';

export function Slide({number, desc, link}) {
    return (
        <>
            <VStack spacing={"10px"} align={"center"}>
                <Text
                    color={'blue.400'}
                    fontWeight={600} // TODO decide on weight
                    fontSize={25}
                    lineHeight={'110%'}
                >
                    Slide {number}
                </Text>
                <Text style={{flexShrink: 1}} paddingX={"50px"}>{desc}</Text>
                <ReactGoogleSlides
                        width={"75%"}
                        slidesLink={link}
                        showControls
                />
            </VStack>
        </>
    );
}