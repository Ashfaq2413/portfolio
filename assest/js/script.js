(function(){

    $(document).ready(function() {
        // Toggle icon navbar
        var topMenu = $('.jq-top-nav-link');

        // $('.jq-top-nav-link').click(function(){
        //     $('.jq-top-nav-link').removeClass('active');
        //     $(this).addClass('active');
        // });

        $('#menu-icon').click(function(){
            $('.navbar').toggleClass('active');
        });

        // Cache the navigation links
        var $navigationLinks = $('.jq-top-nav-link');
        
        // Cache (offset, height) pairs for sections
        var sectionOffsets = [];
        $('section').each(function() {
          sectionOffsets.push({
            id: $(this).attr('id'),
            offset: $(this).offset().top,
            height: $(this).height()
          });
        });
        
        // Function to check which section is in view
        function checkSectionInView() {
          // Get current scroll position
          var scrollPosition = $(window).scrollTop();
          
          // Iterate through each section and check if it's in view
          $.each(sectionOffsets, function() {
            var sectionOffset = this.offset;
            var sectionHeight = this.height;
            
            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
              // If section is in view, add active class to corresponding navigation link
              $navigationLinks.removeClass('active');
              $('.jq-top-nav-link[href="#' + this.id + '"]').addClass('active');
            }

          });
        }
        
        // Check section in view when page loads
        // checkSectionInView();
        
        // Check section in view when window is scrolled
        $(window).scroll(function() {
            checkSectionInView();
            if ($(this).scrollTop() > 30) {
                // Change background color if scrolled 50px down
                $('header').css('background-color', 'var(--bg-color)');
            } else {
                // Make background transparent if not scrolled 50px down
                $('header').css('background-color', 'transparent');
            }
        });
      });
      
    
})();