(function () {
    'use strict';

    if (window.Anime111) return;

    var Anime111 = {
        version: '0.1.0',
        name: 'Anime+',
        modules: {},
        data: {},
        cache: {},

        register: function (name, module) {
            this.modules[name] = module;

            if (typeof module.init === 'function') {
                module.init();
            }

            console.log('[Anime111] Module loaded:', name);
        },

        get: function (name) {
            return this.modules[name];
        },

        setData: function (key, value) {
            this.data[key] = value;
        },

        getData: function (key) {
            return this.data[key];
        },

        cacheSet: function (key, value) {
            this.cache[key] = value;
        },

        cacheGet: function (key) {
            return this.cache[key];
        }
    };

    window.Anime111 = Anime111;

    console.log(
        '%cAnime+ Core loaded',
        'background:#ff4f81;color:#fff;padding:4px 10px;border-radius:4px;'
    );

})();
