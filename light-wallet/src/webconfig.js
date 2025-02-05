export default {
	// apiUrl: "http://8.210.223.137:8080",
	apiUrl: "https://substatsbd.cess.cloud",
	historyPageSize: 10,
	sdkConfig: {
		nodeURL: [
			'wss://testnet-rpc0.cess.cloud/ws/',
			'wss://testnet-rpc1.cess.cloud/ws/',
			'wss://testnet-rpc2.cess.cloud/ws/',
			'wss://testnet-rpc3.cess.cloud/ws/',
			'ws://5.39.82.215:9944/',
			'ws://5.39.82.144:9944/'
		],
		keyringOption: { type: "sr25519", ss58Format: 11330 },
		gatewayURL: "http://deoss-pub-gateway.cess.cloud/",
		gatewayAddr: "cXhwBytXqrZLr1qM5NHJhCzEMckSTzNKw17ci2aHft6ETSQm9",
	}
};
