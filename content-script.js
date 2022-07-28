$(document).on(
  "click",
  "a[data-nav='1'][tabindex='0'][data-navigation='server']",
  function (e) {
    let href = e.currentTarget.href;
    let decoded = decodeURIComponent(href);
    let m = decoded.match(/(?<=imgurl=).*?(?=\&imgrefurl=)/);
    replaceSrc(m[0]);
  }
);

function replaceSrc(src) {
  $(
    "div > a[role='link'][tabindex='0'][rel='noopener'][target='_blank']:has(img)"
  ).attr("href", src);
}
