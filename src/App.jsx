import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout/RootLayout';
import Home from './pages/Home/Home';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
			</Route>
		</Route>,
	),
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
