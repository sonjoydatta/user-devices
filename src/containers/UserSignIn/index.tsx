import { Form } from '@/components';
import useForm from '@/libs/hooks/useForm';
import { Container, SubmitButton, Title, Wrapper } from './styles';
import { initialErrors, initialValues, validateForm } from './validateForm';

const UserSignIn = () => {
	const handleFormSubmit = (values: typeof initialValues) => {
		console.log(values);
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
					<SubmitButton type='submit'>Log in</SubmitButton>
				</form>
			</Wrapper>
		</Container>
	);
};

export default UserSignIn;
