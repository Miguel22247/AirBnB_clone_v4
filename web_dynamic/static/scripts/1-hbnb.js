$(document).ready(init);

function init () {
  const amenityObject = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenityObject[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenityObject[$(this).attr('data-name')];
    }
    const names = Object.keys(amenityObject);
    $('.amenities h4').text(names.sort().join(', '));
  });
}
}