import addUser from './addUser'

export default function updateTable(data){
    const table = document.querySelector('div[class="employees-data"]')
    table.innerHTML = ""
    if(!data){
        var data = JSON.parse(localStorage.getItem('tempdata'))
    }
    data.map((user, i) => {
        table.appendChild(addUser(i+1, user.id, user.age, user.name, user.gender, user.company, user.email, user.phone, user.address))
    })
}