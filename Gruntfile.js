/* jshint node: true */

module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json')
    , jshint: {
        all: [
          "js/**/*.js"
          , "spec/**/*.js"
        ]
      , options: {
          jshintrc: '.jshintrc'
        }
      }
    , jasmine: {
        src: "js/**/*.js"
      , options: {
          specs: "spec/**/*.js"
        , vendor: "vendor/**/*.js"
        , version: '1.3.1'
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-jasmine')

  grunt.registerTask('test', ['jasmine'])
  grunt.registerTask('default', ['test'])
};