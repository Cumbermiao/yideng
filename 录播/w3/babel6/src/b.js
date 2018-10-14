import 'babel-polyfill'
import a from './a.js'

const b = function(){
    a()
    console.log('i am b')
}