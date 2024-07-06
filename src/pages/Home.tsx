import profile from '@/assets/profile.svg';
import filter from '@/assets/filter.svg';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import search from '@/assets/search.svg';
import { coffeeShopsApi } from '../api';
import { CoffeeShop } from '../api/coffeeShops';
import { useState, useEffect } from 'react';

function Home() {
	const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>([]);
	useEffect(() => {
		const fetchCoffeeShops = async () => {
			const response = await coffeeShopsApi.getCoffeeShops();

			setCoffeeShops(response);
		};
		fetchCoffeeShops();
	}, []);
	return (
		<div className='flex flex-row justify-center'>
			<div className='flex relative max-w-md px-4 py-4 space-y-6 h-screen flex-col justify-start  text-[#003b40] font-semibold '>
				<div className='flex self-end'>
					<img src={profile} alt='profile' />
				</div>
				<div className='text-[25px] flex-wrap self-start  leading-[29.35px]'>
					<div className='flex '>Find a coffee shop</div>
					<div className='flex'>anywhere</div>
				</div>
				<div className='flex flex-row  w-full'>
					<div className='flex flex-row flex-grow  space-x-2 px-4  bg-[#EDF0EF] rounded-3xl items-center'>
						<img src={search} alt='search' className='h-6 ' />
						<input
							type='search'
							placeholder='Search'
							className=' placeholder-[#A4ADAE] bg-transparent '
						/>
					</div>

					<img src={filter} alt='filter' className='self-center h-full' />
				</div>
				<div className='text-[20px] self-start leading-[23.48px]'>
					Featured coffee shops
				</div>

				<div className='grid grid-cols-2 grid-rows-30 gap-4 w-full'>
					{coffeeShops.map((coffeeShop, i) => (
						<Card
							name={coffeeShop.name}
							rating={coffeeShop.rating}
							reviews={coffeeShop.reviews}
							distance={coffeeShop.distance}
							photo={coffeeShop.imageurl}
							id={coffeeShop._id}
							key={i}
						/>
					))}
				</div>

				<Navbar />
			</div>
		</div>
	);
}

export default Home;
