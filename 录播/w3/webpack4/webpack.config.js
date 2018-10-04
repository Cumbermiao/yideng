module.exports = {
   output:{
    // publicPath:'../src'
   },
   module:{
       rules:[
           {
               test:/\.css/,
               loader:'style-loader!css-loader'
           }
       ]
   }
}