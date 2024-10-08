import { useEffect, useRef, useState } from 'react'

import bellsGenesis31 from '~/assets/Bells Genesis-31.png'
import apple from '~/assets/apple.png'
import cloud from '~/assets/cloud.png'
import dogeTruck1x805Png from '~/assets/doge-truck-1x-805.png'
import dogeTruck1x805Webp from '~/assets/doge-truck-1x-805.webp'
import dogeTruck2x1610Png from '~/assets/doge-truck-2x-1610.png'
import dogeTruck2x1610Webp from '~/assets/doge-truck-2x-1610.webp'
import dogeTruck2x506Png from '~/assets/doge-truck-2x-506.png'
import dogeTruck2x506Webp from '~/assets/doge-truck-2x-506.webp'
import garland from '~/assets/garland.png'
import grass from '~/assets/grass.png'
import orange from '~/assets/orange.png'
import soil from '~/assets/soil.png'
import sprite from '~/assets/sprite.svg'
import sprout from '~/assets/sprout.png'
import { useViewportSize } from '~/util/use-viewport-size.ts'

export default function Section5About() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-[#7EE0FF] to-white *:tracking-[0.015em]">
			<BackgroundClouds />
			<div className="relative origin-top-left lg:min-w-[1920px] [&>:not(:first-child)]:absolute [&>:not(:first-child)]:origin-top">
				<img
					src={garland}
					alt=""
					height={36}
					className="h-[36px] w-full lg:h-[200px]"
				/>
				<div className="left-[6px] top-[10px] animate-[pendulum_0.8s_linear_alternate_infinite] lg:left-[32px] lg:top-[60px]">
					<img
						src={orange}
						alt=""
						width={30}
						className="rotate-[30deg] -scale-x-100 lg:w-[78px]"
					/>
				</div>
				<div className="left-[calc(4000%/390)] top-[10px] animate-[pendulum_0.8s_linear_0.2s_alternate_infinite] lg:left-[calc(14200%/1920)] lg:top-[52px]">
					<img
						src={apple}
						alt=""
						width={36}
						className="rotate-[15deg] lg:w-[100px]"
					/>
				</div>
				<div className="left-[calc(8000%/390)] top-[16px] animate-[pendulum_0.6s_linear_0.2s_alternate_infinite] lg:left-[calc(36000%/1920)] lg:top-[120px]">
					<img
						src={orange}
						alt=""
						width={26}
						className="-rotate-[15deg] lg:w-[71px]"
					/>
				</div>
				<div className="left-[calc(13000%/390)] top-[22px] animate-[pendulum_0.9s_linear_0.1s_alternate_infinite] lg:left-[calc(55800%/1920)] lg:top-[140px]">
					<img
						src={orange}
						alt=""
						width={26}
						className="-rotate-[15deg] lg:w-[71px]"
					/>
				</div>
				<div className="right-1/2 top-[20px] animate-[pendulum_0.6s_linear_0.2s_alternate_infinite] lg:right-[calc(97200%/1920)] lg:top-[104px]">
					<img
						src={apple}
						alt=""
						width={36}
						className="rotate-[15deg] lg:w-[112px]"
					/>
				</div>
				<img
					src={orange}
					alt=""
					width={38}
					className="right-[calc(14000%/390)] top-[20px] animate-[pendulum_1s_linear_0.2s_alternate_infinite] lg:right-[calc(71000%/1920)] lg:top-[149px] lg:w-[104px]"
				/>
				<div className="right-[calc(8800%/390)] top-[14px] animate-[pendulum_0.9s_linear_0.3s_alternate_infinite] lg:right-[calc(41700%/1920)] lg:top-[72px]">
					<img
						src={apple}
						alt=""
						width={50}
						className="rotate-[25deg] lg:w-[156px]"
					/>
				</div>
				<img
					src={orange}
					alt=""
					width={24}
					className="right-[calc(4000%/390)] top-[12px] animate-[pendulum_0.2s_linear_alternate_infinite] lg:right-[calc(27400%/1920)] lg:top-[140px] lg:w-[57px]"
				/>
				<img
					src={apple}
					alt=""
					width={28}
					className="-right-[12px] top-[6px] animate-[pendulum_0.5s_linear_0.1s_alternate_infinite] lg:top-[84px] lg:w-[74px]"
				/>
			</div>
			<div className="relative mx-auto mt-[40px] w-[330px] lg:mt-[200px] lg:w-[1080px]">
				<div className="absolute -left-[30px] -top-[16px] lg:-top-[100px] lg:left-[56px]">
					<img
						src={bellsGenesis31}
						alt=""
						width={61}
						height={61}
						className="ml-[17px] lg:ml-[50px] lg:w-[143px]"
					/>
					<img
						src={bellsGenesis31}
						alt=""
						width={44}
						height={44}
						className="-mt-[15px] lg:-mt-[36px] lg:w-[101px]"
					/>
					<img
						src={bellsGenesis31}
						alt=""
						width={28}
						height={28}
						className="-mt-[20px] ml-[31px] lg:-mt-[49px] lg:ml-[92px] lg:w-[66px]"
					/>
				</div>
				<div className="absolute -right-[24px] lg:right-[96px]">
					<img
						src={bellsGenesis31}
						alt=""
						width={40}
						height={40}
						className="lg:w-[82px]"
					/>
					<img
						src={bellsGenesis31}
						alt=""
						width={55}
						height={55}
						className="-mt-[8px] ml-[12px] lg:-mt-[17px] lg:ml-[20px] lg:w-[116px]"
					/>
					<img
						src={bellsGenesis31}
						alt=""
						width={31}
						height={31}
						className="-mt-[28px] lg:-mt-[65px] lg:w-[66px]"
					/>
				</div>
				<h2 className="text-center font-senior text-[26px] leading-[1.25] text-[#056242] lg:text-[56px]">
					About
					<br />
					Bellscoin
				</h2>
			</div>
			<article className="relative mx-auto mt-[60px] w-[320px] font-senior text-[18px] leading-[30px] text-[#08835E] lg:mt-[200px] lg:w-[1080px] lg:text-[34px] lg:leading-[60px]">
				<h3 className="text[24px] text-center font-senior leading-[1] text-[#691823] lg:text-left lg:text-[60px]">
					Roadmap
				</h3>
				<ol className="mt-[40px] list-decimal pl-[40px] lg:mt-[80px] lg:pl-[140px] text-[12px] lg:text-[32px]">
					<li>
						Restore the forgotten
						<br />
						honor as the{' '}
						<span className="text-[#ED2C31]">
							oldest meme
							<br />
							coin
						</span>{' '}
						in the world.
					</li>
					<li>
						Buy and <span className="text-[#ED2C31]">HODL $BEL</span>.
					</li>
					<li>
						Buy more if you like
						<br />
						Bellscoin.
					</li>
					<li>
						Maybe we make some <br />
						<span className="text-[#ED2C31]">interesting things</span> like <span className="text-[#ED2C31]">Op_cat</span>
						<br />
						on Bellscoin layer1, but we are not sure.
					</li>
				</ol>
			</article>
			<div className="relative mt-[300px] lg:mt-[668px]">
				<div className="absolute bottom-[60px] w-max animate-[slide-left_7s_linear_infinite,rattling_2s_linear_infinite] lg:bottom-[360px] lg:right-[calc(36800%/1920)]">
					<div className="absolute -left-[20px] -top-[160px] lg:-top-[344px] lg:left-[260px]">
						<div className="relative">
							<svg
								width={248}
								height={99}
								className="drop-shadow-bubble lg:h-[200px] lg:w-[448px]"
							>
								<use href={`${sprite}#speechBubble`} />
							</svg>
							<span className="absolute top-[10px] w-[248px] text-center font-senior text-[12px] uppercase leading-[18px] text-[#525252] lg:top-[36px] lg:w-[448px] lg:text-[24px] lg:leading-[30px]">
								Do you want
								<br />
								more exchanges?
								<br />
								THEN,
								<br />
								<span className="text-[#ED2C31]">MAKE SOME NOISE</span>!
							</span>
						</div>
						<div className="ml-[88px] mt-[10px] h-[25px] w-[25px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[20px] lg:mt-[9px] lg:h-[64px] lg:w-[64px]" />
						<div className="ml-[80px] mt-[3px] h-[19px] w-[19px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:-ml-[41px] lg:mt-[9px] lg:h-[50px] lg:w-[50px]" />
						<div className="ml-[72px] mt-[4px] h-[15px] w-[15px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:-ml-[68px] lg:mt-[14px] lg:h-[38px] lg:w-[38px]" />
						<div className="ml-[80px] mt-[8px] h-[9px] w-[9px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:-ml-[49px] lg:mt-[37px] lg:h-[24px] lg:w-[24px]" />
					</div>
					<picture>
						<source
							media="(-webkit-min-device-pixel-ratio: 1.5)"
							srcSet={`${dogeTruck2x1610Webp} 805w, ${dogeTruck2x506Webp} 253w`}
							sizes="(min-width: 1300px) 805px, 253px"
						/>
						<source
							media="(-webkit-min-device-pixel-ratio: 1.5)"
							srcSet={`${dogeTruck2x1610Png} 805w, ${dogeTruck2x506Png} 253w`}
							sizes="(min-width: 1300px) 805px, 253px"
						/>
						<source srcSet={`${dogeTruck1x805Webp} 805w`} />
						<img
							src={dogeTruck1x805Png}
							alt="doge on truck"
							width={253}
							height={145}
							className="lg:w-[805px]"
						/>
					</picture>
				</div>
				<div
					style={{
						backgroundImage: `url(${sprout})`,
					}}
					className="h-[18px] bg-contain bg-repeat-x lg:h-[82px]"
				></div>
				<div
					className="h-[90px] bg-[length:35px_auto] bg-repeat lg:h-[370px] lg:bg-[length:155px_auto]"
					style={{
						backgroundImage: `url(${grass})`,
					}}
				></div>
				<div
					className="h-[25px] bg-[length:35px_auto] bg-repeat-x lg:h-[109px] lg:bg-[length:155px_auto]"
					style={{
						backgroundImage: `url(${soil})`,
					}}
				></div>
			</div>
		</section>
	)
}

