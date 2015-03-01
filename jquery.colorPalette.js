/*!
 * August 2014
 * colorPalette 1.1.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * GPL license
*/

$.fn.colorPalette = function(options) {

    return this.each(function() {

        var settings = $.extend({
                selectorHeight : "10px",
                selectorWidth : "",
                blockColors : ["#CB96EE", "#FD6E6E", "#FFAC79", "#52596B", "#26D7B1"],
                blockFloat : "left",
                blockHeight : "inherit"
        }, options);

        var selector = this,
            blockCount = settings.blockColors.length,
            blockWidth = 100 / blockCount;

            $(selector).empty().addClass("colorPalette");

        for (var i = 0; i < blockCount; i++) {

            var $newElement = $("<p />").css({
                background: settings.blockColors[i],
                height: settings.blockHeight,
                width: blockWidth + "%"
            });
            $(selector).append($newElement);
        }

        $(selector).css({
            height: settings.selectorHeight,
            width: settings.selectorWidth,
            display: "block"
        })

        $(selector).find("p").css({
            height: "inherit",
            float: settings.blockFloat
        });
    });
};