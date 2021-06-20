import updateTable from "./updateTable";

export default function submitChanges(){
    const alertWindow = document.querySelector('div[class="submit-alert"]')
    alertWindow.style.height = '3rem'
    alertWindow.style.color = '#000'
    alertWindow.style.border = '2px solid rgb(90, 145, 64)'
    const alertWindowText = document.querySelector('div[class="submit-alert-text"]')
    alertWindowText.style.height = '1.1rem'
    setTimeout(() => {
        alertWindow.style.height = '0'
        alertWindow.style.color = '#fff'
        alertWindow.style.border = '0'
        alertWindowText.style.height = '0'
    }, 3000)
    localStorage.setItem('data', localStorage.getItem('tempdata'))
    updateTable()
}