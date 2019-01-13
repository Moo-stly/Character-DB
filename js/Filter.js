// isotope
var $grid = $('.mel-grid').isotope({
    itemSelector: '.mel-grid-item',
    columnWidth: '.mel-grid-sizer',
    percentPosition: true
});

// bind filter button click
$('.mel-nav').on('click', '.mel-filter', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});


// change is-checked class on buttons
$('.mel-nav').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.mel-filter', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});
