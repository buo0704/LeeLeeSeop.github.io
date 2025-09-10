$(function(){
    // 이미지 클릭
    $('.design-list img').on('click', function(){
        const title = $(this).data('title');
        const images = $(this).data('images').split(',');

        $('#modalTitle').text(title);
        $('#modalBody').empty();

        images.forEach(src => {
        $('#modalBody').append(`<img src="${src.trim()}" alt="${title}">`);
        });

        $('#designModal').addClass('open');
        $('body').addClass('modal-open');
    });

    // 닫기
    $('#designModal .close, #designModal').on('click', function(e){
        if (e.target.id === 'designModal' || e.target.className === 'close') {
        $('#designModal').removeClass('open');
        $('body').removeClass('modal-open');
        }
    });
  
    $(document).on('click', '#modalBody img', function(){
        $(this).toggleClass('zoomed');
    });
});
