function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},u=t.parcelRequire7bc7;null==u&&((u=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var u={id:e,exports:{}};return o[e]=u,t.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=u);var r=u("eWCmQ");const l={form:document.querySelector("form.form"),delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]'),btnSubmit:document.querySelector('button[type="submit"]')};function i(e,t){return new Promise(((o,n)=>{const u=Math.random()>.3;setTimeout((()=>{u?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}l.form.addEventListener("submit",(function(t){t.preventDefault();let o=+l.delayInput.value,n=+l.stepInput.value,u=+l.amountInput.value;console.log(o),console.log(n),console.log(u);for(let t=1;t<=u;t+=1)i(t,o).then((({position:t,delay:o})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),o+=n;l.form.reset()}));
//# sourceMappingURL=03-promises.7f73c4d2.js.map
