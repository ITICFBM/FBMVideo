/** declaramo path */
const path = require( 'path' );
/** lo que instalamos */
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

/** Hacemos referencia al plugin que nos va ayudar a extraer  el css */
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
/** creamos un molulo que vamos a exportar  para esta ocnfiguracion */

module.exports = {
    /** tenemos esta entrada y hacemor referencia a nuestro archivo principal que es index */
    entry: './src/index.js',
    output: {
        /**  que es donde vamos a  guardar nuestros archivos resultantes resolve detecta el directorio en donde nos encontrames
         * y se le pasa un directorio en el cual se van a guardar los archivo
         */
        path: path.resolve( __dirname, 'dist' ),
        /** filename es poner el nombre al archivo principa */
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        /** pasamos dos extenciones */
        extensions: [ '.js', '.jsx' ]
    },
    module: {
        rules: [ {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [ {
                loader: "html-loader"
            } ]
        },
        {
            /**  Se agrega la regla para que pueda leer archivos scss o css */
            test: /\.(s*)css$/,
            use: [ {
                loader: MiniCssExtractPlugin.loader,
            },
                'css-loader',
                'sass-loader'
            ]
        },
        {
            /**  Creamos reglas para los archivos file
             * cualquier elemento que se utilizado con png gif jpg puede ser utilizado en nuestros proyectos
             */
            test: /\.(png|gif|jpg)$/,
            use: [ {
                'loader': 'file-loader',
                options: {
                    /** como se guarda y que respete la extensión */
                    name: 'assets/[hash].[ext]'
                }
            } ]
        }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    /** Ayanidomos los plugins */
    plugins: [
        /** creamo referencia al htmlWebPackPlugin */
        new HtmlWebPackPlugin( {
            template: './public/index.html',
            filename: './index.html'
        } ),
        /** Declaramos el plugin de extra css */
        new MiniCssExtractPlugin( {
            filename: 'assets/[name].css'
        } )
    ]
};