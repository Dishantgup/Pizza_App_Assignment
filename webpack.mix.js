// const { assertSupportedNodeVersion } = require('../src/Engine');

// module.exports = async () => {
//     // @ts-ignore
//     process.noDeprecation = true;

//     assertSupportedNodeVersion();

//     const mix = require('../src/Mix').primary;

//     require(mix.paths.mix());

//     await mix.installDependencies();
//     await mix.init();

//     return mix.build();
// };


const { sass } = require('laravel-mix');
let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js/app.js').sass('resources/scss/app.scss', 'public/css/app.css');