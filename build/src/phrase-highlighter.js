import { highlightParts } from './highlight-parts';
import { createHighlightRegexp } from './create-highlight-regexp';
export const phraseHighlighter = (word, flags = 'u', regexp = createHighlightRegexp(word, undefined, flags)) => text => highlightParts(text, regexp);
//# sourceMappingURL=phrase-highlighter.js.map