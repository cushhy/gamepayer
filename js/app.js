$(document).ready(function () {

    // Modal

    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on('click', function (event) {

        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show')
    });

    modalClose.on('click', function (event) {

        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');
        let modalParent = $this.parents(modalId);

        modalParent.removeClass('show');
    });

    $('.accordeon__title').click(function () {
        if ($('.popup__accordeon').hasClass('one')) {
            $('.question__title').not($(this)).removeClass('active')
            $('.accordeon__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});