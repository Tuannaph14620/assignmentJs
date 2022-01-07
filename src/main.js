const menuList = ["menu 1", "menu 2", "menu 3"];
const menuElement = document.querySelector("#menu");
if (menuElement) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < menuList.length; i++) {
        menuElement.innerHTML += `<li>${menuList[i]}</li>`;
    }
}
