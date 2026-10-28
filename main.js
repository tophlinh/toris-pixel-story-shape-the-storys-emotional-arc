const SLIDES = [
  {
    chapter: 'Chapter 1 · About Me',
    title: "Hi, I'm Tori! 🌱✨",
    points: [
      'Product Manager · Recommender Systems',
      'Retrieval & ranking models for Disney+ and Hulu',
      'Computer Science @ UT Austin',
    ],
    line: "I help build the models that decide what you watch next!",
  },
  {
    chapter: 'Chapter 1 · About Me',
    title: 'Side Quests 🎮🪨🎨',
    points: [
      'Tinkering with little ideas',
      'Illustrating & sketching',
      'Pebble wrestling (aka bouldering)',
      'Collecting new things to learn',
    ],
    line: "Outside work, I'm usually wandering around looking for my next side quest.",
  },
  {
    chapter: 'Chapter 2 · AI in Corporate',
    title: 'Hype vs. Reality',
    points: [
      '2024: "Let me try ChatGPT!" (a novelty)',
      '2026: AI is part of every workflow (infrastructure)',
      'Less magic, more plumbing',
    ],
    line: "AI didn't replace the job. It quietly moved into every corner of it.",
  },
  {
    chapter: 'Chapter 2 · AI in Corporate',
    title: 'My Actual Workday',
    points: [
      '🧾 Replacing mundane tasks like Jira ticket writing',
      '📊 Analyzing data with AI-written SQL queries',
      '🔎 Reading and understanding codebases',
    ],
    line: "AI is a productivity tool for me. SQL is especially useful when I work with engineering partners, and I also use AI to explore and read codebases.",
  },
  {
    chapter: 'Chapter 2 · AI in Corporate',
    title: 'Productivity Has a Tradeoff',
    points: [
      'AI makes it easy to generate more',
      'More docs and tooling can mean more slop',
      'Review still matters: keep what is useful',
    ],
    line: "The flip side of making work faster is that we can create too much low-value documentation and tooling. Productivity also means knowing what not to keep.",
  },
  {
    chapter: 'Chapter 2 · AI in Corporate',
    title: 'The Key Insight 💡',
    points: [
      'AI handles execution faster',
      'Judgment is still entirely human',
      'Knowing WHAT to build, and WHY',
    ],
    line: "Speed is cheap now. Good taste and good decisions aren't.",
  },
  {
    chapter: 'Chapter 2 · AI in Corporate',
    title: 'Skills That Matter Now 🧭',
    points: [
      'Asking the right questions',
      'Checking AI output, not just trusting it',
      'Context, taste & understanding users',
      'Deciding what matters most',
    ],
    line: "Let AI handle the busywork; the human work—context and judgment—matters more than ever.",
  },
  {
    chapter: 'Chapter 3 · Personalization & Taste',
    title: 'Should Everything Be Personal?',
    points: [
      'Personalization is literally my job',
      'Homepages · recommendations · search',
      'Streaming: relevance beats a random wall of titles',
    ],
    line: "I build personalization every day. But lately, I keep coming back to one question: should everything be personalized?",
  },
  {
    chapter: 'Chapter 3 · Personalization & Taste',
    title: 'What I Mean by “Taste”',
    points: [
      'Not aesthetic preference',
      'Judgment that serves users well',
      'Especially when the data has no clear answer',
    ],
    line: "Taste is the ability to make a good call for people when the numbers alone can't tell you what to do.",
  },
  {
    chapter: 'Chapter 3 · Personalization & Taste',
    title: 'Choose Your Objective',
    points: [
      'Clicks · watch time · completion',
      'Retention · satisfaction',
      'Every metric creates a different experience',
    ],
    line: "In recommendations, the objective function matters: clicks can reward sensational content; watch time can favor longer content; satisfaction is harder to measure, but may surface what people truly love.",
  },
  {
    chapter: 'Chapter 3 · Personalization & Taste',
    title: 'When Feeds Shape Reality',
    points: [
      'Engage with one political view → see more of it',
      'Stories reinforce what you already believe',
      'Neighbors can get different versions of reality',
    ],
    line: "A model optimizing for engagement can make that choice for us—quietly, one morning’s top three stories at a time.",
  },
  {
    chapter: 'Chapter 3 · Personalization & Taste',
    title: 'Some Things Should Reach Everyone',
    points: [
      'News we need as informed citizens',
      'Public-health information',
      'Important—not just predicted to get clicks',
    ],
    line: "Some information matters regardless of our preferences or biases. It should reach people because it is important, not because an algorithm expects a click.",
  },
  {
    chapter: 'Chapter 3 · Personalization & Taste',
    title: 'Know When to Step Back',
    points: [
      'Personalize when it helps the user',
      'Step back when it undermines what they need',
      'Engagement alone can build a filter bubble',
    ],
    line: "The math can't choose the right tradeoff for us. That's a taste decision: knowing when to optimize—and when to step back.",
  },
  {
    chapter: 'Chapter 3 · Personalization & Taste',
    title: 'Judgment Is the Differentiator',
    points: [
      'Same foundation models · frameworks · cloud',
      'Deep user understanding, research & systems thinking',
      'Taste turns shared tools into products that serve people',
    ],
    line: "When the tools are commoditized, judgment makes a product feel magical instead of mediocre. Understand people deeply—and build for what matters.",
  },
  {
    chapter: 'Chapter 4 · Musings',
    title: 'AI Was Everywhere at RecSys',
    points: [
      'AI kept coming up at a recommender-systems research conference',
      'Every industry is asking where it can genuinely help',
      'The right use depends on context, goals, and stakes',
    ],
    line: 'I came away thinking that AI adoption is not one-size-fits-all. Each field has to decide what useful means—and what it is not willing to trade away.',
  },
  {
    chapter: 'Chapter 4 · Musings',
    title: 'Attention Is a Finite Resource',
    points: [
      'We only have so much time and attention',
      'Recommenders help shape what fills it',
      'More engagement is not always more value',
    ],
    line: 'This connects back to my work: recommendation systems do not just predict what someone might click. Their objectives help shape what people spend time with.',
    visual: 'assets/image-5.png',
    visualAlt: 'Chart showing US media consumption by format and hours per week',
  },
  {
    chapter: 'Chapter 4 · Musings',
    title: 'AI Has a Geopolitical Footprint',
    points: [
      'AI is software—and chips, compute, and energy',
      'Supply chains cross borders and concentrate power',
      'Policy shapes access, resilience, and who benefits',
    ],
    line: 'The AI conversation is also about infrastructure: who can build it, who controls the resources, and how policy responds to global dependencies.',
    visual: 'assets/image-6.png',
    visualAlt: 'Chart comparing domestic production and imports in AI-related industries',
  },
  {
    chapter: 'Chapter 4 · Musings',
    title: 'Compute Has a Cost',
    points: [
      'Access to powerful compute is not evenly shared',
      'Costs influence which ideas can be explored',
      'Infrastructure is part of the innovation story',
    ],
    line: 'The price of compute can shape who gets to experiment. That makes access to infrastructure a technical question, but also an economic and policy one.',
    visual: 'assets/image-7.png',
    visualAlt: 'Chart tracking rental prices for several generations of GPUs',
  },
  {
    chapter: 'Chapter 4 · Musings',
    title: 'AI in Medicine: Promise & Responsibility',
    points: [
      'AI can help researchers explore complex biology',
      'RNA structure prediction can support discovery',
      'Evidence, expertise, and accountability remain essential',
    ],
    line: 'In medicine, tools like RNA-structure prediction can support research—but clinical decisions need rigorous evidence, expert judgment, and clear accountability.',
    visual: 'assets/screenshot-2026-10-27-at-11-40-34pm.png',
    visualAlt: 'Research article describing LinearFold RNA structure prediction',
  },
  {
    chapter: 'Chapter 4 · Musings',
    title: 'AI-Assisted Animation Interpolation',
    points: [
      'Start with a few hand-drawn keyframes',
      'AI estimates the in-between poses for smoother motion',
      'Overreliance risks deskilling artists if core skills go unused',
      'Animators guide timing, style, and final quality',
    ],
    line: 'Frame interpolation can turn a few key poses into smoother motion, like the 60-fps example here. It saves repetitive work, but overreliance can deskill artists if core skills go unused. Animators still need to catch warped details and motion that feels wrong.',
    visual: 'assets/image-8.png',
    visualAlt: 'Side-by-side comparison of original animation and AI-interpolated 60 frames per second, showing a blue cat character.',
  },
  {
    chapter: 'Chapter 4 · Musings',
    title: 'People, Machines & the Rules We Choose',
    points: [
      'Who gets to shape these systems—and who benefits?',
      'Where should human judgment remain central?',
      'How can policy keep pace with the technology?',
    ],
    line: 'AI can expand what is possible, but it cannot choose our shared goals for us. The balance between people, machines, and policy is something I am still thinking through.',
  },
  {
    chapter: 'The End · Thanks for Being Here',
    title: 'Thank You for Coming! 🌱✨',
    points: [
      'I’m so glad you were here',
      'Until the next side quest 🎮',
    ],
    line: 'Thanks for spending a little time with me. Keep building thoughtful things! 🌱',
  },
];

