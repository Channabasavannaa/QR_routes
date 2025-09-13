
const fmessage = "Well done! Here’s your next code and clue";

const steps = {
  1: { 
    passkey: "apple123", 
    message: fmessage, 
    clue: "By the ground, near the exit gate where entry is checked", 
    nextCode: "banana456" 
  },
  2: { 
    passkey: "banana456", 
    message: fmessage, 
    clue: "Behind tall pines along the path, resting near earth and flowers", 
    nextCode: "cherry789" 
  },
  3: { 
    passkey: "cherry789", 
    message: fmessage, 
    clue: "Where the flag waves with pride before the chief’s spot", 
    nextCode: "tomato456" 
  },
  4: { 
    passkey: "tomato456", 
    message: fmessage, 
    clue: "On the 7th floor, between classrooms where a colorful mural tells stories", 
    nextCode: "grape321" 
  },
  5: { 
    passkey: "grape321", 
    message: fmessage, 
    clue: "Along the corridor at 7th floor before the wise professor’s door, with BMSCE’s painted mark", 
    nextCode: "melon654" 
  },
  6: { 
    passkey: "melon654", 
    message: "Congrats on completing the heist!", 
    clue: "No more clues — the hunt ends in the lab with the organizers", 
    nextCode: null 
  },

  7: { 
    passkey: "peach111", 
    message: fmessage, 
    clue: "Where friends gather for coffee, snacks, and chat near the tall tree", 
    nextCode: "pear222" 
  },
  8: { 
    passkey: "pear222", 
    message: fmessage, 
    clue: "Near PJ block, the store for copies, prints, and stationery", 
    nextCode: "plum333" 
  },
  9: { 
    passkey: "plum333", 
    message: fmessage, 
    clue: "Between two halls lies the path to the Ladies’ Parlor", 
    nextCode: "kiwi444" 
  },
  10: { 
    passkey: "kiwi444", 
    message: fmessage, 
    clue: "On the 7th floor, where experts meet and bright designs shine", 
    nextCode: "mango555" 
  },
  11: { 
    passkey: "mango555", 
    message: fmessage, 
    clue: "Before the trophies, at the silent desk that guards the light", 
    nextCode: "berry666" 
  },
  12: { 
    passkey: "berry666", 
    message: "Congrats on completing the heist!", 
    clue: "No more clues — the hunt ends in the lab with the organizers", 
    nextCode: null 
  },

  13: { 
    passkey: "lemon777", 
    message: fmessage, 
    clue: "In the Zone of flight — drones and gadgets at the buzzing tech stall", 
    nextCode: "lime888" 
  },
  14: { 
    passkey: "lime888", 
    message: fmessage, 
    clue: "By the shining block, at the booth that captures smiles and photos", 
    nextCode: "fig999" 
  },
  15: { 
    passkey: "fig999", 
    message: fmessage, 
    clue: "Take the odd lift to the basement where secrets hide in the shadows", 
    nextCode: "guava000" 
  },
  16: { 
    passkey: "guava000", 
    message: fmessage, 
    clue: "At the hall’s end, the glowing box that serves treats with a button", 
    nextCode: "papaya123" 
  },
  17: { 
    passkey: "papaya123", 
    message: fmessage, 
    clue: "Next to the HOD’s cabin, where coding minds and knowledge grow", 
    nextCode: "dates456" 
  },
  18: { 
    passkey: "dates456", 
    message: "Congrats on completing the heist!", 
    clue: "No more clues — the hunt ends in the lab with the organizers", 
    nextCode: null 
  }
};




const urlParams = new URLSearchParams(window.location.search);
const step = parseInt(urlParams.get("step")); ;

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

}

