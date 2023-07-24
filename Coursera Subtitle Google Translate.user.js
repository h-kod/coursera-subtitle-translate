// ==UserScript==
// @name         Coursera Subtitle Google Translate
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       hcode
// @match        https://www.coursera.org/learn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coursera.org
// @grant        none
// ==/UserScript==


var interval = setInterval(noSubtitle, 1000);

function noSubtitle() {
  var d = document.querySelector("#subtitle-menu > li:nth-child(1) button");
  if (d) {
    d.click();
    clearInterval(interval);
  }
}

function addGlobalStyle(css = '') {
  let target = document.head || document.body;
  let style = document.createElement('style');

  style.type = 'text/css';
  style.innerHTML = (css || arguments.length ? arguments[0][0] : '').replaceAll(';', ' !important;');
  target.append(style);
}



addGlobalStyle`
    .rc-Phrase.active {
  position: absolute;
  top: -333px;
  z-index: 1;
  width: 100%;
  left: 143px;
  line-height: 2.5rem;
  text-align: center;
  background-color: inherit;
  outline: inherit;
}

.rc-Phrase.active span{
 color:white;
 font-size: 28px;
 padding:2px;
 background: #000000b3;
}
`

