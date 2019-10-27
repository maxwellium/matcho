import { phraseHighlighter } from '../src/phrase-highlighter';

describe( 'phraseHighlighter', () => {

  it( 'should find consecutive character sequences', () => {

    const highlighter = phraseHighlighter( 'man' );
    expect( highlighter( 'man woman tom and Man' ) ).toEqual( [
      { match: true, part: 'man' },
       { match: false, part: ' wo' },
       { match: true, part: 'man' },
       { match: false, part: ' tom and Man' }
    ] );
  } );

  it( 'should find case insensitive sequences', () => {

    const highlighter = phraseHighlighter( 'man', 'ui' );
    expect( highlighter( 'man woman tom and Man' ) ).toEqual( [
      { match: true, part: 'man' },
       { match: false, part: ' wo' },
       { match: true, part: 'man' },
       { match: false, part: ' tom and ' },
       { match: true, part: 'Man' }
    ] );
  } );

} );