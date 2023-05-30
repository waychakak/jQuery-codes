jQuery(window).scroll(function() {
    jQuery('.design-list li:first-child a').addClass('active'); 
    var scrollPosition = jQuery(this).scrollTop();
    jQuery('.click-section').each(function() {
      var sectionOffset = jQuery(this).offset().top - 100; // Adjust the offset as needed
      // Check if the current scroll position is within the section
      if (scrollPosition >= sectionOffset) {
        var sectionId = jQuery(this).attr('id');
        // Remove active class from all links
        jQuery('.design-list li a').removeClass('active');
        // Add active class to the link corresponding to the section
        jQuery('.design-list li a[href="#' + sectionId + '"]').addClass('active');
      }
    });

    //Make the sidebar sticky and vertically centered
    var sidebar = jQuery('.design-list');
    var firstSectionOffset = jQuery('.click-section:first').offset().top;
    var laseSectionOffset = jQuery('.click-section:last').offset().top;

    if (scrollPosition >= firstSectionOffset && scrollPosition <= laseSectionOffset ) {
      sidebar.addClass('sticky');
    }
    else {
        sidebar.removeClass('sticky');
    }
});