import { Button } from '@/components';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #263139;
`;

export const Wrapper = styled.div`
	width: 380px;
	padding: 1rem;
	border-radius: 0.25rem;
	background-color: #ffffff;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
	font-weight: 400;
	text-align: center;
	margin-bottom: 1rem;
`;

export const SubmitButton = styled(Button)`
	display: block;
	margin: 0 auto;
	font-weight: 600;
	text-transform: uppercase;
`;
