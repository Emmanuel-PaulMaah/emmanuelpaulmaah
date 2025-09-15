document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Hardcoded sample posts
  const mediumPosts = [
    {
      title: "The Age of AI and Attention",
      url: "https://medium.com/@emmanuel.paulmaah/the-age-of-ai-and-attention-xxxx",
      excerpt: "Exploring how artificial intelligence reshapes what we choose to pay attention to."
    },
    {
      title: "Building Bridges Between Code and Culture",
      url: "https://medium.com/@emmanuel.paulmaah/building-bridges-xxxx",
      excerpt: "On how technology isn’t just about systems, but about the humans it connects."
    },
    {
      title: "A Quiet Future of Tech",
      url: "https://medium.com/@emmanuel.paulmaah/a-quiet-future-xxxx",
      excerpt: "Thoughts on subtle innovations that change our lives quietly."
    }
  ];

  const substackPosts = [
    {
      title: "On finding my voice again",
      url: "https://emmanuelpaulmaah.substack.com/p/on-finding-my-voice-again",
      excerpt: "A personal reflection on rediscovering the joy of writing."
    },
    {
      title: "Letters from the in-between",
      url: "https://emmanuelpaulmaah.substack.com/p/letters-from-the-in-between",
      excerpt: "Notes on the messy middle of projects and life."
    },
    {
      title: "Morning thoughts",
      url: "https://emmanuelpaulmaah.substack.com/p/morning-thoughts",
      excerpt: "A short entry about slowing down before the day begins."
    }
  ];

  // Pick random
  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const mediumChoice = randomItem(mediumPosts);
  const substackChoice = randomItem(substackPosts);

  // Render Medium post
  const mediumDiv = document.getElementById('mediumPost');
  mediumDiv.innerHTML = `
    <a href="${mediumChoice.url}" target="_blank" class="text-lg font-medium hover:text-accent">${mediumChoice.title}</a>
    <p class="mt-2 text-sm text-gray-600">${mediumChoice.excerpt}</p>
  `;

  // Render Substack post
  const substackDiv = document.getElementById('substackPost');
  substackDiv.innerHTML = `
    <a href="${substackChoice.url}" target="_blank" class="text-lg font-medium hover:text-accent">${substackChoice.title}</a>
    <p class="mt-2 text-sm text-gray-600">${substackChoice.excerpt}</p>
  `;
});
