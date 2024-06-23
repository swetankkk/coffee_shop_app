import home from '@/assets/home.svg';
import heart from '@/assets/heart.svg';
import bookmark from '@/assets/bookmark.svg';
import user from '@/assets/user.svg';

function Navbar() {
	return (
		<div className='flex bottom-0  inset-x-0  sticky  justify-evenly gap-x-6 bg-white py-2  '>
			<img
				src={home}
				alt='home '
				className='bg-[#003B40] p-4 rounded-[24px] h-[58px]'
			/>
			<img src={heart} alt='heart' />
			<img src={bookmark} alt='bookmark' />
			<img src={user} alt='profile' />
		</div>
	);
}

export default Navbar;
