export interface IResultPart {
  part: string;
  match: boolean;
};

export type THighlighterFunction = ( text: string ) => IResultPart[];
