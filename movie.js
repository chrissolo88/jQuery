$('button').on('click', function(e) {
    e.preventDefault();
    $title = $('#title').val();
    $title = $title.charAt(0).toUpperCase() + $title.slice(1);
    $rating = $('#rating').val();
    if ($title.length > 2 && $rating >= 0 && $rating <= 10) {
        $('#rating-list').append(`<li>${$title} / Rating(0-10): ${$rating} || <input id="delete" type="button" value="REMOVE"></li>`)
    } else {
        alert('Title must be at least 2 characters long and rating between 0 and 10');
    }
    $('form').trigger('reset');
});

$('#rating-list').on('click','#delete', function(e) {
    e.preventDefault();
    $(e.target).parent().remove();
})

$('#sort-list-dwn').on('click', function(e) {
    sortList(1);
})
$('#sort-list-up').on('click', function(e) {
    sortList(-1);
})
const sortList = (num) => {
    let ratingArr = [];
    $('li').each(function(i, e) {
        ratingArr.push($(this).text())
    })
    num === 1 ? ratingArr.sort() : ratingArr.sort().reverse();
    $('ul').empty()
    ratingArr.forEach((val) => {
        $('ul').append(`<li>${val} <input id="delete" type="button" value="REMOVE"></li>`)
    })
}