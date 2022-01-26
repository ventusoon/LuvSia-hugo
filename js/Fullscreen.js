window.onload = function() {
  scroll()
}
function scroll() {
  if (
    document.documentElement.scrollHeight <=
    document.documentElement.clientHeight
  ) {
    bodyTag = document.getElementsByTagName("body")[0]
    bodyTag.style.height =
      (document.documentElement.clientWidth / screen.width) *
        screen.height +
      "px"
  }
}
