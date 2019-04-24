//this is where I am trying to use firebase because localstorage is fail.
var db = firebase.firestore();
// sets up two empty arrays for holding stuff that goes to localstorage, and stuff that comes back.
let lineArray = []; // but if I am using firestore, probably can't store arrays. ;_;
let poemLines = [];

class Poem {
    constructor(lineNum) {
        this.name = "";
        this.lineNum = lineNum;
        this.myLines = [];
    }
}


storeLine = () => {
    let line = $("#lineAdd").val();
    console.log(`The line: ${line}`);
    lineArray.push(line);
    console.log(`This is the first array: ${lineArray}`);
    // localStorage.clear();
    localStorage.setItem("lines", JSON.stringify(lineArray));
    $("#lineAdd").val("");
}


$("#lineBtn").on("click", (event) => {
    event.preventDefault();
    storeLine();
})

//set changable html element

let poemDiv = $("#poem");

// Generate the poem

const genPoem = () => {
    let thisPoem = new Poem($("#lineNumber").val);
    for (let i = 1; i <= thisPoem.lineNum; i++) {
        let oneLine = poemLines[Math.floor(Math.random() * poemLines.length)];
        let prettyLine = `${oneLine}<br />`
        thisPoem.myLines.push(prettyLine);
        // console.log(oneLine);
    }
    poemDiv.text(thisPoem.myLines.join(" "));
    $("#lineNumber").val("");
}

$("#genPoem").on("click", (event) => {
    event.preventDefault();
    genPoem();
})

let storedLines = localStorage.getItem(JSON.parse("lines"));
    console.log(storedLines);
if (storedLines) {
    poemLines = JSON.parse(storedLines);
};