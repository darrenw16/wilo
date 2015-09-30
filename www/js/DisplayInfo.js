// The Google Geocoding API url used to get the JSON data
var geocodingAPI = "https://wiloreports.apispark.net:443/v1/notification_datas/?%24sort=date%20desc";
$.ajaxSetup({
    //headers: { 'Authorization': "Basic ZGFycmVuOmRhcnJlbjgzMzY="},
     beforeSend: function(req) {
        req.setRequestHeader('Authorization', 'Basic ' + btoa('8f5c6da3-889a-4b41-b1c8-9e9f4b3efc7a:fe8d0ef0-f239-40bc-b4c5-2f212b2bd989'));
    },
    contentType: "application/json"
    //username: '8f5c6da3-889a-4b41-b1c8-9e9f4b3efc7a',
    //password: 'fe8d0ef0-f239-40bc-b4c5-2f212b2bd989'

});

$.getJSON(geocodingAPI) 
    .done(function( json ) {
     $.each(json.list, function(i, row) {
            console.log(JSON.stringify(row));
           	//$('#listview').append('<li><a href="" data-id="' + row.subject + '"><h3>' + row.logDateTime + '</h3><p>' + row.body + '/10</p></a></li>'); 
           	$('#listview').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="index.html" class="ui-link-inherit"><h2 class="ui-li-heading">'+ row.subject +'</h2><p id="Date"class="ui-li-desc"><strong>'+ row.logDateTime +'</strong></p><p class="ui-li-desc"><p class="ui-li-desc">'+ row.body +'</p></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
        });
     
 });



// Caching the link jquery object
var $myLink = $('a.myLink');

// Set the links properties
$myLink.prop({
    href: geocodingAPI,
    title: 'Click on this link to open in a new window.'
}).click(function (e) {
    e.preventDefault();
    window.open(this.href, '_blank');
});