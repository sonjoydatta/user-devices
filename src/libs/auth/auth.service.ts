type Listner = (state: string | null) => void;

export class AuthService {
	private listners = new Set<Listner>();

	getToken() {
		return localStorage.getItem('token');
	}

	setToken(token: string) {
		localStorage.setItem('token', token);
		this.listners.forEach((listner) => listner(token));
	}

	removeToken() {
		localStorage.removeItem('token');
		this.listners.forEach((listner) => listner(null));
	}

	listen(listner: Listner) {
		this.listners.add(listner);

		return () => this.listners.delete(listner);
	}
}

export const authService = new AuthService();
