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
					<button className="button-3d" onClick={() => setIsBuyOpen(true)}>
						<span className="button-text text-stroke_2">
							<span className="text-[52px]">Buy</span>
							<br />
							BELLS
						</span>
					</button>
					<style>{`
						.alchemy3d-scope .button-3d {
						  width: 340px;
						  height: 340px;
						  border-radius: 50%;
						  border: none;
						  background:
							radial-gradient(circle at center, #2a2a2a 0%, #1a1a1a 100%);
						  box-shadow:
							0 20px 40px rgba(0, 0, 0, 0.6),
							0 10px 20px rgba(0, 0, 0, 0.4),
							inset 0 -8px 16px rgba(0, 0, 0, 0.8),
							inset 0 8px 16px rgba(255, 255, 255, 0.1);
						  cursor: pointer;
						  font-weight: 900;
						  font-size: 40px;
						  color:#000000;
						  transition: all 0.15s ease;
						  transform: translateY(-8px);
						  position: relative;
						  outline: none;
						  display: flex;
						  align-items: center;
						  justify-content: center;
						  overflow: visible;
						}
						.alchemy3d-scope .button-3d::before {
						  content: '';
						  position: absolute;
						  top: 8px;
						  left: 8px;
						  right: 8px;
						  bottom: 8px;
						  border-radius: 50%;
						  background:
							linear-gradient(145deg, #ff4444 0%, #cc0000 50%, #990000 100%);
						  box-shadow:
							0 8px 16px rgba(0, 0, 0, 0.4),
							inset 0 -4px 8px rgba(0, 0, 0, 0.6),
							inset 0 4px 8px rgba(255, 100, 100, 0.8),
							inset 0 0 0 2px rgba(255, 255, 255, 0.2);
						}
						.alchemy3d-scope .button-3d::after {
						  content: '';
						  position: absolute;
						  top: 18px;
						  left: 18px;
						  right: 18px;
						  bottom: 18px;
						  border-radius: 50%;
						  background:
							radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9) 0%, transparent 40%),
							linear-gradient(145deg, #fff9c4 0%, #ffeb3b 30%, #ffc107 70%, #ff9800 100%);
						  box-shadow:
							0 6px 12px rgba(0, 0, 0, 0.3),
							inset 0 -6px 12px rgba(255, 152, 0, 0.6),
							inset 0 6px 12px rgba(255, 255, 255, 0.8),
							inset 0 0 0 1px rgba(255, 255, 255, 0.4);
						}
						.alchemy3d-scope .button-text {
						  line-height: 1.1;
						  text-align: center;
						  position: relative;
						  z-index: 10;
						  text-shadow:
							0 2px 4px rgba(255, 255, 255, 0.8),
							0 1px 0 rgba(255, 255, 255, 1),
							0 -1px 2px rgba(0, 0, 0, 0.1);
						  font-family: 'Arial Black', sans-serif;
						  letter-spacing: 0.5px;
						}
						.alchemy3d-scope .button-3d:hover {
						  transform: translateY(-12px) scale(1.02);
						  box-shadow:
							0 25px 50px rgba(0, 0, 0, 0.7),
							0 15px 25px rgba(0, 0, 0, 0.5),
							inset 0 -8px 16px rgba(0, 0, 0, 0.9),
							inset 0 8px 16px rgba(255, 255, 255, 0.15);
						}
						.alchemy3d-scope .button-3d:hover::before {
						  box-shadow:
							0 10px 20px rgba(0, 0, 0, 0.5),
							inset 0 -4px 8px rgba(0, 0, 0, 0.7),
							inset 0 4px 8px rgba(255, 120, 120, 0.9),
							inset 0 0 0 2px rgba(255, 255, 255, 0.3);
						}
						.alchemy3d-scope .button-3d:hover::after {
						  box-shadow:
							0 8px 16px rgba(0, 0, 0, 0.4),
							inset 0 -6px 12px rgba(255, 152, 0, 0.7),
							inset 0 6px 12px rgba(255, 255, 255, 0.9),
							inset 0 0 0 1px rgba(255, 255, 255, 0.5);
						}
						.alchemy3d-scope .button-3d:active {
						  transform: translateY(-2px) scale(0.98);
						  box-shadow:
							0 8px 16px rgba(0, 0, 0, 0.4),
							0 4px 8px rgba(0, 0, 0, 0.3),
							inset 0 -4px 8px rgba(0, 0, 0, 0.7),
							inset 0 4px 8px rgba(255, 255, 255, 0.05);
						}
						.alchemy3d-scope .button-3d:active::before {
						  box-shadow:
							0 4px 8px rgba(0, 0, 0, 0.3),
							inset 0 -2px 4px rgba(0, 0, 0, 0.8),
							inset 0 2px 4px rgba(255, 80, 80, 0.6),
							inset 0 0 0 1px rgba(255, 255, 255, 0.1);
						}
						.alchemy3d-scope .button-3d:active::after {
						  box-shadow:
							0 2px 4px rgba(0, 0, 0, 0.2),
							inset 0 -3px 6px rgba(255, 152, 0, 0.8),
							inset 0 3px 6px rgba(255, 255, 255, 0.4),
							inset 0 0 0 1px rgba(255, 255, 255, 0.2);
						}
					`}</style>
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
					<div className="relative w-[340px] min-[500px]:w-full max-w-[560px] rounded-xl bg-white p-4 shadow-2xl">
						<button
							aria-label="Close payment"
							onClick={() => setIsBuyOpen(false)}
							className="absolute right-3 top-3 rounded-md bg-gray-200 px-2 py-1 text-sm font-bold text-gray-700 hover:bg-gray-300"
						>
							Close
						</button>
						<div className="mt-6 flex justify-center">
                        <AlchemyPayEmbed
								appId="0Ik8IL63D7l0356E"
								customParameters=""
							/>
						</div>
					</div>
				</div>
			) : null}
		</section>
	)
}
