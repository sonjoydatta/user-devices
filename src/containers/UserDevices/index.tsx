import { apiService } from '@/libs/api';
import { useMounted } from '@/libs/hooks';
import { useEffect, useState } from 'react';
import { Circles } from './Circles';
import { Devices } from './Devices';
import { Footer } from './Footer';
import { Container } from './styles';

const UserDevices = () => {
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
		<Container>
			<Circles devices={devices} />
			<Devices count={devices.length} />
			<Footer />
		</Container>
	);
};

export default UserDevices;
