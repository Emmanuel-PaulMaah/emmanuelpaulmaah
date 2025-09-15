// main.js — vanilla JS for small interactions
document.addEventListener('DOMContentLoaded', function () {
  // Populate year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  navToggle && navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });

  // Newsletter signup handling (stub — replace with real endpoint)
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');
  const signupMsg = document.getElementById('signupMsg');

  form && form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) return;
    // Simple validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      signupMsg.textContent = 'Please enter a valid email.';
      signupMsg.classList.remove('hidden');
      signupMsg.classList.remove('text-green-600');
      signupMsg.classList.add('text-red-600');
      return;
    }

    // Here: integrate with Substack, ConvertKit, or your backend.
    // Example: call your API or show success message.
    signupMsg.textContent = 'Thanks — check your inbox for a welcome note.';
    signupMsg.classList.remove('hidden');
    signupMsg.classList.remove('text-red-600');
    signupMsg.classList.add('text-green-600');
    emailInput.value = '';
  });

  // Contact form: stub to show success message (replace with backend)
  const contactForm = document.getElementById('contactForm');
  const contactMsg = document.getElementById('contactMsg');
  contactForm && contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Collect form data
    const data = new FormData(contactForm);
    // In production: send to your email API or server endpoint.
    contactForm.reset();
    contactMsg.textContent = 'Message sent. I will reply within 48 hours.';
    contactMsg.classList.remove('hidden');
    setTimeout(() => contactMsg.classList.add('hidden'), 7000);
  });

  // Load featured posts (placeholder data that you can edit)
  const samplePosts = [
    {
      title: 'Why newsletters still matter',
      excerpt: 'Short-form essays beat viral takes when they build context across weeks.',
      url: 'https://emmanuelpaulmaah.substack.com/',
      tag: 'Newsletter'
    },
    {
      title: 'On attention & the new information economy',
      excerpt: 'How platform design shapes what we care to think about.',
      url: 'https://medium.com/@emmanuel.paulmaah',
      tag: 'Culture'
    },
    {
      title: 'A practical checklist for onboarding newsletter readers',
      excerpt: 'Steps to turn a signup into a returning reader — with examples.',
      url: 'https://emmanuelpaulmaah.substack.com/',
      tag: 'Product'
    }
  ];

  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = ''; // clear loading text
  samplePosts.forEach(p => {
    const article = document.createElement('article');
    article.className = 'p-5 border rounded hover:shadow';
    article.innerHTML = `
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-lg font-medium"><a href="${p.url}" target="_blank" rel="noopener" class="hover:text-accent">${escapeHtml(p.title)}</a></h3>
          <p class="text-sm text-gray-600 mt-2">${escapeHtml(p.excerpt)}</p>
        </div>
        <div class="text-xs text-gray-500 ml-4">${escapeHtml(p.tag)}</div>
      </div>
    `;
    postsContainer.appendChild(article);
  });

  // Small helper to avoid injection when injecting strings
  function escapeHtml(str) {
    return String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
});
