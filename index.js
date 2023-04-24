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
    function HTMLBody() {// функция по созданию html разметки 
      const HTML_TEMPLATE = `
      <main>
      <section class="body">
        <div class="header">
          <h2 class="title">RSS Virtual Keyboard</h2>
        </div>
        <div class="area">
          <textarea class="area-text" rows="10" placeholder="..."></textarea> 
        </div>
        <div class="keyboard">
          <div class="string1"></div>
          <div class="string2"></div>
          <div class="string3"></div>
          <div class="string4"></div>
          <div class="string5"></div>
        </div>
        <div class="info">
          <p class="info-text">Language switch: <b>Ctrl left + Alt left</b></p>
          <p class="info-text">Made in <b>Windows.</b></p>
          </div>
        </div>
      </section>
      </main>
      `;
      document.body.innerHTML = HTML_TEMPLATE;
    }

    HTMLBody();//создать html разметку
    this.textArea = document.querySelector('.text-area');//взять текстареа

    this.keyString1 = document.querySelector('.string1');//взять 1 строку
      for (let i = 0; i <= 13; i ++) {
        const newBtn = document.createElement('div');
        const classes = ['key', this.buttons[i].type];
        newBtn.classList.add(...classes);
        newBtn.id = this.buttons[i].code;
        newBtn.dataset.code = this.buttons[i].code;
  
        if (!this.buttons[i].keycodeFix) {
          if (this.adaptation.Shift !== this.adaptation.CapsLock) {
            newBtn.innerHTML = this.buttons[i].key[`${this.currentLang}Shift`];
          } else {
            newBtn.innerHTML = this.buttons[i].key[this.currentLang];
          }
        } else {
          newBtn.innerHTML = this.buttons[i].key.fix;
        }
  
        this.keyString1.appendChild(newBtn);
      }

    this.keyString2 = document.querySelector('.string2'); //взять 2 строку
      for (let i = 14; i <= 28; i ++) {
        const newBtn = document.createElement('div');
        const classes = ['key', this.buttons[i].type];
        newBtn.classList.add(...classes);
        newBtn.id = this.buttons[i].code;
        newBtn.dataset.code = this.buttons[i].code;
  
        if (!this.buttons[i].keycodeFix) {
          if (this.adaptation.Shift !== this.adaptation.CapsLock) {
            newBtn.innerHTML = this.buttons[i].key[`${this.currentLang}Shift`];
          } else {
            newBtn.innerHTML = this.buttons[i].key[this.currentLang];
          }
        } else {
          newBtn.innerHTML = this.buttons[i].key.fix;
        }
  
        this.keyString2.appendChild(newBtn);
      }

    this.keyString3 = document.querySelector('.string3');//взять 3 строку
      for (let i = 29; i <= 41; i ++) {
        const newBtn = document.createElement('div');
        const classes = ['key', this.buttons[i].type];
        newBtn.classList.add(...classes);
        newBtn.id = this.buttons[i].code;
        newBtn.dataset.code = this.buttons[i].code;
  
        if (!this.buttons[i].keycodeFix) {
          if (this.adaptation.Shift !== this.adaptation.CapsLock) {
            newBtn.innerHTML = this.buttons[i].key[`${this.currentLang}Shift`];
          } else {
            newBtn.innerHTML = this.buttons[i].key[this.currentLang];
          }
        } else {
          newBtn.innerHTML = this.buttons[i].key.fix;
        }
  
        this.keyString3.appendChild(newBtn);
      }


    this.keyString4 = document.querySelector('.string4');//взять 4 строку
      for (let i = 42; i <= 54; i ++) {
        const newBtn = document.createElement('div');
        const classes = ['key', this.buttons[i].type];
        newBtn.classList.add(...classes);
        newBtn.id = this.buttons[i].code;
        newBtn.dataset.code = this.buttons[i].code;
  
        if (!this.buttons[i].keycodeFix) {
          if (this.adaptation.Shift !== this.adaptation.CapsLock) {
            newBtn.innerHTML = this.buttons[i].key[`${this.currentLang}Shift`];
          } else {
            newBtn.innerHTML = this.buttons[i].key[this.currentLang];
          }
        } else {
          newBtn.innerHTML = this.buttons[i].key.fix;
        }
  
        this.keyString4.appendChild(newBtn);
      }

    this.keyString5 = document.querySelector('.string5');//взять 5 строку
      for (let i = 55; i <= 63; i ++) {
        const newBtn = document.createElement('div');
        const classes = ['key', this.buttons[i].type];
        newBtn.classList.add(...classes);
        newBtn.id = this.buttons[i].code;
        newBtn.dataset.code = this.buttons[i].code;
  
        if (!this.buttons[i].keycodeFix) {
          if (this.adaptation.Shift !== this.adaptation.CapsLock) {
            newBtn.innerHTML = this.buttons[i].key[`${this.currentLang}Shift`];
          } else {
            newBtn.innerHTML = this.buttons[i].key[this.currentLang];
          }
        } else {
          newBtn.innerHTML = this.buttons[i].key.fix;
        }
  
        this.keyString5.appendChild(newBtn);
      }
      /*window.addEventListener('keydown', f);*/
      /*window.addEventListener('keyup',f);*/
  }
  
}

const objKeyboard = new Keyboard(buttonsArr);

objKeyboard.initKeyboard();





