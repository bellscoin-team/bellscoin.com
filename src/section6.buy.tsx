import { useEffect, useRef, useState } from 'react'

import bellsGenesis31 from '~/assets/Bells Genesis-31.png'
import bellsGenesis35 from '~/assets/Bells Genesis-35.png'
import bellsGenesis6 from '~/assets/Bells Genesis-6.png'
import coinex from '~/assets/coinex.svg'
import nkyc1x94Png from '~/assets/nkyc-1x-94.png'
import nkyc2x188Png from '~/assets/nkyc-2x-188.png'
import nkyc2x188Webp from '~/assets/nkyc-2x-188.webp'
import pepeCex1x520Avif from '~/assets/pepe-cex-1x-520.avif'
import pepeCex1x520Jpg from '~/assets/pepe-cex-1x-520.jpg'
import pepeCex2x1040Avif from '~/assets/pepe-cex-2x-1040.avif'
import pepeCex2x1040Jpg from '~/assets/pepe-cex-2x-1040.jpg'
import pepeCex2x300Avif from '~/assets/pepe-cex-2x-300.avif'
import pepeCex2x300Jpg from '~/assets/pepe-cex-2x-300.jpg'
import pepeHappy1x520Avif from '~/assets/pepe-happy-1x-520.avif'
import pepeHappy1x520Jpg from '~/assets/pepe-happy-1x-520.jpg'
import pepeHappy2x1040Avif from '~/assets/pepe-happy-2x-1040.avif'
import pepeHappy2x1040Jpg from '~/assets/pepe-happy-2x-1040.jpg'
import pepeHappy2x300Avif from '~/assets/pepe-happy-2x-300.avif'
import pepeHappy2x300Jpg from '~/assets/pepe-happy-2x-300.jpg'
import pepeMining1x520Avif from '~/assets/pepe-mining-1x-520.avif'
import pepeMining1x520Jpg from '~/assets/pepe-mining-1x-520.jpg'
import pepeMining2x1040Avif from '~/assets/pepe-mining-2x-1040.avif'
import pepeMining2x1040Jpg from '~/assets/pepe-mining-2x-1040.jpg'
import pepeMining2x400Avif from '~/assets/pepe-mining-2x-400.avif'
import pepeMining2x400Jpg from '~/assets/pepe-mining-2x-400.jpg'
import pepeMoon1x520Avif from '~/assets/pepe-moon-1x-520.avif'
import pepeMoon1x520Jpg from '~/assets/pepe-moon-1x-520.jpg'
import pepeMoon2x1040Avif from '~/assets/pepe-moon-2x-1040.avif'
import pepeMoon2x1040Jpg from '~/assets/pepe-moon-2x-1040.jpg'
import pepeMoon2x400Avif from '~/assets/pepe-moon-2x-400.avif'
import pepeMoon2x400Jpg from '~/assets/pepe-moon-2x-400.jpg'
import trail1 from '~/assets/trail-1.svg'
import trail2 from '~/assets/trail-2.svg'
import xeggex1x215Png from '~/assets/xeggex-1x-215.png'
import xeggex2x430Png from '~/assets/xeggex-2x-430.png'
import { BellBag } from '~/component/BellBag.tsx'
import { SequenceArrows } from '~/component/SequenceArrows.tsx'
import { typewriter } from '~/util/typewriter.ts'
import { useViewportSize } from '~/util/use-viewport-size.ts'

import {
	CoinGecko,
	Discord,
	Github,
	Linktree,
	Telegram,
	Twitter,
} from './component/ContactIcon.tsx'

const pepeObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle(
				'animate-[pop_0.5s_cubic-bezier(0.575,0.000,0.500,1.520)_forwards]',
				entry.isIntersecting,
			)
		})
	},
	{ threshold: 0.5 },
)

const typingObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			typingObserver.unobserve(entry.target)
			entry.target.innerHTML = ''
			void typewriter(
				[
					'AND WE NEED MORE..',
					null,
					'CONTACT ON ',
					{
						tagName: 'a',
						text: 'DISCORD',
						href: 'https://t.co/4DCHZEdSSE',
						target: '_blank',
						className: 'hover:text-white focus:text-white',
						rel: 'noreferrer',
					},
					null,
					'IF YOU LIKE ',
					{
						tagName: 'span',
						text: '$BELLS',
						className: 'text-[#ED2C31]',
					},
				],
				entry.target as HTMLElement,
				100,
				200,
			)
		}
	})
})

