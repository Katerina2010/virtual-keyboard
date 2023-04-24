const buttonsArr = [
  {
    "code": "Backquote",
    "key": {"ru": "ё", "en": "`", "fix": "", "ruShift": "Ё", "enShift": "~"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Digit1",
    "key": {"ru": 1, "en": 1, "fix": "", "ruShift": "!", "enShift": "!"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Digit2",
    "key": {"ru": 2, "en": 2, "fix": "", "ruShift": "\"", "enShift": "@"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Digit3",
    "key": {"ru": 3, "en": 3, "fix": "", "ruShift": "№", "enShift": "#"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Digit4",
    "key": {"ru": 4, "en": 4, "fix": "", "ruShift": ";", "enShift": "$"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Digit5",
    "key": {"ru": 5, "en": 5, "fix": "", "ruShift": "%", "enShift": "%"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Digit6",
    "key": {"ru": 6, "en": 6, "fix": "", "ruShift": ":", "enShift": "^"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Digit7",
    "key": {"ru": 7, "en": 7, "fix": "", "ruShift": "?", "enShift": "&"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Digit8",
    "key": {"ru": 8, "en": 8, "fix": "", "ruShift": "*", "enShift": "*"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Digit9",
    "key": {"ru": 9, "en": 9, "fix": "", "ruShift": "(", "enShift": "("},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Digit0",
    "key": {"ru": 0, "en": 0, "fix": "", "ruShift": ")", "enShift": ")"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Minus",
    "key": {"ru": "-", "en": "-", "fix": "", "ruShift": "_", "enShift": "_"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Equal",
    "key": {"ru": "=", "en": "=", "fix": "", "ruShift": "+", "enShift": "+"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Backspace",
    "key": {"ru": "", "en": "", "fix": "Backspace", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "change"
  },
  {
    "code": "Tab",
    "key": {"ru": "", "en": "", "fix": "Backspace", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "change"
  },
  {
    "code": "KeyQ",
    "key": {"ru": "й", "en": "q", "fix": "", "ruShift": "Й", "enShift": "Q"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyW",
    "key": {"ru": "ц", "en": "w", "fix": "", "ruShift": "Ц", "enShift": "W"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyE",
    "key": {"ru": "у", "en": "e", "fix": "", "ruShift": "У", "enShift": "E"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyR",
    "key": {"ru": "к", "en": "r", "fix": "", "ruShift": "К", "enShift": "R"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyT",
    "key": {"ru": "е", "en": "t", "fix": "", "ruShift": "Е", "enShift": "T"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyY",
    "key": {"ru": "н", "en": "y", "fix": "", "ruShift": "Н", "enShift": "Y"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyU",
    "key": {"ru": "г", "en": "u", "fix": "", "ruShift": "Г", "enShift": "U"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyI",
    "key": {"ru": "ш", "en": "i", "fix": "", "ruShift": "Ш", "enShift": "I"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyO",
    "key": {"ru": "щ", "en": "o", "fix": "", "ruShift": "Щ", "enShift": "O"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyP",
    "key": {"ru": "з", "en": "p", "fix": "", "ruShift": "З", "enShift": "P"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "BracketLeft",
    "key": {"ru": "х", "en": "[", "fix": "", "ruShift": "Х", "enShift": "{"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "BracketRight",
    "key": {"ru": "ъ", "en": "]", "fix": "", "ruShift": "Ъ", "enShift": "}"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Backslash",
    "key": {"ru": "\\", "en": "\\", "fix": "", "ruShift": "/", "enShift": "|"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Delete",
    "key": {"ru": "", "en": "", "fix": "Del", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "change"
  },
  {
    "code": "CapsLock",
    "key": {"ru": "", "en": "", "fix": "CapsLock", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "influence"
  },
  {
    "code": "KeyA",
    "key": {"ru": "ф", "en": "a", "fix": "", "ruShift": "Ф", "enShift": "A"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyS",
    "key": {"ru": "ы", "en": "s", "fix": "", "ruShift": "Ы", "enShift": "S"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyD",
    "key": {"ru": "в", "en": "d", "fix": "", "ruShift": "В", "enShift": "D"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyF",
    "key": {"ru": "а", "en": "f", "fix": "", "ruShift": "А", "enShift": "F"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyG",
    "key": {"ru": "п", "en": "g", "fix": "", "ruShift": "П", "enShift": "G"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyH",
    "key": {"ru": "р", "en": "h", "fix": "", "ruShift": "Р", "enShift": "H"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyJ",
    "key": {"ru": "о", "en": "j", "fix": "", "ruShift": "О", "enShift": "J"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyK",
    "key": {"ru": "л", "en": "k", "fix": "", "ruShift": "Л", "enShift": "K"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyL",
    "key": {"ru": "д", "en": "l", "fix": "", "ruShift": "Д", "enShift": "L"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Semicolon",
    "key": {"ru": "ж", "en": ";", "fix": "", "ruShift": "Ж", "enShift": ":"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Quote",
    "key": {"ru": "э", "en": "'", "fix": "", "ruShift": "Э", "enShift": "\""},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Enter",
    "key": {"ru": "", "en": "", "fix": "Enter", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "change"
  },
  {
    "code": "ShiftLeft",
    "key": {"ru": "", "en": "", "fix": "Shift", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "influence"
  },
  {
    "code": "KeyZ",
    "key": {"ru": "я", "en": "z", "fix": "", "ruShift": "Я", "enShift": "Z"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyX",
    "key": {"ru": "ч", "en": "x", "fix": "", "ruShift": "Ч", "enShift": "X"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyC",
    "key": {"ru": "c", "en": "c", "fix": "", "ruShift": "C", "enShift": "C"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyV",
    "key": {"ru": "м", "en": "v", "fix": "", "ruShift": "М", "enShift": "V"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyB",
    "key": {"ru": "и", "en": "b", "fix": "", "ruShift": "И", "enShift": "B"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyN",
    "key": {"ru": "т", "en": "n", "fix": "", "ruShift": "Т", "enShift": "N"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "KeyM",
    "key": {"ru": "ь", "en": "m", "fix": "", "ruShift": "Ь", "enShift": "M"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Comma",
    "key": {"ru": "б", "en": ",", "fix": "", "ruShift": "Б", "enShift": "<"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Period",
    "key": {"ru": "ю", "en": ".", "fix": "", "ruShift": "Ю", "enShift": ">"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "Slash",
    "key": {"ru": ".", "en": "/", "fix": "", "ruShift": ",", "enShift": "?"},
    "keycodeFix": false,
    "type": "static"
  },
  {
    "code": "ArrowUp",
    "key": {"ru": "", "en": "", "fix": "↑", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "arrow"
  },
  {
    "code": "ShiftRight",
    "key": {"ru": "", "en": "", "fix": "Shift", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "influence"
  },
  {
    "code": "ControlLeft",
    "key": {"ru": "", "en": "", "fix": "Ctrl", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "influence"
  },
  {
    "code": "MetaLeft",
    "key": {"ru": "", "en": "", "fix": "Win", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "static"
  },
  {
    "code": "AltLeft",
    "key": {"ru": "", "en": "", "fix": "Alt", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "influence"
  },
  {
    "code": "Space",
    "key": {"ru": " ", "en": " ", "fix": " ", "ruShift": " ", "enShift": " "},
    "keycodeFix": true,
    "type": "static"
  },
  {
    "code": "AltRight",
    "key": {"ru": "", "en": "", "fix": "Alt", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "static"
  },
  {
    "code": "ArrowLeft",
    "key": {"ru": "", "en": "", "fix": "←", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "arrow"
  },
  {
    "code": "ArrowDown",
    "key": {"ru": "", "en": "", "fix": "↓", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "arrow"
  },
  {
    "code": "ArrowRight",
    "key": {"ru": "", "en": "", "fix": "→", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "arrow"
  },
  {
    "code": "ControlRight",
    "key": {"ru": "", "en": "", "fix": "Ctrl", "ruShift": "", "enShift": ""},
    "keycodeFix": true,
    "type": "static"
  },
];

export {buttonsArr};