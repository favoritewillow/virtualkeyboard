const keyboardNote = {
  itemSymbol: { itemApproximately: "~", itemCommaReverse: "`" },
  itemOne: { itemExclamation: "!", item1: "1" },
  itemTwo: { temAt: "@", item2: "2" },
  itemThree: { itemGrill: "#", item3: "3" },
  itemFour: { itemDollar: "$", item4: "4" },
  itemFive: { itemInterest: "%", item5: "5" },
  itemSix: { itemColon: ":", item6: "6" },
  itemSeven: { itemQuestion: "?", item7: "7" },
  itemEight: { itemStar: "?", item8: "8" },
  itemNine: { itemBracketCircleLeft: "(", item9: "9" },
  itemZero: { itemBracketCircleRight: ")", item0: "0" },
  itemMinuses: { itemMinuseDown: "_", itemMinuse: "-" },
  itemPlusEquals: { itemPlus: "+", itemEquals: "=" },
  itemBackspace: "Backspace",
  itemTab: "Tab",
  itemQ: "Q",
  itemW: "W",
  itemE: "E",
  itemR: "R",
  itemT: "T",
  itemY: "Y",
  itemU: "U",
  itemI: "I",
  itemO: "O",
  itemP: "P",
  itemBracketLeft: "[",
  itemBracketRight: "]",
  itemReverseSlash: "\\",
  itemDel: "DEL",
  itemCapsLock: "Caps Lock",
  itemA: "A",
  itemS: "S",
  itemD: "D",
  itemF: "F",
  itemG: "G",
  itemH: "H",
  itemJ: "J",
  itemK: "K",
  itemL: "L",
  itemSemicolon: ";",
  itemCommaTop: "'",
  itemEnter: "ENTER",
  itemShift: "Shift",
  itemReverseSlashleft: "\\",
  itemZ: "Z",
  itemX: "X",
  itemC: "C",
  itemV: "V",
  itemB: "B",
  itemN: "N",
  itemM: "M",
  itemComma: ",",
  itemDot: ".",
  itemSlash: "/",
  itemArrowUp: " ",
  itemShiftSmall: "Shift",
  itemCtrlLeft: "Ctrl",
  itemWin: "Win",
  itemAltleft: "Alt",
  itemSpace: " ",
  itemAltRight: "Alt",
  itemCtrlRight: "Ctrl",
  itemArrowLeft: " ",
  itemArrowDown: " ",
  itemArrowRight: " ",
};

const CssClasses = {
  WRAPPER: "keyboard__wrapper",
  KEYBOARD: "keyboard__contaner",
  CONTENT: "keyboard__content",
  INPUT: "keyboard__text",
  SYMBOLS: "keyboard__content symbols",
  CONTROL_KEY: "control-key",
  TOP_LEFT_SYMBOL: "top-left",
  CENTER_SYMBOL: "centered",
  BACKSPACE: "backspace",
  TAB: "tab",
  CAPS_LOCK: "caps-lock",
  DEL: "del",
  ENTER: "enter",
  SHIFT: "shift",
  CTRL: "ctrl",
  SPACE: "space",
};
const wrapper = document.createElement("div");
wrapper.className = CssClasses.WRAPPER;
document.body.append(wrapper);
const inputText = document.createElement("textarea");
inputText.className = CssClasses.INPUT;
inputText.type = "text";
inputText.placeholder = "EN";
wrapper.appendChild(inputText);
const keyboard = document.createElement("div");
keyboard.className = CssClasses.KEYBOARD;
wrapper.appendChild(keyboard);

const buttons = {};

Object.keys(keyboardNote).forEach((key) => {
  const buttonContent = document.createElement("button");

  if (typeof keyboardNote[key] === "object") {
    buttonContent.className = CssClasses.SYMBOLS;
    buttonContent.innerText = keyboardNote[key][Object.keys(keyboardNote[key])[1]];

    const divTopSymbol = document.createElement("span");
    divTopSymbol.className = CssClasses.TOP_LEFT_SYMBOL;
    divTopSymbol.innerText = keyboardNote[key][Object.keys(keyboardNote[key])[0]];
    buttonContent.appendChild(divTopSymbol);
  } else {
    buttonContent.className = CssClasses.CONTENT;
    buttonContent.innerText = `${keyboardNote[key]}`;
  }
  keyboard.appendChild(buttonContent);
  buttons[key] = buttonContent;

  buttonContent.addEventListener("click", (event) => {
    inputText.value += event.target.innerText;

    inputText.focus();
  });
});
const buttonBackspace = buttons.itemBackspace;
buttonBackspace.classList.add(CssClasses.CONTROL_KEY);
buttonBackspace.classList.add(CssClasses.BACKSPACE);

