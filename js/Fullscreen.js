function goFullscreen(id) {undefined

  var element = document.getElementById(id);
  
  var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
  
  (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
  
  (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
  
  (document.msFullscreenElement && document.msFullscreenElement !== null);
  
  var docElm = document.documentElement;
  
  if (!isInFullScreen) {undefined
  
  if (element.requestFullscreen) {undefined
  
  element.requestFullscreen();
  
  } else if (element.mozRequestFullScreen) {undefined
  
  element.mozRequestFullScreen();
  
  } else if (element.webkitRequestFullScreen) {undefined
  
  element.webkitRequestFullScreen();
  
  } else if (element.msRequestFullscreen) {undefined
  
  element.msRequestFullscreen();
  
  }
  
  } else {undefined
  
  if (document.exitFullscreen) {undefined
  
  document.exitFullscreen();
  
  } else if (document.webkitExitFullscreen) {undefined
  
  document.webkitExitFullscreen();
  
  } else if (document.mozCancelFullScreen) {undefined
  
  document.mozCancelFullScreen();
  
  } else if (document.msExitFullscreen) {undefined
  
  document.msExitFullscreen();
  
  }
  
  }
  
  }