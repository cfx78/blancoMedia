import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{!isOpen ? (
				<div className=" mx-auto ml-[17.5rem]">
					<button
						className="push-start"
						onClick={() => setIsOpen(!isOpen)}>
						Push <br /> Start
					</button>
				</div>
			) : (
				<div
					className={`top-0 left-0 fixed bg-slate-800 w-[100vw] h-full p-10 ${
						isOpen ? 'translate-x-0' : 'translate-x-full'
					} ease-in-out duration-300`}>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-xl text-white fixed top-4 left-4 ">
						x
					</button>
					<h2 className="text-2xl text-white">Home</h2>
					<h2 className="text-2xl text-white">About</h2>
					<h2 className="text-2xl text-white">Photos</h2>
					<h2 className="text-2xl text-white">Contact</h2>
				</div>
			)}
		</>
	);
};

export default Sidebar;
