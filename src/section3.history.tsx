// import cowWithBell from '~/assets/section3/cowWithBell.png'
import billy_1 from '~/assets/section3/billy_1.png'
import dog from '~/assets/section3/dog.png'
import nook from '~/assets/section3/nook.png'
import powernook from '~/assets/section3/powernook.png'
// import dogeCoin1x88Webp from '~/assets/doge-coin-1x-88.webp'
// import dogeCoin2x196Png from '~/assets/doge-coin-2x-196.png'
// import dogeCoin2x196Webp from '~/assets/doge-coin-2x-196.webp'
// import dogeTesla1x400Png from '~/assets/doge-tesla-1x-400.png'
// import dogeTesla1x400Webp from '~/assets/doge-tesla-1x-400.webp'
// import dogeTesla2x360Png from '~/assets/doge-tesla-2x-360.png'
// import dogeTesla2x360Webp from '~/assets/doge-tesla-2x-360.webp'
// import dogeTesla2x800Png from '~/assets/doge-tesla-2x-800.png'
// import dogeTesla2x800Webp from '~/assets/doge-tesla-2x-800.webp'
import sprite from '~/assets/sprite.svg'

import { BackgroundLeaves } from './component/BackgroundLeaves'
// import { BellBag } from '~/component/BellBag.tsx'

export default function Section3History() {
	return (
		<section>
			<div className="relative bg-[#FFFBB4] pb-[20px] pt-[37px] lg:pb-[258px] lg:pt-[200px]">
				<BackgroundLeaves />
				<div className="relative mx-auto flex flex-col ">
					{/* Embedded AlchemyPay widget under the top nav bar */}
					<div className="flex flex-col items-center">
						<div className="flex flex-col items-center gap-2 lg:flex-row">
							<img src={nook} alt="nook" width={80} className="lg:w-[300px]" />
							<p className="font-Glowing text-[36px] tracking-[8px] text-yellow-300 text-stroke_2 lg:text-[80px] lg:text-stroke_6">
								WHAT IS $BELLS?
							</p>
						</div>
						<div className="mt-[40px] max-w-[800px] px-4 font-Glowing text-[24px] tracking-[2px] text-yellow-300 text-stroke_2 lg:mt-[80px] lg:text-[40px] lg:tracking-[0px]">
							<div className="flex gap-2">
								<p>•</p>
								<p>
									created by Dogecoin dev{' '}
									<span className="text-[#ED2C31]">BillyM2K</span>
								</p>
							</div>
							<div className="flex gap-2">
								<p>•</p>
								<p className="text-[#ED2C31]">
									NO VC & KOL, pre-mined, team allocation
								</p>
							</div>
							<div className="flex gap-2">
								<p>•</p>

								<p>Fully decentralized community driven</p>
							</div>
							<div className="flex gap-2">
								<p>•</p>
								<p className="text-[#ED2C31]">
									Proof of work (Scrypt Algorithm)
								</p>
							</div>
							<div className="flex gap-2">
								<p>•</p>
								<p className="text-white">
									Merge mined with $LTC, $DOGE Network
								</p>
							</div>
						</div>
					</div>
					<div className="mt-12 flex flex-col items-center px-4">
						<p className="text-center font-Glowing text-[40px] tracking-[2px] text-[#ED2C31] text-stroke_2 lg:text-[80px] lg:tracking-[8px] lg:text-stroke_6">
							DOGE DADDY, SERIOUSLY?
						</p>
						<img src={billy_1} alt="billy_1" />
						<p className=" mt-10 text-center font-chelsea text-[18px] uppercase tracking-[8px] text-[#0000FF] lg:text-[30px]">
							yeah, BillyM2k called
							<br />
							BEllscoin <span className="text-[#FF0000]">Doge daddy!</span>
						</p>
						<a
							href="https://x.com/BillyM2k/status/1851321730696094018"
							className="font-chelsea text-[12px] text-[#0000FF] lg:text-[16px]"
						>
							https://x.com/BillyM2k/status/1851321730696094018
						</a>
					</div>
					<div className="relative mx-auto mt-[100px] h-[200px] lg:h-[600px]">
						<div className="absolute -translate-x-[120px] -translate-y-[80px] ">
							<div className="relative ">
								<svg
									width={127}
									height={83}
									className="drop-shadow-bubble lg:h-[169px] lg:w-[253px]"
								>
									<use href={`${sprite}#speechBubble`} />
								</svg>
								<span className="absolute top-[14px] w-full text-center font-mogra text-[12px] uppercase leading-[12px] tracking-305 lg:top-[22px] lg:text-[24px] lg:leading-[26px] ">
									I came into
									<br />
									the world
									<br />
									<span className="text-[#ED2C31]">8 days</span>
									<br />
									before you
									<br />
									did!
								</span>
							</div>
							<div className="ml-[17px] mt-[4px] h-[17px] w-[17px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:-mt-[8px] lg:ml-0 lg:h-[42px] lg:w-[42px]" />
							<div className="ml-[14px] mt-[4px] h-[13px] w-[13px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-0 lg:mt-[15px] lg:h-[32px] lg:w-[32px]" />
							<div className="ml-[21px] mt-[4px] h-[9px] w-[9px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[42px] lg:mt-[12px] lg:h-[22px] lg:w-[22px]" />
							<div className="animate-[jump-shaking_1s_infinite] lg:absolute lg:w-[400px]">
								<picture>
									<img
										src={powernook}
										alt="DOGE"
										width={200}
										height={200}
										className="lg:w-[600px]"
									/>
								</picture>
							</div>
						</div>
						<div className="absolute mb-[40px] ml-[40px] mt-[40px] flex w-[140px] flex-shrink-0 animate-[jump-shaking-2_.5s_linear_infinite] lg:ml-40">
							<picture>
								<img
									src={dog}
									alt="doge on tesla"
									width={80}
									height={80}
									className="left-20 top-20 lg:absolute lg:w-[140px]"
								/>
							</picture>
							<div className="absolute -translate-y-[100px] translate-x-[60px] lg:translate-x-[220px] lg:translate-y-[0px]">
								<div className="relative lg:ml-[112px]">
									<svg
										width={69}
										height={44}
										className="drop-shadow-bubble lg:h-[124px] lg:w-[195px]"
									>
										<use href={`${sprite}#speechBubble`} />
									</svg>
									<span className="absolute top-[9px] w-full text-center font-mogra text-[12px] leading-[12px] tracking-305 lg:top-[15px] lg:pl-[10px] lg:text-[36px] lg:leading-[1.2]">
										SO,,
										<br />
										WHAT?
									</span>
								</div>
								<div className="ml-[23px] mt-[4px] h-[16px] w-[16px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[78px] lg:mt-0 lg:h-[36px] lg:w-[36px]" />
								<div className="ml-[16px] mt-[7px] h-[11px] w-[11px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:ml-[36px] lg:mt-[4px] lg:h-[28px] lg:w-[28px]" />
								<div className="mt-[8px] h-[10px] w-[10px] rounded-full bg-[#F8D703] drop-shadow-bubble lg:-mt-[4px] lg:h-[18px] lg:w-[18px]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
