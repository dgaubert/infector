var Container = require('./container');

var Injector = {

    process: function(target) {
        var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
        var FN_ARG_SPLIT = /,/;
        var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
        var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
        var text = target.toString();
        var args = text.match(FN_ARGS)[1].split(',');
        
        return target.apply(target, this.getDependencies(args));
    },
    
    getDependencies: function(arr) {
        return arr.map(function(value) {
            return Container.dependencies[value];
        });
    },
    
    register: function(name, dependency) {
        Container.dependencies[name] = dependency;
    }

};

module.exports = Injector;
