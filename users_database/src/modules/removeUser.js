import updateTable from "./updateTable"

export default function removeUser(id){
    let data = JSON.parse(localStorage.getItem('tempdata'))
    data = data.filter(user => user.id !== id)
    localStorage.setItem('tempdata', JSON.stringify(data))
    updateTable(data)
}