export default function(){
	let value = " ";
	const addMark = function(player){
		if (value == " ") {
			value = player.mark;
		} else {
			console.log("the place is taken")
		}
	}

	const getValue= () => value;

	return {addMark, getValue}
}

