$(function(){

  // Dropdown Menu
    var menu = $('.menu')
    var dropdown_toggle = menu.find('.dropdown-toggle');
    var dropdown_menu = menu.find('.dropdown-menu');

    // dropdown_toggle.dropdown('toggle');

  // Slider
    var slider_navigation = $('.slider-nav');
    var arrow_next = slider_navigation.find('.arrow-next');
    var arrow_prev = slider_navigation.find('.arrow-prev');
    var slider = $('.slider');
    var slide = slider.find('.slide');
    var dot = slider_navigation.find('.dot');

    arrow_next.on('click',function() {
        var currentSlide = slider.find('.active-slide');
        var nextSlide = currentSlide.next();
        var currentDot = slider_navigation.find('.active-dot');
        var nextDot = currentDot.next();
        
        if(nextSlide.length === 0) {
            nextSlide = slide.first();
        }
        
        if(nextDot.length === 0) {
            nextDot = dot.first();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');      
    });
    
    arrow_prev.on('click', function() {
      var currentSlide = slider.find('.active-slide');
      var prevSlide = currentSlide.prev();
      var currentDot = slider_navigation.find('.active-dot');
      var prevDot = currentDot.prev();
    
      if(prevSlide.length === 0) {
        prevSlide = slide.last();
      }
      
      if(prevDot.length === 0) {
          prevDot = dot.last();
      }
    
      currentSlide.fadeOut(600).removeClass('active-slide');
      prevSlide.fadeIn(600).addClass('active-slide');
    
      currentDot.removeClass('active-dot');
      prevDot.addClass('active-dot');
    });

});
// $(document).ready(main);