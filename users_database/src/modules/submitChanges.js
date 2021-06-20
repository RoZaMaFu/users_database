import updateTable from "./updateTable";

export default function submitChanges(){
    localStorage.setItem('data', localStorage.getItem('tempdata'))
    updateTable()
}