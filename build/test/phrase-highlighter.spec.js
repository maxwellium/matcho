"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const phrase_highlighter_1 = require("../src/phrase-highlighter");
describe('phraseHighlighter', () => {
    it('should find consecutive character sequences', () => {
        const highlighter = phrase_highlighter_1.phraseHighlighter('man');
        expect(highlighter('man woman tom and Man')).toEqual([
            { match: true, part: 'man' },
            { match: false, part: ' wo' },
            { match: true, part: 'man' },
            { match: false, part: ' tom and Man' }
        ]);
    });
    it('should find case insensitive sequences', () => {
        const highlighter = phrase_highlighter_1.phraseHighlighter('man', 'ui');
        expect(highlighter('man woman tom and Man')).toEqual([
            { match: true, part: 'man' },
            { match: false, part: ' wo' },
            { match: true, part: 'man' },
            { match: false, part: ' tom and ' },
            { match: true, part: 'Man' }
        ]);
    });
});
//# sourceMappingURL=phrase-highlighter.spec.js.map