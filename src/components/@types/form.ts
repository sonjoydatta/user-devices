import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';
import { Variant } from './variant';

export type FormGroupProps = {
	children: ReactNode;
};

export type FormLabelProps = {
	srOnly?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;

export type FormInputProps = {
	variant?: Variant;
} & InputHTMLAttributes<HTMLInputElement>;

export type FormMessageProps = {
	message?: ReactNode;
	variant?: Variant;
};
