import Image from 'next/image';
import React from 'react';
import ytüLogo from './images/ytü_logo.png';
import skylabLogo from './images/skylab_logo.png';

const HomePage = () => {
	return (
		<div className='min-h-screen home flex flex-col items-center justify-between text-white pt-10 sm:pt-16 md:pt-24 snap-start relative'>
			<div className=' flex flex-col items-end justify-center  text-4xl sm:text-8xl md:text-[7rem] font-extrabold relative home-page_titlebox py-5 mt-10 md:mt-20'>
				<div className=' z-10 home-page_title w-full h-full flex items-center justify-center'>
					SKYDAYS
				</div>
				<div className=' z-10 text-sm w-full md:text-3xl font-semibold flex items-center justify-center home-page_title font-sans'>
					TÜRKİYE NİN EN BÜYÜK SİBER GÜVENLİK ZİRVESİ
				</div>
			</div>

			<div className=' w-full flex justify-end pr-10'>
				<div className=' bg-[#00A99D] p-2 md:p-6 pr-10 md:pr-40 text-sm md:text-base font-sans'>
					3 MAYIS - YILDIZ TEKNİK ÜNİVERSİTESİ ELEKTRİK-ELEKTRONİK FAKÜLTESİ
					KONFERANS SALONU
				</div>
			</div>

			<div className=' mb-8 flex gap-5 text-lg md:text-5xl font-semibold md:font-bold'>
				<div className=' flex gap-2 text-black'>
					<Image
						className=' w-24 h-10 md:w-52 md:h-20'
						alt='konuşmacı'
						src={ytüLogo}
					/>
				</div>
				<div className=' flex gap-2 items-center'>
					<Image
						className=' w-10 h-10 md:w-20 md:h-20'
						alt='konuşmacı'
						src={skylabLogo}
					/>
					<div>SKYLAB</div>
				</div>
			</div>

			<a
				className='flex justify-center tracking-widest  bg-[#00A99D] absolute top-0 right-0 left-0 text-center py-2 px-4 font-medium md:font-bold text-sm md:text-lg hover:cursor-pointer'
				href='https://forms.office.com/r/8Mjwq3v9Y0'
				target='_blank'
			>
				<span className='animate-subtleScale h-full font-bold'>
					SEN DE KATIL
				</span>
			</a>
		</div>
	);
};

export default HomePage;
