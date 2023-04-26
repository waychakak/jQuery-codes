jQuery(document).ready(function(){
    var maxResourceHeight=0;
    jQuery('.resource-card .top-content').each(function(){
    var resourceFrontHeight = jQuery(this).height();
        if(resourceFrontHeight > maxResourceHeight ){
            maxResourceHeight = resourceFrontHeight;
        }
    });
    jQuery('.resource-card .back-top-content').height(maxResourceHeight);
});
