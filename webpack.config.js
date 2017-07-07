const webpack=require("webpack");
const path=require("path");

module.exports={
  
      entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
      publicPath:"dist"
  },
    module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react','es2015']
        }
      }
    },
      {
    test: /\.html$/,
    use: [ {
      loader: 'html-loader'
    }],
  }
  ]
},
    devServer: {
  contentBase: path.join(__dirname, "/"),
  port: 9000
}
    
};