const { init, numas, loaders } = require('numas')

init(() => {
    window.numas = numas
    console.log('numas is ready to be used')
}, {
    loader: loaders.browserLoader.loadAsync,
    path: './assets/numas/numas.wasm',
})
