export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", async (a) => {
    (function (d, t) {
      var BASE_URL = "https://staging.chatwoot.com";
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: "RY3LaFtwmkPhDdZVmRd4ektW",
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  });
});
