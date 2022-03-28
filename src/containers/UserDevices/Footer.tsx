import { Button, FooterContainer } from './styles';

export const Footer = () => (
	<FooterContainer>
		<Button type='button' variant='primary' size='sm'>
			Notify
		</Button>
		<Button type='button' variant='dark' size='sm'>
			Log out
		</Button>
	</FooterContainer>
);