export default function Section6Buy() {
	const isMobile = useViewportSize() === 'sm'

	return (
		<section className="bg-gradient-to-b from-[#C7FFEE] to-[#F4BE04] pb-[50px] *:tracking-[0.015em] lg:pb-[100px]">
			<div className="relative overflow-hidden pb-[50px] pt-[48px] lg:pb-[100px] lg:pt-[260px]">
				<BackgroundMeteor />
				<div className="relative mx-auto w-[360px] lg:w-[1080px]">
					<div className="absolute -left-[28px] -top-[124px] hidden lg:block">
						<BellBag
							alt=""
							width={84}
							height={100}
							className="-rotate-[15deg] -scale-x-100"
						/>
						<BellBag
							alt=""
							width={140}
							height={167}
							className="-translate-y-[96px] translate-x-[36px] -rotate-[15deg]"
						/>
					</div>
					<div className="absolute right-[52px] top-[92px] hidden lg:block">
						<BellBag
							alt=""
							width={68}
							height={82}
							className="rotate-[15deg] -scale-x-100"
						/>
						<BellBag
							alt=""
							width={140}
							height={169}
							className="-translate-y-[176px] translate-x-[54px] rotate-[15deg]"
						/>
					</div>
					<h2 className="text-center font-senior text-[26px] text-[#056242] lg:text-[60px]">
						How to buy?
					</h2>
					<div className="relative z-0 mt-[24px] font-senior text-[12px] text-[#691823] lg:mt-[100px] lg:text-[24px] lg:leading-[1.33]">
						<div className="flex items-center gap-x-[12px] lg:gap-x-[44px]">
							<picture>
								<source
									media="(-webkit-min-device-pixel-ratio: 1.5)"
									srcSet={`${pepeMining2x1040Avif} 520w, ${pepeMining2x400Avif} 200w`}
									sizes="(min-width: 1300px) 520px, 200px"
								/>
								<source
									media="(-webkit-min-device-pixel-ratio: 1.5)"
									srcSet={`${pepeMining2x1040Jpg} 520w, ${pepeMining2x400Jpg} 200w`}
									sizes="(min-width: 1300px) 520px, 200px"
								/>
								<source srcSet={pepeMining1x520Avif} type="image/avif" />
								<img
									ref={(instance) => {
										instance && pepeObserver.observe(instance)
									}}
									src={pepeMining1x520Jpg}
									alt="Pepe is mining"
									width={200}
									height={200}
									className="scale-0 lg:w-[520px]"
									loading="lazy"
								/>
							</picture>
							<p className="overflow-hidden break-words">
								Download <span className="text-[#ED2C31]">Qt wallet</span>
								<br />
								and mine <span className="text-[#ED2C31]">$Bel</span> by
								<br />
								yourself.
								<br />
								You can download the
								<br />
								wallet(Node)...
								<a
									href="https://github.com/Nintondo/bellscoin/releases/tag/2.0.0"
									target="_blank"
									rel="noreferrer"
									className="text-[#4534FF] hover:text-[#ED2C31] focus:text-[#ED2C31]"
								>
									here
								</a>
							</p>
						</div>
						<div className="relative flex h-[100px] justify-center lg:hidden">
							<div className="flex h-full w-[120px] justify-center">
								<SequenceArrows
									colorOff="white"
									colorOn="#ED2C31"
									direction="down"
									number={5}
									size={20}
								/>
							</div>
							<div className="flex h-full w-[120px] justify-center">
								<SequenceArrows
									colorOff="white"
									colorOn="#08835E"
									direction="down"
									number={5}
									size={20}
								/>
							</div>
						</div>
						<div className="relative hidden h-[312px] lg:block">
							<div className="flex h-full w-[520px] justify-center">
								<SequenceArrows
									colorOff="white"
									colorOn="red"
									direction="down"
									number={10}
									size={24}
								/>
							</div>
							<div className="absolute -top-[14px] left-[272px] flex h-full w-[560px] items-center">
								<SequenceArrows
									colorOff="white"
									colorOn="#08835E"
									direction="right"
									firstOn={false}
									number={20}
									size={24}
								/>
							</div>
							<div className="absolute right-0 top-1/2 flex h-1/2 w-[520px] justify-center">
								<SequenceArrows
									colorOff="white"
									colorOn="#08835E"
									direction="down"
									firstOn={false}
									number={5}
									size={24}
								/>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flex flex-col items-center">
								<picture>
									<source
										media="(-webkit-min-device-pixel-ratio: 1.5)"
										srcSet={`${pepeHappy2x1040Avif} 520w, ${pepeHappy2x300Avif} 150w`}
										sizes="(min-width: 1300px) 520px, 150px"
									/>
									<source
										media="(-webkit-min-device-pixel-ratio: 1.5)"
										srcSet={`${pepeHappy2x1040Jpg} 520w, ${pepeHappy2x300Jpg} 150w`}
										sizes="(min-width: 1300px) 520px, 150px"
									/>
									<source srcSet={pepeHappy1x520Avif} type="image/avif" />
									<img
										ref={(instance) => {
											instance && pepeObserver.observe(instance)
										}}
										src={pepeHappy1x520Jpg}
										alt="Pepe is happy"
										width={150}
										height={150}
										className="scale-0 lg:w-[520px]"
										loading="lazy"
									/>
								</picture>
								<p className="mt-[6px] text-center lg:mt-[24px]">
									If you mine,
									<br />
									you will be happy
								</p>
							</div>
							<div className="flex flex-col items-center">
								<picture>
									<source
										media="(-webkit-min-device-pixel-ratio: 1.5)"
										srcSet={`${pepeCex2x1040Avif} 520w, ${pepeCex2x300Avif} 150w`}
										sizes="(min-width: 1300px) 520px, 150px"
									/>
									<source
										media="(-webkit-min-device-pixel-ratio: 1.5)"
										srcSet={`${pepeCex2x1040Jpg} 520w, ${pepeCex2x300Jpg} 150w`}
										sizes="(min-width: 1300px) 520px, 150px"
									/>
									<source srcSet={pepeCex1x520Avif} type="image/avif" />
									<img
										ref={(instance) => {
											instance && pepeObserver.observe(instance)
										}}
										src={pepeCex1x520Jpg}
										alt="Pepe going to Cex"
										width={150}
										height={150}
										className="scale-0 lg:w-[520px]"
										loading="lazy"
									/>
								</picture>
								<p className="mt-[6px] text-center lg:mt-[24px]">
									You can also buy
									<br />
									some <span className="text-[#ED2C31]">$Bel</span> on CEX
								</p>
							</div>
						</div>
						<div className="relative flex h-[100px] justify-center lg:hidden">
							<div className="flex h-full w-[120px] justify-center">
								<SequenceArrows
									colorOff="white"
									colorOn="#ED2C31"
									direction="down"
									number={5}
									size={20}
								/>
							</div>
							<div className="flex h-full w-[120px] justify-center">
								<SequenceArrows
									colorOff="white"
									colorOn="#08835E"
									direction="down"
									number={5}
									size={20}
								/>
							</div>
						</div>
						<div className="relative hidden h-[312px] lg:block">
							<div className="flex h-1/2 w-[520px] justify-center">
								<SequenceArrows
									colorOff="white"
									colorOn="#ED2C31"
									direction="down"
									number={5}
									size={24}
								/>
							</div>
							<div className="absolute right-0 top-0 flex h-1/2 w-[520px] justify-center">
								<SequenceArrows
									colorOff="white"
									colorOn="#08835E"
									direction="down"
									number={5}
									size={24}
								/>
							</div>
							<div className="absolute left-[268px] top-0 flex h-1/2 w-[260px] items-end">
								<SequenceArrows
									colorOff="white"
									colorOn="#ED2C31"
									direction="right"
									firstOn={false}
									number={8}
									size={24}
								/>
							</div>
							<div className="absolute right-[268px] top-0 flex h-1/2 w-[260px] items-end">
								<SequenceArrows
									colorOff="white"
									colorOn="#08835E"
									direction="left"
									number={8}
									size={24}
								/>
							</div>
							<div className="absolute left-[254px] flex h-1/2 w-[520px] justify-center">
								<SequenceArrows
									colorOff="white"
									colorOn="#ED2C31"
									direction="down"
									firstOn={false}
									number={5}
									size={24}
								/>
							</div>
							<div className="absolute right-[254px] flex h-1/2 w-[520px] justify-center">
								<SequenceArrows
									colorOff="white"
									colorOn="#08835E"
									direction="down"
									firstOn={false}
									number={5}
									size={24}
								/>
							</div>
						</div>
						<div className="flex flex-col items-center">
							<picture>
								<source
									media="(-webkit-min-device-pixel-ratio: 1.5)"
									srcSet={`${pepeMoon2x1040Avif} 520w, ${pepeMoon2x400Avif} 200w`}
									sizes="(min-width: 1300px) 520px, 200px"
								/>
								<source
									media="(-webkit-min-device-pixel-ratio: 1.5)"
									srcSet={`${pepeMoon2x1040Jpg} 520w, ${pepeMoon2x400Jpg} 200w`}
									sizes="(min-width: 1300px) 520px, 200px"
								/>
								<source srcSet={pepeMoon1x520Avif} type="image/avif" />
								<img
									ref={(instance) => {
										instance && pepeObserver.observe(instance)
									}}
									src={pepeMoon1x520Jpg}
									alt="Pepe, to the Moon!"
									width={200}
									height={200}
									className="scale-0 lg:w-[520px]"
									loading="lazy"
								/>
							</picture>
							<p className="mt-[6px] text-center lg:mt-[24px]">
								HODL and
								<br />
								Go to the moon!
								<br />
								LFG!
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				id="exchanges"
				className="pt-[32px] text-center *:tracking-[0.015em] lg:pt-[50px]"
			>
				<h3 className="font-chelsea text-[30px] lg:text-[60px]">
					Listing exchanges
				</h3>
				<div className="mt-[32px] flex items-center justify-center gap-x-[32px] lg:mt-[48px] lg:gap-x-[80px]">
					<a
						href="https://nonkyc.io/market/BEL_USDT"
						target="_blank"
						rel="noreferrer"
						className="hover:scale-105 focus:scale-105"
					>
						<picture>
							<source
								media="(-webkit-min-device-pixel-ratio: 1.5)"
								srcSet={`${nkyc2x188Webp} 94w`}
							/>
							<source
								media="(-webkit-min-device-pixel-ratio: 1.5)"
								srcSet={`${nkyc2x188Png} 94w`}
							/>
							<img
								src={nkyc1x94Png}
								alt="NKYC"
								width={44}
								height={42}
								className="lg:w-[94px]"
								loading="lazy"
							/>
						</picture>
					</a>
					<a
						href="https://xeggex.com/market/BEL_USDT"
						target="_blank"
						rel="noreferrer"
						className="hover:scale-105 focus:scale-105"
					>
						<picture>
							<source
								media="(-webkit-min-device-pixel-ratio: 1.5)"
								srcSet={`${xeggex2x430Png} 215w`}
							/>
							<img
								src={xeggex1x215Png}
								alt="XeggeX"
								width={102}
								height={32}
								className="lg:w-[215px]"
								loading="lazy"
							/>
						</picture>
					</a>
					<a
						href="https://www.coinex.com/ko/exchange/bellscoin-usdt"
						target="_blank"
						rel="noreferrer"
						className="hover:scale-105 focus:scale-105"
					>
						<img
							src={coinex}
							alt="CoinEx"
							width={82}
							className="lg:w-[189px]"
							loading="lazy"
						/>
					</a>
				</div>
				<div className="relative mt-[51px] flex justify-center font-senior text-[16px] leading-[30px] lg:mt-[66px] lg:text-[24px] lg:leading-[1.5]">
					<p
						ref={(instance) => {
							instance && typingObserver.observe(instance)
						}}
						className="absolute"
					/>
					<p className="invisible">
						AND WE NEED MORE..
						<br />
						CONTACT ON{' '}
						<a
							href="https://t.co/4DCHZEdSSE"
							target="_blank"
							rel="noreferrer"
							className="hover:text-white focus:text-white"
						>
							DISCORD
						</a>
						<br />
						IF YOU LIKE <span className="text-[#ED2C31]">$BELLS</span>
					</p>
				</div>
			</div>
			<div className="mx-auto mt-[122px] grid w-[340px] grid-cols-[38px_1fr] items-center gap-x-[4px] text-[#505050] *:font-senior *:tracking-[0.015em] lg:mt-[166px] lg:w-[1080px] lg:grid-cols-[108px_1fr] [&>img]:place-self-center [&_h3]:pt-[12px] [&_h3]:text-[18px] lg:[&_h3]:text-[34px]">
				<img src={bellsGenesis31} alt="" width={90} height={90} />
				<h3 className="text-[#ED2C31]">Disclaimer</h3>
				<p className="col-start-2 mb-[32px] mt-[10px] text-[10px] leading-[14px] lg:mb-[40px] lg:text-[20px] lg:leading-[34px]">
					<span className="text-[#ED2C31]">$Bells</span> coin has no association
					with{' '}
					<span className="text-[#ED2C31]">“Animal Crossing” of Nintendo</span>
					. This coin is simply paying homage to a meme we all love and
					recognize. $Bells is a meme coin with no intrinsic value or
					expectation of financial return. There is no formal team or roadmap.
					<br />
					The coin is completely useless and for entertainment purposes only.
				</p>
				<img src={bellsGenesis6} alt="" width={90} height={90} />
				<h3 className="text-[#08835E]">Donation</h3>
				<p className="col-start-2 mb-[32px] mt-[10px] text-[10px] leading-[14px] lg:mb-[40px] lg:text-[20px] lg:leading-[34px]">
					Bells coin is not pre-mined and is fully decentralized. The only
					individuals who have enjoyed the benefits of Bells coin are early
					miners. We are in need, so please consider donating to help us
					maintain this website.
					<br />
					<br />
					<span className="text-[#08835E]">Our $bells address :</span>
					<br />
					<span className="break-all text-[#7D5252]">
						BCT6G3f8Z1s2aFxBMwWmTDp1Qk6k9twCRU
					</span>
				</p>
				<img src={bellsGenesis35} alt="" width={90} height={90} />
				<h3 className="text-[#1D644F]">Contact</h3>
				<div className="col-start-2 mt-[10px] flex items-center gap-x-[20px] text-[#F0C10F] lg:gap-x-[32px]">
					<Github width={isMobile ? 20 : 44} />
					<Twitter height={isMobile ? 20 : 40} />
					<Telegram width={isMobile ? 20 : 44} />
					<Discord width={isMobile ? 20 : 44} />
					<CoinGecko width={isMobile ? 20 : 44} />
					<Linktree height={isMobile ? 20 : 44} />
				</div>
			</div>
		</section>
	)
}

