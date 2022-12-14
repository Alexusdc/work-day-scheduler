var eventCounter = 0;
var formEl = document.querySelector("#event-form");

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

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
    };

    // reset form fields for next event to be entered
  document.querySelector("input[name='event-name']").value = "";
  document.querySelector("select[name='event-type']").selectedIndex = 0;
};

setInterval (function() {
    const oElem = document.getElementsByClassName("event-form");
    for (i = 0; i < oElem.length; i++) {
        if (moment().format("H") == oElem[i].id) {
            oElem[i].classList.add ("present");

        }
        else if (moment().format("H") > oElem[i].id) {
            oElem[i].classList.add ("past")
        }
        else {
            oElem[i].classList.add ("future")
        }
    }
},1000);

console.log(moment().format("H"))

var saveEvent = function() {
    localStorage.setItem("events", JSON.stringify(events));
};