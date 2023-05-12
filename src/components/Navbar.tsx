import { ColorModeScript, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
	return (
		<div>
			<HStack justifyContent='space-between' padding='10px'>
				<Image src={logo} boxSize='60px' />
				<SearchInput />
				<ColorModeSwitch />
			</HStack>
		</div>
	);
};

export default Navbar;
