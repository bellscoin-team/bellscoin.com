import mainBackground from '~/assets/main-background.svg'
import sprite from '~/assets/sprite.svg'
import welcomeBoard1x859Png from '~/assets/welcome-board-1x-859.png'
import welcomeBoard1x859Webp from '~/assets/welcome-board-1x-859.webp'
import welcomeBoard2x1718Png from '~/assets/welcome-board-2x-1718.png'
import welcomeBoard2x1718Webp from '~/assets/welcome-board-2x-1718.webp'
import { BellBag } from '~/component/BellBag.tsx'
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
				className="invisible absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat lg:visible"
				style={{ backgroundImage: `url(${mainBackground})` }}
			/>
			<div className="invisible absolute left-0 top-0 h-full w-full bg-[rgba(0,194,137,0.4)] lg:visible" />
			<div className="relative px-[calc(4000%/390)] pb-[40px] pt-[100px] lg:px-[calc(42000%/1920)] lg:pb-0 lg:pt-[255px]">
				<div
					className="absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat lg:invisible"
					style={{ backgroundImage: `url(${mainBackground})` }}
				/>
				<div className="absolute left-0 top-0 h-full w-full bg-[rgba(0,194,137,0.4)] lg:invisible" />
				<div className="relative">
					<picture>
						<source
							media="(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1300px)"
							srcSet={`${welcomeBoard2x1718Webp} 540w`}
						/>
						<source
							media="(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1300px)"
							srcSet={`${welcomeBoard2x1718Png} 540w`}
						/>
						<source srcSet={`${welcomeBoard1x859Webp} 540w`} />
						<img
							src={welcomeBoard1x859Png}
							alt="Welcome to Bellscoin"
							width={540}
							height={543}
							className="absolute -left-[40px] -top-[202px] w-[300px] origin-bottom-left lg:-left-[226px] lg:-top-[568px] lg:w-[540px]"
						/>
					</picture>
					<h1 className="-ml-[4px] text-[20px] leading-[1.8] tracking-305 text-white lg:text-[56px]">
						Bells ($Bel) coin
					</h1>
					<div className="relative text-[14px] leading-[1.2] tracking-305 text-white lg:pr-[80px] lg:text-[30px]">
						<p
							ref={(instance) => {
								instance && typingObserver.observe(instance)
							}}
							className="absolute"
						/>
						<p className="invisible">
							was created by @BillyM2k,
							<br />
							the creator of Doge Coin.
							<br />
							<br />
							Bells was motivated by animal crossing,
							<br />
							the most popular <span className="text-[#F73602]">
								Nintendo
							</span>{' '}
							game.
							<br />
							<br />
							Bellscoin is the original meme coin born in 2013,
							<br />
							but was revived in 2023.
							<br />
							<br />
							Before Doge emerged,
							<br />
							BELLS had already existed.
						</p>
					</div>
				</div>
			</div>
			<div className="relative flex flex-col items-center px-[40px] pb-[84px] pt-[20px] lg:mx-auto lg:mt-[310px] lg:w-[1080px] lg:flex-row lg:pb-0 lg:pt-0">
				<div className="absolute left-0 top-0 -z-[1] h-full w-full bg-[rgba(0,194,137,0.4)] lg:invisible" />
				<p className="inline-block flex-shrink-0 text-[18px] leading-[1.2] tracking-305 lg:-ml-[60px] lg:w-[748px] lg:text-center lg:text-[36px]">
					Original Meme coin
					<br />
					<span className="text-[#ED2C31]">No pre-mined</span>
					<br />
					Fully decentralized
					<br />
					Proof of work
				</p>
				<div className="relative -left-[4px] mt-[32px] flex lg:absolute lg:-right-[100px] lg:-top-[260px] lg:left-auto lg:mt-0">
					<div className="absolute left-[100px] top-[112px] animate-[jump-shaking_1s_infinite] lg:left-[140px] lg:top-[196px]">
						<BellBag
							width={89}
							height={113}
							className="rotate-[11deg] drop-shadow-[14px_14px_15px_#313131] lg:w-[262px]"
						/>
						{/*<img*/}
						{/*	src={bellBag}*/}
						{/*	alt="bell bag"*/}
						{/*	width={89}*/}
						{/*	height={113}*/}
						{/*	className="rotate-[11deg] drop-shadow-[14px_14px_15px_#313131] lg:w-[262px]"*/}
						{/*/>*/}
					</div>
					<div className="flex-shrink-0">
						<div className="relative">
							<svg
								width={126}
								height={72}
								className="drop-shadow-bubble lg:h-[131px] lg:w-[228px]"
							>
								<use href={`${sprite}#speechBubble`} />
							</svg>
							<span className="absolute top-[20px] text-center font-mogra text-[12px] leading-[12px] tracking-305 text-[#F2C834] lg:top-[22px] lg:text-[20px] lg:leading-[1.5]">
								I need more <span className="text-[#ED2C31]">Bellscoin</span> ($BEL)!
							</span>
						</div>
						<div className="ml-[56px] mt-[9px] h-[20px] w-[20px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[110px] lg:mt-[11px] lg:h-[42px] lg:w-[42px]" />
						<div className="ml-[62px] mt-[17px] h-[14px] w-[14px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[128px] lg:mt-[20px] lg:h-[28px] lg:w-[28px]" />
						<div className="ml-[89px] mt-[4px] h-[10px] w-[10px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[156px] lg:mt-[15px] lg:h-[20px] lg:w-[20px]" />
					</div>
					<div className="-mt-[13px] ml-[34px] flex-shrink-0 lg:ml-[32px] lg:mt-[5px]">
						<div className="relative">
							<svg
								width={185}
								height={108}
								className="drop-shadow-bubble lg:h-[182px] lg:w-[305px]"
							>
								<use href={`${sprite}#speechBubble`} />
							</svg>
							<span className="absolute top-[12px] w-full text-center font-mogra text-[12px] leading-[12px] tracking-305 text-[#F2C834] lg:top-[20px] lg:text-[16px] lg:leading-[22px]">
								It’s so cool
								<br />
								<span className="text-[#ED2C31]">meme coin!
								<br />
								Bellscoin</span>
								<br />
								is 100%
								<br />
								decentralized,
								<br />
								powered by POW.
							</span>
						</div>
						<div className="ml-[82px] mt-[8px] h-[22px] w-[22px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[180px] lg:mt-[10px] lg:h-[36px] lg:w-[36px]" />
						<div className="ml-[61px] mt-[10px] h-[16px] w-[16px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[184px] lg:mt-[25px] lg:h-[28px] lg:w-[28px]" />
						<div className="ml-[36px] mt-[4px] h-[11px] w-[11px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[156px] lg:mt-[24px] lg:h-[20px] lg:w-[20px]" />
					</div>
				</div>
			</div>
		</section>
	)
}
