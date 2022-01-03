let input = document.getElementById("input");

let p = document.createElement("p");
document.body.append(p);

document.getElementById("button").addEventListener("click", () => { 
    let string = input.value;
    let replaceVowels = string.replace(/[aeiou]/ig, "*"); //global, case-insensitive replacement
    // let replaceVowels = string.replace(/a|A|e|E|i|I|o|I|u|U|y|Y|å|Å|ä|Ä|ö|Ö/g, "*"); //global replacement

    p.innerText = replaceVowels;
});