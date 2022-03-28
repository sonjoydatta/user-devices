import { hexToRGB } from '@/utils/helpers';
import styled, { css } from 'styled-components';
import { ButtonProps } from './@types';

export const Button = styled.button<ButtonProps>`
	width: auto;
	height: auto;
	display: inline-block;
	text-align: center;
	outline: none;
	user-select: none;
	border-width: 1px;
	border-style: solid;
	cursor: pointer;
	font-weight: 400;
	${({ variant = 'primary' }) => {
		switch (variant) {
			case 'link':
				return css`
					color: ${({ theme }) => theme.colors.primary};
					background-color: transparent;
					border-color: transparent;
					text-decoration: underline;
				`;
			case 'white':
				return css`
					color: ${({ theme }) => theme.colors.dark};
					background-color: #ffffff;
					border-color: #ffffff;
					text-decoration: none;
				`;
			default:
				return css`
					color: #ffffff;
					background-color: ${({ theme }) => theme.colors[variant]};
					border-color: ${({ theme }) => theme.colors[variant]};
					text-decoration: none;
				`;
		}
	}}
	${({ size = 'md' }) => {
		switch (size) {
			case 'sm':
				return css`
					padding: 0.438rem 1.25rem;
				`;
			case 'lg':
				return css`
					font-size: 1rem;
					padding: 0.875rem 1.25rem;
				`;
			default:
				return css`
					padding: 0.688rem 1.25rem;
				`;
		}
	}}
	border-radius: 0.25rem;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	&:hover,
	&:focus {
		${({ variant = 'primary' }) => {
			switch (variant) {
				case 'link':
					return css`
						text-decoration: none;
					`;
				case 'white':
					return css`
						background-color: rgba(255, 255, 255, 0.85);
					`;
				default:
					return css`
						background-color: ${({ theme }) => hexToRGB(theme.colors[variant], 0.85)};
					`;
			}
		}}
	}

	&:disabled {
		cursor: default;
		opacity: 0.5;
	}
`;
