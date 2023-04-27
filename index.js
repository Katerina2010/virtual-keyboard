import { buttonsArr } from "./code.js";

class Keyboard {
  constructor(data) {
    this.buttons = data.slice();
    this.value = '';
    this.currentLang = 'en';
    this.adaptation = {
      CapsLock: false,
      Shift: false,
      Ctrl: false,
      Alt: false,
    };
  }
  getButton(keycode) {//получить кнопку зная код
    for (let i = 0; i < this.buttons.length; i += 1) {
      if (this.buttons[i].code === keycode) {
        return this.buttons[i];
      }
    }
    return false;
  }

  updateBtn(lang) { //обновлять кнопки
    Array.from(this.btnArr).forEach((keyBtn) => {
      const btn = this.getButton(keyBtn.dataset.code);
      if (btn.type === 'static') {
        if (this.adaptation.Shift || this.adaptation.CapsLock) {
          keyBtn.innerHTML = btn.key[`${lang}Shift`];
        } else {
          keyBtn.innerHTML = btn.key[lang];
          console.log(btn.key[lang])
        }
      }
    });
  }

  pressKeyDown(event) { //нажать клавишу клавиатуры
    this.textArea.focus();
    if (event.code === 'CapsLock') {
      document.getElementById(event.code).classList.toggle("active"); 
      if (document.getElementById(event.code).classList.contains("active")) {
        this.adaptation.CapsLock = true;
        this.updateBtn(this.currentLang);
      } else {
        this.adaptation.CapsLock = false;
        this.updateBtn(this.currentLang);
      }
    } else {
      document.getElementById(event.code).classList.add("active");
    }
    if(this.getButton(event.code)) {
      this.updateBtn(this.currentLang);
      let button = this.getButton(event.code);
      if(button.type === "static") {
        event.preventDefault();
        this.textArea.focus();
        if (this.adaptation.Shift || this.adaptation.CapsLock) {
          this.textArea.setRangeText(`${button.key[`${this.currentLang}Shift`]}`, this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        } else { 
          this.textArea.setRangeText(`${button.key[this.currentLang]}`, this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        }
      }
    if (event.code === "Tab") {
      event.preventDefault();
      this.textArea.setRangeText('    ', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
    }
    if (event.code === "Enter") {
      this.textArea.setRangeText('\n', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
    }
    if (event.code === "Backspace") {
      this.textArea.setRangeText('', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
      if (this.textArea.selectionStart === this.textArea.selectionEnd) {
        this.textArea.setRangeText('', this.textArea.selectionStart - 1, this.textArea.selectionEnd, 'end');
      }
    };
    if (event.code === "Delete") {
      if (this.textArea.selectionStart === this.textArea.selectionEnd) {
        this.textArea.setRangeText('', this.textArea.selectionStart, this.textArea.selectionEnd + 1, 'end');
      } else if (this.textArea.selectionStart !== this.textArea.selectionEnd) {
        this.textArea.setRangeText('', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
      }
    }
    if ((event.code === 'ControlLeft' && event.altKey) || (event.code === 'AltLeft' && event.ctrlKey)) {//Alt левый и Ctrl левый
        this.currentLang = this.currentLang === 'en' ? 'ru' : 'en';
        localStorage.setItem('lang', this.currentLang);
        this.updateBtn(this.currentLang);
        if (this.currentLang === "ru") {
          document.getElementById('LangSwitch').classList.add("active");
        } else {
          document.getElementById('LangSwitch').classList.remove("active");
        }
        
    }
    if (event.code === "ShiftLeft" || event.code === "ShiftRight" ) {
        this.adaptation.Shift = true;
        this.updateBtn(this.currentLang);
    };
    if (event.code === "AltLeft" || event.code === "AltRight" ) {
        event.preventDefault();
    }
  }
  }

  pressKeyUp(event) { //отпустить клавишу клавиатуры
    if(event.code !== 'CapsLock') {
      document.getElementById(event.code).classList.remove("active");
    }
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      this.adaptation.Shift = false;
      this.updateBtn(this.currentLang);
    };
  }

  pressClick(event) { //нажата мышь
    event.preventDefault();
    this.textArea.focus();
    let code = event.target.dataset.code;
    if (code === 'CapsLock') {
      document.getElementById(code).classList.toggle("active"); 
      if (document.getElementById(code).classList.contains("active")) {
        this.adaptation.CapsLock = true;
        this.updateBtn(this.currentLang);
      } else {
        this.adaptation.CapsLock = false;
        this.updateBtn(this.currentLang);
      }
    } else {
      document.getElementById(code).classList.add("active");
    }
    if (code === 'LangSwitch') {
      this.currentLang = this.currentLang === 'en' ? 'ru' : 'en';
      localStorage.setItem('lang', this.currentLang);
      this.updateBtn(this.currentLang);
      document.getElementById('LangSwitch').classList.remove("active");
      if (this.currentLang === "ru") {
        document.getElementById('LangSwitch').classList.add("active");
      } else {
        document.getElementById('LangSwitch').classList.remove("active");
      }
    }
    if(this.getButton(code)) {
      this.updateBtn(this.currentLang);
      let button = this.getButton(code);
      if(button.type === "static") {
        if (this.adaptation.Shift || this.adaptation.CapsLock) {
          this.textArea.setRangeText(`${button.key[`${this.currentLang}Shift`]}`, this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        } else { 
          this.textArea.setRangeText(`${button.key[this.currentLang]}`, this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        }
      }
    }
    if (code === "Enter") {
      this.textArea.setRangeText('\n', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
    }
    if (code === "Tab") {
      this.textArea.setRangeText('    ', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
    }
    if (code === "Backspace") {
      this.textArea.setRangeText('', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
      if (this.textArea.selectionStart === this.textArea.selectionEnd) {
        this.textArea.setRangeText('', this.textArea.selectionStart - 1, this.textArea.selectionEnd, 'end');
      }
    };
    if (code === "Delete") {
      if (this.textArea.selectionStart === this.textArea.selectionEnd) {
        this.textArea.setRangeText('', this.textArea.selectionStart, this.textArea.selectionEnd + 1, 'end');
      } else if (this.textArea.selectionStart !== this.textArea.selectionEnd) {
        this.textArea.setRangeText('', this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
      }
    }
    if (code === "ShiftLeft" || code === "ShiftRight") {
      this.adaptation.Shift = true;
      this.updateBtn(this.currentLang);
    };
  }

  pressClickUp(event) {//отпустить мышь
    let code = event.target.dataset.code;
    if(code !== 'CapsLock' && code !== "LangSwitch") {
      document.getElementById(code).classList.remove("active");
    }
    if (code === "ShiftLeft" || code === "ShiftRight") {
      this.adaptation.Shift = false;
      this.updateBtn(this.currentLang);
    };
  }

  initKeyboard() { // отрисовать клаву
    function HTMLBody() {
      const HTML_TEMPLATE = `
      <main>
      <section class="body">
        <div class="header">
          <h2 class="title">RSS Virtual Keyboard</h2>
        </div>
        <div class="area">
          <textarea class="area-text" rows="8" placeholder="..."></textarea> 
        </div>
        <div class="keyboard">
          <div class="string1"></div>
          <div class="string2"></div>
          <div class="string3"></div>
          <div class="string4"></div>
          <div class="string5"></div>
        </div>
        <div class="info">
          <p class="info-text">Language switch keys: <b>left Ctrl  + left Alt</b> or 🌐</p>
          <p class="info-text">*implemented on <b>Windows OS</b></p>
          </div>
        </div>
      </section>
      </main>
      <script type="module" src="index.js"></script>`;
      document.body.innerHTML = HTML_TEMPLATE;
    }
    HTMLBody();

    this.keyString1 = document.querySelector('.string1');
    this.keyString2 = document.querySelector('.string2');
    this.keyString3 = document.querySelector('.string3');
    this.keyString4 = document.querySelector('.string4');
    this.keyString5 = document.querySelector('.string5');

    for (let i = 0; i <= 63; i++) {
      const newBtn = document.createElement('div');
      const classes = ['key', this.buttons[i].type];
      newBtn.classList.add(...classes);
      newBtn.id = this.buttons[i].code;
      newBtn.dataset.code = this.buttons[i].code;

      if (!this.buttons[i].keycodeFix) {
        newBtn.innerHTML = this.buttons[i].key[this.currentLang];
      } else {
        newBtn.innerHTML = this.buttons[i].key.fix;
      }

      if (i >= 0 && i <= 13) {this.keyString1.appendChild(newBtn);}
      if (i >= 14 && i <= 28) {this.keyString2.appendChild(newBtn);}
      if (i >= 29 && i <= 41) {this.keyString3.appendChild(newBtn);}
      if (i >= 42 && i <= 54) {this.keyString4.appendChild(newBtn);}
      if (i >= 55 && i <= 63) {this.keyString5.appendChild(newBtn);}
    }

    this.textArea = document.querySelector('.area-text');
    this.keyboard = document.querySelector('.keyboard');
    this.btnArr = document.querySelectorAll(".key");

    this.keyboard.addEventListener('mousedown', this.pressClick.bind(this));
    this.keyboard.addEventListener('mouseup', this.pressClickUp.bind(this));
    window.addEventListener("keydown", this.pressKeyDown.bind(this));
    window.addEventListener("keyup", this.pressKeyUp.bind(this));
  }
 
}

const virtualKeyboard = new Keyboard(buttonsArr);

virtualKeyboard.initKeyboard();





