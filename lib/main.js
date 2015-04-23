// main.js



var pageMod = require("sdk/page-mod");
var asmr = "https://www.youtube.com/embed/_UPQzfwmQDg?autoplay=1&start=68&loop=1&disablekb=1&rel=0&showinfo=0&playlist=_UPQzfwmQDg"
var contentScriptValue = 'var fr = document.createElement("iframe");' +
                         'fr.setAttribute("width", "1");fr.setAttribute("height", "1");fr.setAttribute("frameborder","0");' +
                         'fr.setAttribute("style","visibility:hidden;position:absolute");' +
                         'fr.setAttribute("src", "' + asmr + '");' +
                         'document.body.appendChild(fr);';

pageMod.PageMod({
  include: "*",
  contentScript: contentScriptValue
});
