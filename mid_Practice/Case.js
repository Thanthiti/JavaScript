

/**
 * 
 * @param {*} arr 
 * @param {*} mul 
 * @returns 
function simplePair(arr, mul) {
    const result = [];
    const check = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] * arr[j] === mul && arr[i] !== arr[j]) {
                check.push(arr[i], arr[j]);
            }
        }
    }
    console.log(check);
    
    for (let i = 0; i < check.length; i += 2) {
        const pair = [check[i], check[i + 1]]; 
        if (!result.some(existing => existing.includes(pair[0]) && existing.includes(pair[1]))) { 
            result.push(pair); 
        }
    }
    
    return result;
}

console.log(simplePair([1, 2, 3, 4, 5, 6], 12));
*/



function digitalClock(sec) {
    const h = Math.floor((sec / 3600) % 24);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;

    console.log(h)
    console.log(m)
    console.log(s)
    
    const formatH = String(h).padStart(2,'0');
    const formatM = m < 10 ? '0' + m : m;
    const formatS = String(s).padStart(2,'0');
    
    return `${formatH}:${formatM}:${formatS}`;
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(86900));
