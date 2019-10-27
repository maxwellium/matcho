import { fullNumberHighlighter } from '../src/full-number-highlighter';

describe( 'fullNumberHighlighter', () => {

  it( 'should find number separated by other chars', () => {

    const highlighter = fullNumberHighlighter( '4567' );

    expect( highlighter( '##12-34-56-78-90' ) ).toEqual( [
      { match: false, part: '##12-3' },
      { match: true, part: '4-56-7' },
      { match: false, part: '8-90' }
    ] );
  } );

} );