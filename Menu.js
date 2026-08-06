(function () {
    'use strict';

    if (!window.Anime111) return;

    var MenuModule = {

        init: function () {

            if (window.appready) this.create();
            else {
                Lampa.Listener.follow('app', (e) => {
                    if (e.type === 'ready') this.create();
                });
            }

        },

        create: function () {

            if ($('.menu__item[data-action="anime111"]').length)
                return;

            var html =
                '<li class="menu__item selector" data-action="anime111">' +
                    '<div class="menu__ico">' +
                        '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">' +
                            '<path d="M12 2C6.4 2 2 6.4 2 12s4.4 10 10 10 10-4.4 10-10S17.6 2 12 2z"/>' +
                        '</svg>' +
                    '</div>' +
                    '<div class="menu__text">Anime+</div>' +
                '</li>';

            var item = $(html);

            item.on('hover:enter', function () {

                if (!Anime111.get('catalog')) {

                    Lampa.Noty.show('Каталог Anime+ ещё не установлен');

                    return;
                }

                Anime111.get('catalog').open();

            });

            $('.menu .menu__list')
                .eq(0)
                .append(item);

        }

    };

    Anime111.register('menu', MenuModule);

})();
