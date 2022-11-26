$('#image-event-id').on('change', function upload(evt) {
    console.log(this.files[0]);
    var i = $(this).prev('label').clone();
    var file = $('#image-event-id')[0].files[0].name;
    $(this).closest('label').text(file);
});

// only to show where is the drop-zone:
$('#image-event-id-label').on('dragenter', function () {
    this.classList.add('dragged-over');
})
    .on('dragend drop dragexit dragleave', function () {
        this.classList.remove('dragged-over');
    });

