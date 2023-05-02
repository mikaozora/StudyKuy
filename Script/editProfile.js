let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
const body = document.querySelector("body")
const overlay = document.querySelector(".overlay")
const saveBtn = document.querySelector(".btn-save")
const btnModal = document.querySelector(".btn-modal")
// const form = document.getElementById('form');
// const nama = document.getElementById('nama');
// const username = document.getElementById('username1');
// const address = document.getElementById('address');
// const password = document.getElementById('password');
// const numberPhone = document.getElementById('numberPhone');
// const genderMale = document.getElementById('dot-1');
// const genderFemale = document.getElementById('dot-2');
let check = 0;

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    console.log(uploadButton.files[0]);
    reader.onload = () =>{
        chosenImage.setAttribute("src" , reader.result);
    }
}

saveBtn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.add('active')
    console.log("test");
})

btnModal.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.remove('active')
    window.location.href = "index.html"
})

overlay.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.remove('active')
})



// form.addEventListener('submit' , e =>{
//     check = 0;
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('succes')
//     check = 1
// }

// const setSucces = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('succes');
//     inputControl.classList.remove('error')
    
// };

// const validateInputs = () => {
//     const nameValue = nama.value.trim();
//     const usernameValue = username.value.trim();
//     const addressValue = address.value.trim();
//     const passwordValue = password.value.trim();
//     const numberPhoneValue = numberPhone.value.trim();
//     // const genderMaleValue = genderMale.checked;
//     // const genderFemaleValue = genderFemale.checked;


//     if(nameValue === ''){
//         setError(nama , 'Name is Required');
//     }else if(nameValue.length > 50){
//         setError(nama , 'Max 50 Characters');
//     }else{
//         setSucces(nama);
//     }

//     if(usernameValue === ''){
//         setError(username , 'Username is Required');
//     }else{
//         setSucces(username);
//     }

//     if(addressValue === ''){
//         setError(address , 'Address is Required');
//     }
//     else{
//         setSucces(address);
//     }

//     if(passwordValue === ''){
//         setError(password , 'Password is Required');
//     }else if(passwordValue.length < 8){
//         setError(password , 'Minimum Characters is 8 Characters');
//     }else{
//         setSucces(password);
//     }

//     if (numberPhoneValue === ''){
//         setError(numberPhone , 'Number Phone is Required');
//     } else{
//         setSucces(numberPhone);
//     }

//     if(!genderMaleValue && !genderFemaleValue){
//         setError()
//     }

//     console.log(check)

//     if(check === 0){
//         saveBtn.addEventListener('click', (e) => {
//             e.preventDefault()
//             body.classList.add('active')
//             console.log("test");
//         })
        
//         btnModal.addEventListener('click', (e) => {
//             e.preventDefault()
//             body.classList.remove('active')
//             window.location.href = "#"
//         })
        
//         overlay.addEventListener('click', (e) => {
//             e.preventDefault()
//             body.classList.remove('active')
//         })
//     }
// }