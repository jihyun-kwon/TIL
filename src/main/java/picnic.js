const countPairings = (n, taken, areFriends) => {
    let firstFree = -1;
    for (let i = 0; i < n; i++) {
        if (!taken[i]) {
            firstFree = i;
            break;
        }
    }

    if (firstFree == -1)
        return 1;

    let ret = 0;
    for (let pairWith = firstFree + 1; pairWith < n; pairWith++) {
        if (!taken[pairWith] && areFriends[firstFree][pairWith]) {
            taken[firstFree] = taken[pairWith] = true;
            ret += countPairings(n, taken, areFriends);
            taken[firstFree] = taken[pairWith] = false;
        }
    }
    return ret;
}



const input = ["3", "2 1", "0 1", "4 6", "0 1 1 2 2 3 3 0 0 2 1 3", "6 10", "0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5"];

for (let i = 1; i < input.length -1; i += 2) {
    let n = +input[i].split(" ")[0];
    let couples = input[i+1].split(" ");
    let taken = [];
    let areFriends = [];

    for (let j = 0; j < n; j++) {
        areFriends[j] = [];
    }

    for (let j = 0; j < couples.length; j += 2) {
        let x = +couples[j];
        let y = +couples[j+1];
        areFriends[x][y] = true;
    }
    console.log(countPairings(n, taken, areFriends));
}