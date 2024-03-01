const qrTxt = document.getElementById('qr-text')
const sizes = document.querySelector('#sizes')
const genBtn = document.getElementById('generateBtn')
const resetBtn = document.getElementById('resetBtn')
const dwnBtn = document.getElementById('downloadBtn')
const qrcontainer = document.querySelector('.qr-body')


genBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput()

});
resetBtn.addEventListener('click', (e) => {
    if (qrTxt.value.length == 0) {
        e.preventDefault();
    } else {
        qrcontainer.innerHTML = ""

    }
})
dwnBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img');
    if (img !== null) {
        let imgAttr = img.getAttribute('src')
        dwnBtn.setAttribute("href", imgAttr);
    } else {
        alert("Enter the text or url to generate the qr code");

    }

})
sizes.addEventListener('change', (e) => {
    sizes.value = e.target.value;
    isEmptyInputChangeSize()

});

function isEmptyInputChangeSize() {
    if (qrTxt.value.length > 0) {
        generateQRCode();
    } else {

    }
}

function isEmptyInput() {
    if (qrTxt.value.length > 0) {
        generateQRCode();
    } else {
        alert("Enter the text or url to generate the qr code")
    }
}

function generateQRCode() {
    qrcontainer.innerHTML = ""
    new QRCode(qrcontainer, {
        text: qrTxt.value,
        width: sizes.value,
        height: sizes.value,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}