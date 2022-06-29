---
title: "CSS"
tags:
- frontend
- seed
---

Cascading style sheets (CSS) 

## Debugging CSS

This is the single most useful stylesheet that I've found to help with debugging.
Take it for a spin and see what how it works. Credit goes to
[@anytizer](https://gist.github.com/anytizer/8121387) for the public gist.


```css {title="debug.css", linenos=false}
/*http://yysource.com/2011/03/debugging-with-css-outline-all-elements/*/

* { outline: 2px dotted red }
* * { outline: 2px dotted green }
* * * { outline: 2px dotted orange }
* * * * { outline: 2px dotted blue }
* * * * * { outline: 1px solid red }
* * * * * * { outline: 1px solid green }
* * * * * * * { outline: 1px solid orange }
* * * * * * * * { outline: 1px solid blue }


/*http://www.marcofolio.net/css/css_trick_debug_your_html_and_css.html*/

* *:hover { border:2px solid #89A81E }                   /* Solid Green */
* * *:hover { border:2px solid #F34607 }                 /* Solid Orange */
* * * *:hover { border:2px solid #5984C3 }               /* Solid Blue */
* * * * *:hover { border:2px solid #CD1821 }             /* Solid Red */
* * * * * *:hover { border:2px dotted #89A81E }          /* Dotted Green */
* * * * * * *:hover { border:2px dotted #F34607 }        /* Dotted Orange */
* * * * * * * *:hover { border:2px dotted #5984C3 }      /* Dotted Blue */
* * * * * * * * *:hover { border:2px dotted #CD1821 }    /* Dotted Red */

/*http://bigemployee.com/4-simple-techniques-to-quickly-debug-and-fix-your-css-code-in-almost-any-browser/*/
```

## Loose Links
- [min(), max(), and clamp(): three logical CSS functions to use today](https://web.dev/min-max-clamp/)