import sprite from '~/assets/sprite.svg'

export function CoinGecko({ className }: { className?: string }) {
	return (
		<a
			href="https://www.coingecko.com/en/coins/bellscoin"
			target="_blank"
			rel="noreferrer"
			className="group"
		>
			<svg viewBox="0 0 20 20" className={className}>
				<use
					href={`${sprite}#coinGecko`}
					id="coinGecko-red"
					className="group-hover:opacity-0 group-focus:opacity-0"
				/>
				<use
					href={`${sprite}#coinGecko`}
					id="coinGecko-white"
					className="opacity-0 group-hover:opacity-100 group-focus:opacity-100"
				/>
			</svg>
		</a>
	)
}

export function Discord({ className }: { className?: string }) {
	return (
		<a
			href="https://t.co/4DCHZEdSSE"
			target="_blank"
			rel="noreferrer"
			className="group"
		>
			<svg
				viewBox="0 0 20 20"
				fill="#E60012"
				className={`group-hover:fill-white group-focus:fill-white ${className}`}
			>
				<use href={`${sprite}#discord`} />
			</svg>
		</a>
	)
}

export function Github({ className }: { className?: string }) {
	return (
		<a
			href="https://github.com/Nintondo"
			target="_blank"
			rel="noreferrer"
			className="group"
		>
			<svg
				viewBox="0 0 20 20"
				fill="#E60012"
				className={`group-hover:fill-white group-focus:fill-white ${className}`}
			>
				<use href={`${sprite}#github`} />
			</svg>
		</a>
	)
}

export function Linktree({ className }: { className?: string }) {
	return (
		<a
			href="https://linktr.ee/bellscoin"
			target="_blank"
			rel="noreferrer"
			className="group"
		>
			<svg
				viewBox="0 0 40 48"
				fill="#E60012"
				className={`group-hover:fill-white group-focus:fill-white ${className}`}
			>
				<use href={`${sprite}#linktree`} />
			</svg>
		</a>
	)
}

export function Telegram({ className }: { className?: string }) {
	return (
		<a
			href="https://t.me/BellsCoinOfficial"
			target="_blank"
			rel="noreferrer"
			className="group"
		>
			<svg
				viewBox="0 0 20 20"
				fill="#E60012"
				className={`group-hover:fill-white group-focus:fill-white ${className}`}
			>
				<use href={`${sprite}#telegram`} />
			</svg>
		</a>
	)
}

export function Twitter({ className }: { className?: string }) {
	return (
		<a
			href="https://twitter.com/BellsChain"
			target="_blank"
			rel="noreferrer"
			className="group"
		>
			<svg
				viewBox="0 0 1200 1227"
				fill="#E60012"
				className={`group-hover:fill-white group-focus:fill-white ${className}`}
			>
				<use href={`${sprite}#twitter`} />
			</svg>
		</a>
	)
}
