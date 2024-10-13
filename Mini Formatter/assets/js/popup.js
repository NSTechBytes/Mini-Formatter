document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const copyBtn = document.getElementById('copyBtn');
    const formatBtn = document.getElementById('formatBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const codeInput = document.getElementById('codeInput');
    const formattedCode = document.getElementById('formattedCode');
    const fileInput = document.getElementById('fileInput');
    const notification = document.getElementById('notification');
    const minifyCheckbox = document.getElementById('minify');

    if (!darkModeToggle || !copyBtn || !formatBtn || !downloadBtn || !codeInput || !formattedCode || !fileInput || !notification || !minifyCheckbox) {
        console.error('One or more elements are missing from the HTML.');
        return;
    }

    // Set initial dark mode based on local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });

    // Copy formatted code to clipboard
    copyBtn.addEventListener('click', function () {
        const textToCopy = formattedCode.value;
        navigator.clipboard.writeText(textToCopy).then(function () {
            if (notification) {
                notification.classList.add('show');
                setTimeout(() => notification.classList.remove('show'), 2000);
            }
        }).catch(function (err) {
            console.error('Failed to copy: ', err);
        });
    });

    // Format code based on detected type
    formatBtn.addEventListener('click', function () {
        const code = codeInput.value;
        const detectedType = detectCodeType(code);
        let formatted;

        switch (detectedType) {
            case 'html':
                formatted = html_beautify(code);
                break;
            case 'css':
                formatted = css_beautify(code);
                break;
            case 'js':
                formatted = js_beautify(code);
                break;
            default:
                formatted = code;
                break;
        }

        if (minifyCheckbox.checked) {
            formatted = minifyCode(formatted, detectedType);
        }

        formattedCode.value = formatted;
    });

    // Download formatted code as .txt file
    downloadBtn.addEventListener('click', function () {
        const code = formattedCode.value;
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'formatted-code.txt';
        a.click();
        URL.revokeObjectURL(url);
    });

    // Load file and display its content in the input area
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                codeInput.value = e.target.result;
            };
            reader.readAsText(file);
        }
    });

    // Detect code type based on content
    function detectCodeType(code) {
        // Improved detection logic
        if (/^\s*<!DOCTYPE\s+html/i.test(code) || /<html>/i.test(code)) {
            return 'html';
        } else if (/^\s*([a-zA-Z_][a-zA-Z0-9_-]*)\s*\{/.test(code)) {
            return 'css';
        } else if (/function\s+[a-zA-Z_][a-zA-Z0-9_]*\s*\(/.test(code) ||
                   /var\s+[a-zA-Z_][a-zA-Z0-9_]*\s*=/.test(code) ||
                   /const\s+[a-zA-Z_][a-zA-Z0-9_]*\s*=/.test(code) ||
                   /let\s+[a-zA-Z_][a-zA-Z0-9_]*\s*=/.test(code) ||
                   /[\{\};\(\)\[\]=\+\-\*\/\&\|\!\?]/.test(code)) {
            return 'js';
        } else {
            return 'txt';
        }
    }

    // Minify code based on type
    function minifyCode(code, type) {
        switch (type) {
            case 'html':
                return html_beautify(code, { indent_size: 0 });
            case 'css':
                return css_beautify(code, { indent_size: 0 });
            case 'js':
                return js_beautify(code, { indent_size: 0, preserve_newlines: false });
            default:
                return code;
        }
    }
});



