const titleInp = document.querySelector('#title')
const descArea = document.querySelector('#desc')
const addBtn = document.querySelector('#add')
const listDiv = document.querySelector('.list')

const createAndAddToDo = (title, desc) => {
   if (title && desc) {
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const delBtn = document.createElement('button')

        div.className = 'todo'
        div.style.marginTop = "20px"

        h4.className = "todo__title"
        h4.innerText = title

        p.className = "todo__desc"
        p.innerText = desc
        delBtn.innerText = "x"
        delBtn.addEventListener('click', () => {
            listDiv.removeChild(div)
        })

        div.append(h4, p, delBtn)
        listDiv.append(div)
        titleInp.value = ''
        descArea.value = ''
   }

}

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    createAndAddToDo(titleInp.value, descArea.value)
})
