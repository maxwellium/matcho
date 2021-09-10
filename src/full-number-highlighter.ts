import { createHighlightRegexp } from './create-highlight-regexp';
import { phraseHighlighter } from './phrase-highlighter';
import type { THighlighterFunction } from './types';

export const fullNumberHighlighter = (
  findNumbersSequence: string
): THighlighterFunction => phraseHighlighter(
  findNumbersSequence,
  undefined,
  createHighlightRegexp( findNumbersSequence, '\\D*' )
);
