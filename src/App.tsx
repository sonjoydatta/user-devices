import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { defaultTheme } from './styles';

const UserSignIn = lazy(() => import('@/containers/UserSignIn'));
const UserDevices = lazy(() => import('@/containers/UserDevices'));

const App = () => (
	<ThemeProvider theme={defaultTheme}>
		<GlobalStyle />
		<Suspense fallback={<div>Loading...</div>}>
			{/* <UserSignIn /> */}
			<UserDevices />
		</Suspense>
	</ThemeProvider>
);

export default App;
