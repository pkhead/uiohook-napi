"use strict";
exports.__esModule = true;
var _1 = require("./");
var keycodeMap = new Map(Object.entries(_1.UiohookKey).map(function (_) { return [_[1], _[0]]; }));
(function main() {
    _1.uIOhook.on('keydown', function (e) {
        console.log("".concat(prettyModifier('ctrl', e.ctrlKey)).concat(prettyModifier('shift', e.shiftKey)).concat(prettyModifier('alt', e.altKey)), e.keycode, keycodeMap.get(e.keycode));
        if (e.keycode === _1.UiohookKey.Escape) {
            process.exit(0);
        }
    });
    _1.uIOhook.start();
})();
function prettyModifier(name, state) {
    return state ? "[".concat(name, "]") : " ".concat(name, " ");
}
