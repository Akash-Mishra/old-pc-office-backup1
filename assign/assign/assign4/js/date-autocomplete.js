$(function(){
  var dayorDate = [
    { value: 'today', date: '06/21/2016' },
    { value: 'yesterday', date: '06/20/2016' },
    { value: 'tomorrow', date: '06/22/2016' },
    { value: 'the day before yesterday', date: '06/19/2016' },
    { value: 'the day after tomorrow', date: '06/23/2016' },

  ];


  $('#autocomplete').autocomplete({
    lookup: dayorDate,
    onSelect: function (suggestion) {
      var thehtml = '<strong>day:</strong> ' + suggestion.value + ' <br> <strong>Date:</strong> ' + suggestion.date;
      $('#outputcontent').html(thehtml);
    }
  });

  var dayorDate1 = [
    { value: '06/21/2016', day: 'today' },
    { value: '06/20/2016', day: 'yesterday' },
    { value: '06/22/2016', day: 'tomorrow' },
    { value: '06/19/2016', day: 'the day before tomorrow' },
    { value: '06/23/2016', day: 'the day after tomorrow' },
    ];

  $('#autocomplete1').autocomplete({
    lookup: dayorDate1,
    onSelect: function (suggestion) {
      var thehtml = '<strong>date:</strong> ' + suggestion.value + ' <br> <strong>Day:</strong> ' + suggestion.day;
      $('#outputcontent').html(thehtml);
    }
  });


});
