import SvgTask from './SvgTask';

/*
 |----------------------------------------------------------------
 | SVG Sprites Task
 |----------------------------------------------------------------
 |
 | This custom task grabs individual SVG files and generates an 
 | optimized SVG sprite file using `svg-sprite`.
 |
 */

Elixir.config.svgSpritesheet = {
    folder: "svg",
    outputFolder: "svg",
    pluginOptions: {
        mode: {
            symbol: {
                dest: ".",
                sprite: "sprite.svg"
            }
        }
    }
};

Elixir.extend( "svgSpritesheet", function( src, output, options ) {
    new SvgTask( "svgSpritesheet", getPaths( src, output ), options );
} );

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
function getPaths( src, output ) {
    return new Elixir.GulpPaths()
        .src( "**/*.svg", src || Elixir.config.get( "assets.svgSpritesheet.folder" ) )
        .output( output || Elixir.config.get( "public.svgSpritesheet.outputFolder" ) );
}