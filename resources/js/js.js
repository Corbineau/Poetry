        // sets up an empty array and an empty variable
        var poemLines = [];
        var lines;

        function storeLine() {
            var line = document.getElementById("lineAdd").value;
            poemLines.push(line);
            console.log(poemLines);
            document.getElementById("lineAdd").value = " ";
        }

        //set changable html element

        var myPoem = document.getElementById("poem");

        // Generate the poem

        function genPoem() {
            //rewrite this later as an object constructor?
            var thisPoem = [];
            var lineNum = document.getElementById("lineNumber").value;
            for (var i = 1; i <= lineNum; i++) {
                var oneLine = poemLines[Math.floor(Math.random() * poemLines.length)];
                var prettyLine = `${oneLine}<br />`
                thisPoem.push(prettyLine)
                console.log(oneLine);
            }
            myPoem.innerHTML = thisPoem.join(" ");
            document.getElementById("lineNumber").value = " ";
        }  