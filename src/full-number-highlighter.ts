import { createHighlightRegexp } from './create-highlight-regexp';
import { phraseHighlighter } from './phrase-highlighter';
import { THighlighterFunction } from './types';

export const fullNumberHighlighter = ( findNumbersSequence: string ): THighlighterFunction => phraseHighlighter(
  findNumbersSequence,
  undefined,
  createHighlightRegexp( findNumbersSequence, '\\D*' )
);
