$(document).ready(function() {
   
    $('#sexual-orientation').prop('multiple', true).focus();
    $('#age').focus();

    
    $('#sexual-orientation').val(['asexual', 'bisexual', 'gay', 'heterosexual']);
    $('#age').val('yes');

   
    $('#sexual-orientation').blur();
    $('#age').blur();
});
