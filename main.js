requirejs.config({
  baseUrl: 'lib',
  paths: 
  {
    jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
    underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/x.y.z/underscore-min.js',
    backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone-min.js'
  }
});

requirejs(["main"])