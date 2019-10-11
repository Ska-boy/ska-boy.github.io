var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();function onScroll(event) {
  document.
  querySelector(".hero").
  style.setProperty("--y", window.scrollY + "px");
}

var referenceImage = document.querySelector(".hero-item:last-child");

var observer = new IntersectionObserver(function (entries) {var _entries = _slicedToArray(
  entries, 1),isIntersecting = _entries[0].isIntersecting;

  if (isIntersecting) {
    addEventListener("scroll", onScroll, { capture: false, passive: true });
  } else {
    removeEventListener("scroll", onScroll);
  }
});

observer.observe(referenceImage);

// const observerOptions = {
// root: null,
// rootMargin: '0px',
// threshold: 0
// }