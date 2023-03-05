import { getUser } from "../../api/api-handlers";

export const user = async () => {
   const userFirstName = document.getElementById('userFirstName')
   const userSecondName = document.getElementById('userSecondName')
   const avatar = document.getElementById('avatar')
   avatar.style.width = '50px'
   avatar.style.height = '50px'
   avatar.style.borderRadius = '50%'


   await getUser().then(a => {
      userFirstName.innerHTML = a.firstname;
      userSecondName.innerHTML = a.secondname;
      avatar.src = a.ava;
})
}