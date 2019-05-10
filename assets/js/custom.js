(function ($) {
    var sticky = function(){
      var lastWidget = $('aside.widget:last');
      var lastItem = lastWidget.find('ins.adsbygoogle:last');
      if (lastItem){
        lastItem.stick_in_parent();
      }
    }
  
    $(function(){
      sticky();
    });
  }(jQuery));
  