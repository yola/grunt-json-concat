module.exports = function(grunt) {
  'use strict';

  var readJSON = function(file) {
    grunt.log.writeln('Reading: ' + file);
    return grunt.file.readJSON(file);
  };

  var jsonConcat = function() {

    this.files.forEach(function(f) {
      if(!f.src.length) {
        grunt.fail.warn('No files to concat for ' + f.dest);
        return;
      }
      var json = f.src.map(readJSON);
      var output = JSON.stringify(json, null, 2);

      grunt.log.writeln('Writing: ' + f.dest);
      grunt.file.write(f.dest, output);
    });
  };

  grunt.registerMultiTask(
    'jsonConcat', 'Concatinates a list of json files', jsonConcat);
};
