import { Form } from '@/components';
import { apiService } from '@/libs/api';
import { authService } from '@/libs/auth';
import { useForm, useMounted } from '@/libs/hooks';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Container, SubmitButton, Title, Wrapper } from './styles';
import { initialErrors, initialValues, validateForm } from './validateForm';

const UserSignIn = () => {
	const [isLoading, setLoading] = useState(false);
	const isMounted = useMounted();
	const { addToast } = useToasts();

	const handleFormSubmit = async (values: IAPI.LoginParams) => {
		setLoading(true);

		try {
			const response = await apiService.login(values);
			if (!response.success) {
				throw new Error(response.error);
			}

			authService.setToken(response.data);
		} catch (error) {
			if (error instanceof Error) {
				addToast(error.message, { appearance: 'error', autoDismiss: true });
			}
		} finally {
			if (isMounted()) {
				setLoading(false);
			}
		}
	};

	const { values, errors, handleChange, handleSubmit } = useForm({
		initialValues,
		initialErrors,
		validate: validateForm,
		onSuccess: handleFormSubmit,
	});

	return (
		<Container>
			<Wrapper>
				<Title>Login</Title>

				<form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label srOnly>Email</Form.Label>
						<Form.Input
							type='email'
							name='email'
							placeholder='Email address'
							value={values.email}
							onChange={handleChange}
							variant={errors.email ? 'danger' : undefined}
						/>
						{errors.email && <Form.Message variant='danger'>{errors.email}</Form.Message>}
					</Form.Group>
					<Form.Group>
						<Form.Label srOnly>Email</Form.Label>
						<Form.Input
							type='password'
							name='password'
							placeholder='Password'
							value={values.password}
							onChange={handleChange}
							variant={errors.password ? 'danger' : undefined}
						/>
						{errors.password && <Form.Message variant='danger'>{errors.password}</Form.Message>}
					</Form.Group>
					<SubmitButton type='submit' disabled={isLoading}>
						{isLoading ? 'Loading...' : 'Log in'}
					</SubmitButton>
				</form>
			</Wrapper>
		</Container>
	);
};

export default UserSignIn;
