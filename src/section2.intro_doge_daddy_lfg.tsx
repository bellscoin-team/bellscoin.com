import { useState } from 'react'

import mainBackground from '~/assets/main-background.svg'
import bellsgm from '~/assets/section2/bellsgm.png'
import doge from '~/assets/section2/doge.png'
import koon from '~/assets/section2/koon.png'
import welcomeBellscoin from '~/assets/section2/welcomeBellscoin.png'
// import welcomeBoard1x859Png from '~/assets/welcome-board-1x-859.png'
// import welcomeBoard1x859Webp from '~/assets/welcome-board-1x-859.webp'
// import welcomeBoard2x1718Png from '~/assets/welcome-board-2x-1718.png'
// import welcomeBoard2x1718Webp from '~/assets/welcome-board-2x-1718.webp'
import { AlchemyPayEmbed } from '~/component/AlchemyPayEmbed'
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
	const [isBuyOpen, setIsBuyOpen] = useState(false)
	return (
		<section className="relative font-chelsea uppercase lg:pb-[88px]">
			<div
				className="absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${mainBackground})` }}
			/>
			<div className="absolute left-0 top-0 h-full w-full bg-[rgba(0,194,137,0.4)]" />
			<div className="relative px-[calc(4000%/390)] pb-[40px] pt-[100px] lg:px-[calc(42000%/1920)] lg:pb-0 lg:pt-[100px]">
				<div className="relative">
					<picture>
						<img
							src={welcomeBellscoin}
							alt="Welcome to Bellscoin"
							className="absolute -left-[40px] -top-[202px] w-[200px] origin-bottom-left lg:-left-[320px] lg:-top-[413px] lg:w-[540px]"
						/>
					</picture>
				</div>
			</div>

			<div className="relative flex flex-col items-center font-Glowing text-[60px] leading-[60px] tracking-[8px] text-stroke_6 lg:text-[160px] lg:leading-[120px] lg:text-stroke_10 ">
				{/* //pay 버튼 추가 */}
				<div className="alchemy3d-scope mb-6 lg:mb-10">
					<button
						className="relative flex h-[200px] w-[200px] lg:h-[340px] lg:w-[340px] -translate-y-[8px] cursor-pointer items-center justify-center overflow-visible rounded-full border-0 bg-[radial-gradient(circle_at_center,#2a2a2a_0%,#1a1a1a_100%)] text-[40px]  text-black shadow-[0_20px_40px_rgba(0,0,0,0.6),_0_10px_20px_rgba(0,0,0,0.4),_inset_0_-8px_16px_rgba(0,0,0,0.8),_inset_0_8px_16px_rgba(255,255,255,0.1)] outline-none transition-all duration-150 ease-linear hover:-translate-y-[12px] hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(0,0,0,0.7),_0_15px_25px_rgba(0,0,0,0.5),_inset_0_-8px_16px_rgba(0,0,0,0.9),_inset_0_8px_16px_rgba(255,255,255,0.15)] active:-translate-y-[2px] active:scale-[0.98] active:shadow-[0_8px_16px_rgba(0,0,0,0.4),_0_4px_8px_rgba(0,0,0,0.3),_inset_0_-4px_8px_rgba(0,0,0,0.7),_inset_0_4px_8px_rgba(255,255,255,0.05)] [&::after]:absolute [&::after]:inset-[18px] [&::after]:rounded-full [&::after]:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9)_0%,transparent_40%),_linear-gradient(145deg,#fff9c4_0%,#ffeb3b_30%,#ffc107_70%,#ff9800_100%)] [&::after]:shadow-[0_6px_12px_rgba(0,0,0,0.3),_inset_0_-6px_12px_rgba(255,152,0,0.6),_inset_0_6px_12px_rgba(255,255,255,0.8),_inset_0_0_0_1px_rgba(255,255,255,0.4)] [&::after]:content-[''] hover:[&::after]:shadow-[0_8px_16px_rgba(0,0,0,0.4),_inset_0_-6px_12px_rgba(255,152,0,0.7),_inset_0_6px_12px_rgba(255,255,255,0.9),_inset_0_0_0_1px_rgba(255,255,255,0.5)] active:[&::after]:shadow-[0_2px_4px_rgba(0,0,0,0.2),_inset_0_-3px_6px_rgba(255,152,0,0.8),_inset_0_3px_6px_rgba(255,255,255,0.4),_inset_0_0_0_1px_rgba(255,255,255,0.2)] [&::before]:absolute [&::before]:inset-[8px] [&::before]:rounded-full [&::before]:bg-[linear-gradient(145deg,#ff4444_0%,#cc0000_50%,#990000_100%)] [&::before]:shadow-[0_8px_16px_rgba(0,0,0,0.4),_inset_0_-4px_8px_rgba(0,0,0,0.6),_inset_0_4px_8px_rgba(255,100,100,0.8),_inset_0_0_0_2px_rgba(255,255,255,0.2)] [&::before]:content-[''] hover:[&::before]:shadow-[0_10px_20px_rgba(0,0,0,0.5),_inset_0_-4px_8px_rgba(0,0,0,0.7),_inset_0_4px_8px_rgba(255,120,120,0.9),_inset_0_0_0_2px_rgba(255,255,255,0.3)] active:[&::before]:shadow-[0_4px_8px_rgba(0,0,0,0.3),_inset_0_-2px_4px_rgba(0,0,0,0.8),_inset_0_2px_4px_rgba(255,80,80,0.6),_inset_0_0_0_1px_rgba(255,255,255,0.1)]"
						onClick={() => setIsBuyOpen(true)}
					>
						<span className="relative z-10 text-center -mt-2 lg:-mt-4 leading-[1.1] tracking-[0.5px] font-bold text-stroke_2" style={{ fontFamily: 'Arial Black' }}>
							<span className="text-[52px] lg:text-[100px]">Buy</span>
							<br />
							<span className="text-[38px] lg:text-[70px]">BELLS</span>
						</span>
					</button>
				</div>
				<div className="z-10 -mb-10 text-center lg:-mb-20">
					<p className="text-yellow-500">DOGE</p>
					<p className="text-red-600">DADDY!</p>
					<p className="text-purple-400">LFG!!</p>
				</div>
				<div className="relative">
					<img src={doge} alt="doge" width={200} className="lg:w-[600px]" />
					<img
						src={koon}
						alt="doge"
						width={70}
						className="absolute -left-[60px] bottom-[60px] lg:-bottom-[130px] lg:-right-80 lg:w-[200px]"
					/>
					<img
						src={bellsgm}
						alt="doge"
						width={100}
						className="absolute -right-[80px] bottom-10 lg:-right-[260px] lg:w-[300px]"
					/>
				</div>
				<p className="z-10 -mt-20 text-yellow-300">BELLSCOIN</p>
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
			{isBuyOpen ? (
				<div className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/50 p-4">
					<div className="relative w-[340px] max-w-[560px] rounded-xl bg-white p-4 shadow-2xl min-[500px]:w-full">
						<button
							aria-label="Close payment"
							onClick={() => setIsBuyOpen(false)}
							className="absolute right-3 top-3 rounded-md bg-gray-200 px-2 py-1 text-sm font-bold text-gray-700 hover:bg-gray-300"
						>
							Close
						</button>
						<div className="mt-6 flex justify-center">
							<AlchemyPayEmbed appId="0Ik8IL63D7l0356E" customParameters="" />
						</div>
					</div>
				</div>
			) : null}
		</section>
	)
}
