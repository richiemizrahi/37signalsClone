$(document).ready(function(){
	$('#basecamp').on('mouseenter', function(){
		event.preventDefault();
		$(this).find('.boxarrowright').show();
		$('#bc-banner').show();
	});	
	
	$('#basecamp').on('mouseleave', function(){
		event.preventDefault();
		$(this).find('.boxarrowright').hide();
		$('#bc-banner').hide();
	});	

	$('#highrise').on('mouseenter', function(){
		event.preventDefault();
		$(this).find('.boxarrowright').show();
		$('#hr-banner').show();
	});	
	
	$('#highrise').on('mouseleave', function(){
		event.preventDefault();
		$(this).find('.boxarrowright').hide();
		$('#hr-banner').hide();
	});	

	$('#campfire').on('mouseenter', function(){
		event.preventDefault();
		$(this).find('.boxarrowleft').show();
		$('#cf-banner').show();
	});	
	
	$('#campfire').on('mouseleave', function(){
		event.preventDefault();
		$(this).find('.boxarrowleft').hide();
		$('#cf-banner').hide();
	});	

});