const stage = document.getElementById('stage');
const chapterEl = document.getElementById('chapter');
const panelEl = document.getElementById('panel');
const textEl = document.getElementById('text');
const progressEl = document.getElementById('progress');
const chapterNav = document.getElementById('chapter-nav');
const imageViewer = document.getElementById('image-viewer');
const viewerImage = document.getElementById('image-viewer-image');
const viewerCloseButton = document.getElementById('image-viewer-close');

const music = new Audio('assets/audio/cozy-loop.mp3');
music.loop = true;
music.volume = 0.35;
const blip = new Audio('assets/audio/page-blip.mp3');
blip.volume = 0.6;
let muted = false;
let musicStarted = false;

let index = 0;
let typeTimer = null;
let typing = false;
let imageViewerOpen = false;
let viewerReturnFocus = null;

function resize() {
  const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  stage.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

function typeLine(line) {
  clearInterval(typeTimer);
  textEl.textContent = '';
  const chars = Array.from(line);
  let i = 0;
  typing = true;
  typeTimer = setInterval(() => {
    textEl.textContent += chars[i];
    i++;
    if (i >= chars.length) {
      clearInterval(typeTimer);
      typing = false;
    }
  }, 28);
}

function openImageViewer(image) {
  startMusic();
  viewerReturnFocus = image;
  viewerImage.src = image.currentSrc || image.src;
  viewerImage.alt = image.alt || 'Expanded presentation image';
  imageViewer.hidden = false;
  imageViewerOpen = true;
  viewerCloseButton.focus({ preventScroll: true });
}

function closeImageViewer() {
  if (!imageViewerOpen) {
    return;
  }
  imageViewer.hidden = true;
  viewerImage.removeAttribute('src');
  imageViewerOpen = false;
  if (viewerReturnFocus?.isConnected) {
    viewerReturnFocus.focus({ preventScroll: true });
  }
  viewerReturnFocus = null;
}

function render() {
  const slide = SLIDES[index];
  chapterEl.textContent = slide.chapter;
  progressEl.textContent = `${index + 1} / ${SLIDES.length}`;
  chapterNav.querySelectorAll('[data-chapter]').forEach((button) => {
    const isActive = button.dataset.chapter === slide.chapter;
    button.classList.toggle('is-active', isActive);
    button.querySelector('.chapter-nav__state').textContent = isActive ? 'YOU ARE HERE' : 'GO →';
    if (isActive) {
      button.setAttribute('aria-current', 'location');
    } else {
      button.removeAttribute('aria-current');
    }
  });
  const items = slide.points.map((p) => `<li>${p}</li>`).join('');
  const visual = slide.visual
    ? `<img class="slide-visual" src="${slide.visual}" alt="${slide.visualAlt}" tabindex="0" role="button" aria-label="Expand image: ${slide.visualAlt}">`
    : '';
  panelEl.classList.toggle('has-visual', Boolean(slide.visual));
  panelEl.innerHTML = `<h2>${slide.title}</h2><div class="slide-body${visual ? ' has-visual' : ''}">${visual}<ul>${items}</ul></div>`;
  typeLine(slide.line);
}

function playBlip() {
  if (muted) {
    return;
  }
  blip.currentTime = 0;
  blip.play().catch(() => {});
}

function startMusic() {
  if (!musicStarted && !muted) {
    musicStarted = true;
    music.play().catch(() => {});
  }
}

function go(delta) {
  startMusic();
  if (delta > 0 && typing) {
    clearInterval(typeTimer);
    typing = false;
    textEl.textContent = SLIDES[index].line;
    return;
  }
  const next = Math.max(0, Math.min(SLIDES.length - 1, index + delta));
  if (next !== index) {
    index = next;
    playBlip();
    render();
  }
}

function jumpToChapter(chapter) {
  const destination = SLIDES.findIndex((slide) => slide.chapter === chapter);
  if (destination < 0 || destination === index) {
    return;
  }
  startMusic();
  index = destination;
  playBlip();
  render();
}

chapterNav.addEventListener('click', (event) => {
  event.stopPropagation();
  const button = event.target.closest?.('button[data-chapter]');
  if (button && chapterNav.contains(button)) {
    jumpToChapter(button.dataset.chapter);
  }
});

stage.addEventListener('click', (event) => {
  const image = event.target.closest?.('img');
  if (image) {
    openImageViewer(image);
    return;
  }
  go(1);
});
imageViewer.addEventListener('click', (event) => {
  if (event.target === imageViewer) {
    closeImageViewer();
  }
});
viewerCloseButton.addEventListener('click', closeImageViewer);
window.addEventListener('keydown', (e) => {
  if (e.key === 'm' || e.key === 'M') {
    muted = !muted;
    music.muted = muted;
    if (!muted) {
      startMusic();
    }
    return;
  }
  if (imageViewerOpen) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeImageViewer();
    }
    return;
  }
  if (e.target instanceof Element && chapterNav.contains(e.target)) {
    return;
  }
  if ((e.key === 'Enter' || e.key === ' ') && e.target instanceof HTMLImageElement && stage.contains(e.target)) {
    e.preventDefault();
    openImageViewer(e.target);
  } else if (['ArrowRight', ' ', 'Enter', 'd', 'D'].includes(e.key)) {
    go(1);
  } else if (['ArrowLeft', 'Backspace', 'a', 'A'].includes(e.key)) {
    go(-1);
  }
});
window.addEventListener('resize', resize);

resize();
render();
