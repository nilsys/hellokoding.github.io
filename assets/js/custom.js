(function ($) {

    function findStickyItem() {
        var lastWidget = $("aside.widget:last");
        if (lastWidget.length) {
            var lastItem = lastWidget.find("ins.adsbygoogle:last");
            if (lastItem.length) {
                return lastItem;
            }
        }

        return null;
    }

    var sticky = function () {
        var stickyItem = findStickyItem();
        if (stickyItem) {
            var options = {
                offset: {
                    top: 10,
                    bottom: $('footer').height() + 64
                }
            }
            $.stickysidebarscroll(stickyItem, options);
        }
    };

    $(function () {
        sticky();
    });
})(jQuery);
