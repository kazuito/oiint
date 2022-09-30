var url = "";

$(document).on(
  "click",
  "a[data-nav='1'][tabindex='0'][data-navigation='server']",
  function (e) {
    console.log(e);
    const href = decodeURIComponent(e.currentTarget.href);
    url = href.match(/(?<=imgurl=).*?(?=\&imgrefurl=)/)[0];
  }
);

$(document).on("mouseup", "a", function (e) {
  setHref(url);
});

function setHref(url) {
  const a = $(
    "div > div > c-wiz[data-hveid='0'][decode-data-ved='1'][data-a='1'] > div > div > div > div > div[role='region'] > a[role='link'][tabindex='0'][rel='noopener'][target='_blank']"
  );
  a.attr("href", url);
}
