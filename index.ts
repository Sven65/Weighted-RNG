const rint = (min: number, max: number): number => Math.random() * (max - min) + min;

/**
 * Selects a random item from an object with weights
 * @param data The object to choose from, mapped by key: weight
 * @returns A selected item
 */
const selectRandomItem = <T extends Record<string, number>>(data: T): keyof T => {
	const items: (keyof T)[] = [];
	const weight: number[] = [];
  
	for (const item in data) {
	  items.push(item as keyof T);
	  weight.push(data[item]);
	}
  
	const totalWeight: number = weight.reduce((total, wgh) => total + wgh, 0);
  
	const rNum: number = rint(0, totalWeight);
	let weightSum: number = 0;
  
	for (let i = 0; i < items.length; i++) {
	  weightSum += weight[i];
	  weightSum = +weightSum.toFixed(2);
  
	  if (rNum <= weightSum) {
		return items[i];
	  }
	}
  
	throw new Error('No item was selected.'); // Add a fallback return statement in case nothing is selected
  };
  
  export default selectRandomItem;