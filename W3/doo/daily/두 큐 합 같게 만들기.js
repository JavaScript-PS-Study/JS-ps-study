class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  isEmpty() {
    return this.front == null && this.back == null;
  }
  push(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else this.back.next = newNode;
    this.back = newNode;
    this.size += 1;
  }
  pop() {
    if (this.isEmpty()) return;
    const value = this.front.data;
    this.front = this.front.next;
    if (!this.front) this.back = null;
    this.size -= 1;
    return value;
  }
}

function solution(queue1, queue2) {
  const que1 = new Queue();
  queue1.forEach((element) => que1.push(element));
  const que2 = new Queue();
  queue2.forEach((element) => que2.push(element));
  let answer = 0;

  // 2개 큐의 모든 원소들의 합 allSum과 목표치인 allSum의 절반값 sum 구하기
  let q1sum = queue1.reduce((acc, curr) => (acc += curr), 0);
  let q2sum = queue2.reduce((acc, curr) => (acc += curr), 0);
  const allSum = q1sum + q2sum;
  const sum = allSum / 2;

  while (answer <= 3 * queue1.length) {
    let popNum;
    if (q1sum > sum) {
      popNum = que1.pop();
      q1sum -= popNum;
      que2.push(popNum);
      answer += 1;
    }
    if (q1sum < sum) {
      popNum = que2.pop();
      q1sum += popNum;
      que1.push(popNum);
      answer += 1;
    }
    if (q1sum === sum) {
      return answer;
    }
  }
  return -1; // 각 큐의 원소 합을 같게 하는 경우가 없다면 -1 반환
}
