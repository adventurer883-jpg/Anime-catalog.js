(function () {
    'use strict';

    if (window.anime_catalog_plugin) return;
    window.anime_catalog_plugin = true;

    var network = new Lampa.Reguest();

    function addMenu() {
        if ($('.menu__item[data-action="anime_catalog"]').length) return;

        var item = $('<li class="menu__item selector" data-action="anime_catalog"><div class="menu__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg></div><div class="menu__text">Аниме</div></li>');

        item.on('hover:enter', function () {
            Lampa.Activity.push({
                url: '',
                title: 'Аниме',
                component: 'category',
                source: 'tmdb',
                card_type: true,
                page: 1,
                genres: 16,
                with_original_language: 'ja'
            });
        });

        $('.menu .menu__list').eq(0).append(item);
    }

    function start() {
        if (window.appready) addMenu();
        else {
            Lampa.Listener.follow('app', function (e) {
                if (e.type === 'ready') addMenu();
            });
        }
    }

    start();
})();
