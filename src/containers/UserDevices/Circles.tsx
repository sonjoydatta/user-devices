import { FC, memo } from 'react';
import { CircleWrapper } from './styles';

type Props = {
	devices: IAPI.Device[];
};

export const Circles: FC<Props> = memo(({ devices }) => (
	<CircleWrapper>
		<div className='circle'>
			{devices.map(({ id, name }, i) => {
				if (i < 17) {
					return <div key={id} className='circle-item' title={name} />;
				}

				return null;
			})}
		</div>
	</CircleWrapper>
));
