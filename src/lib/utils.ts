

export function formatDate(d: Date|string) {
	let date: Date;
	if(typeof d == "string") {
		date = new Date(d);
	} else if(d === null || d === undefined) {
		return '';
	} else {
		date = d;
	}

	return date.toLocaleDateString([], { 
		year: "numeric",
		month: "long",
		day: "numeric"
	 });
}