import { useEffect, useRef, useState } from 'react'

import leaf from '~/assets/leaf.svg'
import { useViewportSize } from '~/util/use-viewport-size.ts'

export function BackgroundLeaves() {
	const container = useRef<HTMLDivElement>(null)
	const [m, setM] = useState(0)
	const [n, setN] = useState(0)

	const viewportSize = useViewportSize()
	const cellSize = viewportSize === 'sm' ? 120 : 600

	useEffect(() => {
		if (!container?.current) {
			return
		}

		setM(Math.ceil(container.current.clientHeight / cellSize))
		setN(Math.ceil(container.current.clientWidth / cellSize))
	}, [cellSize, container])

	return (
		<div
			ref={container}
			className="absolute left-0 top-0 grid h-full w-full select-none place-items-center overflow-hidden"
			style={{
				gridTemplate: `repeat(${m}, 1fr) / repeat(${n}, 1fr)`,
				gap: '80px',
			}}
		>
			{Array(m * n)
				.fill(null)
				.map((_, i) => {
					const x = Math.random() * cellSize - cellSize / 2
					const y = Math.random() * cellSize - cellSize / 2

					return (
						<img
							key={i}
							src={leaf}
							alt="leaf"
							width={30}
							className="lg:w-[120px]"
							style={{
								marginLeft: `${x}px`,
								marginTop: `${y}px`,
							}}
						/>
					)
				})}
		</div>
	)
}
