jQuery(document).ready(function(){
    
    jQuery(function() {
        
        jQuery('.cap-types-comp #cap-tab-link li:first-child').addClass('active');
        jQuery('.cap-types-comp .cap-tab-content section:first-child').addClass('active');
        
        // Reference the tab links.
        const tabLinks = jQuery('#cap-tab-link li');
        
        // Handle link clicks.
        // tabLinks.click(function(event) {
        // $(document).on('click touchstart', function () {
        tabLinks.on('click touchstart', function (event) {
            var jQuerythis = jQuery(this);
            
            // Prevent default click behaviour.
            event.preventDefault();
            
            // Remove the active class from the active link and section.
            jQuery('#cap-tab-link li.active, .cap-tab-content section.active').removeClass('active');
            
            // Add the active class to the current link and corresponding section.
            jQuerythis.addClass('active');
            jQuery(jQuerythis.attr('data-target')).addClass('active');
        });
    });
        
    });