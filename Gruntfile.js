module.exports = (grunt) => {

    // Pasta onde se encontra os códigos do seu projeto
    const srcDir = 'src';

    // Pasta para onde deseja copiar os códigos do build para execução no browser
    const buildDir = 'www';

    grunt.initConfig({

        // https://github.com/gruntjs/grunt-contrib-clean
        clean: {
            all: {
                src: [buildDir, 'coverage', '**.tmp.txt']
            }
        },
        // https://github.com/gruntjs/grunt-contrib-connect
        connect: {
            server: {
                options: {
                    port: 8300,
                    base: buildDir,
                    hostname: '*',
                    middleware: (connect, options, middlewares) => {

                        middlewares.unshift((req, res, next) => {

                            res.setHeader('Access-Control-Allow-Origin', '*');
                            res.setHeader('Access-Control-Allow-Methods', '*');
                            return next();
                        });

                        return middlewares;
                    }
                }
            }
        },
        // https://github.com/gruntjs/grunt-contrib-copy
        copy: {
            all: {
                cwd: srcDir,
                src: ['**', '!**/*.ts', '!**/*.md'],
                dest: buildDir,
                expand: true
            }
        },
        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            default: {
                files: [srcDir + '/**'],
                tasks: ['fastbuild'],
                options: {
                    livereload: true
                }
            }
        },
        // https://github.com/TypeStrong/grunt-ts/blob/master/docs/DetailedGettingStartedInstructions.md
        ts: {
            default: {
                tsconfig: true
            }
        },
        // https://www.npmjs.com/package/grunt-tslint
        tslint: {
            options: {
                configuration: 'tslint.json',
                force: false,
                fix: false
            },
            files: {
                src: [
                    srcDir + '/**/*.ts'
                ]
            }
        },
        // https://github.com/karma-runner/grunt-karma
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    // Carregamento de plugins do grunt
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask(
        'fastbuild',
        'Compila todos os assets e copia os arquivos para o diretório de build.',
        ['clean', 'tslint', 'karma', 'ts', 'copy']
    );

    // default - Tarefa executada localmente ao executar o comando "grunt"
    grunt.registerTask(
        'default',
        'Observa o projeto por mudanças, automaticamente contrói e executa o servidor.',
        ['fastbuild', 'connect', 'watch']
    );
};

