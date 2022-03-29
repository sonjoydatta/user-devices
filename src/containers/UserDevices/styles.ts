import { Button as Btn } from '@/components';
import styled, { keyframes } from 'styled-components';

const Rotation = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div`
	width: 100vw;
	min-height: 100vh;
	display: block;
	background-color: #ff7043;
`;

export const DevicesWrapper = styled.div`
	width: 100%;
	height: calc(100vh - 4.5rem);
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
		font-size: 5rem;
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

export const CircleWrapper = styled.div`
	width: 100%;
	height: calc(100% - 4.5rem);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 99;
	display: flex;
	align-items: center;
	justify-content: center;

	.circle {
		border-radius: 50%;
		width: 28rem;
		height: 28rem;
		position: relative;
		animation: ${Rotation} 120s linear infinite;

		&-item {
			position: absolute;
			width: 2rem;
			height: 2rem;
			background: #ffffff;
			border-radius: 50%;

			&:nth-child(1) {
				top: 38px;
				left: 64px;
			}

			&:nth-child(2) {
				top: 0;
				left: 124px;
			}

			&:nth-child(3) {
				top: -12px;
				left: 196px;
			}

			&:nth-child(4) {
				top: -7px;
				left: 272px;
			}

			&:nth-child(5) {
				top: 25px;
				left: 336px;
			}

			&:nth-child(6) {
				top: 78px;
				left: 389px;
			}

			&:nth-child(7) {
				top: 143px;
				left: 422px;
			}

			&:nth-child(8) {
				top: 216px;
				left: 430px;
			}

			&:nth-child(9) {
				top: 295px;
				left: 413px;
			}

			&:nth-child(10) {
				top: 360px;
				left: 368px;
			}

			&:nth-child(11) {
				top: 411px;
				left: 298px;
			}

			&:nth-child(12) {
				top: 431px;
				left: 214px;
			}

			&:nth-child(13) {
				top: 415px;
				left: 124px;
			}

			&:nth-child(14) {
				top: 367px;
				left: 52px;
			}

			&:nth-child(15) {
				top: 295px;
				left: 0;
			}

			&:nth-child(16) {
				top: 210px;
				left: -17px;
			}

			&:nth-child(17) {
				top: 120px;
				left: 0;
			}
		}
	}
`;
