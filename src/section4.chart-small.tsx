import {
	CategoryScale,
	Chart,
	Filler,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import dayjs from 'dayjs'
import { Line } from 'react-chartjs-2'

import bellBagChart1 from '~/assets/bell-bag-chart-1.png'
import bellBagChart2 from '~/assets/bell-bag-chart-2.png'
import bellBagChart3 from '~/assets/bell-bag-chart-3.png'
import bellCoins from '~/assets/bell-coins.png'

import { emissionSchedules } from './section4.emission-schedule.ts'
const { dates: emissionDates, values: emissionValues } = emissionSchedules

const chartPointEpoch2 = new Image(37, 25)
chartPointEpoch2.src = bellBagChart3

const chartPointEpoch3 = new Image(23, 21)
chartPointEpoch3.src = bellBagChart2

const chartPointEpoch4 = new Image(12, 16)
chartPointEpoch4.src = bellBagChart1

const chartPointEpoch5 = new Image(8, 11)
chartPointEpoch5.src = bellBagChart1

const chartPointEpoch6 = new Image(11, 10)
chartPointEpoch6.src = bellCoins

const chartPoints: Record<string, { img: HTMLImageElement }> = {
	'2024. 1. 20.': { img: chartPointEpoch2 }, // not exact epoch point, just for presentation
	'2024. 3. 9.': { img: chartPointEpoch3 },
	'2024. 6. 7.': { img: chartPointEpoch4 },
	'2025. 5. 1.': { img: chartPointEpoch5 },
	'2025. 9. 1.': { img: chartPointEpoch6 },
	'2025. 12. 1.': { img: chartPointEpoch6 },
	'2026. 3. 1.': { img: chartPointEpoch6 },
	'2026. 6. 1.': { img: chartPointEpoch6 },
	'2026. 9. 1.': { img: chartPointEpoch6 },
} as const

Chart.register(
	annotationPlugin,
	CategoryScale,
	Filler,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
)

/**
 * When data is updated or the chart size changes,
 * you may need to adjust absolutely positioned elements.
 */
export default function EmissionChartSmall(props: {
	currentSupply: string | number
}) {
	const { currentSupply } = props
	return (
		<div className="relative mx-auto mt-[18px] w-[340px] lg:hidden">
			<div className="absolute right-[6px] top-[9px] h-[112px] w-[144px] bg-gradient-to-r from-[rgba(43,105,97,0.2)] to-[rgba(24,255,175,0)]">
				<div className="absolute top-[calc(50%+13px)] h-[0.5px] w-full bg-[#08835E]" />
				<div className="absolute -right-[2px] top-[calc(50%+11px)] h-[5px] w-[5px] bg-[#08835E] [clip-path:polygon(86.6%_50%,0_0,0_100%)]"></div>
				<div className="absolute top-[calc(50%+14px)] h-[1px] w-[calc(100%-10px)] bg-[#08835E]" />
				<p className="relative left-1/2 top-[calc(50%+14px)] z-[1] inline-block -translate-x-1/2 -translate-y-1/2 rounded-[34px] border-[1.5px] border-[#08835E] bg-[#F4BE04] px-[8px] py-[12px] text-center font-mogra text-[8px] uppercase leading-[8px] tracking-305 text-[#08835E]">
					<span className="text-[#ED2C31]">After</span> epoch 5
					<br />
					<span className="text-[#ED2C31]">daily</span>
					<br />
					2,880 Bells
					<br />
					<span className="text-[6px] tracking-305">(2bells per 1 block)</span>
				</p>
			</div>
			<div className="absolute bottom-[-40px] left-[80px] rounded-full border-4 border-[#08835E] px-4 text-center font-mogra">
				<p className="text-[8px] text-[#08835E]">
					{dayjs().format('YYYY/MM/DD')}
				</p>
				<p className="uppercase text-[8px] text-[#ED2C31] ">
					Circulation amount
				</p>
				<p className="text-[8px] text-[#ED2C31] ">
					{Intl.NumberFormat().format(Number(Number(currentSupply).toFixed(0)))} BEL
				</p>
			</div>
			<span className="absolute bottom-[46px] left-[46px] font-mogra text-[10px] tracking-305 text-[#ED2C31]">
				EPOCH1
			</span>
			<span className="absolute bottom-[54px] left-[50px] font-mogra text-[10px] tracking-305 text-[#ED2C31]">
				EPOCH2
			</span>
			<span className="absolute bottom-[84px] left-[84px] font-mogra text-[10px] tracking-305 text-[#ED2C31]">
				EPOCH3
			</span>
			<span className="absolute bottom-[116px] left-[122px] font-mogra text-[10px] tracking-305 text-[#ED2C31]">
				EPOCH4
			</span>
			<span className="absolute bottom-[124px] left-[166px] font-mogra text-[10px] tracking-305 text-[#ED2C31]">
				EPOCH5
			</span>
			<div className="relative mx-auto w-full pb-[50%]">
				<div className="absolute h-full w-full">
					<Line
						options={{
							elements: {
								point: {
									radius: 1,
								},
								line: {
									tension: 0.1,
								},
							},
							maintainAspectRatio: true,
							plugins: {
								annotation: {
									annotations: {
										// epoch5: {
										// 	backgroundColor: (ctx) => {
										// 		const { x, y, x2 } = ctx.element!
										// 		const g = ctx.chart.ctx.createLinearGradient(
										// 			x!,
										// 			y!,
										// 			x2!,
										// 			y!,
										// 		)
										// 		g.addColorStop(0, 'rgba(43, 105, 97, 0.2)')
										// 		g.addColorStop(1, 'rgba(24, 255, 175, 0)')
										// 		return g
										// 	},
										// 	borderWidth: 0,
										// 	type: 'box',
										// 	xMin: '2024. 11. 27.',
										// },
										line: {
											type: 'line',
											borderWidth: 1,
											borderColor: 'rgba(5, 98, 66, 0.6)',
											borderDash: [5, 5],
											yMin: 60_000_000,
											yMax: 60_000_000,
										},
									},
								},
								tooltip: {
									mode: 'index',
									intersect: false,
									displayColors: true,
									callbacks: {
										title: function (context) {
											return `${context[0].label}`
										},
									},
								},
							},
							responsive: true,
							scales: {
								x: {
									border: {
										color: '#ED2C31',
										width: 1.5,
									},
									grid: {
										color: 'rgba(5, 98, 66, 0.6)',
										lineWidth: 0.5,
									},
									offset: true,
									ticks: {
										callback: function (value, index) {
											if (typeof value !== 'number') {
												return ''
											}

											const label = this.getLabelForValue(value)
											if (!label) {
												return ''
											}

											// Hide every 3rd tick label
											return index % 2 === 0
												? label.slice(0, label.indexOf('.', 5))
												: ''
										},
										color: 'black',
										font: {
											family: "'Mogra', system-ui",
											size: 10,
										},
									},
								},
								y: {
									border: {
										color: '#ED2C31',
										width: 1.5,
									},
									grid: {
										color: 'rgba(5, 98, 66, 0.6)',
										lineWidth: 0.5,
									},
									max: 70_000_000,
									ticks: {
										callback: function (value) {
											if (typeof value !== 'number') {
												return ''
											}

											const label = this.getLabelForValue(value)
											if (!label) {
												return ''
											}

											return label.slice(0, 2) + 'M'
										},
										color: 'black',
										font: {
											family: "'Mogra', system-ui",
											size: 10,
										},
									},
								},
							},
						}}
						data={{
							labels: Array(20).fill(null).concat(emissionDates),
							datasets: [
								{
									backgroundColor: 'transparent',
									borderColor: '#834B16',
									borderWidth: 1,
									data: Array(20).fill(null).concat(emissionValues),
									fill: 'start',
									pointStyle: Array(20)
										.fill(null)
										.concat(
											emissionDates.map((date) =>
												chartPoints[date] ? chartPoints[date].img : false,
											),
										),
								},
							],
						}}
					/>
				</div>
			</div>
		</div>
	)
}
