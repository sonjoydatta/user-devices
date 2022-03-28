import { Button as Btn } from '@/components';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ff7043;
`;

export const DevicesWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.title,
	.subtitle {
		color: #ffffff;
		text-transform: uppercase;
		font-weight: 400;
	}

	.title {
		font-size: 6rem;
		line-height: 1;
	}
`;

export const FooterContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 0.875rem;
	padding: 1rem 0;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.15);
	position: fixed;
	bottom: 0;
`;

export const Button = styled(Btn)`
	font-weight: 600;
	text-transform: uppercase;
`;
