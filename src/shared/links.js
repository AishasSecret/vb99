import { PATH } from "./locations"

export const links = () => {
    const main = document.getElementById('main')
    const page1 = document.getElementById('page1')

    main.onclick = () => window.location.href = PATH.main;
    page1.onclick = () => window.location.href = PATH.page1;
}