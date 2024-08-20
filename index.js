$(document).ready(function () {

    function selectMultipleValues(dropdownSelector, values) {
        var $dropdown = $(dropdownSelector);
        $dropdown.prop('disabled', false).focus();

        values.forEach(function (value) {
            $dropdown.find('option').each(function () {
                if ($(this).text().trim().toLowerCase() === value.toLowerCase()) {
                    $(this).prop('selected', true);
                }
            });
        });

        $dropdown.trigger('change');
        $dropdown.blur();
    }

    function selectSingleValue(dropdownSelector, value) {
        var $dropdown = $(dropdownSelector);
        $dropdown.prop('disabled', false).focus();

        $dropdown.find('option').each(function () {
            if ($(this).text().trim().toLowerCase() === value.toLowerCase()) {
                $(this).prop('selected', true);
                return false;
            }
        });

        $dropdown.trigger('change');
        $dropdown.blur();
    }

    var sexualOrientationOptions = [];
    $('#sexualOrientation option').each(function () {
        sexualOrientationOptions.push($(this).text().trim());
    });

    if (sexualOrientationOptions.length >= 8) {
        selectMultipleValues('#sexualOrientation', sexualOrientationOptions.slice(0, 8));
    }

    var ageOptions = [];
    $('#age option').each(function () {
        ageOptions.push($(this).text().trim());
    });

    if (ageOptions.some(option => option.toLowerCase() === 'yes')) {
        selectSingleValue('#age', 'Yes');
    }

    $('form').css({
        'padding': '20px',
        'background-color': '#f9f9f9'
    });
});
