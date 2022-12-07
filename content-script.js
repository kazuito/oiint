let url = "";

// Get url by click
$(document).on(
  "click",
  "a[data-nav='1'][tabindex='0'][data-navigation='server']",
  function (e) {
    const href = decodeURIComponent(e.currentTarget.href);
    url = href.match(/(?<=imgurl=).*?(?=\&imgrefurl=)/)[0];
  }
);

// Set new href
function setHref(url) {
  const targets = $(
    `c-wiz > div > div > div > div > div > a[role="link"][tabindex="0"][rel="noopener"][target="_blank"]`
  );

  targets.each(function () {
    $(this).attr("href", url);
  });
}

$(document).on("mouseup", "a", function (e) {
  setHref(url);
});
