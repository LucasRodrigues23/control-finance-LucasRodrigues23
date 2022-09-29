/* Desenvolva sua lógica aqui */
function openModal() {
    let openModal = document.getElementById('open_modal')
    openModal.addEventListener('click', modalCreator)
}
openModal()

function modalCreator(event) {
    let main = document.getElementById('app')
   
    let divModal = document.createElement('div')
    let divContainer = document.createElement('div')
    let divModalBox = document.createElement('div')
    divModal.append(divModalBox)
    let div1 = document.createElement('div')
    let span1 = document.createElement('span')
    let buttonClose = document.createElement('button')
    div1.append(span1, buttonClose)
    let span2 = document.createElement('span')
    let form = document.createElement('form')
    let span3 = document.createElement('span')
    let input = document.createElement('input')
    let div2 = document.createElement('div')
    let span4 = document.createElement('span')
    let button1 = document.createElement('button')
    let button2 = document.createElement('button')
    let div3 = document.createElement('div')
    let button3 = document.createElement('button')
    let button4 = document.createElement('button')
    div3.append(button3, button4)
    div2.append(span4, button1, button2)
    form.append(span3, input, div2, div3)
    divContainer.append(div1, span2, form)
    divModalBox.append(divContainer)
    


    divModal.classList ='modal-wrapper'
    divModal.id ='modal'
    divContainer.classList ='container-modal'
    divModalBox.classList ='modal-box flex al-center jus-center'
    div1.classList ='flex al-center jus-between modal-title'
    span1.classList ='title-2-bold'
    buttonClose.classList ='button-close'
    buttonClose.id ='close_modal'
    span2.classList ='text-1'
    form.classList ='flex flex-col modal-form'
    span3.classList ='text-1'
    input.id ='input_new_valeu'
    input.type ='number'
    div2.classList ='modal_cat_buttons flex flex-col'
    span4.classList ='text-1'
    button1.classList ='bt-outline'
    button1.id = 'bt_modal1'
    button2.classList ='bt-outline'
    button2.id ='bt_modal2'
    div3.classList ='modal-last-buttons flex al-center jus-between'
    button3.classList ='button bt-greylow'
    button3.id ='bt_modal3'
    button4.classList ='button bt-primary'
    button4.id ='bt_insert'

    span1.innerText ='Registro de valor'
    buttonClose.innerText ='X'
    span2.innerText ='Digite o valor e em seguida aperte no botão referente ao tipo do valor'
    span3.innerText ='Valor'
    input.placeholder ='R$ 00,00'
    span4.innerText ='Tipo de valor'
    button1.innerText ='Entrada'
    button2.innerText ='Saida'
    button3.innerText ='Cancelar'
    button4.innerText ='Inserir valor'


    buttonClose.addEventListener('click', closeModal)


    buttonCat(button1, button2, span4)

    
    
   
    buttonCancel(button3)
    buttonInsert(button4, input, span4)
    main.appendChild(divModal)
}

function closeModal(event) {
    let closeModal = document.getElementById('modal')
    closeModal.remove()
}

function buttonCancel(button) {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        closeModal(event)
        modalCreator(event)
    })
}

function buttonInsert(button, input, span) {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        const ul = document.getElementById('show_values')
        if (span.id === '1' || span.id === '2') {
            const newObj = {}
            newObj.id = insertedValues.length+1
            newObj.value = parseInt(input.value)
            newObj.categoryID = parseInt(span.id)
            console.log('newObj :', newObj);
            insertedValues.push(newObj)
            ul.innerHTML =''
            renderValues(insertedValues)
            closeModal(event)
        } else {alert('Selecione tipo de valor')}
            
    })
}

function buttonCat(button1, button2, span) {
    button1.addEventListener('click', (event) => {event.preventDefault()
        span.id = 1
        button1.classList ='bt-outline-active'
        button2.classList ='bt-outline'})
    button2.addEventListener('click', (event) => {event.preventDefault()
        span.id = 2 
        button2.classList ='bt-outline-active'
        button1.classList ='bt-outline'})

}