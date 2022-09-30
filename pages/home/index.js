/* Desenvolva sua lógica aqui */ 
function renderValues(x) {
    let ul = document.getElementById('show_values')
    let spanValues = document.getElementById('total_values')
    let total = 0
    let list = x

    x.forEach((elem, i, arr) => {
        let element = arr[i]
        let templateLi = renderValuesCreator(element)
        ul.appendChild(templateLi)
        total += arr[i].value
    });

    spanValues.innerText = `R$${total.toFixed(2)}`
    
}

renderValues(insertedValues)

function renderValuesCreator(element) {
    let value = element.value
    let category = ''
    let id = element.id
    if (element.categoryID === 1) {
        category = 'Entrada'
    }else if (element.categoryID === 2) {
        category = 'Saida'
    }
    

    let li = document.createElement('li')
    let span1 = document.createElement('span')
    let div = document.createElement('div')
    li.append(span1, div)
    let span2 = document.createElement('span')
    let button = document.createElement('button')
    div.append(span2, button)
    let img = document.createElement('img')
    button.append(img)

    li.classList = 'li-style flex al-center jus-between'
    li.id = id
    span1.classList = 'text-1'
    div.classList = 'cat-button-box flex al-center jus-between'
    span2.classList = 'cat-box text-2'
    button.classList = 'bt-remove'
    img.src = '../../assets/trash (1).png'
   
    span1.innerText = `R$${value.toFixed(2)}`
    span2.innerText = `${category}`

    
    removeValue(button, id, insertedValues)
    return li
}

function totalValues(list, total, span) {

        list.forEach((elem, i, arr) => {
            total += arr[i].value
        })
        span.innerText = `R$${total.toFixed(2)}`
    
}


function categoryButtons() {
    const ul = document.getElementById('show_values')

    const catButtonAppetizer = document.getElementById('cat_appetizer')
    const catButtonExits = document.getElementById('cat_exits')
    const catButtonAll = document.getElementById('cat_all')

    catButtonAll.addEventListener('click', (event) => {
        ul.innerHTML =""
        renderValues(insertedValues)
        catButtonAppetizer.classList ='button bt-outline'
        catButtonExits.classList ='button bt-outline'
        catButtonAll.classList ='button bt-outline-active'
    })
    catButtonAppetizer.addEventListener('click', (event) => {
        ul.innerHTML =""
        renderValues(insertedValues.filter((element) => element.categoryID === 1))
        catButtonAppetizer.classList ='button bt-outline-active'
        catButtonExits.classList ='button bt-outline'
        catButtonAll.classList ='button bt-outline'
    })
    catButtonExits.addEventListener('click', (event) => {
        ul.innerHTML =""
        renderValues(insertedValues.filter((element) => element.categoryID === 2))
        catButtonAppetizer.classList ='button bt-outline'
        catButtonExits.classList ='button bt-outline-active'
        catButtonAll.classList ='button bt-outline'
    })

}
categoryButtons()

function removeValue(button, id, array) {
    const ul = document.getElementById('show_values')

    button.addEventListener('click', (event) => {
        event.preventDefault()

        array.forEach((elem, i, arr) =>{
            if (arr[i].id === id) {
                arr.splice(i , 1)
                ul.innerHTML =''
                renderValues(array)
        }})
    })
}
