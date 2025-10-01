function updateTime() {
  // Lapland, Finland (use Europe/Mariehamn for timezone)

  let laplandElement = document.querySelector("#lapland");
  let laplandDateElement = laplandElement.querySelector(".date");
  let laplandTimeElement = laplandElement.querySelector(".time");
  let laplandTime = moment().tz("Europe/Mariehamn");

  laplandDateElement.innerHTML = laplandTime.format("MMMM Do YYYY");
  laplandTimeElement.innerHTML = laplandTime.format(
    "h:mm:ss [<small>]A[</small]"
  );

  // Tokyo, Japan (use Asia/Tokyo for timezone)

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small]");
}

updateTime();
setInterval(updateTime, 1000);
