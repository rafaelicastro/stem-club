import { 
    Button,
    Container,
    FormControl,
    FormLabel,
    FormHelperText,
    Heading,
    Input,
    InputGroup,
    Stack,
    Text,
    Textarea as TextArea // just feels wrong lmao
} from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function About() {

    const [name, setName] = useState();
    const handleNameChange = (event) => setName(event.target.value);

    const [link, setLink] = useState();
    const handleLinkChange = (event) => setLink(event.target.value);

    const [date, setDate] = useState();
    const handleDateChange = (event) => setDate(event.target.value);

    const [note, setNote] = useState();
    const handleNoteChange = (event) => setNote(event.target.value);

    function submit() {
        let message = 'HACKLEY STEM PRESENTATION REQUEST\n\n'
        message += 'name: ' + name
        message += '\nlink: ' + link
        message += '\ndate: ' + date
        message += '\nnote:\n' + note
        console.log(message)
        emailjs.sendForm('default_service', 'template_ougiqcs', this, 'gFDUoGOP94bss27mZ')
            .then(() => {
                alert('Sent!');
            }, (err) => {
                alert(JSON.stringify(err));
            });
    }

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
						fontWeight={600}
						fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
						lineHeight={'110%'}
					>
						About
					</Heading>
					<Text color={'gray.500'} maxW={'3xl'}>
						Hackley STEM is a space to be able to share ideas in STEM that aren't traditionally gone over in the school system.
                        Members (at Hackley School) will prepare presentations, and email them (preferrably using the form below)
                        to Rafael Castro at rcastro@students.hackleyschool.org at least 24 hours before their presentation.
                        Students may present during the allotted club time.
                        <br />
                        <br />
                        A goal that Hackley STEM is trying to accomplish is to increase the amount that students know about
                        STEM in general, not just at Hackley. Therefore, while they may not present (for obvious reasons), we invite
                        students from other schools who are interested in STEM to look at our website, as all the presentations
                        will be on here.
					</Text>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input type={'text'} value={name} onChange={handleNameChange}/>
                        <br /> <br />
                        <FormLabel>Presentation Link</FormLabel>
                        <Input type={'url'} value={link} onChange={handleLinkChange}/>
                        <FormHelperText>Make sure it's public.</FormHelperText>
                        <br />
                        <FormLabel>(Intended) date of presentation</FormLabel>
                        <Input type={'date'} value={date} onChange={handleDateChange}/>
                        <br /> <br />
                        <FormLabel>Additional Notes</FormLabel>
                        <InputGroup>
                            <TextArea value={note} onChange={handleNoteChange} />
                        </InputGroup>
                        <Button
                            type={'submit'}
                            mt={7}
                            colorScheme={'yellow'}
                            // onClick={submit}
                        >
                            Submit
                        </Button>
                    </FormControl>
				</Stack>
			</Container>
		</>
	);
}
