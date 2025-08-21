import { useEffect, useState } from 'react'

import { generateOnRampURL } from '~/util/alchemypay'

interface AlchemyPayEmbedProps {
	className?: string
	crypto?: string
	network?: string
	fiat?: string
	fiatAmount?: string
	// 아래 두 값이 제공되면, 예시 코드처럼 프로덕션 도메인의 단순 URL을 사용합니다
	appId?: string
	customParameters?: string // 예: "crypto=USDT&network=ETH&showTable=buy&fiat=USD&fiatAmount=30"
}

export function AlchemyPayEmbed({
	className = '',
	crypto = 'USDT',
	network = 'ETH',
	fiat = 'USD',
	fiatAmount = '30',
	appId,
	customParameters,
}: AlchemyPayEmbedProps) {
	const [srcUrl, setSrcUrl] = useState<string>('')

	// 테스트 환경용 appId와 secret (실사용 시 교체 필요)
	const TEST_APP_ID = '0Ik8IL63D7l0356E'
	const TEST_APP_SECRET = 'YOUR_TEST_SECRET'

	useEffect(() => {
		let isMounted = true
		const generate = async () => {
			try {
				if (appId && customParameters) {
					// 사용자가 제공한 코드 형식대로 프로덕션 도메인 URL 구성
					const url = `https://ramp.alchemypay.org/?appId=${encodeURIComponent(appId)}&${customParameters}`
					if (isMounted) setSrcUrl(url)
					return
				}

				// 그렇지 않으면 서명 포함 테스트 URL 생성 (기본 동작)
				const redirectURL = encodeURIComponent(window.location.href)
				const url = await generateOnRampURL(TEST_APP_ID, TEST_APP_SECRET, {
					crypto,
					fiat,
					fiatAmount,
					network,
					redirectURL,
				})
				if (isMounted) setSrcUrl(url)
			} catch (err) {
				console.error('Failed to build AlchemyPay URL', err)
			}
		}
		void generate()
		return () => {
			isMounted = false
		}
	}, [appId, customParameters, crypto, fiat, fiatAmount, network])

	return (
		<div className={`flex w-full items-center justify-center ${className}`}>
			{srcUrl ? (
                <iframe
					title="AlchemyPay On/Off Ramp Widget"
					src={srcUrl}
					height={700}
                    frameBorder="no"
					allowFullScreen
					style={{
						display: 'block',
						width: '100%',
						maxHeight: '700px',
						maxWidth: '500px',
					}}
				/>
			) : (
				<div className="flex h-[625px] w-full max-w-[500px] items-center justify-center rounded-lg bg-gray-100 text-gray-500">
					Loading AlchemyPay...
				</div>
			)}
		</div>
	)
}
