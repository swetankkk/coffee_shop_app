import start from '@/assets/star.svg';
import coffee from '@/assets/coffee.svg';
import drinks from '@/assets/drinks.svg';
import food from '@/assets/food.svg';
import caramel_machiato from '@/assets/caramel_machiatto.jpeg';
import back_arrow from '@/assets/arrow.svg';
import Item from '@/components/Item';
import caffee_mocha from '@/assets/caffee_mocha.jpeg';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CoffeeShop } from '../api/coffeeShops';
import { coffeeShopsApi } from '../api';

function Cafe() {
	const { id } = useParams<{ id: string }>();
	console.log(id);
	const [coffeeShop, setCoffeeShop] = useState<CoffeeShop | undefined>();
	useEffect(() => {
		const fetchCoffeeShop = async () => {
			if (id) {
				const response = await coffeeShopsApi.getCoffeeShop(id);
				setCoffeeShop(response);
			}
		};
		fetchCoffeeShop();
	}, []);
	console.log(coffeeShop);
	return (
		<div className='flex flex-row justify-center'>
			<div className='flex flex-col  max-w-md'>
				<div className='relative flex flex-col justify-center items-center'>
					<img
						src={back_arrow}
						className='absolute left-4 top-4'
						alt='back_arrow'
					/>
					{coffeeShop && (
						<img
							src={coffeeShop.imageurl}
							className='max-h-[40dvh] self-center'
						/>
					)}
					<div className='flex absolute inset-x-0 bottom-12 flex-row justify-center items-center space-x-2 '>
						<span className='size-2 bg-white rounded-full'></span>
						<span className='size-2 bg-white/50 rounded-full'></span>
						<span className='size-2 bg-white/50 rounded-full'></span>
					</div>
				</div>

				<div className='p-4 rounded-t-[40px]  -mt-8 z-10 bg-white '>
					<div className='px-6'>
						<div className='text-[20px] font-semibold text-[#003B40] leading-[29.35px] mb-2'>
							Haus Coffee
						</div>
						<div className='flex text-[14px]'>
							<img src={start} alt='star' />
							<div className='mr-2'>{coffeeShop?.rating}</div>
							<div className='text-[#B7C1C2]'>
								{coffeeShop?.reviews} Reviews
							</div>
						</div>
						<div className='self-start text-[14px]'>
							<div className='mb-6'>{coffeeShop?.location}</div>
						</div>
						<div className='flex gap-x-4 self-center pb-2 items-center font-[#B7C1Cc2] text-[18px] h-24 justify-center'>
							<div className='flex flex-col bg-[#EDF0EF] rounded-[27px] justify-center p-4 h-full'>
								<img src={coffee} alt='coffee' className='size-6 self-center' />
								<div className='text-[18px]'>Coffee</div>
							</div>
							<div className='flex flex-col  rounded-[27px] p-4'>
								<img src={drinks} alt='drinks' className='size-6 self-center' />
								<div className='text-[18px]'>Drinks</div>
							</div>
							<div className='flex flex-col  rounded-[27px] p-4'>
								<img src={food} alt='food' className='size-6 self-center' />
								<div className='text-[18px]'>Food</div>
							</div>
						</div>
					</div>
					<Item
						image={caffee_mocha}
						imagealt='caffee_mocha'
						name='Cafè mocha'
						description='A chocolate-flavored warm beverage that is a variant of a cafe latte.'
						price='$3.00'
					/>
					<Item
						image={caramel_machiato}
						imagealt='caramel_machiato'
						name='Caramel machiato'
						description='Steamed milk marked with an espresso and  caramel topping'
						price='$3.00'
					/>
				</div>
			</div>
		</div>
	);
}

export default Cafe;
