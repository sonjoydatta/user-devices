import { config } from '@/config';
import { authService, AuthService } from '../auth';
import { DevicesResponse, LoginParams, NotifyParams } from './@types';
import { HttpService } from './http.service';

class APIService {
	constructor(private http: HttpService, private auth: AuthService) {}

	login(payload: LoginParams) {
		return this.http.post<string>('login', payload);
	}

	getDevices() {
		return this.http.get<DevicesResponse>('devices');
	}

	notify(payload: NotifyParams) {
		return this.http.post<string>('notify', payload, {
			headers: {
				Authorization: `Bearer ${this.auth.getToken()}`,
			},
		});
	}
}

const httpInstance = new HttpService(config.apiURL);
export const apiService = new APIService(httpInstance, authService);
