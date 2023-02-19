import { Outlet } from 'react-router-dom';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import Navbar from '../../components/Navbar/Navbar';

const RootLayout = () => {
	return (
		<div>
			<BackgroundVideo />
			<Navbar />
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
