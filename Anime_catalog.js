(function () {
    'use strict';

    Lampa.Platform.tv();

    // Жанры TMDB (with_genres) и доп. теги аниме-специфики (with_keywords, id проверены на themoviedb.org)
    var genres = [
        { title: 'Экшен / Приключения', type: 'genre', id: 10759 },
        { title: 'Комедия', type: 'genre', id: 35 },
        { title: 'Драма', type: 'genre', id: 18 },
        { title: 'Фэнтези / Фантастика', type: 'genre', id: 10765 },
        { title: 'Детектив / Мистика', type: 'genre', id: 9648 },
        { title: 'Семейное', type: 'genre', id: 10751 },
        { title: 'Сёнэн', type: 'keyword', id: 207826 },
        { title: 'Исекай', type: 'keyword', id: 237451 },
        { title: 'Меха', type: 'keyword', id: 10046 }
    ];

    var icon = '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="m368.256 214.573l-102.627 187.35c40.554 71.844 73.647 97.07 138.664 94.503c63.67-2.514 136.974-89.127 95.694-163.243L397.205 150.94c-3.676 12.266-25.16 55.748-28.95 63.634M216.393 440.625C104.077 583.676-57.957 425.793 20.85 302.892c0 0 83.895-147.024 116.521-204.303c25.3-44.418 53.644-72.37 90.497-81.33c44.94-10.926 97.565 12.834 125.62 56.167c19.497 30.113 36.752 57.676 6.343 109.738c-3.613 6.184-136.326 248.402-143.438 257.46m8.014-264.595c-30.696-17.696-30.696-62.177 0-79.873s69.273 4.544 69.273 39.936s-38.578 57.633-69.273 39.937" clip-rule="evenodd"/></svg>';

    // Открыть готовую страницу-сетку Lampa (category_full) с заданным discover-запросом
    function openGrid(title, url) {
        Lampa.Activity.push({
            url: url,
            title: title,
            component: 'category_full',
            source: 'tmdb',
            card_type: 'true',
            page: 1
        });
    }

    function baseAnimeFilter() {
        return 'with_original_language=ja&with_genres=16';
    }

    // Подменю разделов вместо одной бесконечной ленты
    function showAnimeMenu() {
        var items = [
            { title: 'Топ рейтинга', action: 'top' },
            { title: 'Популярное', action: 'popular' },
            { title: 'ТВ-сериалы', action: 'tv' },
            { title: 'Полнометражные фильмы', action: 'movie' },
            { title: 'Жанры', action: 'genres' }
        ];

        Lampa.Select.show({
            title: 'Аниме',
            items: items,
            onSelect: function (item) {
                if (item.action === 'top') {
                    openGrid('Аниме / Топ рейтинга',
                        'discover/tv?' + baseAnimeFilter() +
                        '&sort_by=vote_average.desc&vote_count.gte=100');
                }
                else if (item.action === 'popular') {
                    openGrid('Аниме / Популярное',
                        'discover/tv?' + baseAnimeFilter() +
                        '&sort_by=popularity.desc');
                }
                else if (item.action === 'tv') {
                    openGrid('Аниме / ТВ-сериалы',
                        'discover/tv?' + baseAnimeFilter() +
                        '&sort_by=first_air_date.desc');
                }
                else if (item.action === 'movie') {
                    openGrid('Аниме / Полнометражные',
                        'discover/movie?with_original_language=ja&with_genres=16' +
                        '&sort_by=popularity.desc');
                }
                else if (item.action === 'genres') {
                    showGenresMenu();
                }
            },
            onBack: function () {
                Lampa.Controller.toggle('menu');
            }
        });
    }

    function showGenresMenu() {
        Lampa.Select.show({
            title: 'Аниме / Жанры',
            items: genres,
            onSelect: function (item) {
                var url;
                if (item.type === 'keyword') {
                    // Animation + язык + доп. тег (сёнэн/исекай/меха и т.п.)
                    url = 'discover/tv?' + baseAnimeFilter() +
                        '&with_keywords=' + item.id +
                        '&sort_by=popularity.desc';
                } else {
                    // Animation + язык + второй жанр через запятую (AND)
                    url = 'discover/tv?with_original_language=ja&with_genres=16,' + item.id +
                        '&sort_by=popularity.desc';
                }
                openGrid('Аниме / ' + item.title, url);
            },
            onBack: function () {
                showAnimeMenu();
            }
        });
    }

    function addButton() {
        var button = $(
            '<li class="menu__item selector" data-action="anime_catalog_custom">' +
            '<div class="menu__ico">' + icon + '</div>' +
            '<div class="menu__text">Аниме (жанры)</div></li>'
        );

        button.on('hover:enter', showAnimeMenu);

        $('.menu .menu__list').eq(0).append(button);
    }

    if (window.appready) addButton();
    else Lampa.Listener.follow('app', function (e) {
        if (e.type === 'ready') addButton();
    });
})();
