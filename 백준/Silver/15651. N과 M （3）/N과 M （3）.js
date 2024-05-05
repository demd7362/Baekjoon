const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
    .toString()
    .trim()
// .split("\n")
// .map(x => x.trim())


function solution(nm) {
    const [n, m] = nm.split(' ').map(Number);
    const visited = new Array(n).fill(false);
    const sequence = new Array(m).fill(0);
    let answer = '';
    const dfs = (depth) => {
        if (depth === m) {
            answer += `${sequence.join(' ')}\n`;
            return;
        }

        for (let i = 1; i <= n; i++) {
            sequence[depth] = i;
            visited[i] = true;
            dfs(depth + 1);
            visited[i] = false;
        }
    }
    dfs(0);
    console.log(answer);
}


solution(input);
