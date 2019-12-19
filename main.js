function say(p) {console.log(p)}

function styleDivs() {
  document.querySelectorAll(".problem-title").forEach(el=>{el.classList.remove("subtle-selection")})
  const hash = document.location.hash;
  const el = document.querySelector(`${hash} > h3`);
  if (el)
    el.classList.add("subtle-selection");
}

addEventListener("DOMContentLoaded",()=>{styleDivs()})
addEventListener("hashchange",()=>{styleDivs()})