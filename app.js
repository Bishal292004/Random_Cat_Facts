let body = document.querySelector("body");
let startBtn = document.querySelector("#start");
let welcomeDiv = document.querySelector(".container");

startBtn.addEventListener("click", startFacts);

//function to run when we click on start button, and start fetching random cat facts.
function startFacts() {
  // console.log("cats");
  body.removeChild(welcomeDiv);
  getFacts();
}

//this function clears the body and dynamically create new elements and then display the random facts there.
//the function is asyn because api calls may take time to get the response.
async function getFacts() {
  let containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://i.pinimg.com/1200x/a3/8f/8d/a38f8dc56c5076a215330d6cd294eb07.jpg",
  );
  img.setAttribute("alt", "Image above which the Fact is to be displayed");
  img.setAttribute("id", "welcomeCat");

  let fact = document.createElement("h3");
  fact.setAttribute("id", "factText");
  fact.innerText = await factSearch();//without await the facts are not fetched sussecfully, and no facts are displayed.

  let nextBtn = document.createElement("button");
  nextBtn.classList.add("nextFactBtn");
  nextBtn.textContent = "Next Fact";

  nextBtn.addEventListener("click", async function () {
    let newFact = await factSearch();
    fact.innerText = newFact;
  });

  //all the dynamicly created elements are added to the body.
  containerDiv.appendChild(img);
  containerDiv.appendChild(fact);
  containerDiv.appendChild(nextBtn);

  body.appendChild(containerDiv);
}
//function to fetch facts from api
async function factSearch() {
  try {
    let response = await fetch("https://catfact.ninja/fact");
    let data = await response.json();

    let fact = data.fact;
    console.log(fact);
    return fact;
  } catch (error) {
    console.log(error);
  }
}
