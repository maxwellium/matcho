"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const full_text_highlighter_1 = require("../src/full-text-highlighter");
describe('fullTextHighlighter', () => {
    it('should find text separated by other chars', () => {
        const highlighter = full_text_highlighter_1.fullTextHighlighter('abcd');
        expect(highlighter('ab cdefgh.a--bc?++d abcöd')).toEqual([
            { match: true, part: 'ab cd' },
            { match: false, part: 'efgh.' },
            { match: true, part: 'a--bc?++d' },
            { match: false, part: ' abcöd' }
        ]);
    });
});
//# sourceMappingURL=full-text-highlighter.spec.js.map