function BackgroundMeteor() {
	const container = useRef<HTMLDivElement>(null)
	const [m, setM] = useState(0)
	const [n, setN] = useState(0)

	const viewportSize = useViewportSize()
	const [prevViewportSize, setPrevViewportSize] = useState(viewportSize)
	const cellSize = viewportSize === 'sm' ? 200 : 400

	useEffect(() => {
		if (!container?.current) {
			return
		}

		const w = container.current.parentElement!.clientWidth
		const h = container.current.parentElement!.clientHeight
		const d = Math.sqrt(w * w + h * h)

		container.current.style.width = `${d}px`
		container.current.style.height = `${d}px`

		setM(Math.ceil(d / cellSize))
		setN(Math.ceil(d / cellSize))
	}, [cellSize, m, n])

	useEffect(() => {
		if (prevViewportSize !== viewportSize) {
			setM(0)
			setN(0)
			setPrevViewportSize(viewportSize)
		}
	}, [prevViewportSize, viewportSize])

	return (
		<div
			ref={container}
			className="absolute left-1/2 top-1/2 h-full w-screen -translate-x-1/2 -translate-y-1/2 rotate-[30deg] select-none overflow-hidden"
		>
			{Array(m * n)
				.fill(null)
				.map((_, i) => {
					const x = container.current!.clientWidth * Math.random()
					const y = 300 * Math.random()

					return (
						<div
							key={i}
							className="absolute animate-[slide-down]"
							style={{
								animation: `slide-down ${
									5 + 5 * Math.random()
								}s ease-in infinite ${
									i % 2 === 0 ? 4 * Math.random() : 3 + 3 * Math.random()
								}s`,
							}}
						>
							<div
								className="relative -z-[1] opacity-80"
								style={{
									marginLeft: `${x}px`,
									marginTop: `-${y}px`,
									transform: `scale(${
										0.3 + 0.8 * Math.random()
									}) translateY(-100%)`,
								}}
							>
								<img
									src={Math.random() < 0.5 ? trail1 : trail2}
									alt=""
									className="absolute -top-1/2 left-1/3 -z-[1] -rotate-[30deg]"
								/>
								<BellBag width={20} height={24} className="lg:w-[156px]" />
							</div>
						</div>
					)
				})}
		</div>
	)
}
