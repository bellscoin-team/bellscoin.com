import { forwardRef, HTMLProps } from 'react'

// import bellBag1x300Png from '~/assets/bell-bag-1x-300.png'
// import bellBag1x300Webp from '~/assets/bell-bag-1x-300.webp'
// import bellBag2x160Png from '~/assets/bell-bag-2x-160.png'
// import bellBag2x160Webp from '~/assets/bell-bag-2x-160.webp'
// import bellBag2x600Png from '~/assets/bell-bag-2x-600.png'
// import bellBag2x600Webp from '~/assets/bell-bag-2x-600.webp'
import bellsbag from '~/assets/bellsbag.png'

export const BellBag = forwardRef<
	HTMLImageElement,
	HTMLProps<HTMLImageElement>
>(function BellBag(props, ref) {
	return (
		<picture>
			<source
				media="(-webkit-min-device-pixel-ratio: 1.5)"
				srcSet={`${bellsbag} 300w, ${bellsbag} 80w`}
				sizes="(min-width: 1300px) 300px, 80px"
			/>
			<source
				media="(-webkit-min-device-pixel-ratio: 1.5)"
				srcSet={`${bellsbag} 300w, ${bellsbag} 80w`}
				sizes="(min-width: 1300px) 300px, 80px"
			/>
			<source srcSet={`${bellsbag} 300w`} />
			<img ref={ref} src={bellsbag} alt="bell bag" {...props} />
		</picture>
	)
})
