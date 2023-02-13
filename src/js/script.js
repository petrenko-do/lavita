$('.carousel').carousel({
    interval: false
})

$('ul.courses__tabs').on('click', 'li:not(.courses__tab_active)', function () {
    $(this)
        .addClass('courses__tab_active').siblings().removeClass('courses__tab_active')
        .closest('div.container').find('div.courses__content').removeClass('courses__content_active').eq($(this).index()).addClass('courses__content_active');
});
