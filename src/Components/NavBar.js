import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Collapse,
	Flex,
	Icon,
	IconButton,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export function NavBar() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
			>
				<Flex
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}
				>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<RouterLink to={'/'}>
                        <Text
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.800', 'white')}
                        >
                            Hackley STEM
                        </Text>
					</RouterLink>

					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
			<br/>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');

	return (
		<Stack direction={'row'} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<RouterLink
								to={navItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={500}
								color={linkColor}
							>
								<Text
									px={2}
									_hover={{
										textDecoration: 'none',
										color: linkHoverColor,
									}}
								>
									{navItem.label}
								</Text>
							</RouterLink>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={popoverContentBgColor}
								p={4}
								rounded={'xl'}
								minW={'sm'}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }) => {
	return (
		<RouterLink
			to={href}
		>
			<Stack
				display={'block'}
				p={2}
				rounded={'md'}
				role={'group'}
				_hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}
			><Stack direction={'row'} align={'center'}>
			
				<Box>
					<Text
						transition={'all .3s ease'}
						_groupHover={{ color: 'blue.400' }}
						fontWeight={500}
					>
						{label}
					</Text>
					<Text fontSize={'sm'}>{subLabel}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack></Stack>
		</RouterLink>
	);
};

const MobileNav = () => {
	return (
		<Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<RouterLink to={href ?? '#'}>
				<Flex
					py={2}
					justify={'space-between'}
					align={'center'}
					_hover={{
						textDecoration: 'none',
					}}
				>
					<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
						{label}
					</Text>
					{children && (
						<Icon
							as={ChevronDownIcon}
							transition={'all .25s ease-in-out'}
							transform={isOpen ? 'rotate(180deg)' : ''}
							w={6}
							h={6}
						/>
					)}
				</Flex>
			</RouterLink>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					align={'start'}
				>
					{children &&
						children.map((child) => (
							<RouterLink
								key={child.label}
								to={child.href}
							>
								<Text py={2}> {child.label} </Text>
							</RouterLink>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

const NAV_ITEMS = [
	{
		label: 'Physics',
		children: [
			{
				label: 'Special Relativity',
				subLabel: 'E = mc^2',
				href: '/srel',
			},
		],
	},
	{
		label: 'Math',
		children: [
			{
				label: 'Number Theory',
				subLabel: 'Hard questions made easy',
				href: '/numtheory',
			},
		],
	},
	{
		label: 'Computer Science',
		children: [
			{
				label: 'Manim',
				subLabel: 'Mathematical animations',
				href: '/manim',
			},
			{
				label: 'Neural Networks',
				subLabel: 'The basis of AI',
				href: '/nnetworks'
			},
		],
	},
	{
		label: 'About',
		href: '/about',
	},

];