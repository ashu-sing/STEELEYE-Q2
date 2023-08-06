// Helper function to highlight a specific portion of HTML content
function highlightSubstringInHTML(substring, htmlContent) {
    const startIndex = htmlContent.indexOf(substring);
    
    // If the substring is not found, return the original HTML content
    if (startIndex === -1) {
        return htmlContent;
    }

    const endIndex = startIndex + substring.length;
    const pre = htmlContent.slice(0, startIndex);
    const markup = htmlContent.substring(startIndex, endIndex);
    const suf = htmlContent.slice(endIndex);

    return `${pre}<mark>${markup}</mark>${suf}`;
}

// Main function to highlight multiple plain text positions in the HTML content
function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    let result = htmlContent;

    // Convert plain text positions to HTML content positions
    const htmlContentPositions = plainTextPositions.map(({ start, end }) => ({
        start: htmlContent.indexOf(plainText.slice(start, end)),
        end: htmlContent.indexOf(plainText.slice(start, end)) + (end - start),
    }));

    // Highlight each position in the HTML content
    htmlContentPositions.forEach(({ start, end }) => {
        // Highlight the substring in the HTML content
        result = highlightSubstringInHTML(htmlContent.substring(start, end), result);
    });

    return result;
}
