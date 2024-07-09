import { lazy, Suspense, useEffect, useState } from 'react'

import bellCoin from '~/assets/bell-coin.png'
import bellCoins from '~/assets/bell-coins.png'
import ribbon from '~/assets/ribbon.svg'
import starWand from '~/assets/star-wand.png'
import { BellBag } from '~/component/BellBag.tsx'
import { SequenceArrows } from '~/component/SequenceArrows.tsx'
import { useViewportSize } from '~/util/use-viewport-size.ts'

const EmissionChartSmall = lazy(() => import('./section4.chart-small'))
const EmissionChartLarge = lazy(() => import('./section4.chart-large'))

const observer = new IntersectionObserver(
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

export default function Section4Tokenomics() {
	const [currentSupply, setCurrentSupply] = useState<
		number | 'loading' | 'not available'
	>('loading')
	const [price, setPrice] = useState<number | 'loading' | 'not available'>(
		'loading',
	)
	const marketCap =
		currentSupply === 'loading' || price === 'loading'
			? 'loading'
			: currentSupply === 'not available' || price === 'not available'
				? 'not available'
				: currentSupply * price
	const [hashRate, setHashRate] = useState<
		number | 'loading' | 'not available'
	>('loading')

	useEffect(() => {
		fetch('https://api.nintondo.io/api/stats/bells')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json() 
			})
			.then((data: { circulating_supply: string }) => {
				setCurrentSupply(Math.floor(Number(data.circulating_supply))) // total_amount 
			})
			.catch(() => {
				setCurrentSupply('not available')
			})

		fetch('https://collection.bellscoin.com/api/getprice')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json() // JSON 형태로 응답을 파싱
			})
			.then((data:any) => {
				const priceInUsd = data.data.price
				setPrice(Number(priceInUsd.toString().slice(0, 10)))
			})
			.catch(() => {
				setPrice('not available')
			})

		fetch('https://collection.bellscoin.com/api/getnetworkhashps')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json() // JSON 형태로 응답을 파싱
			})
			.then((response: { network_hash: 'string' }) => {
				setHashRate(Number(response.network_hash))
			})
			.catch(() => {
				setHashRate('not available')
			})
	}, [])

	const viewportSize = useViewportSize()
	const isMobile = viewportSize === 'sm'

	return (
		<section className="overflow-hidden bg-[#FCC22D] pb-[40px] lg:pb-[460px]">
			<div className="relative pt-[9px] lg:pt-[36px]">
				<div className="invisible relative -translate-y-[40px] *:absolute *:left-0 *:top-0 *:h-[220px] *:w-[calc((100%-700px)/2)] lg:visible">
					{/* TODO whole ribbon svg */}
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[8px] -translate-y-[136px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[4px] -translate-y-[104px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[12px] -translate-y-[76px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[20px] -translate-y-[48px]"
					/>
				</div>
				<div className="invisible relative -translate-y-[40px] -scale-x-100 *:absolute *:left-0 *:top-0 *:h-[220px] *:w-[calc((100%-700px)/2)] lg:visible">
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[8px] -translate-y-[136px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[4px] -translate-y-[104px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[12px] -translate-y-[76px]"
					/>
					<img
						src={ribbon}
						alt=""
						className="-translate-x-[20px] -translate-y-[48px]"
					/>
				</div>
				<div className="relative mx-auto flex h-[59px] w-[350px] flex-col items-center justify-center drop-shadow-bubble lg:h-[166px] lg:w-[994px]">
					<div className="absolute h-full w-full bg-[#ED2C31] [clip-path:polygon(100%_0,95%_50%,100%_100%,0%_100%,5%_50%,0%_0%)]" />
					<div className="absolute h-full w-full">
						<img
							src={starWand}
							alt="star wand"
							className="absolute -top-[8px] left-[4px] w-[36px] lg:-top-[44px] lg:left-[60px] lg:w-[99px]"
						/>
						<div className="relative left-[16px] top-[16px] origin-left scale-[40%] *:absolute lg:left-[108px] lg:top-[12px] lg:scale-100">
							<img src={bellCoin} alt="" className="left-[26px] w-[30px]" />
							<img
								src={bellCoin}
								alt=""
								className="left-[42px] top-[19px] w-[30px]"
							/>
							<img
								src={bellCoin}
								alt=""
								className="left-[24px] top-[47px] w-[30px]"
							/>
							<img
								src={bellCoin}
								alt=""
								className="left-[22px] top-[29px] w-[26px]"
							/>
							<img src={bellCoin} alt="" className="top-[51px] w-[23px]" />
						</div>
					</div>
					<h2 className="relative -mt-[28px] font-mitr text-[22px] tracking-305 text-[#F4BE04] text-shadow lg:-mt-[16px] lg:text-[60px]">
						TOKENOMICS
					</h2>
					<a
						href="https://bitcointalk.org/index.php?topic=349695.0"
						target="_blank"
						rel="noreferrer"
						className="relative -mt-[4px] mb-[-25px] font-mogra text-[12px] tracking-305 text-white hover:text-[#F4BE04] focus:text-[#F4BE04] lg:mt-0 lg:text-[24px]"
					>
						ARCHIVE LINK
					</a>
				</div>
				<div className="mt-[13px] flex flex-col items-center justify-center gap-y-[11px] font-mogra text-[14px] uppercase leading-[1.2] tracking-305 *:w-[320px] *:gap-y-[15px] *:rounded-[15px] *:bg-white *:p-[13px] lg:mt-[100px] lg:flex-row lg:gap-x-[15px] lg:text-[22px] lg:*:h-[300px] lg:*:w-[520px] lg:*:px-[28px] lg:*:py-[20px]">
					<div className="grid grid-cols-[1.5fr_1fr] items-center drop-shadow-bubble odd:*:text-[#404040] even:*:text-[#ED2C31]">
						<span>Max supply</span>
						<span>Unlimited</span>
						<span>Block time</span>
						<span>60 seconds</span>
						<span>
							Difficulty
							<br />
							re-adjustment
						</span>
						<span>4 hours</span>
						<span>
							1 to block 100
							<br />
							(Epoch 1)
						</span>
						<span>2 bells</span>
					</div>
					<div className="grid grid-cols-[1.3fr_1fr] items-center !pr-[8px] drop-shadow-bubble odd:*:text-[#404040] even:*:pl-[8px] even:*:text-[#ED2C31]">
						<span>Current supply</span>
						<span>
							{typeof currentSupply === 'number'
								? currentSupply.toLocaleString()
								: currentSupply}
						</span>
						<span>Price(USD)</span>
						<span>
							{typeof price === 'number'
								? price.toLocaleString('en-US', {
										maximumFractionDigits: 6,
									})
								: price}
						</span>
						<span>Marketcap(USD)</span>
						<span>
							{typeof marketCap === 'number'
								? (~~marketCap).toLocaleString()
								: marketCap}
						</span>
						<span>
							Network
							<br />
							hashrate
						</span>
						<span>
							{typeof hashRate === 'number'
								? `${+(hashRate / 1_000_000_000_000)
										.toFixed(2)
										.slice(0, 6)} TH/S`
								: hashRate}{' '}
						</span>
					</div>
				</div>
				<div className="mt-[100px] grid grid-cols-[260px] grid-rows-[repeat(3,250px_100px)_250px] justify-center *:w-full lg:mt-[176px] lg:grid-cols-[380px_170px_380px] lg:grid-rows-[360px_170px_360px] lg:[&>*:nth-child(3n+1)]:justify-self-end">
					<div className="relative rounded-[69px] bg-white pt-[28px] font-mogra uppercase leading-[1.2] drop-shadow-bubble lg:pt-[20px]">
						<BellBag
							ref={(instance) => {
								instance && observer.observe(instance)
							}}
							alt=""
							width={80}
							height={95}
							className="absolute -top-[72px] left-[69px] scale-0 lg:-left-[70px] lg:-top-[94px] lg:w-[153px]"
						/>
						<BellBag
							ref={(instance) => {
								instance && observer.observe(instance)
							}}
							alt=""
							width={80}
							height={95}
							className="absolute -top-[72px] left-[109px] scale-0 lg:-top-[94px] lg:left-[8px] lg:w-[153px]"
						/>
						<h4 className="px-[36px] text-center text-[22px] tracking-305 lg:text-right lg:text-[34px]">
							EPOCH
							<span className="text-[#08835E]">2</span>
						</h4>
						<span className="mt-[-4px] block px-[36px] text-center text-[12px] tracking-305 lg:-mt-[8px] lg:text-right lg:text-[18px]">
							(~1st 90days)
						</span>
						<h5 className="mt-[10px] text-center text-[14px] leading-[14px] tracking-305 text-[#6A4E41] lg:mt-[16px] lg:text-[24px] lg:leading-[26px]">
							Block
							<br />
							101 - 129,600
						</h5>
						<div className="mt-[16px] grid grid-cols-3 gap-y-[6px] px-[40px] text-[12px] tracking-305 lg:mt-[20px] lg:text-[20px] [&>*:nth-child(3n)]:justify-self-end [&>*:nth-child(3n)]:text-[#F4BE04] [&>*:nth-child(3n+2)]:pl-[4px] [&>*:nth-child(3n+2)]:text-[#ED2C31]">
							<span>1%</span>
							<span>10,000</span>
							<span>$BEL</span>
							<span>5%</span>
							<span>1,000</span>
							<span>$BEL</span>
							<span>10%</span>
							<span>500</span>
							<span>$BEL</span>
							<span>14%</span>
							<span>250</span>
							<span>$BEL</span>
							<span>20%</span>
							<span>100</span>
							<span>$BEL</span>
							<span>50%</span>
							<span>50</span>
							<span>$BEL</span>
						</div>
					</div>
					<div className="flex items-center justify-evenly px-[4px]">
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction={isMobile ? 'down' : 'right'}
							size={26}
							number={5}
						/>
					</div>
					<div className="relative rounded-[69px] bg-white pt-[28px] font-mogra uppercase leading-[1.2] drop-shadow-bubble lg:pt-[20px]">
						<BellBag
							ref={(instance) => {
								instance && observer.observe(instance)
							}}
							alt=""
							width={80}
							height={95}
							className="absolute -top-[62px] left-[90px] scale-0 lg:-left-[53px] lg:-top-[91px] lg:w-[150px]"
						/>
						<h4 className="px-[36px] text-center text-[22px] tracking-305 lg:text-right lg:text-[34px]">
							EPOCH
							<span className="text-[#08835E]">3</span>
						</h4>
						<span className="mt-[-4px] block px-[36px] text-center text-[12px] tracking-305 lg:-mt-[8px] lg:text-right lg:text-[18px]">
							(~2nd 90days)
						</span>
						<h5 className="mt-[10px] text-center text-[14px] leading-[14px] tracking-305 text-[#6A4E41] lg:mt-[16px] lg:text-[24px] lg:leading-[26px]">
							Block
							<br />
							129,601 - 259,200
						</h5>
						<div className="mt-[16px] grid grid-cols-3 gap-y-[6px] px-[40px] text-[12px] tracking-305 lg:mt-[20px] lg:text-[20px] [&>*:nth-child(3n)]:justify-self-end [&>*:nth-child(3n)]:text-[#F4BE04] [&>*:nth-child(3n+2)]:pl-[12px] [&>*:nth-child(3n+2)]:text-[#ED2C31]">
							<span>1%</span>
							<span>5,000</span>
							<span>$BEL</span>
							<span>5%</span>
							<span>500</span>
							<span>$BEL</span>
							<span>10%</span>
							<span>250</span>
							<span>$BEL</span>
							<span>14%</span>
							<span>125</span>
							<span>$BEL</span>
							<span>20%</span>
							<span>50</span>
							<span>$BEL</span>
							<span>50%</span>
							<span>20</span>
							<span>$BEL</span>
						</div>
					</div>
					<div
						className="flex flex-col items-center justify-evenly py-[4px]"
						style={{
							gridArea: isMobile ? 'initial' : '2 / 3 / 3 / 4',
						}}
					>
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction="down"
							firstOn={false}
							size={26}
							number={5}
						/>
					</div>
					<div
						className="relative rounded-[69px] bg-white pt-[28px] font-mogra uppercase leading-[1.2] drop-shadow-bubble lg:pt-[20px]"
						style={{
							gridArea: isMobile ? 'initial' : '3 / 3 / 4 / 4',
						}}
					>
						<BellBag
							ref={(instance) => {
								instance && observer.observe(instance)
							}}
							alt=""
							width={45}
							height={53}
							className="absolute -top-[26px] left-[108px] scale-0 lg:-left-[29px] lg:-top-[43px] lg:w-[105px]"
						/>
						<h4 className="px-[36px] text-center text-[22px] tracking-305 lg:text-right lg:text-[34px]">
							EPOCH
							<span className="text-[#08835E]">4</span>
						</h4>
						<span className="mt-[-4px] block px-[36px] text-center text-[12px] tracking-305 lg:-mt-[8px] lg:text-right lg:text-[18px]">
							(~next 180days)
						</span>
						<h5 className="mt-[10px] text-center text-[14px] leading-[14px] tracking-305 text-[#6A4E41] lg:mt-[16px] lg:text-[24px] lg:leading-[26px]">
							Block
							<br />
							259,001 - 518,400
						</h5>
						<div className="mt-[16px] grid grid-cols-3 gap-y-[10px] px-[40px] text-[12px] tracking-305 lg:mt-[20px] lg:gap-y-[12px] lg:text-[20px] [&>*:nth-child(3n)]:justify-self-end [&>*:nth-child(3n)]:text-[#F4BE04] [&>*:nth-child(3n+2)]:pl-[16px] [&>*:nth-child(3n+2)]:text-[#ED2C31]">
							<span>1%</span>
							<span>500</span>
							<span>$BEL</span>
							<span>5%</span>
							<span>50</span>
							<span>$BEL</span>
							<span>10%</span>
							<span>25</span>
							<span>$BEL</span>
							<span>34%</span>
							<span>10</span>
							<span>$BEL</span>
							<span>50%</span>
							<span>5</span>
							<span>$BEL</span>
						</div>
					</div>
					<div
						className="flex items-center justify-evenly px-[4px]"
						style={{
							gridArea: isMobile ? 'initial' : '3 / 2 / 4 / 3',
						}}
					>
						<SequenceArrows
							colorOff="white"
							colorOn="#ED2C31"
							direction={isMobile ? 'down' : 'left'}
							size={26}
							number={5}
						/>
					</div>
					<div
						className="relative rounded-[69px] bg-white pt-[28px] font-mogra uppercase leading-[1.2] drop-shadow-bubble lg:pt-[20px]"
						style={{
							gridArea: isMobile ? 'initial' : '3 / 1 / 4 / 2',
						}}
					>
						<img
							ref={(instance) => {
								instance && observer.observe(instance)
							}}
							src={bellCoins}
							alt=""
							width={62}
							height={48}
							className="absolute -top-[24px] left-[99px] scale-0 lg:-left-[40px] lg:-top-[36px] lg:w-[156px]"
						/>
						<h4 className="px-[36px] text-center text-[22px] tracking-305 lg:text-right lg:text-[34px]">
							EPOCH
							<span className="text-[#08835E]">5</span>
						</h4>
						<span className="mt-[-4px] block px-[36px] text-center text-[12px] tracking-305 lg:-mt-[8px] lg:text-right lg:text-[18px]">
							&nbsp;
						</span>
						<h5 className="mt-[16px] text-center text-[14px] leading-[14px] tracking-305 text-[#6A4E41] lg:mt-[16px] lg:text-[24px] lg:leading-[26px]">
							After
							<br />
							Block 518,400
						</h5>
						<p className="mt-[24px] text-center text-[14px] tracking-305 text-[#ED2C31] lg:mt-[44px] lg:text-[24px]">
							2&nbsp;&nbsp;<span className="text-[#F4BE04]">$Bel</span>
							<br />
							Per 1 Block
						</p>
						<p className="mt-[24px] text-center text-[14px] tracking-305 text-[#6A4E41] lg:text-[20px]">
							daily
							<br />
							2,880 Bells
						</p>
					</div>
				</div>
			</div>
			<div className="mt-[98px] lg:mt-[308px] lg:block">
				<h3 className="mx-auto w-min text-center font-chelsea text-[24px] leading-[1.2] text-[#834B16] lg:w-auto lg:text-[64px] lg:leading-[74px]">
					Bellscoin emissions
				</h3>
				<Suspense
					fallback={
						<div className="mx-auto mt-[18px] w-[340px] lg:mt-[140px] lg:w-[1280px]">
							<div className="mx-auto w-full pb-[50%]" />
						</div>
					}
				>
					<EmissionChartSmall />
					<EmissionChartLarge />
				</Suspense>
			</div>
		</section>
	)
}
