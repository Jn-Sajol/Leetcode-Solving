var loudAndRich = function(richer, quiet) {
	const result = [];
	const richMap = richer.reduce((map, [bester, own]) => {
		const richerSet = map.get(own) ?? new Set();

		richerSet.add(bester);
		return map.set(own, richerSet);
	}, 

	quiet.forEach((_, index) => findQuiet(index));
	return result;
};