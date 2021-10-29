window.copifyText = function (textToCopy) {
    var self = {
        copyToClipboard: function (textToCopy) {
            var textArea;
            self.createTextArea(textToCopy);
            self.selectText();
            self.copyTo();
        },
        isOS: function () {
            //can use a better detection logic here
            return navigator.userAgent.match(/ipad|iphone/i);
        },
        createTextArea: function (text) {
            textArea = document.createElement('textArea');
            textArea.readOnly = true;
            textArea.contentEditable = true;
            textArea.value = text;
            document.body.appendChild(textArea);
        },
        selectText: function () {
            var range, selection;

            if (self.isOS()) {
                range = document.createRange();
                range.selectNodeContents(textArea);
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.setSelectionRange(0, 999999);
            } else {
                textArea.select();
            }
        },
        copyTo: function () {
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    };
    return self.copyToClipboard(textToCopy);
}();
