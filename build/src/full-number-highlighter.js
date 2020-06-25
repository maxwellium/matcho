import { createHighlightRegexp } from './create-highlight-regexp';
import { phraseHighlighter } from './phrase-highlighter';
export const fullNumberHighlighter = (findNumbersSequence) => phraseHighlighter(findNumbersSequence, undefined, createHighlightRegexp(findNumbersSequence, '\\D*'));
//# sourceMappingURL=full-number-highlighter.js.map