import updateTable from "./updateTable"

export default function filterColumn(column){
    let data = JSON.parse(localStorage.getItem('tempdata'))
    const columnId = column.replace(/\s/g, '').toLowerCase()
    let sortBy = document.getElementById(columnId).classList[1]
    data = data.sort(function(a, b){
        if(a[columnId]>b[columnId]){
            return document.getElementById(columnId).classList[1] === "asc" ? -1 : 1
        }
        return document.getElementById(columnId).classList[1] === "asc" ? 1 : -1
    })
    if(sortBy === "asc"){
        document.getElementById(columnId).classList.remove("asc")
        document.getElementById(columnId).classList.add("desc")
    }
    else{
        document.getElementById(columnId).classList.remove("desc")
        document.getElementById(columnId).classList.add("asc")
    }
    localStorage.setItem('tempdata', JSON.stringify(data))
    updateTable(data)
}