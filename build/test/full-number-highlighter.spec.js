"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const full_number_highlighter_1 = require("../src/full-number-highlighter");
describe('fullNumberHighlighter', () => {
    it('should find number separated by other chars', () => {
        const highlighter = full_number_highlighter_1.fullNumberHighlighter('4567');
        expect(highlighter('##12-34-56-78-90')).toEqual([
            { match: false, part: '##12-3' },
            { match: true, part: '4-56-7' },
            { match: false, part: '8-90' }
        ]);
    });
});
//# sourceMappingURL=full-number-highlighter.spec.js.map