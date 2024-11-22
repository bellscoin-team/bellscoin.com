import Nookamoto from './assets/section3/Nookamoto.gif'
import billy_2 from './assets/section3/billy_2.png'
import ltc_doge_bells from './assets/section3/ltc_doge_bells.png'
import { BackgroundLeaves } from './component/BackgroundLeaves'

export default function Section3History() {
	return (
		<section>
			<div className="relative flex flex-col items-center bg-[#FFFBB4] px-2 pb-[20px] pt-[37px] lg:pb-[258px] lg:pt-[515px]">
				<BackgroundLeaves />
				<div className="relative mx-auto flex flex-col items-center">
					<p className="font-Glowing text-stroke_2 lg:text-stroke_6 text-[40px] lg:text-[80px] uppercase tracking-[8px] text-yellow-300">
						We are <span className="text-red-500">Scrypt Family</span>
					</p>
					<div className="mt-4 flex flex-col items-center">
						<img src={billy_2} />
					</div>
					<div className='flex flex-col font-chelsea text-[#0000FF] text-[12px] lg:text-[16px]'>
						<a href="https://x.com/litecoin/status/1859295293893759411">
							https://x.com/litecoin/status/1859295293893759411
						</a>
						<a href="https://x.com/BellsChain/status/1859296830124851662">
							https://x.com/BellsChain/status/1859296830124851662
						</a>
						<a href="https://x.com/litecoin/status/1857481468903141530">
							https://x.com/litecoin/status/1857481468903141530
						</a>
						<a href="https://x.com/litecoin/status/1857484964989710667">
							https://x.com/litecoin/status/1857484964989710667
						</a>
						<a href="https://x.com/BillyM2k/status/1859307337359688037">
							https://x.com/BillyM2k/status/1859307337359688037
						</a>
					</div>
					<p className="font-Glowing text-stroke_2 lg:text-stroke_6 mt-20 text-[40px] lg:text-[80px] tracking-[2px] lg:tracking-[8px] text-white">
						<span className="text-sky-700">$LTC</span>, <span className='text-[#BAA02E]'>$DOGE</span>, AND <span className='text-orange-200'>$BELLS</span>
					</p>
					<p className='font-Glowing text-stroke_2 lg:text-stroke_6 text-[40px] lg:text-[80px] text-red-500 tracking-[2px] lg:tracking-[8px]'>WE ARE ALL MEMECOINS!!</p>
					<img src={ltc_doge_bells} />
					<p className='font-Glowing text-stroke_2 lg:text-stroke_6 text-[40px] lg:text-[80px] text-yellow-300 tracking-[2px] lg:tracking-[8px]'>LFG BELLSARMY!</p>
					<img src={Nookamoto} width={742} className="max-w-full" />
				</div>
			</div>
		</section>
	)
}
