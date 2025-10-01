function updateTime() {
  // South Pole, Antarctica (use Antarctica/South_Pole for timezone)

  let southpoleElement = document.querySelector("#southpole");
  if (southpoleElement) {
    let southpoleDateElement = southpoleElement.querySelector(".date");
    let southpoleTimeElement = southpoleElement.querySelector(".time");
    let southpoleTime = moment().tz("Antarctica/South_Pole");

    southpoleDateElement.innerHTML = southpoleTime.format("MMMM Do YYYY");
    southpoleTimeElement.innerHTML = southpoleTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }

  // Tokyo, Japan (use Asia/Tokyo for timezone)

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
}

function updateCity(event) {
  event.preventDefault();

  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = citiesElement = `
  <div class="city">
          <div>
            <h2>${cityTimeZone}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
            <small>
            ${cityTime.format("A")}
            </small>
          </div>
        </div>
        <a href="/">Return to homepage</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
