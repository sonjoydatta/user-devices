export interface LoginParams {
	email: string;
	password: string;
}

export interface Device {
	id: number;
	name: string;
}

export interface DevicesResponse {
	devices: Device[];
}

export interface NotifyParams {
	name: string;
	email: string;
	repoUrl: string;
	message: string;
}
