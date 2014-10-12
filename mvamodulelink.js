(function(){
  // MVA course URL
  var link_tmpl = ["http://", location.hostname, location.pathname].join('');
    
  $('.module-container').each(function(){
    var courseId = $(this).attr('id');
    var link = [link_tmpl, "?m=", courseId].join('');
    
    // add a helper link in module content
    $('#container-' + courseId + ' > ul.list-ctypes').prepend('<li><div class="content-item"><a href="'+link+'" target="_blank" class="mva-module-link">[link to this module]</a></div></li>');
    
  });
  
})();
