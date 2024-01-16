// Message of the day webv dev 1 assignment

// Menu Button
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("rq").addEventListener("click", rqbtnClicked);

function rqbtnClicked() {
  let randNum = Math.random();
  console.log(randNum);

  if ((randNum >= 0.4, randNum < 0.6)) {
    document.getElementById(
      "output2"
    ).innerHTML = `<p class="response">"theres a pain that hurts you, and a pain the changes you"</p>`;
  } else if (randNum >= 0.8) {
    document.getElementById(
      "output2"
    ).innerHTML = `<p class="response">"you survived 100% of youre worst days, keep going"</p>`;
  } else if ((randNum >= 0.6, randNum < 0.8)) {
    document.getElementById(
      "output2"
    ).innerHTML = `<p class="response">"youre time will come"</p>`;
  } else if ((randNum >= 0.2, randNum < 0.4)) {
    document.getElementById(
      "output2"
    ).innerHTML = `<p class="response">"its worth it"</p>`;
  } else {
    document.getElementById(
      "output2"
    ).innerHTML = `<p class="response">"they made fo the streets my guy"</p>`;
  }
}

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "winter-in") {
    winter();
  } else if (selection === "summer-in") {
    summer();
  } else if (selection === "fall-in") {
    fall();
  } else if (selection === "spring-in") {
    spring();
  }

  let name = document.getElementById("input").value;
  let quote = document.getElementById("input2").value;
  let focus = document.getElementById("input3").value;

  let nameout = ` Hello Mr.${name}`;

  document.getElementById("output").innerHTML = nameout;

  let quoteout = `${quote}`;

  document.getElementById("output2").innerHTML = quoteout;

  let focusout = `${focus}`;

  document.getElementById("output3").innerHTML = focusout;
}

function winter() {
  document.getElementById("1bo").innerHTML = `
  <style>
  body {
    background-image: url('img/winter.png');
  }
  </style>`;
}

function summer() {
  document.getElementById("1bo").innerHTML = `
  <style>
  body {
    background-image: url('img/summer.jpg');
  }
  </style>`;
}

function fall() {
  document.getElementById("1bo").innerHTML = `
  <style>
  body {
    background-image: url('img/fall.webp');
  }
  </style>`;
}

function spring() {
  document.getElementById("1bo").innerHTML = `
  <style>
  body {
    background-image: url('img/spring.jpg.jpg');
  }
  </style>`;
}
