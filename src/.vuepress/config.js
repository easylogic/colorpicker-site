// .vuepress/config.js
const locales = require("./locales");
const themeLocales = require("./locales/themes");

module.exports = {
  base: "/",
  dest: "./docs",
  ga: "UA-116150958-1",
  title: "ColorPicker",
  description: "Simple ColorPicker used anywhere ",
  head: [
    ["link", { rel: "shortcut icon", href: "/images/favicon.ico" }],
    ["link", { rel: "icon", href: "/images/logo.png" }],
    [
      "script",
      {},
      `
      (function(j,en,ni,fer) {
        j['dmndata']=[];j['jenniferFront']=function(args){window.dmndata.push(args)};
        j['dmnaid']=fer;j['dmnatime']=new Date();j['dmnanocookie']=false;j['dmnajennifer']='JENNIFER_FRONT@INTG';
        var b=Math.floor(new Date().getTime() / 60000) * 60000;var a=en.createElement(ni);
        a.src='https://d-collect.jennifersoft.com/'+fer+'/demian.js?'+b;a.async=true;
        en.getElementsByTagName(ni)[0].parentNode.appendChild(a);
    }(window,document,'script','cc474308-b29c-af41-7393-409d285dca6e'));
  `
    ],
    [
      "script",
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TBTZTTR');`
    ]
  ],
  postcss: {
    plugins: [require("autoprefixer")]
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3] }
  },
  locales,
  themeConfig: {
    repo: "easylogic/codemirror-colorpicker",
    // repoLabel: 'Contribute!',
    lastUpdated: "Last Updated",
    locales: themeLocales,
    sidebarDepth: 3
  }
};
