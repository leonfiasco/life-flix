export default function makeId(length) {
	let result = '';
	let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
	let charLength = char.length;
	for (let i = 0; i < length; i++) {
		result += char.charAt(Math.floor(Math.random() * charLength));
	}
	return result;
}
