// If drafts.csswg.org works, then compatMode should be "CSS1Compat".
if (document.compatMode === "BackCompat") {
  const {pathname, search, hash} = location;
  // Avoid redirecting images and such.
  if (pathname.endsWith("/")) {
    location.href = "https://w3c.github.io/csswg-drafts" + pathname + search + hash;
  }
}
