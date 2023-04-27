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





