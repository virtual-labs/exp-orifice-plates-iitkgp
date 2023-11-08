importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"d4337ff16292cea2988829d88bb2a15b","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"c8ac711836366b48c7d73ae90b75d153","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"51392554bd6f04d452c6c2bf019e8812","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"64e323922ab0fd16741e40fa140542ed","url":"contributors.html"},{"revision":"9e0fc9179ca1843f5222704194c7e280","url":"feedback.html"},{"revision":"f2f1e415d681eb68a9d2c3598b1b80ec","url":"images/iitkgp.png"},{"revision":"ceefbe9af1aab0a39533ab191e0d75ed","url":"images/pro_sim_1.jpg"},{"revision":"a13ed67c4cd18acf55a67575d2e23ea0","url":"images/pro_sim_10.jpg"},{"revision":"4ecaf8419f742ce3bb96b7be1732953e","url":"images/pro_sim_11.jpg"},{"revision":"1fc0554f356b4149e5fa0f784866e3d4","url":"images/pro_sim_12.jpg"},{"revision":"cedee470bc663e3ad9c54708d75082ac","url":"images/pro_sim_2.jpg"},{"revision":"5c69796f568e55f3ed478668e4c91e8f","url":"images/pro_sim_3.jpg"},{"revision":"e35eb17f60682006a4a195176cab1d8b","url":"images/pro_sim_4.jpg"},{"revision":"7defc26f4c0552568fdbbd09b24d7bd9","url":"images/pro_sim_5.jpg"},{"revision":"f77043f01975dcef131fb7432c781a70","url":"images/pro_sim_6.jpg"},{"revision":"12729670fb19b52e01ad0affc6c8116b","url":"images/pro_sim_7.jpg"},{"revision":"1872e04aafd918ddc3e2feab64c8e0bd","url":"images/pro_sim_8.jpg"},{"revision":"ebe7d63a9750c1959e8508b9399117f8","url":"images/pro_sim_9.jpg"},{"revision":"7921e62366164a6a66ed5cbb6ce81cbb","url":"index.html"},{"revision":"73bd1a52a9c7058b2a5fc6f74087d46f","url":"performance-report.html"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"88370dd7eaa597a196aa9674ecab0837","url":"posttest.html"},{"revision":"b30dbbe5a8147cf12caa87dee280b569","url":"posttest.json"},{"revision":"8667af148d308a2cefaf3bf55b8fa5dd","url":"pretest.html"},{"revision":"735b7e73f797e7e332de3c5e55d282e8","url":"pretest.json"},{"revision":"db281635cf5757202a1f619166a96dd6","url":"procedure.html"},{"revision":"a81c860f0eca2c30afb0bd0fb0f1fea2","url":"references.html"},{"revision":"f60b1c94e2e3288c1ebe2615db55b047","url":"simulation.html"},{"revision":"65976a328037cb64e554c520316fee18","url":"simulation/css/bootstrap.min.css"},{"revision":"f9d68584d740d1dd58e7399bdfee4115","url":"simulation/css/font-awesome.min.css"},{"revision":"f06f2893ee1e6eb46886bc88ff662744","url":"simulation/css/katex.min.css"},{"revision":"5d403dc069e69129ac444248fdcbc1a1","url":"simulation/css/main.css"},{"revision":"21ed97bd17d7f01007ce41ea27324860","url":"simulation/images/anemometerr-copyb.png"},{"revision":"cdf3cc15e3ff55d761b3449fbe9fa948","url":"simulation/images/logo.jpg"},{"revision":"871d0afa060f5ae47ae42955fc24a1c7","url":"simulation/images/orificeplate.png"},{"revision":"72b3cb556466b088fcd11a1552898f6b","url":"simulation/images/orificplate.png"},{"revision":"086724260ed1a1b43f17b431fdef6c56","url":"simulation/images/plate1_0.5.png"},{"revision":"6fb9c105780cf93ae51cdd38a6f97060","url":"simulation/images/plate2_0.52.png"},{"revision":"94edbf19daba7a6244fc3d31ba628bd5","url":"simulation/images/plate3_0.55.png"},{"revision":"abd915d8f7f61a0a4aa220adb67e4aa0","url":"simulation/images/plate4_0.58.png"},{"revision":"169dcadf192b7ab8b99e935f82133368","url":"simulation/images/plate5_0.6.png"},{"revision":"c3d22165f4cc8b84ff4bba31e1fd91de","url":"simulation/images/tube1.png"},{"revision":"42a19cbb1f1142167c26e6efee0f7274","url":"simulation/images/tube2.png"},{"revision":"f971ebce4637d15d0922c1717bb14f2d","url":"simulation/images/tube3.png"},{"revision":"99cdc04835689e39c5799a848bff1207","url":"simulation/images/tube4.png"},{"revision":"db23212314f17c26a7e8b8b97c3f7a3b","url":"simulation/images/tube5.png"},{"revision":"899062117b03297da7151ac9ca026dbd","url":"simulation/images/tubelines1.png"},{"revision":"73775c57a866cc7831c9c1977df2c4fb","url":"simulation/images/tubelines2.png"},{"revision":"6bc402ab05ea8dff6d0dd1d3c5c9f58f","url":"simulation/images/user.png"},{"revision":"5566d121f5dc07d262d19c764f1c003b","url":"simulation/images/Utnanometer.png"},{"revision":"9d2157ed78b7e1179fca3f8ab48f26f1","url":"simulation/index.html"},{"revision":"7b30a1d0060bcb37e4003a4bce3c9ef9","url":"simulation/js/addinptotable.js"},{"revision":"6beaaaff3fd0463371728b4c96a813ae","url":"simulation/js/auto-render.min.js"},{"revision":"90146f01d8a2028ed6f2c3d2fba4ac9b","url":"simulation/js/bootstrap.bundle.min.js"},{"revision":"c4b879ecbace444abe76d92e781d2cf2","url":"simulation/js/Chart.js"},{"revision":"7112a8da65ca820afbfeeaf73a56f7a3","url":"simulation/js/graphplot_exp4.js"},{"revision":"d8204afa70f396d8d39e7f807c4e7508","url":"simulation/js/graphplotly_exp4.js"},{"revision":"ddb84c1587287b2df08966081ef063bf","url":"simulation/js/jquery-1.7.1.min.js"},{"revision":"c7393ff783202680516ed44393d69897","url":"simulation/js/jquery.slim.min.js"},{"revision":"78c0024516f299be41b76645dacf567e","url":"simulation/js/katex.min.js"},{"revision":"501498fececc6d7938887b1fdf0ad833","url":"simulation/js/main.js"},{"revision":"22175d95b973a74d3bcab1f3fbb6e2c2","url":"simulation/js/modernizr-1.5.min.js"},{"revision":"1db8fd79ce2e5d14918726b61342318e","url":"simulation/js/popper.min.js"},{"revision":"ae37c6237e57b30928b902ec9452ba9d","url":"theory.html"},{"revision":"9208275464751b9c7afcc8ae2027cdf8","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );