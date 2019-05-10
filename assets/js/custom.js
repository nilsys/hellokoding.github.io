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
            // var options = {
            //     offset: {
            //         top: 10,
            //         bottom: $('footer').height() + 64*2
            //     }
            // }
            // $.stickysidebarscroll(stickyItem, options);

            stickyItem.stick_in_parent({
                parent: ".sidebar",
                spacer: ".widget",
            });
        }
    };

    var unSticky = function() {
        var stickyItem = findStickyItem();
        if (stickyItem) {
            // $(window).unbind('scroll resize orientationchange load', stickyItem);
            stickyItem.trigger("sticky_kit:detach");
        }
    }

    $(function () {
        $(window).resize(function() {
            var w = $(window).width() / parseFloat($("body").css("font-size"));
            if (w >= 64.063) {
                sticky();
            }
            else {
                unSticky();
            }
        });
    });
})(jQuery);
