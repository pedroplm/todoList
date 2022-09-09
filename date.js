exports.getDate = getDate;

function getDate(){
let today = new Date();
let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday"];
let day = days[today.getDay()];
return day;
}

exports.getDay = getDay;

function getDay(){
  let today = new Date();
  let options = {
    weekday: "long"
  };
  let day = today.toLocaleDateString("en-US", options);
  return day;
}
