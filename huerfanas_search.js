document.addEventListener("keyup", uKey)


function uKey(userKey){

if (userKey.target.matches("#search")){

      if (userKey.key ==="Escape")userKey.target.value = ""

      document.querySelectorAll(".huerfana").forEach(huerfana =>{

          huerfana.textContent.toLowerCase().includes(userKey.target.value.toLowerCase())
            ?huerfana.classList.remove("filter")
            :huerfana.classList.add("filter")
      })

  }
}