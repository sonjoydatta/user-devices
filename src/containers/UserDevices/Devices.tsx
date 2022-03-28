import { apiService } from '@/libs/api';
import { useMounted } from '@/libs/hooks';
import { memo, useEffect, useState } from 'react';
import { DevicesWrapper } from './styles';

export const Devices = memo(() => {
	const [devices, setDevices] = useState<IAPI.Device[]>([]);
	const isMounted = useMounted();

	useEffect(() => {
		const getDevices = async () => {
			try {
				const response = await apiService.getDevices();
				if (!response.success) {
					throw new Error(response.error);
				}

				if (isMounted()) {
					setDevices(response.data.devices);
				}
			} catch (error) {
				console.log(error);
			}
		};

		const interval = setInterval(getDevices, 5000);

		return () => clearInterval(interval);
	}, [isMounted]);

	return (
		<DevicesWrapper>
			<h1 className='title'>{devices.length}</h1>
			<p className='subtitle'>{devices.length > 1 ? 'devices' : 'device'} online</p>
		</DevicesWrapper>
	);
});
