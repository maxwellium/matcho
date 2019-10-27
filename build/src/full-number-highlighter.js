"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_highlight_regexp_1 = require("./create-highlight-regexp");
const phrase_highlighter_1 = require("./phrase-highlighter");
exports.fullNumberHighlighter = (findNumbersSequence) => phrase_highlighter_1.phraseHighlighter(findNumbersSequence, undefined, create_highlight_regexp_1.createHighlightRegexp(findNumbersSequence, '\\D*'));
//# sourceMappingURL=full-number-highlighter.js.map