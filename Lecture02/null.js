function getVowels(str) {
    const m = str.match(/[apple,qwe]/gi);
    if (m === null) { 
        return 0 ;
    }

    return m.length;
}

console.log(getVowels("apple ap qwe asdw axcz asdwe"));
