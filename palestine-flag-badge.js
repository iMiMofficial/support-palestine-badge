  var SWP__currentScript = document.currentScript || {};
  var SWP__DOMReady = function(callback) {
    document.readyState === 'interactive' || document.readyState === 'complete' ? callback() : document.addEventListener('DOMContentLoaded', callback);
  };
  SWP__DOMReady(function() {
    const badge = document.createElement('div'); // Element variable name is set as badge

    // Parameters. Sent through the script tag
    const url = SWP__currentScript.getAttribute('url');
    const title = SWP__currentScript.getAttribute('title');
    const position = SWP__currentScript.getAttribute('position');

    // Set custom title if neccessary
    badge.title = title || 'Support Palestine';

    // If URL is provided
    if (url) {
      badge.style.cursor = 'pointer'
      badge.target = '_blank'
      badge.addEventListener('click', function() {
        window.open(url, '_blank')
      })
    }

    // Set position (left, right)
    if (position === 'right') {
      badge.style.right = '-80px'
      badge.style.bottom = '20px'
      badge.style.transform = 'rotate(135deg)'
      badge.style.background = 'linear-gradient(-360deg, #000000 0%, #000000 33%, #FFFFFF 33%, #FFFFFF 66%, #149954 66%, #149954 100%)'
    } else {
      badge.style.left = '-80px'
      badge.style.bottom = '20px'
      badge.style.transform = 'rotate(45deg)'
      badge.style.background = 'linear-gradient(-180deg, #000000 0%, #000000 33%, #FFFFFF 33%, #FFFFFF 66%, #149954 66%, #149954 100%)'
    }
    
    // Adjust size based on screen width
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 600) {
        badge.style.width = '200px';
        badge.style.height = '42px';
    } else {
        badge.style.width = '300px';
        badge.style.height = '84px';
    }
    badge.style.position = 'fixed';
    badge.style.zIndex = '999';

    badge.setAttribute('id', 'support-palestine')
    document.body.appendChild(badge);
  });
