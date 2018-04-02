


/**
* [1] Create all points...
*/
var promise_createPoints = new Promise(function(resolve, reject) { 
	//Create all point
	const arrPoints = [];
	const ps = [
	  {top:'70px',left:'150px'}, {top:'122px',left:'190px'}, {top:'180px',left:'40px'}, {top:'110px',left:'110px'},
	  {top:'150px',left:'250px'}, {top:'380px',left:'60px'}, {top:'420px',left:'120px'}, {top:'390px',left:'300px'},
	  {top:'490px',left:'100px'}, {top:'410px',left:'330px'}
	];

	for (var i = 0; i < ps.length; i++) {
	  let _ps = ps[i];
	  arrPoints.push($(`<a href="#" class="fanci-pinpoint" id="point${i}" style="top:${_ps.top}; left:${_ps.left};">
	    <span class="popper" id="popper${i}" data-for="point${i}" x-placement="bottom">
	      <b>Fanci</b> <span>going for a jog?</span> 
	        <div class="popper__arrow" x-arrow="" style="left: 43px;"></div>
	    </span>
	    <img src="./images/rsz_avatar3.jpg" alt="" class="fanci-avatar fanci-avatar__small">
	  </a>`));
	};

	// do a thing, possibly async, then… 
	if (true) {
	  // window.setTimeout(function(){
	    resolve( arrPoints );
	  // }, 5000);
	}
	else {
	  reject(Error("It broke"));
	}
});




 
/**
* [2] Place all point on the page 
* (After they've been created)
*/ 
promise_createPoints.then(function(newPoints) {
	// console.log('****** script2 ***',newPoints); // 1
	//...
	newPoints.map($point=>{ 
	  $point.appendTo('#home-panel');
	});  
	return newPoints;
})

/**
* [3] Activate all tooltips on points
* (...)
*/ 
.then(function(allPoints) {
	// console.log('****** script3', allPoints);
	allPoints.map($point=>{ 
	  var anotherPopper = new Popper(
	      $point[0],//reference,
	      $point.find('.popper')[0],//popper,
	      {
	        placement: 'top'
	      }
	  );
	}); 
}); 




/**
 * Open "Around Us" panel if a "fanci-pinpoint" on the map is clicked
*/
$('body').on('click', '.fanci-pinpoint', function(event){
	event.preventDefault(); 
	// remove all is-active classes from tabs
    $('a.mdl-tabs__tab').removeClass('is-active');
    // activate desired tab
    $('[href="#aroundus-panel"]').addClass('is-active');
    // remove all is-active classes from panels
    $('.mdl-tabs__panel').removeClass('is-active');
    // activate desired tab panel
    $('#aroundus-panel').addClass('is-active');
});




/**
 * Open "Profile" panel if a "profile" link is clicked from sidebar panel
*/
$('body').on('click', '.mdl-navigation__profile', function(event){
	event.preventDefault(); 
	// remove all is-active classes from tabs
    $('a.mdl-tabs__tab').removeClass('is-active');
    // activate desired tab
    $('[href="#profile-panel"]').addClass('is-active');
    // remove all is-active classes from panels
    $('.mdl-tabs__panel').removeClass('is-active');
    // activate desired tab panel
    $('#profile-panel').addClass('is-active');
    //Hide side nav...
    window.setTimeout(()=>{
    	$('.mdl-layout__obfuscator.is-visible').trigger('click');
    }, 200);
});

/**
 * Open "Privacy" panel if a "privacy" link is clicked from sidebar panel
*/
$('body').on('click', '.mdl-navigation__privacy', function(event){
	event.preventDefault(); 
	// remove all is-active classes from tabs
    $('a.mdl-tabs__tab').removeClass('is-active');
    // activate desired tab
    $('[href="#privacy-panel"]').addClass('is-active');
    // remove all is-active classes from panels
    $('.mdl-tabs__panel').removeClass('is-active');
    // activate desired tab panel
    $('#privacy-panel').addClass('is-active');
    //Hide side nav...
    window.setTimeout(()=>{
    	$('.mdl-layout__obfuscator.is-visible').trigger('click');
    }, 200);
});

//privacy-panel  -- privacy



//Control 'modal-location'
$(function(){
	const $modal_location = $('#modal-location').fadeIn('slow');
	//Choose between locations ...
	$('body').on('change', '[name="current-location"]', function(){ 
		$('#form-location__custom').toggle( parseInt($(this).val())===0 );
	});
	//Dismiss modal...
	$('body').on('click', '#form-location__btn-submit', function(event){
		event.preventDefault();
		$modal_location.fadeOut('slow');
	});
});





//Control 'modal-post'
$(function(){
	const $modal_post = $('#modal-post'); 
	//Show modal...
	$('body').on('click', '#fanci-btn-post', function(event){
		event.preventDefault();
		$modal_post.fadeIn('slow');
	});
	//Dismiss modal...
	$('body').on('click', '.modal-post__btn-dismiss', function(event){
		event.preventDefault();
		$modal_post.fadeOut('slow');
	});
	//No action at all...
	$('body').on('click', '.fanci-modal--post__addimage', function(event){
		event.preventDefault(); 
	});
});


 