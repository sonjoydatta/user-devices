import { FC, memo } from 'react';
import { DevicesWrapper } from './styles';

type Props = {
	count: number;
};

export const Devices: FC<Props> = memo(({ count }) => (
	<DevicesWrapper>
		<h1 className='title'>{count}</h1>
		<p className='subtitle'>{count > 1 ? 'devices' : 'device'} online</p>
	</DevicesWrapper>
));
