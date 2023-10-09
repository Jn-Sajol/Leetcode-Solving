var loudAndRich = function(richer, quiet) {
	const result = [];
	const richMap = richer.reduce((map, [bester, own]) => {
		const richerSet = map.get(own) ?? new Set();

		richerSet.add(bester);
		return map.set(own, richerSet);
	}, new Map());

	const findQuiet = (person) => {
		if (result[person] !== void 0) return result[person];
		const richerSet = richMap.get(person) ?? [];

		result[person] = person;
		richerSet.forEach(target => {
			const targetQuiet = quiet[findQuiet(target)];
			if (targetQuiet < quiet[result[person]])
				result[person] = result[target];
		});
		return result[person];
	};

	quiet.forEach((_, index) => findQuiet(index));
	return result;
};
loudAndRich([data])