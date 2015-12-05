var babel = require('babel-core');

babel.transformFile('./es6-stuff/main.js', {
  presets: ['es2015'],
  sourceRoot: './es6-stuff/'
}, function(err, result){
  if(err) {
    console.error(err);
    return;
  }
  else {
    console.log(result.code);
  }
})
