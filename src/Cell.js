export default function(){
	let value = " ";
	const addMark = function (player) {
			value = player.mark;
	}

	const getValue= () => value;

	return {addMark, getValue}
}

