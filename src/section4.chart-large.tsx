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

import bellBagChart0 from '~/assets/bell-bag-chart-0.png'
import bellBagChart1 from '~/assets/bell-bag-chart-1.png'
import bellBagChart2 from '~/assets/bell-bag-chart-2.png'
import bellBagChart3 from '~/assets/bell-bag-chart-3.png'
import bellCoins from '~/assets/bell-coins.png'

import { emissionSchedules } from './section4.emission-schedule.ts'
const { dates: emissionDates, values: emissionValues } = emissionSchedules

const chartPointEpoch2 = new Image()
chartPointEpoch2.src = bellBagChart3

const chartPointEpoch3 = new Image()
chartPointEpoch3.src = bellBagChart2

const chartPointEpoch4 = new Image()
chartPointEpoch4.src = bellBagChart1

const chartPointEpoch5 = new Image()
chartPointEpoch5.src = bellBagChart0

const chartPointEpoch6 = new Image(37, 30)
chartPointEpoch6.src = bellCoins

const chartPoints: Record<string, { img: HTMLImageElement }> = {
	'2024. 1. 20.': { img: chartPointEpoch2 },
	'2024. 7. 13.': { img: chartPointEpoch3 },
	'2024. 11. 6.': { img: chartPointEpoch4 },
	'2025. 2. 28.': { img: chartPointEpoch5 },
	'2025. 6. 1.': { img: chartPointEpoch6 },
	'2025. 9. 1.': { img: chartPointEpoch6 },
	'2025. 12. 1.': { img: chartPointEpoch6 },
	'2026. 3. 1.': { img: chartPointEpoch6 },
	'2026. 6. 1.': { img: chartPointEpoch6 },
	'2026. 9. 1.': { img: chartPointEpoch6 },
	'2026. 12. 1.': { img: chartPointEpoch6 },
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

const getYValueAtX = (xValue: string, labels: string[], data: number[]) => {
	const index = labels.findIndex((label) => label === xValue)
	if (index !== -1) {
		return data[index]
	}
	return 0
}

/**
 * When data is updated or the chart size changes,
 * you may need to adjust absolutely positioned elements.
 */
export default function EmissionChartLarge() {
	const today = dayjs().format('YYYY. M. D.')

	const yValueAtToday = getYValueAtX(today, emissionDates, emissionValues)

	return (
		<div className="relative mx-auto hidden lg:mt-[140px] lg:block lg:w-[1280px]">
			<div className="absolute right-[12px] top-[20px] h-[532px] w-[654px] bg-gradient-to-r from-[rgba(43,105,97,0.2)] to-[rgba(24,255,175,0)]">
				<div className="absolute top-[calc(50%-2px)] h-[1px] w-full bg-[#08835E]" />
				<div className="absolute -right-[2px] top-[calc(50%-5px)] h-[7px] w-[7px] bg-[#08835E] [clip-path:polygon(86.6%_50%,0_0,0_100%)]"></div>
				<div className="absolute top-1/2 h-[2px] w-[calc(100%-13px)] bg-[#08835E]" />
				<p className="relative left-1/2 top-1/2 z-[1] inline-block -translate-x-1/2 -translate-y-1/2 rounded-[34px] border-[3px] border-[#08835E] bg-[#F4BE04] px-[8px] py-[12px] text-center font-mogra text-[20px] uppercase leading-[22px] tracking-305 text-[#08835E]">
					<span className="text-[#ED2C31]">After</span> epoch 5
					<br />
					<span className="text-[#ED2C31]">daily</span>
					<br />
					2,880 Bells
					<br />
					<span className="text-[14px] leading-[22px]">
						(2bells per one block)
					</span>
				</p>
			</div>
			{/* Adjust the positioning and size of Epoch labels as in the second image */}
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
										currentLine: {
											type: 'line',
											xMin: today, // 레이블을 표시할 x축 날짜
											xMax: today,
											borderDash: [5, 5],
											yMin: 0, // 데이터에서 가져온 y 값
											yMax: yValueAtToday, // 그래프의 중간까지만
											borderColor: '#5C2CED',
											borderWidth: 2,
											
										},
										line: {
											type: 'line',
											borderWidth: 3,
											borderColor: 'rgba(5, 98, 66, 0.6)',
											borderDash: [5, 5],
											yMin: 58_000_000,
											yMax: 58_000_000,
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
										width: 5,
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
											return index % 4 === 0
												? label.slice(0, label.indexOf('.', 5))
												: ''
										},
										color: 'black',
										font: {
											family: "'Mogra', system-ui",
											size: 20,
										},
									},
								},
								y: {
									border: {
										color: '#ED2C31',
										width: 5,
									},
									grid: {
										color: 'rgba(5, 98, 66, 0.6)',
										lineWidth: 0.5,
									},
									max: 70_000_000,
									ticks: {
										callback: function (value) {
											const million = Number(value) / 1000000
											return `${million}M` // Change to 10M, 20M format
										},
										color: 'black',
										font: {
											family: "'Mogra', system-ui",
											size: 20,
										},
										padding: 8,
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
									data: Array(20).fill(null).concat(emissionValues),
									fill: 'start',
									pointRadius: 10,
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
