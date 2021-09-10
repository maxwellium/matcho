import type { IResultPart } from './types';

export const highlightParts = (
  fullText: string,
  regexp: RegExp
): IResultPart[] => fullText
  .split( regexp )
  .map( ( part, index ) => ( { part, match: Boolean( index % 2 ) } ) )
  .filter( ( { part } ) => part.length );
