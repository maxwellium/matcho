"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const highlight_parts_1 = require("./highlight-parts");
const create_highlight_regexp_1 = require("./create-highlight-regexp");
exports.phraseHighlighter = (word, flags = 'u', regexp = create_highlight_regexp_1.createHighlightRegexp(word, undefined, flags)) => text => highlight_parts_1.highlightParts(text, regexp);
//# sourceMappingURL=phrase-highlighter.js.map