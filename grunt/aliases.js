// Pojmenovane Grunt ulohy
// =======================

'use strict';

module.exports = {

  css: [
    'less:default',
    'postcss'
  ],

  critical: [
    'criticalcss',
  ],

  img: [
    'responsive_images',
    'imagemin',
    'svg2png'
  ],

  js: [
    'uglify'
  ],

  default: [
    'copy:fancybox',
    'css',
    'js',
    'browserSync',
    'watch'
  ]

};

