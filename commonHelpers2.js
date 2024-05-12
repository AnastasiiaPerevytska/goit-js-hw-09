import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},n=document.querySelector(".form");n.innerHTML=r();const a=document.querySelector(".feedback-form");a.addEventListener("input",l);window.addEventListener("DOMContentLoaded",s);a.addEventListener("submit",i);function r(){return`
        <form class="feedback-form" autocomplete="off">
            <label>
                Email
                <input type="email" name="email" autofocus />
            </label>
            <label>
                Message
                <textarea name="message" rows="8"></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    `}function l(t){const{name:o,value:m}=t.target;e[o]=m,f()}function s(){const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(e.email=t.email||"",e.message=t.message||"",a.elements.email.value=e.email,a.elements.message.value=e.message)}function i(t){if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),c()}function f(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function c(){localStorage.removeItem("feedback-form-state"),a.reset()}
//# sourceMappingURL=commonHelpers2.js.map
