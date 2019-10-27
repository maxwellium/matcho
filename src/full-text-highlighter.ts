import { createHighlightRegexp } from './create-highlight-regexp';
import { phraseHighlighter } from './phrase-highlighter';
import { THighlighterFunction } from './types';

export const fullTextHighlighter = ( findFullText: string ): THighlighterFunction => phraseHighlighter(
  findFullText,
  undefined,
  createHighlightRegexp( findFullText, '[^\\p{L}]*', 'ui' )
);
