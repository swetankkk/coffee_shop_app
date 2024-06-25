import heart from '@/assets/heart.svg';
import star from '@/assets/star.svg';
import { useNavigate } from 'react-router-dom';

function Card({
	name,
	rating,
	reviews,
	distance,
	photo,
	id,
	className = '',
}: {
	name: string;
	rating: number;
	reviews: number;
	distance: number;
	photo: string;
	className?: string;
	id: string;
}) {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => navigate(`/cafe/${id}`)}
			className={`flex relative flex-col w-40 ${className}`}
		>
			<div className='absolute bg-[#EDF0EF] p-1 rounded-full size-6 -right-2 -top-2'>
				<img src={heart} alt='heart' className='' />
			</div>
			<img
				src={photo}
				alt='photo'
				className='w-full h-[150px] object-cover rounded-[20px]'
			/>{' '}
			<div className='text-[16px]'>{name}</div>
			<div className='flex  '>
				<div className='flex text-[14px]'>
					<img src={star} alt='star' />
					{rating} &nbsp;
				</div>

				<div className='text-[#B7C1C2] text-[14px]'>{reviews} reviews</div>
			</div>
			<div className='text-[14px]'> {distance} mile</div>
		</div>
	);
}

export default Card;
