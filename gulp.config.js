module.exports = function() {
    var config = {
        root: {
            src: 'src',
            dest: 'web'
        },
        bower: {
            dest: 'web/bower_components'
        },
        images: {
            src: 'src/img/**/*',
            dest: 'web/img',
            watch: 'src/img/**/*'
        },
        copy: {
            src: [
                'src/**/*',
                '!src/**/*.scss',
                '!src/style/**/*',
                '!bower_components/**/*',
                '!src/**/*.twig'
            ]
        },
        fonts: {
            src: 'src/fonts/**/*',
            dest: 'web/fonts',
            watch: 'src/fonts/**/*'
        },
        sass: {
            src: 'src/style/main.scss',
            dest: 'web',
            watch: 'src/style/**/*.{scss,css}',
            root: 'src/style'
        },
        html: {
            src: 'web/**/*.html',
            watch: 'src/**/*.html'
        },
        twig: {
            src: 'src/templates/*.twig',
            dest: 'web',
            watch: 'src/templates/**/*.twig',
            root: 'src/templates'
        },
        js: {
            watch: 'src/**/*.js'
        }
    };

    return config;
};
