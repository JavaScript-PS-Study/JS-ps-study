/*
* 등산코스 정하기

* 중 쉼터 혹은 산봉우리를 방문할 때마다 휴식
* 휴식 없이 이동해야 하는 시간 중 가장 긴 시간을 해당 등산코스의 intensity
* intensity가 최소

* 노드를 탐색하며 intensity 기록 - w가 기록된 intensity보다 크다면 업데이트

* 이때 탐색 종료 조건
* - 방문한 노드가 다른 출입구인 경우.
* - 산봉우리 한곳을 이미 방문 했는데 또 방문 한 경우.
* - 산봉우리를 방문했다면, 왔던 순서대로 돌아가야함 -> 돌아가는 것 까지 카운트 x
* - 산봉우리 방문 전까지는 이전 노드로 못돌아감

* 탐색이 종료 되면 해당 노드와 intensity 값을 전역 배열에 push?
* 입구가 여러개인 것은 어떻게 카운트?

* find paths : 가능한 path의 경우의 수를 배열로 출력하는 함수
* 1. path 배열 에서 path[j][0] (출발 노드)가 gates[0] 인 요소를
* [path[j][1](다음 탐색 노드), (path[n][2]) intensity, gate] 을 q에 초기값으로 할당한다.
* 2. n-1 만큼의 배열 visited을 flase로 초기화한다.
* 3. visited[gates[0]] = true 할당한다.
* 4. q의 길이가 0이상일 경우에 반복을 진행한다.
*     - q에서 다음 탐색 노드를 pop한다. -> [nextNode, intensity , thisPathGate]
*     - visited[nextNode] 가 false일 경우만 아래 탐색을 진행한다.
*     - path배열에서 path[j][0] === nextNode 인 요소를 찾는다
*     - j가 gate 배열의 요소이지만 thisPathGate !== gate.some(...) 과 다를 경우 -> continue -
*     - j가 sommits의 요소일 경우 -> return [intensity , gate] --> 여기까지 진행
*     - j가 위의 제약조건을 충족하는 경우
*         - path[j][3](이번 노드까지 가는데 걸린 시간) 과 intensity 중 더 큰 것을 intensity에 할당
*     - visited[nextNode] = true
*         - p.push([nextnode: path[i][1], intensity, thisPathGate])
*/

function solution(n, paths, gates, summits) {
	var answer = [];

	getValidatePath(gates[0], 0, gates[0]);
	return answer;

	function getValidatePath(nextNode, intensity, pathGate) {
		const q = [[nextNode, intensity, pathGate]]; // [다음 노드, intensity, 해당 패스의 초기 게이트 ]
		const visited = Array.from({ length: n - 1 }, () => false);

		while (q.length) {
			const [curNode, intensity, pathGate] = q.pop();
			if (visited[curNode]) continue;

			const ableToArriveNodes = paths.reduce((acc, [node1, node2]) => {
				const isCurentPathNode = node1 === curNode || node2 === curNode;
				const nextNode = node1 === curNode ? node2 : node1;

				if (isCurentPathNode && !visited[nextNode] && nextNode !== pathGate) {
					acc.push(nextNode);
				}

				return acc;
			}, []);

			// 다음 방문 할 수 있는 노드들만 줍줍
			console.log(ableToArriveNodes);
		}
	}
}
