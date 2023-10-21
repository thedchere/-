!(function (e) {
  var t,
    n,
    a,
    o,
    r,
    i,
    s,
    d,
    l,
    c = !1;
  function h() {
    (c ? e("body").width() : e(".content").width()) < 420
      ? e("html").addClass("w420")
      : e("html").removeClass("w420");
  }
  function f() {
    e(".page").removeClass("active").hide();
    var n,
      a = e.address.path();
    if (((a = a.slice(1, a.length)), "" == (a = -1 != C() ? t : a))) {
      var o = e("#header ul li").first().find("a").attr("href");
      (a = o.slice(2, o.length)), e.address.path(a);
    }
    Modernizr.csstransforms && Modernizr.csstransforms3d
      ? e("#" + a)
          .show()
          .removeClass("animated ")
          .addClass("animated " + r)
      : (e("#" + a).fadeIn(), e(".page.active").hide()),
      e("#" + a).addClass("active"),
      e(".page.active").find(".cover").length
        ? e("html").removeClass("not-on-cover-page").addClass("on-cover-page")
        : e("html").removeClass("on-cover-page").addClass("not-on-cover-page"),
      (n = e(".page.active").attr("id")),
      e("#header nav ul a[href$=" + n + "]")
        .parent()
        .addClass("current_page_item")
        .siblings()
        .removeClass("current_page_item"),
      -1 != a.indexOf(t) &&
        setTimeout(function () {
          m();
        }, 100),
      e("body").scrollTop(0),
      u();
  }
  function m() {
    if (n.data("isotope")) {
      for (
        var t,
          a,
          o = n.width(),
          r = n.children(".hentry"),
          i = [
            { width: 1200, columns: 5 },
            { width: 900, columns: 4 },
            { width: 600, columns: 3 },
            { width: 320, columns: 2 },
            { width: 0, columns: 1 },
          ],
          s = 0,
          d = i.length;
        s < d;
        ++s
      ) {
        var l = i[s];
        if (o > l.width) {
          t = l.columns;
          break;
        }
      }
      r.each(function (n, a) {
        var r = e(this).hasClass("x2") && t > 1 ? 2 : 1,
          i = ((100 * Math.floor(o / t)) / o) * r;
        e(this).css("width", i + "%");
      }),
        (a = Math.floor(o / t)),
        n.isotope().isotope("option", { masonry: { columnWidth: a } });
    }
  }
  function u() {
    e(".cover h1").fitText(i),
      e(".cover h2").fitText(s),
      e(".cover h3").fitText(d),
      e(".cover h3 span").fitText(l);
  }
  e(function () {
    e("iframe,video").length && e("html").fitVids(),
      (t = e(".portfolio").attr("id")),
      (a = e("html").attr("data-inAnimation")),
      (o = e("html").attr("data-outAnimation")),
      (r = e("html").attr("data-safeModPageInAnimation")),
      (i = e("html").attr("data-cover-h1-tune")),
      (s = e("html").attr("data-cover-h2-tune")),
      (d = e("html").attr("data-cover-h3-tune")),
      (l = e("html").attr("data-cover-h3-span-tune"));
    var y = C();
    e(".cover").each(function (t, n) {
      e(this).css(
        "background-image",
        "url(" + e(this).find(".cover-image-holder img").attr("src") + ")"
      );
    }),
      (c = "true" === e("html").attr("data-safeMod"));
    var x = !!navigator.userAgent.match(/Trident\/7\./),
      M = navigator.userAgent.toLowerCase().indexOf("android") > -1,
      T = M && navigator.userAgent.indexOf("Opera") > -1;
    (c =
      c ||
      !Modernizr.csstransforms ||
      !Modernizr.csstransforms3d ||
      e(window).width() < 960 ||
      e.browser.msie ||
      x ||
      M ||
      T) &&
      (e("html").addClass("safe-mod"),
      f(),
      e.address.change(function () {
        f();
      })),
      -1 == e.address.path().indexOf("/" + t) ||
        c ||
        setTimeout(function () {
          openMenu();
        }, 500),
      h(),
      e(window).resize(function () {
        h();
      }),
      e.address.change(function () {
        var n = C();
        -1 != n
          ? (function (t) {
              e(".loader").show();
              var n = e(".p-overlay:not(.active)").first();
              (v = e(".p-overlay.active")),
                e("#rm-container").addClass("rm-in rm-nodelay"),
                v.length && w();
              n.empty().load(
                e.address.baseURL() + "/" + t + " .portfolio-single",
                function () {
                  n.imagesLoaded(function () {
                    e(".loader").hide(),
                      e("html").addClass("p-overlay-on"),
                      e(".portfolio-single").fitVids(),
                      Modernizr.csstransforms && Modernizr.csstransforms3d
                        ? n
                            .removeClass("animated " + o + " " + a)
                            .addClass("animated " + a)
                            .show()
                        : n.fadeIn(),
                      n.addClass("active");
                  });
                }
              );
            })(n)
          : -1 != e.address.path().indexOf("/" + t) && w(!0, !1);
      }),
      (n = e(".portfolio-items")),
      (e.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase())),
      (e.browser.chrome && !c) || e("html").addClass("no-chrome"),
      (e.browser.safari =
        e.browser.webkit && !/chrome/.test(navigator.userAgent.toLowerCase())),
      (!e.browser.chrome && !e.browser.safari) || c
        ? "best-available"
        : "jquery",
      n.length &&
        n.imagesLoaded(function () {
          if (
            (n.isotope({ itemSelector: ".hentry", layoutMode: "fitRows" }),
            n.data("isotope"))
          ) {
            var t = e("#filters");
            t.length &&
              t.find("a").on("click", function () {
                var t = e(this).attr("data-filter");
                return (
                  n.isotope({ filter: t }),
                  e(this)
                    .parent()
                    .addClass("current")
                    .siblings()
                    .removeClass("current"),
                  !1
                );
              });
          }
          m(),
            setTimeout(function () {
              n.isotope();
            }, 20),
            e(window).resize(function () {
              setTimeout(function () {
                m();
              }, 600);
            });
        }),
      c ||
        (p(),
        e(window).resize(function () {
          setTimeout(function () {
            e.each(g, function (e, t) {
              g[e].rebuild();
            }),
              p();
          }, 500),
            e(window).width() < 960 && location.reload(!0);
        })),
      u(),
      e(".lightbox").each(function (t, n) {
        e(this).attr("rel", e(this).attr("data-lightbox-gallery"));
      }),
      e("a[rel^='fancybox']").length &&
        e("a[rel^='fancybox']").fancybox({
          centerOnScroll: !0,
          padding: 0,
          margin: (e(window).width(), 44),
          width: e(window).width() < 640 ? 320 : 640,
          height: e(window).width() < 640 ? 180 : 360,
          transitionOut: "none",
          overlayColor: "#000",
          overlayOpacity: ".5",
          onStart: function () {
            e("#rm-container").addClass("rm-in rm-nodelay");
          },
          onClosed: function () {
            e("#rm-container").removeClass("rm-in");
          },
          onComplete: function () {
            e(this).attr("href").indexOf("soundcloud.com") >= 0 &&
              e("#fancybox-content").height(166);
          },
        }),
      e(".bar").each(function () {
        var t = e(this);
        t.find(".progress").css("width", t.attr("data-percent") + "%");
      }),
      e("a.ajax").live("click", function () {
        var n = e(this).attr("href"),
          a = e.address.baseURL();
        if (-1 !== n.indexOf(a)) {
          var o = n.length;
          (y = n.slice(a.length + 1, o)), e.address.path("/" + y);
        } else (y = n), e.address.path(t + "/" + y);
        return !1;
      }),
      b.init();
  }),
    (window.onload = function () {
      ("8." != jQuery.browser.version.substring(0, 2) &&
        "7." != jQuery.browser.version.substring(0, 2)) ||
        setTimeout(function () {
          f();
        }, 2e3),
        setTimeout(function () {
          u();
        }, 1e3);
    });
  var v,
    g = [];
  function p() {
    c ||
      e(".antiscroll-wrap").each(function (t, n) {
        g[t] = e(this)
          .antiscroll({
            x: !1,
            autoHide: "false" != e("html").attr("data-autoHideScrollbar"),
          })
          .data("antiscroll");
      });
  }
  function w(n, r) {
    e("body").scrollTop(0),
      n &&
        ((v = e(".p-overlay.active")),
        e("html").removeClass("p-overlay-on"),
        e("#rm-container").removeClass("rm-in"),
        r || e.address.path(t)),
      v.removeClass("active"),
      Modernizr.csstransforms && Modernizr.csstransforms3d
        ? (v.removeClass("animated " + a).addClass("animated " + o),
          setTimeout(function () {
            v.hide().removeClass(o).empty();
          }, 1010))
        : v.fadeOut().empty();
  }
  function C() {
    var n,
      a = e.address.value();
    if (-1 != a.indexOf("/" + t + "/") && a.length > t.length + 2) {
      var o = a.length;
      n = a.slice(t.length + 2, o);
    } else n = -1;
    return n;
  }
  var b = (function () {
    var t = e("#rm-container"),
      n = t.find("div.rm-cover"),
      a = (t.find("div.rm-middle"), t.find("div.rm-right")),
      o = n.find("a.rm-button-open"),
      r = a.find(".rm-close");
    return (
      (init = function () {
        initEvents();
      }),
      (initEvents = function () {
        o.on("click", function (e) {
          if (!c) return openMenu(), !1;
        }),
          r.on("click", function (e) {
            return closeMenu(), !1;
          });
      }),
      (openMenu = function () {
        t.removeClass("rm-closed"),
          setTimeout(function () {
            t.addClass("rm-open");
          }, 10);
      }),
      (closeMenu = function () {
        t.removeClass("rm-open rm-nodelay rm-in"),
          setTimeout(function () {
            t.addClass("rm-closed");
          }, 850);
      }),
      { init: init }
    );
  })();
})(jQuery);
