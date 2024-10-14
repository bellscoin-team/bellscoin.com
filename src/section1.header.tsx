import { useState } from 'react'

import bellsGenesis37 from '~/assets/Bells Genesis-37.png'
import bellsGenesis53 from '~/assets/Bells Genesis-53.png'
import bellsGenesis62 from '~/assets/Bells Genesis-62.png'
import bellsGenesis63 from '~/assets/Bells Genesis-63.png'
import bellsGenesis7 from '~/assets/Bells Genesis-7.png'
import bellsGenesis1 from '~/assets/bellsGenesis1.png'
import bellsGenesis2 from '~/assets/bellsGenesis2.png'
import { useViewportSize } from '~/util/use-viewport-size.ts'

import {
	CoinGecko,
	Coinmarketcap,
	Discord,
	Github,
	Linktree,
	Medium,
	MiningPoolStatus,
	Telegram,
	Twitter,
} from './component/ContactIcon.tsx'

interface LinkGroup {
	icon: string
	text: string
	href?: string
	links?: {
		text: string
		href: string
	}[]
}

const linkGroups: LinkGroup[] = [
	{
		icon: bellsGenesis7,
		text: 'EXPLORER',
		links: [
			{ text: 'NINTONDO', href: 'https://nintondo.io/' },
			{ text: 'BELLS QUARK', href: 'https://bells.quark.blue/tx/' },
		],
	},
	{
		icon: bellsGenesis37,
		text: 'NODE DOWNLOAD',
		href: 'https://github.com/Nintondo/bellscoinV3',
	},
	{
		icon: bellsGenesis62,
		text: 'WALLETS',
		links: [
			{
				text: 'NODE(QT) WALLETS',
				href: 'https://github.com/Nintondo/bellscoinV3',
			},
			{ text: 'ORDINALS WALLET', href: 'https://bells.ordinalswallet.com/' },
			{
				text: 'NINTONDO WALLET',
				href: 'https://nintondo.io',
			},
		],
	},
	{
		icon: bellsGenesis63,
		text: 'EXCHANGES',
		href: '#exchanges',
		links: [
			{ text: 'NONKYC.IO', href: 'https://nonkyc.io/market/BEL_USDT' },
			{ text: 'XEGGEX.COM', href: 'https://xeggex.com/market/BEL_USDT' },
			{
				text: 'COINEX.COM',
				href: 'https://www.coinex.com/ko/exchange/bellscoin-usdt',
			},
			{ text: 'BIT.COM', href: 'https://www.bit.com/spot?pair=BELLS-USDT' },
			{ text: 'BITKAN', href: 'https://bitkan.com/trade/BELLS-USDT' },
		],
	},
	{
		icon: bellsGenesis53,
		text: 'BELLINALS',
		links: [
			{
				text: 'NINTONDO BELLINALS EXPLORER',
				href: 'https://nintondo.io/belinals',
			},
			{ text: 'TOP COLLECTIONS', href: 'https://nintondo.io/market' },
			{
				text: 'COLLECTIONS SHOWROOM',
				href: 'https://collection.bellscoin.com',
			},
		],
	},
	{
		icon: bellsGenesis1,
		text: 'DONATION',
		href: 'https://donation.bellscoin.com',
	},
]

