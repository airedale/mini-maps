/*
  Mini-Map Functions
  DAW - // <!-- phpDesigner :: Timestamp [8/11/2011 1:42:19 PM] -->
  
  mini_maps_min.js commpressed @ http://jscompress.com/
 */

// Formats the map display to 16x9 
    function resize16x9(element) {

    	$("#"+element).each(function() {
    		w = $(this).width();
    		h = Math.round((w/16)*9);
    		$(this).height(h);
    	});
    }

    
    // Required values are: insertafter, latitude, longitude

    function showMap(insertafter, latitude, longitude, width, caption, mapzoom, streetview, zoomcontrol, typecontrol, typeid, marker) {
    	if (!insertafter || !latitude || !longitude) {
    		return true;
    	}
    	if (!width) {
    		width = '100%';
    	}
    	if (!caption) {
    		caption = '';
    	}
    	if (!mapzoom) {
    		mapzoom = '5';
    	}      
    	if (!streetview) {
    		streetview = false;
    	} 
    	if (!zoomcontrol) {
    		zoomcontrol = false;
    	}
    	if (!typecontrol) {
    		typecontrol = false;
    	}      
    	if (!typeid) {
    		typeid = '0';
    	} 
    	if (!marker) {
    		marker = false;
    	}                                    
    	if ($(insertafter).next().hasClass('map')) {
    		$(insertafter).removeClass('active').next().remove();
    	} else {
    		$(insertafter).addClass('active').after('<div id="inpagemap" class="map" style="width: '+width+'; height: 1px;"><iframe src="/smallmap.htm?latitude='+encodeURIComponent(latitude)+'&amp;longitude='+encodeURIComponent(longitude)+'&amp;caption='+encodeURIComponent(caption)+'&amp;mzoom='+encodeURIComponent(mapzoom)+'&amp;mstreetview='+encodeURIComponent(streetview)+'&amp;mzoomcontrol='+encodeURIComponent(zoomcontrol)+'&amp;mtypecontrol='+encodeURIComponent(typecontrol)+'&amp;mtypeid='+encodeURIComponent(typeid)+'&amp;marker='+encodeURIComponent(marker)+'" width="100%" height="100%" frameborder="0" scrolling="no"></iframe></div>');
    		resize16x9("inpagemap");
    	}
    	$(insertafter).blur(); // removes dotted outline from link in Mozilla browsers
    	return false;
    }
 
 
 