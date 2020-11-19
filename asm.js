// Create Template
const template = document.createElement('template');
template.innerHTML = `
<div id="give-menu">
        <a href="https://armedservicesministry.org/"><img src="https://1s712.americanbible.org/global/_ABSLogo/White/PNG/abs-bible-mark-(white).png"></a>
        <a href="" target="_blank" class="give-btn">GIVE NOW <i class="arrow right"></i><i class="arrow right"></i></a>
</div>

<div id="asm-super-menu" style="background: #ebe6e4;">
    <div class="asm-super-menu__controls">
        <a id="showmbnav">
            <span>EXPLORE OUR PROGRAMS</span>
            <i class="arrow down"></i>
        </a>
        <a id="mbnavclose">
            <span>EXPLORE OUR PROGRAMS</span>
            <i class="arrow up"></i>
        </a>
    </div>
    <div class="asm-super-menu__nav">
        <a class="asm-super-menu__link" data-id="asm" href="https://armedservicesministry.org/" target="_blank" title="Armed Services Ministry Website">Armed Services Ministry</a>
        <a class="asm-super-menu__link" data-id="jmw" href="https://militaryjourneys.com" target="_blank" title="Journey of a Military Wife Website">Journey of a Military Wife</a>
        <a class="asm-super-menu__link" data-id="hs" href="https://myherosquad.org/" target="_blank" title="Hero Squad Website">Hero Squad</a>
        <a class="asm-super-menu__link" data-id="gu" href="https://www.godunderstandsmilitary.com/" target="_blank" title="God Understands Website">God Understands</a>
        <a class="asm-super-menu__link" data-id="mbc" href="https://www.militarybiblechallenge.net" title="Military Bible Challenge Website">Military Bible Challenge</a>
        <a class="asm-super-menu__link" data-id="na" href="https://neveralonemilitary.com/" target="_blank" title="Never Alone Website">NEVER ALONE</a>
    </div>
</div>
<style>
:host {
  all: initial;
  font-family: sans-serif;
}
#give-menu {
  background: #002c47;
  height: 27px;
  padding: 5px 2.5%;
  font-weight: 400;
  font-family: sans-serif; }

#give-menu img {
  height: 20px;
  margin-top: 3px;
  margin-bottom: -3px; }

#give-menu .give-btn {
  background: #a90d1c;
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  float: right;
  height: 37px;
  line-height: 37px;
  margin-top: -5px;
  padding: 0 25px;
  text-decoration: none;
  letter-spacing: .5px;
  -webkit-transition: all .25s ease;
  -o-transition: all .25s ease;
  -moz-transition: all .25s ease;
  transition: all .25s ease;
  cursor: pointer;
  -webkit-transition: all .5s ease-in-out;
  -o-transition: all .5s ease-in-out;
  -moz-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out; }

#give-menu .give-btn:hover, #give-menu img:hover {
  -webkit-transform: scale(1.05);
     -moz-transform: scale(1.05);
      -ms-transform: scale(1.05);
       -o-transform: scale(1.05);
          transform: scale(1.05); }

#asm-super-menu {
  background: #ebe6e4;
  font-family: sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #0f2128;
  height: 50px; }

.asm-super-menu__nav {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  z-index: 999999999999999999;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
     -moz-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0 5%;
  overflow: hidden; }

.asm-super-menu__nav .asm-super-menu__link, .asm-super-menu__controls a {
  height: 35px;
  font-size: 15px;
  padding: 15px 25px 0;
  color: #002c47;
  text-decoration: none;
  letter-spacing: .5px;
  -webkit-transition: all .25s ease;
  -o-transition: all .25s ease;
  -moz-transition: all .25s ease;
  transition: all .25s ease;
  cursor: pointer; }

.asm-super-menu__nav .asm-super-menu__link:hover, .active {
  background: #dcaf38;
  color: white; }

.asm-super-menu__controls {
  display: none;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
     -moz-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 0 5%;
  overflow: hidden;
  -webkit-transition: all .5s ease-in-out;
  -o-transition: all .5s ease-in-out;
  -moz-transition: all .5s ease-in-out;
  transition: all .5s ease-in-out; }

.asm-super-menu__controls a#mbnavclose {
  display: none;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
     -moz-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
     -moz-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start; }

.asm-super-menu__controls a#showmbnav {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
     -moz-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
     -moz-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start; }

.arrow {
  border: solid #002c47;
  border-width: 0 2px 2px 0;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  padding: 2px;
  margin-left: 8px; }

.down {
  -moz-transform: rotate(45deg);
   -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
       transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-top: 3px; }

.up {
  -moz-transform: rotate(-135deg);
   -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
       transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  margin-top: 5px; }

.right {
  -moz-transform: rotate(-45deg);
   -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
       transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-left: 1px;
  border: solid white;
  border-width: 0 2px 2px 0;
  margin-bottom: 1.5px; }

@media (max-width: 1540px) {
  .asm-super-menu__nav .asm-super-menu__link, .asm-super-menu__controls a {
    padding: 15px 15px 0; } }

@media (max-width: 1405px) {
  .asm-super-menu__nav .asm-super-menu__link, .asm-super-menu__controls a {
    height: 24px;
    font-size: 12px;
    padding: 12px 10px 0; }
  #asm-super-menu {
    height: 36px; }
  .asm-super-menu__nav {
    padding: 0 2.5%; } }

@media (max-width: 1100px) {
  .asm-super-menu__nav {
    opacity: 0;
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
       -moz-box-orient: vertical;
       -moz-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
       -moz-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    padding: 1% 5%;
    background: #ebe6e4;
    border-top: 2px inset rgba(15, 33, 40, 0.05);
    -webkit-transition: all ease-in-out .5s;
    -o-transition: all ease-in-out .5s;
    -moz-transition: all ease-in-out .5s;
    transition: all ease-in-out .5s; }
  .asm-super-menu__controls {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex; }
  .asm-super-menu__nav .asm-super-menu__link:hover, .active {
    color: #dcaf38;
    background: none;
    -webkit-transform: scale(1.05);
       -moz-transform: scale(1.05);
        -ms-transform: scale(1.05);
         -o-transform: scale(1.05);
            transform: scale(1.05); } }
</style>

`;
// Initialize web component
class Supermenu extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    // Define callback functions to handle elements
    dropnav(expandState) {
        const link = this.shadowRoot.querySelector('.asm-super-menu__nav');
        const closenav = this.shadowRoot.querySelector('#asm-super-menu #mbnavclose');
        const shownav = this.shadowRoot.querySelector('#asm-super-menu #showmbnav');

        if(expandState == true) {
            link.style.display = 'flex';
            link.style.opacity = '1';
            closenav.style.display = 'inline-flex';
            shownav.style.display = 'none';
        }
        if(expandState == false) {
            link.style.display = 'none';
            link.style.opacity = '0';
            closenav.style.display = 'none';
            shownav.style.display = 'inline-flex';
        }
    }
    // Define auto-load functions
    connectedCallback(){
        // Listen for mobile menu interaction
        this.shadowRoot.querySelector('#showmbnav').addEventListener('click', ()=>{
            this.dropnav(true);
        })
        this.shadowRoot.querySelector('#mbnavclose').addEventListener('click', ()=>{
            this.dropnav(false);
        })
        // if no site is specified, default to ASM 	
        if (!this.hasAttribute('site')) {
            this.setAttribute('site', 'asm');
        }
        const asm = this.shadowRoot.querySelector('[data-id=asm]');
        const jmw = this.shadowRoot.querySelector('[data-id=jmw]');
        const hs = this.shadowRoot.querySelector('[data-id=hs]');
        const mbc = this.shadowRoot.querySelector('[data-id=mbc]');
        const gu = this.shadowRoot.querySelector('[data-id=gu]');
        const na = this.shadowRoot.querySelector('[data-id=na]');
        const asm_default = this.shadowRoot.querySelector('[data-id=asm]');
        const donate_btn = this.shadowRoot.querySelector('.give-btn');
        switch (this.getAttribute('site')) {
            case 'asm':
                asm.classList.add('active');
                donate_btn.setAttribute('href', 'https://armedservicesministry.org/donate/?banner=ABS2020-02-001-ASM&pid=250&des=868df86e-da35-471e-8e34-4be034af9d95&source=ASM_Home');
                break;
            case 'jmw':
                jmw.classList.add('active');
                donate_btn.setAttribute('href', 'https://armedservicesministry.org/donate/?banner=ABS2020-02-001-ASM&pid=250&des=868df86e-da35-471e-8e34-4be034af9d95&source=ASM_JMW');
                break;
            case 'hs':
                hs.classList.add('active');
                donate_btn.setAttribute('href', 'https://myherosquad.org/donate/?banner=ABS2020-10-001-ASM&pid=1001&des=582a68bf-9f56-4403-aaaf-c57d286b31b4&Source=ASM_HShome');
                break;
            case 'mbc':
                mbc.classList.add('active');
                donate_btn.setAttribute('href', 'https://armedservicesministry.org/donate/?banner=ABS2020-02-001-ASM&pid=250&des=868df86e-da35-471e-8e34-4be034af9d95&source=ASM_MilitaryChallenge');
                break;
            case 'gu':
                gu.classList.add('active');
                donate_btn.setAttribute('href', 'https://armedservicesministry.org/donate/?banner=ABS2020-02-001-ASM&pid=250&des=868df86e-da35-471e-8e34-4be034af9d95&source=ASM_GodUnderstands');
                break;
            case 'na':
                na.classList.add('active');
                donate_btn.setAttribute('href', 'https://armedservicesministry.org/donate/?banner=ABS2020-02-001-ASM&pid=250&des=868df86e-da35-471e-8e34-4be034af9d95&source=ASM_NeverAlone');
                break;
            default:
                asm_default.classList.add('active');
                donate_btn.setAttribute('href', 'https://armedservicesministry.org/donate/?banner=ABS2020-02-001-ASM&pid=250&des=868df86e-da35-471e-8e34-4be034af9d95&source=ASM_Home');
                break;
        }
    }
}
// Register template to HTML dom
window.customElements.define('asm-supermenu', Supermenu);