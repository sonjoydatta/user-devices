import { AuthService } from '../auth.service';

describe('AuthService', () => {
	let service: AuthService;

	beforeEach(() => {
		service = new AuthService();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should return a token', () => {
		expect(service.getToken()).toBeNull();
		service.setToken('token');
		expect(service.getToken()).toBe('token');
	});

	it('should remove a token', () => {
		service.setToken('token');
		expect(service.getToken()).toBe('token');
		service.removeToken();
		expect(service.getToken()).toBeNull();
	});

	it('should listen to a token', () => {
		const listner = jest.fn();
		const unsubscribe = service.listen(listner);
		expect(listner).toHaveBeenCalledTimes(0);
		service.setToken('token');
		expect(listner).toHaveBeenCalledTimes(1);
		expect(listner).toHaveBeenCalledWith('token');
		unsubscribe();
		service.setToken('token2');
		expect(listner).toHaveBeenCalledTimes(1);
	});
});
