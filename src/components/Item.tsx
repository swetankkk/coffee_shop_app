import add from '@/assets/add.svg';

function Item({
	image,
	imagealt,
	name,
	description,
	price,
}: {
	image: any;
	imagealt: string;
	name: string;
	description: string;
	price: string;
}) {
	return (
		<div className='flex bg-[#EDF0EF] relative rounded-md justify-center p-4 mt-2'>
			<img
				src={image}
				alt={imagealt}
				className='h-[89px] w-[105px] rounded-[17px]'
			/>
			<div className=''>
				<img src={add} alt='add' className='h-8 absolute -right-2 -top-3' />
				<div className='flex ml-4 flex-col'>
					<div className='font-bold'>{name}</div>
					<div className='font-[14px] '>{description}</div>
					<div className='self-start font-[14px]'>{price}</div>
				</div>
			</div>
		</div>
	);
}

export default Item;
