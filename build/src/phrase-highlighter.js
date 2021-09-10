import { createHighlightRegexp } from './create-highlight-regexp';
import { highlightParts } from './highlight-parts';
export const phraseHighlighter = (word, flags = 'u', regexp = createHighlightRegexp(word, undefined, flags)) => text => highlightParts(text, regexp);
//# sourceMappingURL=phrase-highlighter.js.map