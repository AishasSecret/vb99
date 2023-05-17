const btn_modal = document.getElementById('btn-modal')
const modal_w = document.querySelector('.modal-w')
const btn_prim = document.getElementById('btn-prim')
const check = document.getElementById('exampleCheck')
const inputName = document.getElementById('exampleInputName')
const user = document.getElementById('user')
btn_prim.disabled = true


btn_prim.onclick = () => {
    modal_w.style.display = 'block'
    user.innerText = `Здравствуйте, ${inputName.value}! Мы приняли ваш заказ, пожалуйста, ожидайте звонка.`
}

btn_modal.onclick = () => {
    modal_w.style.display = 'none'
}

check.addEventListener('click', () => {
    if (check.checked && inputName.value.length > 3) {
        btn_prim.disabled = false
    } else {
        btn_prim.disabled = true

    }
})