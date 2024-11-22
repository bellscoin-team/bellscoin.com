import mainBackground from '~/assets/main-background.svg'
import bellsgm from '~/assets/section2/bellsgm.png'
import doge from '~/assets/section2/doge.png'
// import thor from '~/assets/section2/thor.png'
import welcomeBellscoin from '~/assets/section2/welcomeBellscoin.png'
// import welcomeBoard1x859Png from '~/assets/welcome-board-1x-859.png'
// import welcomeBoard1x859Webp from '~/assets/welcome-board-1x-859.webp'
// import welcomeBoard2x1718Png from '~/assets/welcome-board-2x-1718.png'
// import welcomeBoard2x1718Webp from '~/assets/welcome-board-2x-1718.webp'
import { typewriter } from '~/util/typewriter.ts'

const typingObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			typingObserver.unobserve(entry.target)
			entry.target.innerHTML = ''
			void typewriter(
				[
					'was created by @BillyM2k,',
					null,
					'the creator of Doge Coin.',
					null,
					null,
					'Bells was motivated by animal crossing,',
					null,
					'the most popular ',
					{
						className: 'text-[#F73602]',
						tagName: 'span',
						text: 'Nintendo',
					},
					' game.',
					null,
					null,
					'Bellscoin is the original meme coin born in 2013,',
					null,
					'but was revived in 2023.',
					null,
					null,
					'Before Doge emerged,',
					null,
					'BELLS had already existed.',
				],
				entry.target as HTMLElement,
				40,
				200,
			)
		}
	})
})

export default function Section2Intro() {
	return (
		<section className="relative font-chelsea uppercase lg:pb-[88px]">
			<div
				className="absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${mainBackground})` }}
			/>
			<div className="absolute left-0 top-0 h-full w-full bg-[rgba(0,194,137,0.4)]" />
			<div className="relative px-[calc(4000%/390)] pb-[40px] pt-[100px] lg:px-[calc(42000%/1920)] lg:pb-0 lg:pt-[255px]">
				<div className="relative">
					<picture>
						<img
							src={welcomeBellscoin}
							alt="Welcome to Bellscoin"
							width={540}
							height={543}
							className="absolute -left-[40px] -top-[202px] w-[300px] origin-bottom-left lg:-left-[226px] lg:-top-[568px] lg:w-[540px]"
						/>
					</picture>
				</div>
			</div>
			<div className="font-Glowing text-stroke_6 lg:text-stroke_10 relative flex flex-col items-center text-[60px] lg:text-[160px] leading-[60px] lg:leading-[120px] tracking-[8px] ">
				<div className='text-center -mb-20 z-10'>
					<p className="text-yellow-500">DOGE</p>
					<p className="text-red-600">DADDY!</p>
					<p className="text-purple-400">LFG!!</p>
				</div>
				<div className="relative">
					<img src={doge} alt="doge" width={300} className='lg:w-[600px]'/>
					<img
						src={doge}
						alt="doge"
						width={200}
						className="absolute -bottom-40 -right-80"
					/>
					<img
						src={bellsgm}
						alt="doge"
						width={300}
						className="absolute -right-[260px] bottom-10"
					/>
				</div>
				<p className='text-yellow-300 -mt-20 z-10'>BELLSCOIN</p>
			</div>

			{/* <div className="mx-auto flex flex-col items-center px-[40px] lg:mt-[80px] lg:w-[1080px] ">
				<div className="animate-[jump-shaking_1s_infinite] lg:left-[140px] lg:top-[260px]">
					<img
						src={thor}
						alt="bell bag"
						width={160}
						height={140}
						className="rotate-[11deg] drop-shadow-[14px_14px_15px_#313131] lg:w-[340px]"
					/>
				</div>
			</div> */}
		</section>
	)
}
