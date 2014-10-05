(function(){
  // 
  var reg = /expandModuleContainer\((\d+)?, true\)/;
  // MVA course URL
  var link_tmpl = ["http://", location.hostname, location.pathname].join('');
    
  $('.module').each(function(){
    var matches = $(this).attr('onclick').match(reg);
    var courseId = matches[1];
    var link = [link_tmpl, "?m=", courseId].join('');
    
    $('#container-' + courseId + ' > ul.list-ctypes').prepend('<li><div class="content-item"><a href="'+link+'" target="_blank" class="mva-module-link">[link to this module]</a></div></li>');
    
  });
  
})();
