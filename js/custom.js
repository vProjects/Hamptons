/**
 * @author Thakur
 */

$(document).ready(function(){
	
	// options for slider carousel
	var active_img = "0";
	//getting active image of jessore slider
	$('#img_picker').click(function(){
		var a = $('.img_active');
		for(var i=0; i<a.length; i++)
		{
			//checking that left is 0
			if(a[i].style.left == '0px')
			{
				var index = i;
			}
		}
		active_img = $('.img_active')[index].children[0].src;
		
		$('#large_image').attr('src',active_img);
		$('#myModal').modal('show');
	});
	
	$('#map_open').click(function(){
		setTimeout(function(){
            //$('#map_container').append($("#map_canvas").css("margin-top","0px").get(0));
        },500);
		$('#myMap').modal('show');
	});
	
	//activating nav-tabs
	
	$(function () {
	  $('#myTab a:first').tab('show');
	});
	
	$(function () {
	  $('#propertyView a:first').tab('show');
	});
	
	//check all checkboxes 
	 $(document).on('click', '#east-hampton-area', function(){
	  if(this.checked == true){
	   $('.chk-bx-all').prop('checked', true);
	  }
	  else
	  {
	   $('.chk-bx-all').prop('checked', false);
	  }
	 });
	 
	 $(document).on('click', '#bridge-hampton-area', function(){
	  if(this.checked == true){
	   $('.chk-bx-bridge').prop('checked', true);
	  }
	  else
	  {
	   $('.chk-bx-bridge').prop('checked', false);
	  }
	 });
	 
	  $(document).on('click', '#sag-harbor-area', function(){
	  if(this.checked == true){
	   $('.chk-bx-sag').prop('checked', true);
	  }
	  else
	  {
	   $('.chk-bx-sag').prop('checked', false);
	  }
	 });
	 
	  $(document).on('click', '#southampton-area', function(){
	  if(this.checked == true){
	   $('.chk-bx-south').prop('checked', true);
	  }
	  else
	  {
	   $('.chk-bx-south').prop('checked', false);
	  }
	 });
	 
	  $(document).on('click', '#westhampton-area', function(){
	  if(this.checked == true){
	   $('.chk-bx-west').prop('checked', true);
	  }
	  else
	  {
	   $('.chk-bx-west').prop('checked', false);
	  }
	 });
	 
	  $(document).on('click', '#north-fork', function(){
	  if(this.checked == true){
	   $('.chk-bx-north').prop('checked', true);
	  }
	  else
	  {
	   $('.chk-bx-north').prop('checked', false);
	  }
	 });
	 
	 $(document).on('click', '#summer_period', function(){
	  if(this.checked == true){
	   $('.chk-bx-summer').prop('checked', true);
	  }
	  else
	  {
	   $('.chk-bx-summer').prop('checked', false);
	  }
	 });
	 
	 // change content of town area collapsible on click on public page 
		$('.SeeMore2').click(function(){
			var $this = $(this);
			$this.toggleClass('SeeMore2');
			if($this.hasClass('SeeMore2')){
				$this.text('+');			
			} else {
				$this.text('-');
			}
		});
		
	// toggle the + and - sign of collapsible on click on agent admin page
		$('.tgle-sgn-collps-admin').click(function(){
			var $this = $(this);
			var $thisspn = $(this).children();
			$this.toggleClass('tgle-sgn-collps-admin');
			if($this.hasClass('tgle-sgn-collps-admin')){
				$thisspn.text('-');			
			} else {
				$thisspn.text('+');
			}
		});
		
		//same  height coloumns
		
		  if ($(window).width() >= 768) {
			  $('.right-block').css({
			  	height: $("#first-col").height() - $("#rt-nav-dash").height() -10
			 });
		  }
		          
		$('#myCollapsiblecomm1').collapse({
		  toggle: false
		});
		
		$('.panel-heading-nn-collpse a').on('click',function(e){
		    if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
		        e.preventDefault();
		        e.stopPropagation();
		    }
		});
		
		$('.clndr-datepick').datepicker();
		
		$('.dropdown-toggle').dropdownHover();
		
});
