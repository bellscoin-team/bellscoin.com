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
		</>
	)
}
