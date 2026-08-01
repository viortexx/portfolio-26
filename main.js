window.copyEmail = function(e) {
  e.preventDefault();

  // Show tooltip unconditionally
  const tooltip = e.currentTarget.querySelector('.email-tooltip');
  if (tooltip) {
    tooltip.classList.add('show');
    setTimeout(() => {
      tooltip.classList.remove('show');
    }, 5000);
  }

  // Copy email using fallback if clipboard API fails
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText("vitoria.rcoelho@gmail.com").catch(err => {
      fallbackCopyTextToClipboard("vitoria.rcoelho@gmail.com");
    });
  } else {
    fallbackCopyTextToClipboard("vitoria.rcoelho@gmail.com");
  }
};

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

console.log("Vitoria Coelho Portfolio loaded.");



// Mobile menu toggle
window.toggleMobileMenu = function() {
  const menuBtn = document.querySelector('.hamburger-menu');
  const drawer = document.getElementById('mobile-drawer');
  
  if (menuBtn && drawer) {
    menuBtn.classList.toggle('is-open');
    drawer.classList.toggle('is-open');
  }
};

// You can add global interactivity here if needed later.
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Main Page (projects_reel) folder items on mobile
  if (window.innerWidth <= 768) {
    // Wait a brief moment to ensure dynamic injection is completed if any
    setTimeout(() => {
      const folderItems = document.querySelectorAll('.folder-item');
      if (folderItems.length > 0) {
        const folderObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            } else {
              entry.target.classList.remove('is-visible');
            }
          });
        }, {
          threshold: 0.7 // As requested, 70% threshold
        });

        folderItems.forEach(item => {
          folderObserver.observe(item);
        });
      }
    }, 100);
  }
});
