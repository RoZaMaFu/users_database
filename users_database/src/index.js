import updateTable from './modules/updateTable'
import addNewUser from './modules/addNewUser'
import filterColumn from './modules/filterColumn'
import submitChanges from './modules/submitChanges'


if(!JSON.parse(localStorage.getItem('data'))){
    localStorage.setItem('data', JSON.stringify([]))
}
localStorage.setItem('tempdata', localStorage.getItem('data'))

const filterInput = document.querySelector('input[class="search-input"]')

filterInput.oninput = (e) => {
    const regex = new RegExp(`${e.target.value}`, 'ig')
    const data = JSON.parse(localStorage.getItem('data')).filter(user => {
        for (let key in user) {
            if(regex.test(user[key])){
                return true
            }
        }
    })
    if(e.target.value){
        updateTable(data)
    }
}

const addBtn = document.querySelector('button[class="add-btn"]')
addBtn.onclick = () => {
    const table = document.querySelector('div[class="employees-data"]')
    table.appendChild(addNewUser(JSON.parse(localStorage.getItem('data')).length + 1))
}

const uploadBtn = document.querySelector('button[class="upload-btn"]')
const uploadInput = document.getElementById('upload-input')

uploadBtn.onclick = () => {
    uploadInput.click()
}

uploadInput.onchange = (e) => {
    let currentData = JSON.parse(localStorage.getItem('data'))
    const reader = new FileReader()
    reader.readAsBinaryString(e.target.files[0])
    reader.onload = () => {
        const dataToAdd = JSON.parse(reader.result)
        currentData = currentData.concat(dataToAdd)
        localStorage.setItem('tempdata', JSON.stringify(currentData))
        updateTable(currentData)
    }
}

const exportBtn = document.querySelector('button[class="export-btn"]')

exportBtn.onclick = () => {
    const data = localStorage.getItem('data')
    const a = document.createElement('a')
    a.download = "export.json"
    a.href = `data:application/json;;charset=utf-8,${encodeURIComponent(data)}`
    document.querySelector('body').appendChild(a)
    a.click()
    a.remove()
}

const tableHeaderCells = Array.from(document.querySelector('div[class="table-header"]').querySelectorAll('div'))
tableHeaderCells.map(cell => {
    cell.onclick = () => {
        filterColumn(cell.innerHTML)
    }
})

const submitBtn = document.querySelector('button[class="submit-btn"]')
submitBtn.onclick = () => {
    submitChanges()
}

updateTable()
