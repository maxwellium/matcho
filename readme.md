Tree-shakeable zero-dependencies utility functions to identify and highlight texts, numbers and expressions in text.

example:
```typescript
import { fullNumberHighlighter } from 'matcho/full-number-highlighter';

const highlighter = fullNumberHighlighter( '0123' );

const domHighlight = ( input: string ) => highlighter( input )
  .map( ( { match, part } ) => match ? `<span class="highlight">${ part }</span>` : part )
  .join( '' );


domHighlight( '#0 12-34 5678' ) === '#<span class="highlight">0 12-3</span>4 5678';
```


or in the form of an angular pipe:
```typescript
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { wordHighlighter } from 'matcho/word-highlighter';

@Pipe( {
  name: 'matchoWord'
} )
export class MatchoWordPipe implements PipeTransform {

  constructor( private sanitizer: DomSanitizer ) { }

  transform( value: string, word: string ): string {

    const highlighter = wordHighlighter( word );

    const highlighted = highlighter( value )
      .map( ( { match, part } ) => match ? `<span class="highlight">${ part }</span>` : part )
      .join( '' );

    return this.sanitizer.bypassSecurityTrustHtml( highlighted );
  }
}
```


---

Copyright (c) 2019 **Max Dancau**

License **MIT**