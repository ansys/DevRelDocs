var pathModule = require('path');
var paths = {};

var relative = pathModule.resolve.bind(pathModule, __dirname);

paths.baseJs = relative('closure', 'goog', 'base.js');
paths.googJs = relative('closure', 'goog');
paths.thirdPartyJs = relative('third_party', 'closure', 'goog');
paths.knownWarnings = relative('closure', 'known_issues', 'testdata', 'closure_library_warnings.txt');
paths.deps = relative('closure', 'goog', 'deps.js');
paths.calcDepsPy = relative('closure', 'bin', 'calcdeps.py');

module.exports = paths;
