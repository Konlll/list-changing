let shelfItems = [
    {
        name: "szilva",
        checked: false
    },
    {
        name: "alma",
        checked: false
    },
    {
        name: "körte",
        checked: false
    }
]
let shopItems = [
    {
        name: "füge",
        checked: false
    },
    {
        name: "birsalma",
        checked: false
    },
    {
        name: "málna",
        checked: false
    },
    {
        name: "dió",
        checked: false
    }
]

const changeItem = (item) => {
    if (shelfItems.includes(item)) {
        shelfItems = shelfItems.filter(shelfItem => shelfItem != item)
        shopItems = [...shopItems, item]
    } else {
        shopItems = shopItems.filter(shopItem => shopItem != item)
        shelfItems = [...shelfItems, item]
    }
}

const addToList = (item, itemsDiv) => {
    const li = document.createElement("li")
    let { name } = item
    li.innerHTML = name
    itemsDiv.appendChild(li)
    if(item.checked){
        li.classList.add("checked")
    }
    li.addEventListener("click", (e) => {
        e.target.classList.toggle("checked")
        item.checked = !item.checked
    })
    li.addEventListener("dblclick", () => {
        if (item.checked) {
            changeItem(item)
            render()
        }
    })
}

const render = () => {
    const shelfDiv = document.querySelector(".shelf")
    const shopDiv = document.querySelector(".shop")
    shelfDiv.innerHTML = ""
    shopDiv.innerHTML = ""

    shelfItems.forEach(shelfItem => addToList(shelfItem, shelfDiv))
    shopItems.forEach(shopItem => addToList(shopItem, shopDiv))
}

render()