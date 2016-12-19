function rint(min, max) {
	return Math.random() * (max - min) + min;
};

module.exports = function(data){
	let items = [];
	let weight = [];

	for(let item in data){
		items.push(item)
		weight.push(data[item])
	}

	let totalWeight = weight.reduce((total, wgh) => total+wgh,0);

	let rNum = rint(0, totalWeight);
	let weightSum = 0;

	for(let i=0;i<items.length;i++){
		weightSum += weight[i];
		weightSum = +weightSum.toFixed(2)
	
		if(rNum <= weightSum){
			return items[i]
		}
	}
}