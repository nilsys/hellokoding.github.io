(function($) {
  var sticky = function() {
    var lastWidget = $("aside.widget:last");
    if (lastWidget.length) {
      var lastItem = lastWidget.find("ins.adsbygoogle:last");
      if (lastItem.length) {
        lastItem.stick_in_parent({
          'parent': '.sidebar',
          'spacer': '.widget'
        });
      }
    }
  };

  $(function() {
    sticky();
    $(document.body).trigger("sticky_kit:recalc");
  });
})(jQuery);
