function countText() {
    const text = document.getElementById('textInput').value;

    // Count words
    const words = text.match(/\b\w+\b/g);
    const wordCount = words ? words.length : 0;

    // Count characters
    const charCount = text.length;

    // Count paragraphs
    const paragraphs = text.split(/\n+/);
    const paragraphCount = paragraphs.filter(paragraph => paragraph.trim().length > 0).length;

    // Count numbers
    const numbers = text.match(/\d/g);
    const numberCount = numbers ? numbers.length : 0;

    // Count special characters
    const specialChars = text.match(/[^a-zA-Z0-9\s]/g);
    const specialCharCount = specialChars ? specialChars.length : 0;

    // Update HTML
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('charCount').textContent = charCount;
    document.getElementById('paragraphCount').textContent = paragraphCount;
    document.getElementById('numberCount').textContent = numberCount;
    document.getElementById('specialCharCount').textContent = specialCharCount;
}
