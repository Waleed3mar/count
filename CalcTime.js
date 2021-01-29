export function createNew(input, tOfDate, list) {
  let date1 = new Date(document.querySelector("#evenTime").value),
    sDate = new Date();

  if (date1 < sDate) {
    alert("Please choose a valid date!");
  } else if (input.value != "" && tOfDate.value) {

    // Create Event Element
    let newTask = document.createElement("span"),
      title = document.createElement("span"),
      deleteElement = document.createElement("span"),
      deleteText = document.createTextNode("Delete"),
      dateElement = document.createElement("span");

    dateElement.className = "myDate";
    deleteElement.appendChild(deleteText);
    deleteElement.className = "delete";

    title.textContent = input.value;
    newTask.classList.add("taskCont");

    newTask.appendChild(title);

    newTask.appendChild(deleteElement);

    let x = setInterval(function () {
      let sub = new Date();
      let diffInSeconds = (date1.getTime() - sub.getTime()) / 1000;

      const eventObj = {
        EventTitle: title.textContent,
        RemainingDays: Math.floor(diffInSeconds / (60 * 60 * 24)),
        RemainingHours: Math.floor((diffInSeconds / (60 * 60)) % 24),
        RemainingMinutes: Math.floor((diffInSeconds / 60) % 60),
        RemainingSeconds: Math.floor(diffInSeconds % 60),
      };

      const {
        EventTitle,
        RemainingDays,
        RemainingHours,
        RemainingMinutes,
        RemainingSeconds,
      } = eventObj;

      dateElement.innerHTML = `
        ${RemainingDays < 10 ? `0` + RemainingDays : RemainingDays} 
        <span> Days</span> :
        ${RemainingHours < 10 ? `0` + RemainingHours : RemainingHours} 
         <span> Hours</span> :
        ${RemainingMinutes < 10 ? `0` + RemainingMinutes : RemainingMinutes} 
         <span> Minutes</span> :
        ${RemainingSeconds < 10 ? `0` + RemainingSeconds : RemainingSeconds} 
         <span> Seconds</span>. `;

      if (diffInSeconds * 1000 < 0) {
        clearInterval(x);
        dateElement.innerHTML = `
        00 
        <span> Days</span> :
        00 
         <span> Hours</span> :
        00
         <span> Minutes</span> :
        00 
         <span> Seconds</span>. `;
        alert(`Event "${EventTitle}" Start!`);
      }
    }, 1000);

    newTask.appendChild(dateElement);

    const tasks = document.querySelectorAll(".tasksList .taskCont");
    let tasksName = [];

    [...tasks].forEach((item) => {
      tasksName.push(item.childNodes[0].textContent);
    });

    if (!tasksName.includes(input.value)) {
      list.appendChild(newTask);

      input.value = "";
      tOfDate.value = "";
    } else {
      alert(
        `Event "${title.textContent}" already exist`
      );
    }
  } else {
    alert("Title or Date is missing!");
  }
}
