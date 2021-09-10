import { createHighlightRegexp } from './create-highlight-regexp';
import { highlightParts } from './highlight-parts';
import type { THighlighterFunction } from './types';

export const phraseHighlighter = (
  word: string,
  flags = 'u',
  regexp = createHighlightRegexp( word, undefined, flags )
): THighlighterFunction => text => highlightParts( text, regexp );
