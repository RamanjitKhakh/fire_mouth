// main.js



var pageMod = require("sdk/page-mod");
var contentScriptValue = 'document.body.innerHTML += ' +
                         ' "<iframe width=\\"1\\" height=\\"1\\" style=\\"visibility:hidden\\" src=\\"https://www.youtube.com/embed/_UPQzfwmQDg?autoplay=1&loop=1&start=65\\" frameborder=\\"0\\" allowfullscreen></iframe>";';

pageMod.PageMod({
  include: "*",
  contentScript: contentScriptValue
});

//' "<iframe width=\\"1\\" height=\\"1\\" style = \\"display:none\\" src=\\"https://www.youtube.com/embed/GJ9_drhuhpA?autoplay=1&loop=1\\" frameborder=\\"0\\" allowfullscreen></iframe>";';