let outputscr = document.getElementById("result-scr");

function display(num) {
    outputscr.value += num;
}

function result() {
    try {
        outputscr.value = eval(outputscr.value);
    } catch (error) {
        if (error instanceof SyntaxError) {
            alert("INVALID INPUT");
            outputscr.value = ""; // Clear the input field on an error
        }
    }
}

function clearinput() {
    outputscr.value = "";
}

function del() {
    outputscr.value = outputscr.value.slice(0, -1);
}
