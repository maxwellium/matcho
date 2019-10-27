export interface IResultPart {
    part: string;
    match: boolean;
}
export declare type THighlighterFunction = (text: string) => IResultPart[];
