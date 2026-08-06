(function () {
    'use strict';

    if (!window.Anime111) return;

    var Catalog = {

        open: function () {

            Lampa.Activity.push({
                url: '',
                title: 'Anime+',
                component: 'anime111',
                page: 1
            });

        }

    };

    Lampa.Component.add('anime111', {

        init: function () {

            this.create();

        },

        create: function () {

            this.activity.loader(false);

            this.render();

        },

        render: function () {

            var html =
                '<div class="anime111-home">' +

                    '<div class="anime111-title">Anime+</div>' +

                    '<div class="anime111-grid">' +

                        '<div class="anime111-item selector">🔥 Top 100</div>' +

                        '<div class="anime111-item selector">⭐ Популярное</div>' +

                        '<div class="anime111-item selector">🆕 Онгоинги</div>' +

                        '<div class="anime111-item selector">✅ Завершённые</div>' +

                        '<div class="anime111-item selector">🎬 Фильмы</div>' +

                        '<div class="anime111-item selector">📺 ТВ</div>' +

                        '<div class="anime111-item selector">🔞 18+</div>' +

                        '<div class="anime111-item selector">🎭 Жанры</div>' +

                        '<div class="anime111-item selector">📅 Года</div>' +

                    '</div>' +

                '</div>';

            this.activity.empty();

            this.activity.append($(html));

        },

        destroy: function () {

        }

    });

    Anime111.register('catalog', Catalog);

})();
