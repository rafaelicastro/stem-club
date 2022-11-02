import { VStack, Text } from '@chakra-ui/react';

export function Desmos({title, desc, link}) {
    return (
        <>
            <VStack spacing={"15px"} align={"center"}>
                <Text
                    color={'black.400'}
                    fontWeight={600} // TODO decide on weight
                    fontSize={25}
                    lineHeight={'110%'}
                    align={'center'}
                >
                    {title}
                </Text>
                <Text
                    style={{flexShrink: 1}}
                    paddingX={"50px"}
                    width={"85%"}
                >
                        {desc}
                </Text>
                <iframe
						src={link}
						style={{ border: '1px solid #ccc' }}
						frameBorder="0"
						width="700px"
						height="700px"
                        title="desmos graph"
					></iframe>
            </VStack>
        </>
    );
}