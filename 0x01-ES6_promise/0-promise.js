export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const success = Math.random() > 0.5;
			if (success) {
				resolve("API call successful!");
			} else {
				reject("API call failed.");
			}
		}, 2000);
	});
}
