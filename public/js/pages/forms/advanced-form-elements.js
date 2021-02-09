$(function () {

    //noUISlider
    var sliderBasic = document.getElementById('nouislider_basic_example');
    noUiSlider.create(sliderBasic, {
        start: [3],
        connect: 'lower',
        step: 1,
        range: {
            'min': [2],
            'max': [10]
        }
    });
    getNoUISliderValue(sliderBasic, true);



    $('#multiselect3-all').multiselect({
        includeSelectAllOption: true,
    });

    $('#multiselect4-filter').multiselect({
        enableFiltering: true,
        enableCaseInsensitiveFiltering: true,
        maxHeight: 200
    });

    $('#multiselect-size').multiselect({
        buttonClass: 'btn btn-default btn-sm'
    });

    $('#multiselect-link').multiselect({
        buttonClass: 'btn btn-link'
    });

    $('#multiselect-color').multiselect({
        buttonClass: 'btn btn-primary'
    });

    $('#multiselect-color2').multiselect({
        buttonClass: 'btn btn-success'
    });


    // Date picker
    $('.inline-datepicker').datepicker({
        todayHighlight: true
    });

});

//Get noUISlider Value and write on
function getNoUISliderValue(slider, percentage) {
    slider.noUiSlider.on('update', function () {
        var val = slider.noUiSlider.get();
        if (percentage) {
            val = parseInt(val);
            val += ' players';
        }
        $(slider).parent().find('span.js-nouislider-value').text(val);
    });
}