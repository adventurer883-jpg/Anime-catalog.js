(function () {
    'use strict';

    function startPlugin() {
        if (window.anime_catalog) return;
        window.anime_catalog = true;

        function add() {
            if ($('.menu__item[data-action="anime"]').length) return;

            var html = '<li class="menu__item selector" data-action="anime">' +
                '<div class="menu__ico">' +
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>' +
                '</div>' +
                '<div class="menu__text">Аниме</div>' +
                '</li>';

            var item = $(html);

            item.on('hover:enter', function () {
                Lampa.Activity.push({
                    url: 'movie&with_genres=16&with_original_language=ja',
                    title: 'Аниме',
                    component: 'category',
                    source: 'tmdb',
                    page: 1
                });
            });

            $('.menu .menu__list').eq(0).append(item);
        }

        if (window.appready) add();
        else {
            Lampa.Listener.follow('app', function (e) {
                if (e.type == 'ready') add();
            });
        }
    }

    startPlugin();
})();
