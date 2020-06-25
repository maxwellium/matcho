import { fullTextHighlighter } from '../src';

describe( 'fullTextHighlighter', () => {

  it( 'should find text separated by other chars', () => {

    const highlighter = fullTextHighlighter( 'abcd' );

    expect( highlighter( 'ab cdefgh.a--bc?++d abcöd' ) ).toEqual( [
      { match: true, part: 'ab cd' },
      { match: false, part: 'efgh.' },
      { match: true, part: 'a--bc?++d' },
      { match: false, part: ' abcöd' }
    ] );
  } );

} );