export const highlightParts = (fullText, regexp) => fullText
    .split(regexp)
    .map((part, index) => ({ part, match: Boolean(index % 2) }))
    .filter(({ part }) => part.length);
//# sourceMappingURL=highlight-parts.js.map