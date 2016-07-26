//module.exports = function(config) {
//    config.set({
//        basePath: '../',
//        files: [
//            'client/bower_components/angular/angular.js',
//            'client/bower_components/angular-mocks/angular-mocks.js',
//            'client/bower_components/ngSweetAlert/SweetAlert.js',
//            'client/bower_components/sweetalert/dist/sweetalert-dev.js',
//            'client/bower_components/angular-spinner/angular-spinner.js',
//            'client/bower_components/spin.js/spin.js',
//            'client/js/src/app.js',
//            'client/js/src/txtr-factory.js',
//            'client/js/src/home-controller.js',
//            'client/js/src/interceptor.js',
//            'client/test.js'
//        ],
//        autoWatch: true,
//        frameworks: ['jasmine'],
//        browsers: ['PhantomJS'],
//        plugins: [
//            'karma-chrome-launcher',
//            'karma-jasmine',
//            'karma-phantomjs-launcher'
//        ],
//        junitReporter: {
//            outputFile: 'test_out/unit.xml',
//            suite: 'unit'
//        }
//    });
//}

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/ngSweetAlert/SweetAlert.js',
            'bower_components/sweetalert/dist/sweetalert-dev.js',
            'bower_components/angular-spinner/angular-spinner.js',
            'bower_components/spin.js/spin.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'js/src/app.js',
            'js/src/txtr-factory.js',
            'js/src/home-controller.js',
            'js/src/interceptor.js',
            'test.js'
        ]
    });
};