import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="bg-black h-10 w-full">
			<nav className="text-white flex flex-row align-middle justify-between">
				<span className="logo self-start">Blanco Media</span>
				<div className="justify-self-end gap-2 flex flex-row justify-around mr-2">
					<NavLink>Home</NavLink>
					<NavLink>About</NavLink>
					<NavLink>Contact</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