const buttonTab = buttons.itemTab;
buttonTab.classList.add(CssClasses.CONTROL_KEY);
buttonTab.classList.add(CssClasses.TAB);

const buttonDel = buttons.itemDel;
buttonDel.classList.add(CssClasses.CONTROL_KEY);
buttonDel.classList.add(CssClasses.DEL);

const buttonCapsLock = buttons.itemCapsLock;
buttonCapsLock.classList.add(CssClasses.CONTROL_KEY);
buttonCapsLock.classList.add(CssClasses.CAPS_LOCK);

const buttonEnter = buttons.itemEnter;
buttonEnter.classList.add(CssClasses.CONTROL_KEY);
buttonEnter.classList.add(CssClasses.ENTER);

const buttonShift = buttons.itemShift;
buttonShift.classList.add(CssClasses.CONTROL_KEY);
buttonShift.classList.add(CssClasses.SHIFT);

const buttonShiftSmall = buttons.itemShiftSmall;
buttonShiftSmall.classList.add(CssClasses.CONTROL_KEY);

const buttonCtrlLeft = buttons.itemCtrlLeft;
buttonCtrlLeft.classList.add(CssClasses.CONTROL_KEY);
buttonCtrlLeft.classList.add(CssClasses.CTRL);

const buttonWin = buttons.itemWin;
buttonWin.classList.add(CssClasses.CONTROL_KEY);

const buttonAltLeft = buttons.itemAltleft;
buttonAltLeft.classList.add(CssClasses.CONTROL_KEY);

const buttonSpace = buttons.itemSpace;
buttonSpace.classList.add(CssClasses.CONTROL_KEY);
buttonSpace.classList.add(CssClasses.SPACE);
buttonSpace.addEventListener("click", () => {
  inputText.value += " ";
  inputText.focus();
});

const buttonAltRight = buttons.itemAltRight;
buttonAltRight.classList.add(CssClasses.CONTROL_KEY);

const buttonCtrlRight = buttons.itemCtrlRight;
buttonCtrlRight.classList.add(CssClasses.CONTROL_KEY);
buttonCtrlRight.classList.add(CssClasses.CTRL);

const buttonArrowUp = buttons.itemArrowUp;
buttonArrowUp.classList.add(CssClasses.CONTROL_KEY);
buttonArrowUp.innerHTML = "<img src='images/arrow-up.svg'>";

const buttonArrowLeft = buttons.itemArrowLeft;
buttonArrowLeft.classList.add(CssClasses.CONTROL_KEY);
buttonArrowLeft.innerHTML = "<img src='images/arrow-left.svg'>";

const buttonArrowDown = buttons.itemArrowDown;
buttonArrowDown.classList.add(CssClasses.CONTROL_KEY);
buttonArrowDown.innerHTML = "<img src='images/arrow-down.svg'>";

const buttonArrowRight = buttons.itemArrowRight;
buttonArrowRight.classList.add(CssClasses.CONTROL_KEY);
buttonArrowRight.innerHTML = "<img src='images/arrow-right.svg'>";

const keyToRemove = "itemReverseSlash";
const buttonToRemove = buttons[keyToRemove];
if (buttonToRemove) {
  buttonToRemove.remove();
  delete keyboardNote[keyToRemove];
}

const newButtonReverseSlash = document.createElement("button");
newButtonReverseSlash.className = CssClasses.SYMBOLS;
newButtonReverseSlash.innerHTML = "\\";

const divTopSymbol = document.createElement("span");
divTopSymbol.className = CssClasses.TOP_LEFT_SYMBOL;
divTopSymbol.innerHTML = "/";
newButtonReverseSlash.appendChild(divTopSymbol);

keyboard.insertBefore(newButtonReverseSlash, buttons.itemDel);
buttons.itemReverseSlash = newButtonReverseSlash;

