(function () {
    'use strict';

    if (!window.Anime111) return;

    var Cards = {};

    Cards.items = [

        {
            id: 'top100',
            title: '🔥 Top 100',
            color: '#ff4757'
        },

        {
            id: 'popular',
            title: '⭐ Популярное',
            color: '#f39c12'
        },

        {
            id: 'ongoing',
            title: '🆕 Онгоинги',
            color: '#2ecc71'
        },

        {
            id: 'completed',
            title: '✅ Завершённые',
            color: '#3498db'
        },

        {
            id: 'movies',
            title: '🎬 Фильмы',
            color: '#9b59b6'
        },

        {
            id: 'tv',
            title: '📺 ТВ',
            color: '#1abc9c'
        },

        {
            id: 'adult',
            title: '🔞 18+',
            color: '#e74c3c'
        },

        {
            id: 'genres',
            title: '🎭 Жанры',
            color: '#34495e'
        },

        {
            id: 'years',
            title: '📅 По годам',
            color: '#7f8c8d'
        }

    ];

    Cards.render = function () {

        var html = '<div class="anime111-cards">';

        this.items.forEach(function(item){

            html +=
                '<div class="anime111-card selector" data-id="'+item.id+'">'+

                    '<div class="anime111-card-bg" style="background:'+item.color+'"></div>'+

                    '<div class="anime111-card-title">'+item.title+'</div>'+

                '</div>';

        });

        html += '</div>';

        return $(html);

    };

    Anime111.register('cards',Cards);

})();
