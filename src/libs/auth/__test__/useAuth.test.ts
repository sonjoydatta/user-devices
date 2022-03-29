import { act, renderHook } from '@testing-library/react-hooks';
import { authService } from '../auth.service';
import { useAuth } from '../useAuth';

describe('useAuth', () => {
	it('should use auth', () => {
		const { result } = renderHook(() => useAuth());
		expect(result.current.token).toBeNull();
		expect(result.current.isAuthenticated).not.toBeTruthy();
	});

	it('should listen to auth', () => {
		const { result } = renderHook(() => useAuth());
		act(() => authService.setToken('token'));
		expect(result.current.token).toBe('token');
		expect(result.current.isAuthenticated).toBeTruthy();
	});

	it('should remove auth', () => {
		const { result } = renderHook(() => useAuth());
		act(() => authService.setToken('token'));
		expect(result.current.token).toBe('token');
		expect(result.current.isAuthenticated).toBeTruthy();
		act(() => authService.removeToken());
		expect(result.current.token).toBeNull();
		expect(result.current.isAuthenticated).not.toBeTruthy();
	});
});
