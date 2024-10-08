import thumb1 from '~/assets/section7/thumb1.png'
import thumb10 from '~/assets/section7/thumb10.png'
import thumb11 from '~/assets/section7/thumb11.png'
import thumb12 from '~/assets/section7/thumb12.png'
import thumb2 from '~/assets/section7/thumb2.png'
import thumb3 from '~/assets/section7/thumb3.png'
import thumb4 from '~/assets/section7/thumb4.png'
import thumb5 from '~/assets/section7/thumb5.png'
import thumb6 from '~/assets/section7/thumb6.png'
import thumb7 from '~/assets/section7/thumb7.png'
import thumb8 from '~/assets/section7/thumb8.png'
import thumb9 from '~/assets/section7/thumb9.png'
import title1 from '~/assets/section7/title1.png'
import title2 from '~/assets/section7/title2.png'

interface Link {
	url: string
	text: string
}

interface CardProps {
	image: string
	description: string | React.ReactElement
	links: Link[]
	badgeText: string // 왼쪽 상단에 표시될 텍스트
}

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

function Card({ image, description, links, badgeText }: CardProps) {
	return (
		<div
			ref={(instance) => {
				instance && observer.observe(instance)
			}}
			className="relative flex w-full max-w-full scale-0 flex-col gap-4 rounded-2xl border border-solid border-[#387F33] bg-[#FFE46A] p-2 lg:flex-row"
		>
			{/* 왼쪽 상단에 빨간 딱지 */}
			<div className="absolute left-[-10px] top-[-18px] rounded-lg bg-[#ED2C31] px-2 py-1 font-chelsea text-xs tracking-305 text-white">
				{badgeText}
			</div>

			<img src={image} alt="icon" />
			<div className="flex flex-col justify-between font-chelsea text-xs uppercase tracking-[3px]">
				<div>
					<p className="text-[14px] text-[#FF0000]">Description</p>
					<div className="mt-2 leading-5">{description}</div>
				</div>
				<div className="mt-4 space-y-1 lg:mt-0">
					<p>Proofs & Links</p>
					<div className="flex gap-2 text-[10px] text-[#0015FF] lg:flex-col lg:gap-0">
						{links.map((link, index) => (
							<>
								<a
									key={index}
									href={link.url}
									className="block"
									target="_blank"
									rel="noreferrer"
								>
									<span className="hidden lg:block">{link.text}</span>
									<span className="block lg:hidden">Link{index + 1}</span>
								</a>
								<p className="flex lg:hidden">
									{index !== links.length - 1 && '|'}
								</p>
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

// Section7Study 컴포넌트
export default function Section7Study() {
	return (
		<section className="max-w-full bg-gradient-to-r from-[#F4BE04] to-[#FFE46A] ">
			<div className="relative mx-auto p-4 lg:w-[1100px]">
				{/* 상단 타이틀 */}
				<div className="flex w-full items-center text-center uppercase">
					<img
						src={title1}
						alt="Study $BEL History"
						className="mx-auto mb-10 w-[60px] lg:w-full"
					/>
					<p className="w-[520px] font-chelsea text-[16px] tracking-[10px] text-[#FF0000] lg:text-[56px] lg:tracking-[20px]">
						Study $BEL history
					</p>
					<img
						src={title2}
						alt="Study $BEL History"
						className="mx-auto mb-10 w-[60px] lg:w-full"
					/>
				</div>
				<div className="flex justify-center">
					<p className="w-[630px] text-center font-chelsea text-[10px] uppercase tracking-305 lg:text-[16px] lg:leading-[28px]">
						Bellscoin has a super interesting narratives as the oldest meme coin
						prior to dogecoin. Decentralized community is building amazing
						things on top of its history.
					</p>
				</div>
				{/* 카드들 */}
				<div className="mt-10 grid w-full max-w-full grid-cols-1 gap-10">
					{/* 첫 번째 카드 */}
					<Card
						image={thumb1}
						description="The BellsCoin was created by BillyM2k in 2013 and he forked it to make Dogecoin."
						links={[
							{
								url: 'https://x.com/billym2k/status/408815850615869440?s=46&t=xWOkrI8x7-FS82ub-1bdoA',
								text: 'https://x.com/billym2k/status/408815850615869440?s=46&t=xWOkrI8x7-FS82ub-1bdoA',
							},
							{
								url: 'https://bitcointalk.org/index.php?topic=349695.0',
								text: 'https://bitcointalk.org/index.php?topic=349695.0',
							},
							{
								url: 'https://x.com/bellscoinx/status/1810700476163481741?s=46&t=xWOkrI8x7-FS82ub-1bdoA',
								text: 'https://x.com/bellscoinx/status/1810700476163481741?s=46&t=xWOkrI8x7-FS82ub-1bdoA',
							},
							{
								url: 'https://x.com/billym2k/status/1732424915528417602?s=46&t=xWOkrI8x7-FS82ub-1bdoA',
								text: 'https://x.com/billym2k/status/1732424915528417602?s=46&t=xWOkrI8x7-FS82ub-1bdoA',
							},
						]}
						badgeText="'23.11.28"
					/>

					{/* 두 번째 카드 */}
					<Card
						image={thumb2}
						description={
							<>
								<p>
									On December 14, 2023, @adam_bcbride and @luke_wright
									resurrected the abandoned BellsCoin blockchain and publicly
									announced it.
								</p>
								<br />
								<p>
									Thanks to its fair launch, it was not pre-mined, and there was
									no allocation for the team, etc.
								</p>
							</>
						}
						links={[
							{
								url: 'https://x.com/adamamcbride/status/1734970425778815413',
								text: 'https://x.com/adamamcbride/status/1734970425778815413',
							},
						]}
						badgeText="'23.12.14"
					/>
					<Card
						image={thumb3}
						description={
							<p>
								Decentralized BellsCoin developers came together to update the
								BellsCoin Core code, which has been in use for over 11 years.
								Through this update, BEL-20 and Bellinals (inscriptions on the
								BellsCoin blockchain) are now supported.
							</p>
						}
						links={[
							{
								url: 'https://discordapp.com/channels/1184582923358310431/1184587211388223508/1190053807531503696',
								text: 'https://discordapp.com/channels/1184582923358310431/1184587211388223508/1190053807531503696',
							},
						]}
						badgeText="'23.12.29"
					/>
					<Card
						image={thumb8}
						description={
							<>
								<p>
									As of October 2024, the number of inscriptions issued on the
									BellsCoin blockchain has exceeded 150 million.
								</p>
								<br />
								<p>
									BellsCoin has become a playground for many artists worldwide
									to issue and trade their artwork as inscriptions.
								</p>
							</>
						}
						links={[
							{
								url: 'https://x.com/adamamcbride/status/1830622754866888866',
								text: 'https://x.com/adamamcbride/status/1830622754866888866',
							},
							{
								url: 'https://collection.bellscoin.com',
								text: 'https://collection.bellscoin.com',
							},
							{
								url: 'https://x.com/adamamcbride/status/1822309778812514581',
								text: 'https://x.com/adamamcbride/status/1822309778812514581',
							},
						]}
						badgeText="'24.04.13"
					/>
					<Card
						image={thumb9}
						description={
							<>
								<p>
									Nintondo is the core product of the BellsCoin ecosystem. It
									serves as an explorer, a marketplace & indexer for BEL-20 and
									Bellinals (BEL inscriptions), and supports BellsCoin`s Web3
									wallet (Chrome, Firefox).
								</p>
								<br />
								<p>
									Nintondo continues to evolve, now offering detailed services
									such as a UTXO splitter.
								</p>
							</>
						}
						links={[
							{
								url: 'https://medium.com/@bellscoin/nintondo-utxo-splitter-1718e5e98fca',
								text: 'https://medium.com/@bellscoin/nintondo-utxo-splitter-1718e5e98fca',
							},
							{
								url: 'https://medium.com/@bellscoin/nintondo-updates-0-2-4-2-75cff40db4d5',
								text: 'https://medium.com/@bellscoin/nintondo-updates-0-2-4-2-75cff40db4d5',
							},
							{
								url: 'https://x.com/BellsChain/status/1779189536443998637',
								text: 'https://x.com/BellsChain/status/1779189536443998637',
							},
							{
								url: 'https://discordapp.com/channels/1184582923358310431/1184587211388223508/1277642424650432653',
								text: 'https://discordapp.com/channels/1184582923358310431/1184587211388223508/1277642424650432653',
							},
						]}
						badgeText="'24.05.10"
					/>
					<Card
						image={thumb4}
						description={
							<>
								<p>
									The merged mining of BellsCoin, proposed by BillyM2K, the
									developer of Dogecoin, to the BellsCoin community in 2023,
									became possible through the Core 3.0 update.
								</p>
								<br />
								<p>
									BellsCoin is now capable of merged mining alongside Litecoin
									and Dogecoin, bringing numerous Scrypt PoW miners worldwide to
									participate in mining BellsCoin.
								</p>
							</>
						}
						links={[
							{
								url: 'https://x.com/BellsChain/status/1814703025769902204',
								text: 'https://x.com/BellsChain/status/1814703025769902204',
							},
							{
								url: 'https://medium.com/@bellscoin/what-billym2k-said-about-bellscoin-fcbdf4056aae',
								text: 'https://medium.com/@bellscoin/what-billym2k-said-about-bellscoin-fcbdf4056aae',
							},
						]}
						badgeText="'24.07.21"
					/>
					<Card
						image={thumb5}
						description="Thanks to the core v3 update enabling merged mining, BellsCoin’s network hashrate has reached one of the highest levels among Scrypt Algorithm PoW chains, alongside Dogecoin and Litecoin. It currently has a network hashrate of approximately 1.2 PH/s."
						links={[
							{
								url: 'https://x.com/keto_studio/status/1843108147952828637',
								text: 'https://x.com/keto_studio/status/1843108147952828637',
							},
							{
								url: 'https://x.com/keto_studio/status/1826181422048280829',
								text: 'https://x.com/keto_studio/status/1826181422048280829',
							},
							{
								url: 'https://miningpoolstats.stream/bells',
								text: 'https://miningpoolstats.stream/bells',
							},
						]}
						badgeText="'24.08.21"
					/>
					<Card
						image={thumb12}
						description={
							<>
								<p>
									SuitBoy Billy, a collection of 10,000 PFP inscriptions created
									by BellsCoin community member Dr. Beltoshi, is a project
									designed to express gratitude to BillyM2K, the founder of
									BellsCoin, by donating the proceeds from the inscription sales
									to him.
								</p>
								<br />
								<p>
									Through the SuitBoy Billy collection, Billy received a
									donation of 100,000 $BEL from Beltoshi. Thank you, BillyM2K!
								</p>
							</>
						}
						links={[
							{
								url: 'https://x.com/SuitboyBilly/status/1833596313147175178',
								text: 'https://x.com/SuitboyBilly/status/1833596313147175178',
							},
							{
								url: 'https://x.com/BillyM2k/status/1832961779011654112',
								text: 'https://x.com/BillyM2k/status/1832961779011654112',
							},
						]}
						badgeText="'24.09.11"
					/>
					<Card
						image={thumb11}
						description="The Taproot update has been completed on the BellsCoin Layer 1 blockchain. This update aims to achieve better privacy and efficiency, smaller transaction sizes, Tapscript, and OP-CAT functionalities. The next core update will implement OP-CAT on the BellsCoin blockchain, making it capable of supporting smart contracts."
						links={[
							{
								url: 'https://discordapp.com/channels/1184582923358310431/1184587211388223508/1285561826423341163',
								text: 'https://discordapp.com/channels/1184582923358310431/1184587211388223508/1285561826423341163',
							},
							{
								url: 'https://x.com/NintondoWallet/status/1836680260395454906',
								text: 'https://x.com/NintondoWallet/status/1836680260395454906',
							},
							{
								url: 'https://x.com/BellsChain/status/1836002740616536548',
								text: 'https://x.com/BellsChain/status/1836002740616536548',
							},
						]}
						badgeText="'24.09.17"
					/>
					<Card
						image={thumb6}
						description="BillyM2K, the dogecoin developer, recognizes bellscoin and he tweeted on X that it’s based on his previous code work 11 years ago."
						links={[
							{
								url: 'https://x.com/BillyM2k/status/1839055216160944358',
								text: 'https://x.com/BillyM2k/status/1839055216160944358',
							},
						]}
						badgeText="'24.09.26"
					/>
					<Card
						image={thumb7}
						description="Binance Mining Pool announced its support for merged mining of BellsCoin. In addition to Binance, most mining pools worldwide that support Litecoin and Dogecoin also support BellsCoin. Many pools such as ViaBTC, AntPool, F2Pool, TrustPool, CloverPool, and MiningDutch are participating as well."
						links={[
							{
								url: 'https://x.com/binance/status/1842213850969755861',
								text: 'https://x.com/binance/status/1842213850969755861',
							},
							{
								url: 'https://miningpoolstats.stream/bells',
								text: 'https://miningpoolstats.stream/bells',
							},
						]}
						badgeText="'24.09.26"
					/>
					<Card
						image={thumb10}
						description="The BellsCoin community conducts fundraising through voluntary donations from community members. All funds are managed via multisig, and every expenditure is transparently disclosed on-chain. Within just two days of starting the donation campaign, over 130K USD was raised."
						links={[
							{
								url: 'https://x.com/BellsChain/status/1841551360350961948',
								text: 'https://x.com/BellsChain/status/1841551360350961948',
							},
						]}
						badgeText="'24.10.3"
					/>
				</div>
			</div>
		</section>
	)
}
