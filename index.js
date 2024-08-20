$(document).ready(function() {

    function selectMultipleValues(dropdownSelector, values) {
        var $dropdown = $(dropdownSelector);
        $dropdown.prop('disabled', false).focus(); 

        values.forEach(function(value) {
            $dropdown.find('option').each(function() {
                if ($(this).text().trim() === value) {
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

        $dropdown.find('option').each(function() {
            if ($(this).text().trim() === value) {
                $(this).prop('selected', true);
                return false; 
            }
        });

        $dropdown.trigger('change'); 
        $dropdown.blur(); 
    }

    
    selectMultipleValues(
        '#sexualOrientation', 
        ['Bisexual', 'Queer', 'Asexual'] 
    );

    
    selectSingleValue(
        '#ageDropdown', 
        'Yes' 
    );

   
    $('form').css({
        'padding': '20px',
        'background-color': '#f9f9f9'
    });
});
