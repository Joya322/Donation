// find all donate now buttons
const donateNowBtns = document.querySelectorAll(".donateBtn");

// cache a specific donateNowBtn which will be clicked
donateNowBtns.forEach((btn) => {
  // adding eventListener to each button
  btn.addEventListener("click", function () {
    // getting total balance amount of donation
    let totalBalanceElement = findElementByID("balanceAmount");
    let totalBalance = totalBalanceElement.innerText;

    // cache the cardContents div/parent of the clicked button
    const parentDiv = btn.parentNode;

    // getting the input field and value
    const inputFieldText = parentDiv.querySelector(".donationInput");
    const inputFieldValue = getInputFieldValue(inputFieldText);

    // getting previous donationBalance
    const donationBalanceElement = parentDiv.querySelector(".donationBalance");
    const donationBalance = donationBalanceElement.innerText;

    // convert string values to numerical values
    if (isNaN(parseFloat(inputFieldValue))) {
      alert("Invalid Amount");
      return;
    }

    const inputAmount = parseFloat(inputFieldValue);
    let donationBalanceAmount = parseFloat(donationBalance);
    let totalBalanceAmount = parseFloat(totalBalance);

    // set new value
    if (inputAmount < 0) {
      alert("Invalid Input");
      return;
    }
    totalBalanceAmount -= inputAmount;
    donationBalanceAmount += inputAmount;

    // set new value to the elements
    totalBalanceElement.innerText = totalBalanceAmount;

    donationBalanceElement.innerText = donationBalanceAmount;

    // ***setting donation history***
    // create div element
    let div = document.createElement("div");
    div.classList.add(
      "historyCard",
      "border-2",
      "rounded-lg",
      "flex",
      "flex-col",
      "justify-center",
      "gap-5",
      "px-8",
      "py-3"
    );

    // create title h3
    let h3 = document.createElement("h3");
    h3.classList.add(
      "donationHistoryTitle",
      "font-semibold",
      "text-xl",
      "text-justify"
    );

    // set innerText of h3
    let reason = btn.getAttribute("data-target");
    h3.innerText = `${inputAmount} Taka is Donated for famine-2024 at ${reason}, Bangladesh`;

    // create time history tag p
    let p = document.createElement("p");
    p.classList.add("font-extralight", "opacity-70", "text-justify");

    // get real time date and time
    const now = new Date();

    // set innerText of p
    p.innerText = `Date : ${now}`;

    // getting parent div to history adding
    let historyTab = document.getElementById("historyTab");
    div.append(h3, p);
    historyTab.appendChild(div);
    console.log(historyTab);
  });
});
