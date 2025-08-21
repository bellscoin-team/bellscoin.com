import { useState } from 'react'

import creditcardPay from '~/assets/creditcard_pay.png'
import { AlchemyPayEmbed } from '~/component/AlchemyPayEmbed'

import Section1Header from './section1.header.tsx'
// import Section2Intro from './section2.intro.tsx'
import Section2Intro_doge_daddy_lfg from './section2.intro_doge_daddy_lfg.tsx'
import Section3History from './section3.history.tsx'
import Section3History2 from './section3.history2.tsx'
import Section4Tokenomics from './section4.tokenomics.tsx'
import Section5About from './section5.about.tsx'
import Section6Buy from './section6.buy.tsx'
import Section7Study from './section7.study.tsx'
import Section8Donation from './section8.donation.tsx'

export default function App() {
	const [isPaymentOpen, setIsPaymentOpen] = useState(false)
	return (
		<>
			<Section1Header />
			<main>
				<Section2Intro_doge_daddy_lfg />
				<Section3History />
				<Section3History2 />
				<Section4Tokenomics />
				<Section5About />
				<Section6Buy />
				<Section7Study />
				<Section8Donation />
				
			</main>

			{/* Floating Pay Button */}
			<button
				aria-label="Open payment"
				onClick={() => setIsPaymentOpen(true)}
				className="fixed bottom-6 right-6 z-[1000] rounded-full bg-white/90 p-3 shadow-xl hover:scale-105 hover:bg-white transition-transform"
			>
				<img src={creditcardPay} alt="Pay with card" className="h-12 w-12" />
			</button>

			{/* Payment Modal */}
			{isPaymentOpen ? (
				<div className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/50 p-4">
					<div className="relative w-full max-w-[560px] rounded-xl bg-white p-4 shadow-2xl">
						<button
							aria-label="Close payment"
							onClick={() => setIsPaymentOpen(false)}
							className="absolute right-3 top-3 rounded-md bg-gray-200 px-2 py-1 text-sm font-bold text-gray-700 hover:bg-gray-300"
						>
							Close
						</button>
						<div className="mt-6 flex justify-center">
							<AlchemyPayEmbed
								appId="0Ik8IL63D7l0356E"
								customParameters="crypto=BELLS&network=ETH"
							/>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}
