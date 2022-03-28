import { lazy, Suspense } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';
import { useAuth } from './libs/auth';
import GlobalStyle, { defaultTheme } from './styles';

const UserSignIn = lazy(() => import('@/containers/UserSignIn'));
const UserDevices = lazy(() => import('@/containers/UserDevices'));

const App = () => {
	const { isAuthenticated } = useAuth();

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<Suspense fallback={<div>Loading...</div>}>
				<ToastProvider>{!isAuthenticated ? <UserSignIn /> : <UserDevices />}</ToastProvider>
			</Suspense>
		</ThemeProvider>
	);
};

export default App;
