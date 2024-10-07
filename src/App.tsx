import Section1Header from '~/section1.header.tsx'
import Section3History from '~/section3.history.tsx'

import Section2Intro from './section2.intro.tsx'
import Section4Tokenomics from './section4.tokenomics.tsx'
import Section5About from './section5.about.tsx'
import Section6Buy from './section6.buy.tsx'
import Section7Study from './section7.study.tsx'

export default function App() {
	return (
		<>
			<Section1Header />
			<main>
				<Section2Intro />
				<Section3History />
				<Section4Tokenomics />
				<Section5About />
				<Section6Buy />
				<Section7Study />
			</main>
		</>
	)
}
