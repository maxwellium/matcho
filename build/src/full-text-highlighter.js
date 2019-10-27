"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_highlight_regexp_1 = require("./create-highlight-regexp");
const phrase_highlighter_1 = require("./phrase-highlighter");
exports.fullTextHighlighter = (findFullText) => phrase_highlighter_1.phraseHighlighter(findFullText, undefined, create_highlight_regexp_1.createHighlightRegexp(findFullText, '[^\\p{L}]*', 'ui'));
//# sourceMappingURL=full-text-highlighter.js.map