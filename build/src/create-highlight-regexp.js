export const createHighlightRegexp = (findText, stopRegexpString = '', flags = 'u') => new RegExp(`(${findText
    .replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&')
    .split('')
    .join(stopRegexpString)})`, flags);
//# sourceMappingURL=create-highlight-regexp.js.map