const buttonReverseSlash = buttons.itemReverseSlash;
buttonReverseSlash.addEventListener("click", () => {
  inputText.value += "\\";
  inputText.focus();
});

Object.values(buttons).forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.classList.add("key-highlights");
  });
});

Object.values(buttons).forEach((button) => {
  button.addEventListener("mouseup", () => {
    button.classList.remove("key-highlights");
  });
});

document.addEventListener("keydown", (event) => {
  const keyName = event.key.toUpperCase();
  const button = buttons[`item${keyName}`];
  if (button) {
    button.classList.add("key-highlights");
    console.log(event.key);
  }
  if (event.key === "`" && buttons.itemSymbol) {
    buttons.itemSymbol.classList.add("key-highlights");
  }
  if (event.key === "1" && buttons.itemOne) {
    buttons.itemOne.classList.add("key-highlights");
  }
  if (event.key === "2" && buttons.itemTwo) {
    buttons.itemTwo.classList.add("key-highlights");
  }
  if (event.key === "3" && buttons.itemThree) {
    buttons.itemThree.classList.add("key-highlights");
  }
  if (event.key === "4" && buttons.itemFour) {
    buttons.itemFour.classList.add("key-highlights");
  }
  if (event.key === "5" && buttons.itemFive) {
    buttons.itemFive.classList.add("key-highlights");
  }
  if (event.key === "6" && buttons.itemSix) {
    buttons.itemSix.classList.add("key-highlights");
  }
  if (event.key === "7" && buttons.itemSeven) {
    buttons.itemSeven.classList.add("key-highlights");
  }
  if (event.key === "8" && buttons.itemEight) {
    buttons.itemEight.classList.add("key-highlights");
  }
  if (event.key === "9" && buttons.itemNine) {
    buttons.itemNine.classList.add("key-highlights");
  }
  if (event.key === "0" && buttons.itemZero) {
    buttons.itemZero.classList.add("key-highlights");
  }
  if (event.key === "-" && buttons.itemMinuses) {
    buttons.itemMinuses.classList.add("key-highlights");
  }
  if (event.key === "=" && buttons.itemPlusEquals) {
    buttons.itemPlusEquals.classList.add("key-highlights");
  }
  if (event.key === "Delete" && buttons.itemDel) {
    buttons.itemDel.classList.add("key-highlights");
  }
  if (event.key === "\\" && buttons.itemReverseSlash) {
    buttons.itemReverseSlash.classList.add("key-highlights");
  }
  if (event.key === "CapsLock" && buttons.itemCapsLock) {
    buttons.itemCapsLock.classList.add("key-highlights");
  }
  if (event.key === "Control" && buttons.itemCtrlLeft) {
    buttons.itemCtrlLeft.classList.add("key-highlights");
  }
  if (event.key === "Control" && buttons.itemCtrlRight) {
    buttons.itemCtrlRight.classList.add("key-highlights");
  }
  if (event.key === "Meta" && buttons.itemWin) {
    buttons.itemWin.classList.add("key-highlights");
  }
  if (event.key === "Enter" && buttons.itemEnter) {
    buttons.itemEnter.classList.add("key-highlights");
  }
  if (event.key === " " && buttons.itemSpace) {
    buttons.itemSpace.classList.add("key-highlights");
  }
  if (event.key === "Alt" && buttons.itemAltRight) {
    buttons.itemAltRight.classList.add("key-highlights");
  }
  if (event.key === "Shift" && buttons.itemShiftSmall) {
    buttons.itemShiftSmall.classList.add("key-highlights");
  }
  if (event.key === "ArrowUp" && buttons.itemArrowUp) {
    buttons.itemArrowUp.classList.add("key-highlights");
  }
  if (event.key === "ArrowDown" && buttons.itemArrowDown) {
    buttons.itemArrowDown.classList.add("key-highlights");
  }
  if (event.key === "ArrowLeft" && buttons.itemArrowLeft) {
    buttons.itemArrowLeft.classList.add("key-highlights");
  }
  if (event.key === "ArrowRight" && buttons.itemArrowRight) {
    buttons.itemArrowRight.classList.add("key-highlights");
  }
});

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  const button = Object.values(buttons).find((b) => b.innerText === keyName);
  if (button) {
    button.classList.add("key-highlights");
  }
});

