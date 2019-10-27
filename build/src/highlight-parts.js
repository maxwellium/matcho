"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlightParts = (fullText, regexp) => fullText
    .split(regexp)
    .map((part, index) => ({ part, match: Boolean(index % 2) }))
    .filter(({ part }) => part.length);
//# sourceMappingURL=highlight-parts.js.map