function BackgroundClouds() {
	const container = useRef<HTMLDivElement>(null)
	const [m, setM] = useState(0)
	const [n, setN] = useState(0)

	const isMobile = useViewportSize() === 'sm'
	const cellSize = isMobile ? 200 : 800

	useEffect(() => {
		if (!container?.current) {
			return
		}

		setM(Math.ceil(container.current.clientHeight / cellSize))
		setN(Math.ceil(container.current.clientWidth / cellSize))
	}, [cellSize, container])

	return (
		<div
			ref={container}
			className="absolute left-0 top-0 grid h-full w-full select-none place-items-center overflow-hidden"
			style={{
				gridTemplate: `repeat(${m}, 1fr) / repeat(${n}, 1fr)`,
				gap: '80px',
			}}
		>
			{Array(m * n)
				.fill(null)
				.map((_, i) => {
					const x = Math.random() * cellSize - cellSize / 2
					const y = Math.random() * cellSize - cellSize / 2

					return (
						<img
							key={i}
							src={cloud}
							alt="cloud"
							width={(isMobile ? 30 : 150) * (0.2 + Math.random())}
							className="animate-[horizontal-shaking]"
							style={{
								animation: `horizontal-shaking ${2 + Math.random()}s infinite`,
								marginLeft: `${x}px`,
								marginTop: `${y}px`,
							}}
						/>
					)
				})}
		</div>
	)
}
