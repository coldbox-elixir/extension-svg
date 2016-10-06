let svgSprite;

class SvgTask extends Elixir.Task {

    /**
     * Create a new SvgTask instance.
     *
     * @param  {string}      name
     * @param  {GulpPaths}   paths
     * @param  {object|null} options
     */
    constructor( name, paths, options ) {
        super( name, null, paths );

        this.options = options;
    }

    registerWatchers() {
        this.watch( Elixir.config.get( "assets.svgSpritesheet.folder" ) + "/**/*.svg" )
            .ignore( this.output.path );
    }

    /**
     * Lazy load the task dependencies.
     */
    loadDependencies() {
        svgSprite = require( "gulp-svg-sprite" );
    }

    /**
     * Handle errors in the SVG spritesheet creation
     */
    errorHandler( e ) {
        new Elixir.Notification().error( e, "SVG spritesheet creation failed" );
        this.emit( "end" );
    }

    /**
     * Build up the Gulp task.
     */
    gulpTask() {
        this.recordStep( "Combining SVG files into a spritesheet" );

        return gulp
            .src( this.src.path )
            .pipe( svgSprite( this.options || Elixir.config.svgSpritesheet.pluginOptions ) )
            .on( "error", this.errorHandler )
            .pipe( gulp.dest( this.output.path ) )
            .pipe( new Elixir.Notification( "SVG spritesheet generated" ) );
    }

}

export default SvgTask;