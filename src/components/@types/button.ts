import { ButtonHTMLAttributes } from 'react';
import { Size, Variant } from './variant';

type ButtonVariant = Variant | 'dark' | 'white' | 'link';

export type ButtonProps = {
	size?: Size;
	variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;
