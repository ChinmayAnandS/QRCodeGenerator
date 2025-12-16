# QRCodeGenerator

## Overview
A small, client-side QR code generator that creates downloadable QR code images from text or URLs. The app is lightweight and runs entirely in the browser.

## Features
- Generate QR codes from any text or URL
- Download generated QR as PNG
- No build steps or server required (uses CDN for QR library)

## Usage
1. Open `index.html` in your browser.
2. Enter text or a URL in the input field and click "Generate QR Code".
3. Click "Download QR Code" to save the image.

Optional (serve locally):

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Files
- `index.html` — main UI
- `script.js` — QR generation and download logic
- `styles.css` — basic styling
- `favicon.svg` — project favicon

## Dependencies
- QRCode.js (loaded from CDN in `index.html`)

## Contributing
Issues and pull requests are welcome. Keep changes small and focused.

## License
MIT