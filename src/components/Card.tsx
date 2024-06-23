import heart from '@/assets/heart.svg';
import star from '@/assets/star.svg';

function Card({
	name,
	rating,
	reviews,
	distance,
	photo,
	className = '',
}: {
	name: string;
	rating: string;
	reviews: string;
	distance: string;
	photo: any;
	className?: string;
}) {
	return (
		<div className={`flex relative flex-col w-40 ${className}`}>
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
					{rating}
				</div>

				<div className='text-[#B7C1C2] text-[14px]'>{reviews}</div>
			</div>
			<div className='text-[14px]'> {distance}</div>
		</div>
	);
}

export default Card;
