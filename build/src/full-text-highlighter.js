import { createHighlightRegexp } from './create-highlight-regexp';
import { phraseHighlighter } from './phrase-highlighter';
export const fullTextHighlighter = (findFullText) => phraseHighlighter(findFullText, undefined, createHighlightRegexp(findFullText, '[^\\p{L}]*', 'ui'));
//# sourceMappingURL=full-text-highlighter.js.map