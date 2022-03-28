import { apiService } from '@/libs/api';
import { authService } from '@/libs/auth';
import { useMounted } from '@/libs/hooks';
import { memo, useCallback, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Button, FooterContainer } from './styles';

export const Footer = memo(() => {
	const [isLoading, setLoading] = useState(false);
	const isMounted = useMounted();
	const { addToast } = useToasts();

	const handleNotify = useCallback(async () => {
		setLoading(true);
		const payload: IAPI.NotifyParams = {
			name: 'Sonjoy D.',
			email: 'sonjoy.dat@gmail.com',
			repoUrl: 'pppp',
			message: 'Hello',
		};

		try {
			const response = await apiService.notify(payload);
			if (!response.success) {
				throw new Error(response.error);
			}

			addToast(response.data, { appearance: 'success', autoDismiss: true });
		} catch (error) {
			if (error instanceof Error) {
				addToast(error.message, { appearance: 'error', autoDismiss: true });
			}
		} finally {
			if (isMounted()) {
				setLoading(false);
			}
		}
	}, [addToast, isMounted]);

	const handleLogout = useCallback(() => authService.removeToken(), []);

	return (
		<FooterContainer>
			<Button type='button' variant='white' size='sm' onClick={handleNotify} disabled={isLoading}>
				{isLoading ? 'Sending...' : 'Notify'}
			</Button>
			<Button type='button' variant='dark' size='sm' onClick={handleLogout}>
				Log out
			</Button>
		</FooterContainer>
	);
});
