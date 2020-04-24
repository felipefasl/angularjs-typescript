// Configuração para execução dos testes unitários
module.exports = function (config) {
    config.set({
        hostname: 'localhost',

        // caminho base que será usado para resolver todos os padrões (eg. files, exclude)
        basePath: './',

        // frameworks para uso
        // https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'karma-typescript'],

        // lista de arquivos / padrões para carregar no navegador
        files: [
            // Para permitir a execução dos testes em ambiente de integração contínua, é necessário incluir os as
            // bibliotecas JavaScripts necessárias para a execução da aplicação neste ponto
            'node_modules/angular/angular.js',
            'node_modules/angular-sanitize/angular-sanitize.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',

            'node_modules/@babel/polyfill/dist/polyfill.js',

            'src/**/**.app.ts',
            'src/**/**.ts'
        ],

        // lista de arquivos a serem excluídos nos testes
        exclude: [],

        // pré-processar os arquivos correspondentes antes de enviá-los ao navegador
        // https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.ts': ['karma-typescript']
        },

        karmaTypescriptConfig: {
            coverageOptions: {
                exclude: [/\-(d|spec)\.ts$/i, /\.(d|spec)\.ts$/i]
            },
            tsconfig: 'tsconfig.json',
            reports: {
                'text-summary': null,
                'html': 'coverage',
                'lcovonly': {
                    'directory': 'coverage/typescript',
                    'subdirectory': 'lcov',
                    'filename': 'lcov.info',
                },
            }
        },

        // Programas que expõem os resultados de teste para usar
        // possíveis valores: 'dots', 'progress'
        // https://npmjs.org/browse/keyword/karma-reporter

        reporters: ['progress', 'karma-typescript'],

        // porta do servidor web de teste
        port: 9876,

        // ativar / desativar cores na saída 
        colors: true,

        // possíveis valores: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // ativar / desativar o arquivo de observação e a execução de testes sempre que algum arquivo for alterado
        autoWatch: true,

        // iniciar esses navegadores
        // https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['phanthomjsWithoutSecurity'],

        // Configurações do browser de testes
        customLaunchers: {
            phanthomjsWithoutSecurity: {
                base: 'PhantomJS',
                flags: ['--ignore-ssl-errors=true', '--web-security=true']
            }
        },

        // Modo de integração contínua
        // se verdadeiro, o Karma captura navegadores, executa os testes e sai
        singleRun: true
    });
};