const linkGroupsSub: LinkGroup[] = [
	{
		icon: bellsGenesis2,
		text: 'COMMUNITY PRODUCT',
		links: [
			{ text: 'Belldow', href: 'https://bellscoin.meme/' },
			{ text: 'Bellswall', href: 'https://www.bellswall.com/' },
			{ text: 'Bellsight', href: 'https://bellsight.xyz/' },
			{ text: 'Bellscoin halving', href: 'https://halving.bellscoin.meme/' },
			{
				text: 'Bellscoin calculator',
				href: 'https://calculator.bellscoin.meme',
			},
			{
				text: 'Bellscoin rich list',
				href: 'https://bellscoin-rich-list.vercel.app/',
			},
			{ text: 'Bellspool', href: 'https://bellspool.io' },
			{ text: 'Bell indexer', href: 'https://bells-indexer.netlify.app/' },
			{ text: 'Bellscribe', href: 'https://bellscribe.com/' },
			{ text: 'Bellinals', href: 'https://bell.drc20.fun/' },
			{ text: 'Bells wtf', href: 'http://bells.wtf/' },
		],
	},
]
export default function Section1Header() {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const onClose = () => {
		document.body.style.overflow = 'auto'
		setIsNavOpen(false)
	}

	const isMobile = useViewportSize() === 'sm'
	if (!isMobile && isNavOpen) {
		setIsNavOpen(false)
	}

	return (
		<header>
			<div
				aria-hidden={!isNavOpen}
				className={`${
					isNavOpen ? 'visible' : 'invisible'
				} fixed z-[2] h-screen w-screen bg-[rgba(0,0,0,0.5)]`}
				onClick={(e) => {
					if (e.target === e.currentTarget) {
						onClose()
					}
				}}
			>
				<nav
					ref={(instance) => {
						if (isNavOpen) {
							instance?.focus()
						}
					}}
					className="ml-auto max-h-full w-[332px] overflow-y-auto rounded-l-[15px] border-[2px] border-[#08835E] bg-[#FFE46A] py-[18px] pl-[8px] pr-[20px] font-mogra leading-[1.2] text-[#525252] outline-none drop-shadow-[-30px_30px_30px_rgba(0,0,0,0.8)] [&_*]:tracking-305"
					tabIndex={0}
				>
					<button
						aria-label="Close menu"
						className="absolute right-0 top-0 flex h-[47px] cursor-pointer items-center bg-transparent px-[14px]"
						onClick={onClose}
					>
						<svg width={18} height={18} viewBox="0 0 18 18">
							<line
								x1="0"
								y1="0"
								x2="18"
								y2="18"
								stroke="#525252"
								strokeWidth={2}
							/>
							<line
								x1="0"
								y1="18"
								x2="18"
								y2="0"
								stroke="#525252"
								strokeWidth={2}
							/>
						</svg>
					</button>
					{[...linkGroups, ...linkGroupsSub].map((linkGroup) => (
						<div
							key={linkGroup.text}
							className="group grid grid-cols-[60px_1fr] items-center"
						>
							<img src={linkGroup.icon} alt="" width={44} height={44} />
							{linkGroup.href ? (
								<a
									href={linkGroup.href}
									{...(!linkGroup.href.startsWith('#') && {
										target: '_blank',
										rel: 'noreferrer',
									})}
									className="text-[24px] group-focus-within:text-[#ED2C31] group-hover:text-[#ED2C31]"
								>
									{linkGroup.text}
								</a>
							) : (
								<span className="text-[24px] group-focus-within:text-[#ED2C31] group-hover:text-[#ED2C31]">
									{linkGroup.text}
								</span>
							)}
							{linkGroup.links ? (
								<ul className="col-start-2 -mt-[8px] flex flex-col gap-y-[8px] pl-[8px] text-[16px]">
									{linkGroup.links.map((link) => (
										<li key={link.text}>
											<a
												href={link.href}
												target="_blank"
												rel="noreferrer"
												className="hover:text-[#ED2C31] focus:text-[#ED2C31]"
											>
												{link.text}
											</a>
										</li>
									))}
								</ul>
							) : null}
						</div>
					))}
				</nav>
			</div>
			<div className="h-[47px] bg-[#E60012] lg:h-[184px]">
				<button
					aria-label="Open menu"
					className="float-right flex h-full cursor-pointer flex-col justify-center gap-y-[5px] bg-transparent px-[14px] *:h-[2px] *:bg-white lg:hidden"
					onClick={() => {
						document.body.style.overflow = 'hidden'
						setIsNavOpen(true)
					}}
				>
					<div className="w-[18px]" />
					<div className="w-[12px]" />
					<div className="w-[18px]" />
				</button>
				<nav className="invisible relative z-[2] mx-auto flex h-full max-w-[2560px] items-center justify-end space-x-[40px] pr-[90px] text-center font-mogra leading-[1.2] tracking-305 text-white lg:visible">
					{linkGroups.map((linkGroup) => (
						<div
							key={linkGroup.text}
							className="group relative focus-within:text-[#FFE46A] hover:text-[#FFE46A]"
							tabIndex={linkGroup.href ? undefined : 0}
						>
							{linkGroup.href ? (
								<a
									href={linkGroup.href}
									{...(!linkGroup.href.startsWith('#') && {
										target: '_blank',
										rel: 'noreferrer',
									})}
									className="inline-block w-min"
								>
									{linkGroup.text}
								</a>
							) : (
								<span className="inline-block w-min">{linkGroup.text}</span>
							)}
							{linkGroup.links ? (
								<ul className="invisible absolute z-[1] flex max-w-[240px] flex-col gap-y-[16px] rounded-[13px] bg-[#FFE46A] px-[12px] pb-[18px] pt-[24px] text-left text-[16px] leading-[20px] drop-shadow-bubble group-focus-within:visible group-hover:visible">
									{linkGroup.links.map((link) => (
										<li
											key={link.text}
											className="text-[#525252] focus-within:text-[#08835E] hover:text-[#08835E]"
										>
											<a
												href={link.href}
												target="_blank"
												rel="noreferrer"
												className="block"
											>
												{link.text}
											</a>
										</li>
									))}
								</ul>
							) : null}
						</div>
					))}
				</nav>
			</div>
			<div className="h-[43px] bg-[#FFE46A] lg:h-[96px]">
				<nav className="invisible relative z-[1] mx-auto flex h-full max-w-[2560px] items-center justify-end gap-x-[40px] pr-[90px] text-[#FFE46A] lg:visible">
					{linkGroupsSub.map((linkGroup) => (
						<div
							key={linkGroup.text}
							className="group relative font-mogra leading-[1.2] tracking-305 text-[#E60012] group-hover:fill-white group-focus:fill-white lg:visible"
							tabIndex={linkGroup.href ? undefined : 0}
						>
							{linkGroup.href ? (
								<a
									href={linkGroup.href}
									{...(!linkGroup.href.startsWith('#') && {
										target: '_blank',
										rel: 'noreferrer',
									})}
									className="inline-block w-min"
								>
									{linkGroup.text}
								</a>
							) : (
								<span className="inline-block w-min">{linkGroup.text}</span>
							)}
							{linkGroup.links ? (
								<ul className="invisible absolute z-[1] flex max-w-[240px] flex-col gap-y-[16px] rounded-[13px] bg-[#FFE46A] px-[12px] pb-[18px] pt-[24px] text-left text-[16px] leading-[20px] drop-shadow-bubble group-focus-within:visible group-hover:visible">
									{linkGroup.links.map((link) => (
										<li
											key={link.text}
											className="text-[#525252] focus-within:text-[#08835E] hover:text-[#08835E]"
										>
											<a
												href={link.href}
												target="_blank"
												rel="noreferrer"
												className="block"
											>
												{link.text}
											</a>
										</li>
									))}
								</ul>
							) : null}
						</div>
					))}
					<Github className="w-[40px]" />
					<Twitter className="h-[38px]" />
					<Telegram className="w-[40px]" />
					<Discord className="w-[40px]" />
					<CoinGecko className="w-[40px]" />
					<Linktree className="h-[38px]" />
					<MiningPoolStatus className="h-[40px]" />
					<Coinmarketcap className="h-[40px]" />
					<Medium className="h-[40px]" />
				</nav>
			</div>
		</header>
	)
}
