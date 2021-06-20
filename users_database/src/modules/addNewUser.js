import showModalWindow from "./showModalWindow"

export default function addNewUser(num){
    let isEditing = true

    const userDiv = document.createElement('div')
    userDiv.classList.add('employee-line')
    const userNum = document.createElement('div')
    userNum.classList.add('employee-number', 'employee-cell')
    userNum.innerHTML = num
    const userId = document.createElement('div')
    userId.classList.add('employee-id', 'employee-cell')
    const idInput = document.createElement('input')
    idInput.type = "text"
    idInput.classList.add('data-input')
    userId.appendChild(idInput)
    const userAge = document.createElement('div')
    userAge.classList.add('employee-age', 'employee-cell')
    const ageInput = document.createElement('input')
    ageInput.type = "text"
    ageInput.classList.add('data-input')
    userAge.appendChild(ageInput)
    const userFullname = document.createElement('div')
    userFullname.classList.add('employee-fullname', 'employee-cell')
    const fullnameInput = document.createElement('input')
    fullnameInput.type = "text"
    fullnameInput.classList.add('data-input')
    userFullname.appendChild(fullnameInput)
    const userGender = document.createElement('div')
    userGender.classList.add('employee-gender', 'employee-cell')
    const genderInput = document.createElement('input')
    genderInput.type = "text"
    genderInput.classList.add('data-input')
    userGender.appendChild(genderInput)
    const userCompany = document.createElement('div')
    userCompany.classList.add('employee-company', 'employee-cell')
    const companyInput = document.createElement('input')
    companyInput.type = "text"
    companyInput.classList.add('data-input')
    userCompany.appendChild(companyInput)
    const userEmail = document.createElement('div')
    userEmail.classList.add('employee-email', 'employee-cell')
    const emailInput = document.createElement('input')
    emailInput.type = "text"
    emailInput.classList.add('data-input')
    userEmail.appendChild(emailInput)
    const userPhone = document.createElement('div')
    userPhone.classList.add('employee-phone', 'employee-cell')
    const phoneInput = document.createElement('input')
    phoneInput.type = "text"
    phoneInput.classList.add('data-input')
    userPhone.appendChild(phoneInput)
    const userAddress = document.createElement('div')
    userAddress.classList.add('employee-address', 'employee-cell')
    const addressInput = document.createElement('input')
    addressInput.type = "text"
    addressInput.classList.add('data-input')
    userAddress.appendChild(addressInput)
    const userActions = document.createElement('div')
    userActions.classList.add('employee-actions', 'employee-cell')
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn')
    editBtn.innerHTML = "OK"
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = "X"
    userActions.appendChild(editBtn)
    userActions.appendChild(deleteBtn)

    editBtn.onclick = () => {
        isEditing = !isEditing
        const inputs = Array.from(userDiv.querySelectorAll('input'))
        inputs.map(input => {
            if(isEditing){
                input.disabled = false
                editBtn.innerHTML = "OK"
            }
            else {
                input.disabled = true
                editBtn.innerHTML = "Edit"
            }
            if(!isEditing){
                const data = JSON.parse(localStorage.getItem('tempdata')).filter(user => user.id !== idInput.value)
                data.push({
                    id: idInput.value,
                    age: ageInput.value,
                    name: fullnameInput.value,
                    gender: genderInput.value,
                    company: companyInput.value,
                    email: emailInput.value,
                    phone: phoneInput.value,
                    address: addressInput.value
                })
                localStorage.setItem('tempdata', JSON.stringify(data))
            }
        })
    }

    deleteBtn.onclick = () => {
        showModalWindow(idInput.value)
    }

    userDiv.appendChild(userNum)
    userDiv.appendChild(userId)
    userDiv.appendChild(userAge)
    userDiv.appendChild(userFullname)
    userDiv.appendChild(userGender)
    userDiv.appendChild(userCompany)
    userDiv.appendChild(userEmail)
    userDiv.appendChild(userPhone)
    userDiv.appendChild(userAddress)
    userDiv.appendChild(userActions)
    return userDiv
}