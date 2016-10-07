# ColdBox Elixir SVG

Extension to ColdBox Elixir that uses `gulp-svg-sprite` to deal with SVG images.
Right now it can generate a sprite file out of individual SVG files. Consider it the image spriting technique but for SVGs. It's **highly recommended** to read these awesome articles to learn  all about this technique:

* [Icon System with SVG Sprites](http://css-tricks.com/svg-sprites-use-better-icon-fonts/)
* [SVG `symbol` a Good Choice for Icons](http://css-tricks.com/svg-symbol-good-choice-icons/)
* [SVG `use` with External Reference](https://css-tricks.com/svg-use-with-external-reference-take-2/)
* [SVG for Everybody](https://github.com/jonathantneal/svg4everybody)

## Install

```
npm install coldbox-elixir-svg --save-dev
```

## Use

```javascript
var elixir = require( "coldbox-elixir" );

require( "coldbox-elixir-svg" );

elixir( function( mix ) {
    mix.svgSpriteheet();
} );
```

This will use the extension's default options, which are to find `.svg` files inside an `svg` directory in your assets directory. It will output a sprite file named as `sprite.svg` to `includes/svg` which can then be included in your project's markup.

```html
    <svg class="icon">
        <use xlink:href="/includes/svg/sprite.svg#icon-example"></use>
    </svg>
```

## Configure

You can override the extension's settings by passing the following optional parameters like:

```javascript
    mix.svgSpriteheet( src, output, pluginOptions );
```

### src

Path to the directory that holds the individual SVGs. Set as `null` if the default is fine.

### output

Path to the directory that will hold the generated spritesheet file. Set as `null` if default is fine.

### pluginOptions

Options passed along directly to [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite). Read the README for more info on these.

## Example

This example sets custom source and output directories, and changes the generated file name to `symbols.svg`.

```javascript
var elixir = require( "coldbox-elixir" );

require( "coldbox-elixir-svg" );

elixir( function( mix ) {
    mix.svgSpriteheet( "my/assets/directory/", "my/output/directory/", {
        mode: {
            symbol: {
                dest: ".",
                sprite: "symbols.svg"
            }
        }
    } );
} );
```

For more complex examples and all the `svg-sprite` documentation, [check out its repo](https://github.com/jkphl/svg-sprite).

## Versioning

Don't forget that you can use the `mix.version` command to version your SVG spritesheet.

```javascript
elixir( function( mix ) {
    mix.svgSpriteheet();

    mix.version( "svg/sprite.svg" );
} );
```

## ColdBox and `cbsvg`

This package works hand in hand with [`cbsvg`](https://github.com/elpete/cbsvg), a ColdBox module for easily using svg icons in your projects.  It is configured to use the same ColdBox conventions, so just `box install cbsvg` and use it with your spritesheet out of the box with no extra configuration!

## Credits

* [Laravel Elixir SVG Symbols](https://github.com/waldemarfm/laravel-elixir-svg-symbols) for the initial repo that was forked.
