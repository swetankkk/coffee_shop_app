import profile from '@/assets/profile.svg';
import filter from '@/assets/filter.svg';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import home_roaster_coffee from '@/assets/home_roaster_coffee.jpeg';
import haus_coffee from '@/assets/haus_coffee.jpeg';
import coffee_03 from '@/assets/03.jpeg';
import coffee_04 from '@/assets/04.jpeg';
import search from '@/assets/search.svg';

function Home() {
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
					<Card
						name='Home Coffee Roasters'
						rating='4.5'
						reviews='1,200 reviews'
						distance='3.8 miles'
						photo={home_roaster_coffee}
					/>
					<Card
						name='Haus Coffe'
						rating='4.4'
						reviews='429 reviews'
						distance='2.5 miles'
						photo={haus_coffee}
						className=''
					/>
					<Card
						name='03 name'
						rating='03 r'
						reviews='03 reviews'
						distance='03 miles'
						photo={coffee_03}
					/>
					<Card
						name='04 name'
						rating='04 r'
						reviews='04 reviews'
						distance='04 miles'
						photo={coffee_04}
					/>
				</div>

				<Navbar />
			</div>
		</div>
	);
}

export default Home;
