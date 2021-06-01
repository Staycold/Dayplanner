
    var dateAndTime = null
    var date = null;

var getDate = function () {
    date = moment()
    dateAndTime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    dateAndTime = $('#currentDay')
    getDate();
    setInterval(getDate,1000);
});



function hourColor() {
    var thisHour = moment().hours();
    var hourslot = document.querySelectorAll(".hourSlot")

    hourslot.forEach((element) =>{

        var taskHour = parseInt(element.getAttribute("id").split("")[1]);

        if (taskHour === thisHour) {
            element.classList.add("present")
        }
        else if (taskHour < thisHour) {
            element.classList.remove("present")
            element.classList.add("past")
        }
        else {
            element.classList.remove("present")
            element.classList.remove("past")
            element.classList.add("future")
        }
    });
}
hourColor();

// this is the fuction that saves what was written
function loadTask() {

    var textareas=document.querySelectorAll(".hourSlot")
    textareas.forEach((element) => {
    
        var textarea=element.children[1]
        var hourslot = element.id
        
        var task = localStorage.getItem(hourslot);

        textarea.textContent=task
        
    });
}

loadTask();


var button = document.querySelectorAll(".button");
button.forEach((element) =>
element.addEventListener("click", function () {

    var task = element.previousElementSibling.value;
    var hour = element.parentElement.getAttribute("id");

    console.log(hour)
    console.log(task)

    localStorage.setItem(hour, task);

}));

