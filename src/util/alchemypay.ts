// AlchemyPay 서명 생성을 위한 유틸리티 함수들

// HMAC SHA256 서명 생성
export function generateSignature(timestamp: string, httpMethod: string, requestPath: string, secretKey: string): Promise<string> {
	// 서명 문자열 생성: timestamp + httpMethod + requestPath
	const signatureString = timestamp + httpMethod + requestPath;
	
	// HMAC SHA256 서명 생성
	const encoder = new TextEncoder();
	const keyData = encoder.encode(secretKey);
	const messageData = encoder.encode(signatureString);
	
	// Web Crypto API를 사용하여 HMAC SHA256 생성
	return crypto.subtle.importKey(
		'raw',
		keyData,
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign']
	).then(key => {
		return crypto.subtle.sign('HMAC', key, messageData);
	}).then(signature => {
		// Base64 인코딩
		const base64 = btoa(String.fromCharCode(...new Uint8Array(signature)));
		return encodeURIComponent(base64);
	});
}

// 파라미터를 정렬하여 서명할 문자열 생성
export function getStringToSign(params: Record<string, string>): string {
	const sortedKeys = Object.keys(params).sort();
	const s2s = sortedKeys
		.map(key => {
			const value = params[key];
			if (Array.isArray(value) || value === '') {
				return null;
			}
			return `${key}=${value}`;
		})
		.filter(Boolean)
		.join('&');
	
	return s2s;
}

// On Ramp URL 생성
export async function generateOnRampURL(
    appId: string,
    appSecret: string,
    params: {
        crypto?: string;
        fiat?: string;
        fiatAmount?: string;
        merchantOrderNo?: string;
        network?: string;
        redirectURL?: string;
    },
    baseUrl = 'https://ramptest.alchemypay.org'
): Promise<string> {
	const timestamp = String(Date.now());
	const httpMethod = 'GET';
	const requestPath = '/index/rampPageBuy';
	
	// 기본 파라미터 설정
    const paramsToSign = {
        appId,
        crypto: params.crypto ?? 'BELLS',
        fiat: params.fiat ?? 'USD',
        fiatAmount: params.fiatAmount ?? '50',
        merchantOrderNo: params.merchantOrderNo ?? `bells_${Date.now()}`,
        network: params.network ?? 'TRX',
        timestamp,
        ...(params.redirectURL && { redirectURL: params.redirectURL })
    };
	
	// 서명할 문자열 생성
	const rawDataToSign = getStringToSign(paramsToSign);
	const requestPathWithParams = requestPath + '?' + rawDataToSign;
	
	// 서명 생성
	const signature = await generateSignature(timestamp, httpMethod, requestPathWithParams, appSecret);
	
	// 최종 URL 생성
    const finalURL = `${baseUrl}?${rawDataToSign}&sign=${signature}`;
	
	return finalURL;
}

// Off Ramp URL 생성
export async function generateOffRampURL(
    appId: string,
    appSecret: string,
    params: {
        crypto?: string;
        fiat?: string;
        cryptoAmount?: string;
        merchantOrderNo?: string;
        network?: string;
        redirectURL?: string;
    },
    baseUrl = 'https://ramptest.alchemypay.org'
): Promise<string> {
	const timestamp = String(Date.now());
	const httpMethod = 'GET';
	const requestPath = '/index/rampPageSell';
	
	// 기본 파라미터 설정
    const paramsToSign = {
        appId,
        crypto: params.crypto ?? 'BELLS',
        fiat: params.fiat ?? 'USD',
        cryptoAmount: params.cryptoAmount ?? '100',
        merchantOrderNo: params.merchantOrderNo ?? `bells_sell_${Date.now()}`,
        network: params.network ?? 'TRX',
        timestamp,
        ...(params.redirectURL && { redirectURL: params.redirectURL })
    };
	
	// 서명할 문자열 생성
	const rawDataToSign = getStringToSign(paramsToSign);
	const requestPathWithParams = requestPath + '?' + rawDataToSign;
	
	// 서명 생성
	const signature = await generateSignature(timestamp, httpMethod, requestPathWithParams, appSecret);
	
	// 최종 URL 생성
    const finalURL = `${baseUrl}?${rawDataToSign}&sign=${signature}`;
	
	return finalURL;
}
