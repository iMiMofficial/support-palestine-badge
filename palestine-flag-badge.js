document.addEventListener('DOMContentLoaded', function() {
    const createSupportButton = function() {
      const button = document.createElement('div');
      button.style.width = '300px';
      button.style.height = '84px';
      button.style.position = 'fixed';
      button.style.zIndex = '999';
      button.style.cursor = 'pointer';
      button.target = '_blank';

      const url = '#'; // Replace it with the donation page link
      const title = 'Support Palestine';
      const position = 'right';

      button.title = title;

      if (url) {
        button.addEventListener('click', function() {
          window.open(url, '_blank');
        });
      }

      if (position === 'right') {
        button.style.right = '-80px';
        button.style.bottom = '20px';
        button.style.transform = 'rotate(135deg)';
        button.style.background = 'linear-gradient(-360deg, #000000 0%, #000000 33%, #FFFFFF 33%, #FFFFFF 66%, #149954 66%, #149954 100%)';
      } else {
        button.style.left = '-80px';
        button.style.bottom = '20px';
        button.style.transform = 'rotate(45deg)';
        button.style.background = 'linear-gradient(-180deg, #000000 0%, #000000 33%, #FFFFFF 33%, #FFFFFF 66%, #149954 66%, #149954 100%)';
      }

      button.setAttribute('id', 'support-palestine');
      document.body.appendChild(button);
    };
    createSupportButton();
  });
