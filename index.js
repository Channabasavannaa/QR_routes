
const fmessage = "Well done! Here’s your next code and clue";
const glink = "https://forms.gle/CX9v4h9Zvr9gKDTw6"

const steps = {
  1: { 
    passkey: "Alpha809", 
    message: fmessage, 
    clue: "By the ground, where paths unfold, At the exit, watchful and bold. Entry granted with proof in hand, Pass with care to cross this land.", 
    nextCode: "Bravo608" 
  },
  2: { 
    passkey: "Bravo608", 
    message: fmessage, 
    clue: "Along the path where footsteps stray, Behind tall pines near the ground’s sway. With earth and bloom, I hold my grace, Find me resting in a cozy place.", 
    nextCode: "Charlie777" 
  },
  3: { 
    passkey: "Charlie777", 
    message: fmessage, 
    clue: "Waving high with colors bold, Stories of pride and honor told. Before the chief, I stand so bright, Spot me here within your sight.", 
    nextCode: "Delta502" 
  },
  4: { 
    passkey: "Delta502", 
    message: fmessage, 
    clue: "On the seventh floor where minds engage, Between classrooms, colors stage. A tale unfolds with words so clear, Welcome to learning found right here.", 
    nextCode: "Echo602" 
  },
  5: { 
    passkey: "Echo602", 
    message: fmessage, 
    clue: "Along the 7th floor corridor where wisdom flows, Before the wise one’s door it shows. With BMSCE’s mark and learning signs, A painted tale where knowledge shines.", 
    nextCode: "Foxtrot703" 
  },
  6: { 
    passkey: "Foxtrot703", 
    message: "Congrats on completing the heist!", 
    clue: "The final stop where meets the team, In a lab where sunlight gleams. At a corner where light creeps in, The organizers wait — your hunt ends within.", 
    nextCode: null 
  },

  7: { 
    passkey: "Golf208", 
    message: fmessage, 
    clue: "In a passage where friends meet, Next to the tree both tall and sweet. A place for coffee, snack, and chat, Find the spot where friends all sat.", 
    nextCode: "Hotel805" 
  },
  8: { 
    passkey: "Hotel805", 
    message: fmessage, 
    clue: "Need a copy or a printout done? Stationery too, all in one run. Near PJ block, the helpers stay, The store doors will guide your way.", 
    nextCode: "India701" 
  },
  9: { 
    passkey: "India701", 
    message: fmessage, 
    clue: "Between two halls where voices rise, A path that leads a quiet prize. Find the way where footsteps stray, To the Parlor where ladies stay.", 
    nextCode: "Juliet608" 
  },
  10: { 
    passkey: "Juliet608", 
    message: fmessage, 
    clue: "High above, where experts meet, Excellence thrives in every seat. On the seventh floor, a beacon shines, Seek the place of bright designs.", 
    nextCode: "Kilo206" 
  },
  11: { 
    passkey: "Kilo206", 
    message: fmessage, 
    clue: "A silent desk 7th floor with warmth to share, Though empty now, it’s always there. Before the trophies, proud and bright, Find this spot that guards the light.", 
    nextCode: "Lima402" 
  },
  12: { 
    passkey: "Lima402", 
    message: "Congrats on completing the heist!", 
    clue: "The final stop where meets the team, In a lab where sunlight gleams. At a corner where light creeps in, The organizers wait — your hunt ends within.", 
    nextCode: null 
  },

  13: { 
    passkey: "Mike705", 
    message: fmessage, 
    clue: "In a Zone buzzing with 99 flights, Where drones and gadgets catch the light. Find the hub of flying dreams, The tech stall bursting at the seams.", 
    nextCode: "November506" 
  },
  14: { 
    passkey: "November506", 
    message: fmessage, 
    clue: "Smile for the moment, freeze the cheer, By the block that shines year to year. A booth awaits your joyful face, Capturing fun in a tiny space.", 
    nextCode: "Oscar208" 
  },
  15: { 
    passkey: "Oscar208", 
    message: fmessage, 
    clue: "Take the lift that’s odd in count, To the basement where clues mount. Down below, the secrets hide, In shadows where the hints reside.", 
    nextCode: "Papa101" 
  },
  16: { 
    passkey: "Papa101", 
    message: fmessage, 
    clue: "At the hall’s end where footsteps slow, A box of treats in quiet glow. Press a button, snacks appear, Find this delight close and near.", 
    nextCode: "Quebecc205" 
  },
  17: { 
    passkey: "Quebecc205", 
    message: fmessage, 
    clue: "Where minds craft code to teach and learn, Next to the HOD’s cabin, Knowledge burns. Seek the door where data flows, In the place where insight grows.", 
    nextCode: "Romeo809" 
  },
  18: { 
    passkey: "Romeo809", 
    message: "Congrats on completing the heist!", 
    clue: "The final stop where meets the team, In a lab where sunlight gleams. At a corner where light creeps in, The organizers wait — your hunt ends within.", 
    nextCode: null 
  },
  19: { 
    passkey: "Ocean921", 
    message: "You’ve unlocked another secret path!", 
    clue: "In the archives where whispers stay, Among the shelves you’ll find the way. A dusty book with pages torn, Reveals the code you’ve longed to adorn.", 
    nextCode: "Sea356"
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






