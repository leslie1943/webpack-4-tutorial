module.exports = {
    /***
     * babel-eslint
     * 解析器是一种使用频率很高的解析器, 因为现在很多公司的很多项目目前都使用了es6,
     * 为了兼容性考虑基本都使用babel插件对代码进行编译.
     * 而用babel编译后的代码使用 babel-eslint 这款解析器可以避免不必要的麻烦.
    */
    parserOptions: {
        parser: 'babel-eslint',
        // 代码是 ECMAScript 模块
        sourceType: 'module'
    },
    /**
     * root
     * 默认情况下,ESLint会在所有父级组件中寻找配置文件,一直到根目录.
     * ESLint一旦发现配置文件中有 "root": true,它就会停止在父级目录中寻找.
     */
    root: true,
    env: {
        // 预定义的全局变量，这里是浏览器环境
        browser: true
    },
    /**
     * extends
     * 输入关于需要分号的错误和误解可能会导致不必要的分号
     * 虽然在技术上不是一个错误,但在阅读代码时额外的分号会造成混淆
     */
    extends: ['standard', 'plugin:vue/essential'],
    // 此插件用来识别.html 和 .vue文件中的js代码
    // standard风格的依赖包
    plugins: ['html', 'vue', 'standard', 'promise'],
    rules: {
        indent: [0, 2],
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-expressions': 'off',
        eqeqeq: 'off',
        'no-array-constructor': 'off',
        'no-throw-literal': 'off',
        'no-duplicate-imports': 'off',
        'import/no-duplicates': 'off',
        camelcase: 'off',
        'no-dupe-keys': 'off',
        'no-useless-escape': 'off',
        'vue/no-side-effects-in-computed-properties': 'off',
        'vue/require-valid-default-prop': 'off',
        'vue/no-dupe-keys': 'off',
        // 'space-before-function-paren': ['error', {
        //     "anonymous": 'always',
        //     "named": "always",
        //     "asyncArrow": "always"
        // }]
        "space-before-function-paren": "off"
    }
};