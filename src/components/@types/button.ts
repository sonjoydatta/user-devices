import { ButtonHTMLAttributes } from 'react';
import { Rounded, Size, Variant } from './variant';

type ButtonVariant = Variant | 'link' | 'dark';

export type ButtonProps = {
	size?: Size;
	variant?: ButtonVariant;
	rounded?: Rounded;
	block?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
