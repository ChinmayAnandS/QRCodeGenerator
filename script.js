document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const generateBtn = document.getElementById('generateBtn');
    const qrcodeDiv = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');

    let qrcode;

    generateBtn.addEventListener('click', function() {
        const text = textInput.value.trim();
        if (!text) {
            alert('Please enter some text or URL');
            return;
        }

        // Clear previous QR code
        qrcodeDiv.innerHTML = '';

        // Generate new QR code
        qrcode = new QRCode(qrcodeDiv, {
            text: text,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Show download button
        downloadBtn.style.display = 'inline-block';
    });

    downloadBtn.addEventListener('click', function() {
        if (!qrcode) return;

        // Get the canvas element
        const canvas = qrcodeDiv.querySelector('canvas');
        if (canvas) {
            // Create download link
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = canvas.toDataURL();
            link.click();
        }
    });
});
