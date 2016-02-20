$(document).ready(function() {
	function heightDetect(){
	$(".main_head").css("height", $(window).height());

};
heightDetect();
$(window).resize(function() {
	heightDetect();
});
	$(window).load(function() { 
		$("#loader_inner").fadeOut(); 
		$("#loader").delay(400).fadeOut("slow"); 
	});
$(".toggle_menu, .menu_item").click(function() {
	$(".sandwich").toggleClass("active");
});
	$(".navbar_menu ul a").click(function() {
		$(".navbar_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");
	
$(".toggle_menu").click(function() {
	if ($(".navbar_menu").is(":visible")){
		$(".navbar_menu").fadeOut(600);
		$(".navbar_menu li a").removeClass("fadeInUp animated");
	} else{
		$(".navbar_menu").fadeIn(600);
		$(".navbar_menu li a").addClass("fadeInUp animated");

	};

});
});
