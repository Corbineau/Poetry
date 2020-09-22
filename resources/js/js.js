//this is where I am trying to use firebase because localstorage is fail.
var db = firebase.firestore();

// let lineArray = []; // but if I am using firestore, probably can't store arrays. ;_;
// let poemLines = [];

var linesRef = db.collection("lines").doc("line");git 

class Poem {
    constructor(lineNum) {
        this.name = "";
        this.lineNum = lineNum;
        this.myLines = [];
        this.author = "";

        this.saveName = function(name) {
            this.name = name;
        }

        this.saveAuthor = function(author) {
            this.author = author;
        }

        this.genPoem = function() {
            for (let i = 1; i <= this.lineNum; i++) {
                let oneLine = poemLines[Math.floor(Math.random() * poemLines.length)];
                let prettyLine = `${oneLine}<br />`
                thisPoem.myLines.push(prettyLine);
                // console.log(oneLine);
            }
        }
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
    let thisPoem = new Poem($("#lineNumber").val().trim());
    for (let i = 1; i <= thisPoem.lineNum; i++) {
        let oneLine = poemLines[Math.floor(Math.random() * poemLines.length)];
        let prettyLine = `${oneLine}<br />`
        thisPoem.myLines.push(prettyLine);
        // console.log(oneLine);
    }
    poemDiv.text(thisPoem.myLines.join(" "));
    $("#lineNumber").val("");
}

const savePoem = (poemName) => {
db.collection("poems").doc(`${poemName}`).set({
    name: poemName,
    lines: myLines,
    author: author
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

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