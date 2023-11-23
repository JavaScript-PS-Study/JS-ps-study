/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/150368
 * @date 23-11-22
 */

function solution(users, emoticons) {
	var answer = [];
	const discounts = [10, 20, 30, 40];
	dfs(emoticons.length, []);
	answer.sort((a, b) => b.emoPlus - a.emoPlus || b.sales - a.sales);
	return [answer[0].emoPlus, answer[0].sales];

	function dfs(depth, discountPer) {
		if (discountPer.length >= emoticons.length) {
			const applyDiscounts = emoticons.map((cur, idx) => cur * (1 - discountPer[idx] * 0.01));

			answer.push(
				users.reduce(
					(acc, [userPercent, budget]) => {
						let userSales = 0;

						for (let idx = 0; idx < emoticons.length; idx++) {
							const applyDiscount = applyDiscounts[idx];

							if (userPercent <= discountPer[idx]) {
								budget -= applyDiscount;

								if (budget <= 0) {
									acc.emoPlus++;
									userSales = 0;
									break;
								} else {
									userSales += applyDiscount;
								}
							}
						}
						acc.sales += userSales;
						return acc;
					},
					{ emoPlus: 0, sales: 0 },
				),
			);

			return;
		}

		for (let i = 0; i < 4; i++) {
			dfs(depth - 1, [...discountPer, discounts[i]]);
		}
	}
}