document.addEventListener("keyup", (event) => {
  const keyName = event.key;
  const button = Object.values(buttons).find((b) => b.innerText === keyName);
  if (button) {
    button.classList.remove("key-highlights");
  }
});

document.addEventListener("keyup", (event) => {
  const keyName = event.key.toUpperCase();
  const button = buttons[`item${keyName}`];
  if (button) {
    button.classList.remove("key-highlights");
    console.log(event.key);
  }
  if (event.key === "`" && buttons.itemSymbol) {
    buttons.itemSymbol.classList.remove("key-highlights");
  }
  if (event.key === "1" && buttons.itemOne) {
    buttons.itemOne.classList.remove("key-highlights");
  }
  if (event.key === "2" && buttons.itemTwo) {
    buttons.itemTwo.classList.remove("key-highlights");
  }
  if (event.key === "3" && buttons.itemThree) {
    buttons.itemThree.classList.remove("key-highlights");
  }
  if (event.key === "4" && buttons.itemFour) {
    buttons.itemFour.classList.remove("key-highlights");
  }
  if (event.key === "5" && buttons.itemFive) {
    buttons.itemFive.classList.remove("key-highlights");
  }
  if (event.key === "6" && buttons.itemSix) {
    buttons.itemSix.classList.remove("key-highlights");
  }
  if (event.key === "7" && buttons.itemSeven) {
    buttons.itemSeven.classList.remove("key-highlights");
  }
  if (event.key === "8" && buttons.itemEight) {
    buttons.itemEight.classList.remove("key-highlights");
  }
  if (event.key === "9" && buttons.itemNine) {
    buttons.itemNine.classList.remove("key-highlights");
  }
  if (event.key === "0" && buttons.itemZero) {
    buttons.itemZero.classList.remove("key-highlights");
  }
  if (event.key === "-" && buttons.itemMinuses) {
    buttons.itemMinuses.classList.remove("key-highlights");
  }
  if (event.key === "=" && buttons.itemPlusEquals) {
    buttons.itemPlusEquals.classList.remove("key-highlights");
  }
  if (event.key === "Delete" && buttons.itemDel) {
    buttons.itemDel.classList.remove("key-highlights");
  }
  if (event.key === "\\" && buttons.itemReverseSlash) {
    buttons.itemReverseSlash.classList.remove("key-highlights");
  }
  if (event.key === "CapsLock" && buttons.itemCapsLock) {
    buttons.itemCapsLock.classList.remove("key-highlights");
  }
  if (event.key === "Control" && buttons.itemCtrlLeft) {
    buttons.itemCtrlLeft.classList.remove("key-highlights");
  }
  if (event.key === "Control" && buttons.itemCtrlRight) {
    buttons.itemCtrlRight.classList.remove("key-highlights");
  }
  if (event.key === "Meta" && buttons.itemWin) {
    buttons.itemWin.classList.remove("key-highlights");
  }
  if (event.key === "Enter" && buttons.itemEnter) {
    buttons.itemEnter.classList.remove("key-highlights");
  }
  if (event.key === " " && buttons.itemSpace) {
    buttons.itemSpace.classList.remove("key-highlights");
  }
  if (event.key === "Alt" && buttons.itemAltRight) {
    buttons.itemAltRight.classList.remove("key-highlights");
  }
  if (event.key === "Shift" && buttons.itemShiftSmall) {
    buttons.itemShiftSmall.classList.remove("key-highlights");
  }
  if (event.key === "ArrowUp" && buttons.itemArrowUp) {
    buttons.itemArrowUp.classList.remove("key-highlights");
  }
  if (event.key === "ArrowDown" && buttons.itemArrowDown) {
    buttons.itemArrowDown.classList.remove("key-highlights");
  }
  if (event.key === "ArrowLeft" && buttons.itemArrowLeft) {
    buttons.itemArrowLeft.classList.remove("key-highlights");
  }
  if (event.key === "ArrowRight" && buttons.itemArrowRight) {
    buttons.itemArrowRight.classList.remove("key-highlights");
  }
});

inputText.addEventListener("input", (event) => {
  const input = event.target;
  const startPosition = input.selectionStart;
  const endPosition = input.selectionEnd;
  input.setSelectionRange(startPosition, endPosition);
});

inputText.addEventListener("input", (event) => {
  inputText.value = event.target.value;
});
