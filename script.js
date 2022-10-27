var eventCounter = 0;

var formEl = document.querySelector("#event-form");

// create array to hold tasks for saving
var tasks = [];

var eventFormHandler = function (event) {
    event.preventDefault();
    var eventNameInput = document.querySelector("input[name='event-name").value;
    var eventTypeInput = document.querySelector("select[name='event-type").value;

    // check if inputs are empty (validate)
    if (!eventNameInput || !eventTypeInput) {
        alert("You need to enter in the event!");
        return false;
    }
}