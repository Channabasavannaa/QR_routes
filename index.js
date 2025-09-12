const fmessage = "Well done! Here’s your next code and clue";
const steps = {
  1: { passkey: "apple123", message: fmessage, clue: "Where u find everyone in the break" , nextCode: "banana456" },
  2: { passkey: "banana456", message: fmessage, clue:"where the nations pride can be seen" , nextCode: "cherry789" },
  3: { passkey: "cherry789", message: fmessage, clue:" where every thing started" , nextCode: "tomato456" },
  4: { passkey: "tomato456", message: "congrats on completing the heist", clue:" no more clues" , nextCode: null }
};


const urlParams = new URLSearchParams(window.location.search);
const step = parseInt(urlParams.get("step")||2); ;

function verifyCode() {
  const enteredCode = document.getElementById("userCode").value;
  const currentStep = steps[step];

  if (enteredCode === currentStep.passkey) {
    document.getElementById("message").innerText = currentStep.message;
    document.getElementById("clue").innerText = " 🕵CLUE --> " + currentStep.clue;
    if (currentStep.nextCode) {
      document.getElementById("next").innerText = "➡️ Next Passkey --> " + currentStep.nextCode;
    }
  } else {
    document.getElementById("message").innerText = "❌ Wrong code, try again!";
    document.getElementById("clue").innerText = "";
    document.getElementById("next").innerText = "";
  }
