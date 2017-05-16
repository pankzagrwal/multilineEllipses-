$.fn.multiLineEllipsis = function(config) {
    var element = null,
        config = config || {},
        lineHeight = config.lineHeight || 20,
        numberofLine = config.numberofLine || 2,
        ellipsisChar = config.ellipsisChar || "...",

        maxHeight = lineHeight * numberofLine,
        ellipsisCharCount = ellipsisChar.length;

    return this.each(function(index, element) {
        var element = $(element);
        modifyText();

        function modifyText() {
            var text = element.text(),
                height = element.height();
            if (height <= maxHeight) {
                return;
            }
            text = text.slice(0, text.lastIndexOf(" ") - ellipsisCharCount);
            element.text(text + ellipsisChar);
            modifyText();
        }
    })
}
