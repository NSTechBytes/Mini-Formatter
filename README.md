

# Mini Formatter - A Stylish Chrome Code Formatter

**Mini Formatter** is a lightweight and user-friendly Chrome extension designed to format your CSS, HTML, and JavaScript code directly within the browser. Whether you're pasting code, uploading a local file, or working with web-based projects, Mini Formatter ensures that your code is clean, readable, and properly formatted.

This extension includes a modern, stylish interface with a dark mode option, local file loading, copy-to-clipboard functionality, and downloadable formatted code. Built with simplicity in mind, it integrates seamlessly into your daily workflow without complicated setup or unnecessary features.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Extension Permissions](#extension-permissions)
- [Screenshots](#screenshots)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### 1. **Code Formatting**
Mini Formatter automatically formats HTML, CSS, and JavaScript code. It utilizes the `js-beautify` library to beautify your code with proper indentation and spacing, making it easier to read and work with.

- **Supported Code Formats**: 
    - HTML
    - CSS
    - JavaScript
- **Auto-Detection**: No need to select the file type. The extension auto-detects the format and applies appropriate formatting rules.
  
### 2. **Load Code from Local Files**
You can upload local `.html`, `.css`, or `.js` files directly into the extension, where the content will be loaded and formatted.

- **Supported File Types**: `.html`, `.css`, `.js`
- **File Input**: Browse for files or drag-and-drop them directly into the extension.

### 3. **Copy to Clipboard**
After formatting your code, you can easily copy it to the clipboard with a single click. A notification confirms when the code is successfully copied.

### 4. **Download Formatted Code**
Once formatted, you can download your code in `.txt` format. The extension ensures that the file is saved with your formatted code, providing a handy way to back up your work or share it with others.

### 5. **Dark Mode**
Toggle between light and dark mode with the click of a button. Dark mode provides a sleek, modern aesthetic for those who prefer working with darker interfaces.

### 6. **Stylish User Interface**
The extension is designed with a clean, modern layout. Buttons are intuitive, icons are provided via Font Awesome, and the overall aesthetic is visually appealing and functional.

---



### Manual Installation
1. Clone or download the repository:
   ```bash
   git clone https://github.com/NSTechBytes/Mini-Formatter.git
   ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (toggle is in the upper right corner).
4. Click on "Load unpacked" and select the folder where you cloned the repository.
5. The Mini Formatter extension will appear in your Chrome extensions bar.

---

## Usage

1. **Open the Extension**: Click on the Mini Formatter icon from your Chrome toolbar.
2. **Input Code**:
    - Paste your CSS, HTML, or JavaScript code into the provided textarea.
    - Or, click the "Choose File" button to upload a file from your local system.
3. **Format**: Press the "Format Code" button. The code will automatically be beautified and displayed in the lower textarea.
4. **Copy or Download**:
    - Copy the formatted code to your clipboard using the "Copy" button.
    - Download the formatted code in `.txt` format using the "Download" button.
5. **Dark Mode**: Toggle the dark mode using the switch in the upper right corner of the extension.

---

## Keyboard Shortcuts

- **Ctrl + C** (Cmd + C on Mac): Copy the formatted code to the clipboard.
- **Enter**: Format the code once the input is provided.
- **Esc**: Close the extension.

---

## Extension Permissions

Mini Formatter only requires permission to access local files. This is necessary for the "Choose File" functionality, which allows you to load code from your computer.

The extension does **not** collect or send any user data. Your code is processed locally within the browser.

---

## Screenshots

### Light Mode
![Light Mode Screenshot](https://github.com/NSTechBytes/Projects-Templates/blob/main/Extensions/Mini%20Formatter/Light.png)

### Dark Mode
![Dark Mode Screenshot](https://github.com/NSTechBytes/Projects-Templates/blob/main/Extensions/Mini%20Formatter/Dark.png)

---

## Development

### Prerequisites

To build the Mini Formatter extension from source, you'll need the following installed:

- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [npm](https://www.npmjs.com/)

### Cloning the Repository
```bash
git clone https://github.com/NSTechBytes/Mini-Formatter.git
cd mini-formatter
```

### Local Development
1. Run `npm install` to install dependencies.
2. Run the extension in development mode by following the "Manual Installation" steps mentioned above.
3. Make your changes and test them directly by reloading the extension in Chrome.

### Building for Production
Run the following command to create a production-ready build of the extension:
```bash
npm run build
```
This will create a `dist/` folder with all the necessary files to upload to the Chrome Web Store.

---

## Contributing

Contributions are welcome! If you have suggestions, bug fixes, or new features, feel free to open an issue or submit a pull request. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature/bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and test them locally.
4. Commit and push your changes:
   ```bash
   git commit -m "Add some feature"
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.

---

## License

This project is licensed under the MIT License. You can view the license file [here](LICENSE).

---

## Acknowledgments

- [js-beautify](https://github.com/beautify-web/js-beautify) - The open-source code beautifier used for formatting CSS, HTML, and JS.
- [Font Awesome](https://fontawesome.com/) - The icons used in the extension.
- Inspiration from various formatting tools and extensions available online.

---

By using **Mini Formatter**, you'll have an efficient, stylish, and straightforward way to beautify your code, making it easier to maintain and share. Whether you're a seasoned developer or just starting, Mini Formatter will simplify your workflow and enhance your productivity.

