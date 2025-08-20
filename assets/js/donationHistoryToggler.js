// getting donation button element
let donationBtnElement = findElementByID("donationBtn");
// getting history button element
let historyBtnElement = findElementByID("historyBtn");

//by clicking donation button
if (donationBtnElement) {
  donationBtnElement.addEventListener("click", function () {
    donationBtnElement.classList.add("bg-green-400");
    historyBtnElement.classList.remove("bg-green-400");

    donationBtnElement.classList.remove("bg-gray-100", "opacity-70");
    historyBtnElement.classList.add("bg-gray-100", "opacity-70");

    let donationTabElement = findElementByID("donationTab");
    donationTabElement.classList.remove("hidden");
    let historyTabElement = findElementByID("historyTab");
    historyTabElement.classList.add("hidden");
  });
}

//by clicking history button
if (historyBtnElement) {
  historyBtnElement.addEventListener("click", function () {
    donationBtnElement.classList.remove("bg-green-400");
    historyBtnElement.classList.add("bg-green-400");

    donationBtnElement.classList.add("bg-gray-100", "opacity-70");
    historyBtnElement.classList.remove("bg-gray-100", "opacity-70");

    let donationTabElement = findElementByID("donationTab");
    donationTabElement.classList.add("hidden");
    let historyTabElement = findElementByID("historyTab");
    historyTabElement.classList.remove("hidden");
  });
}
