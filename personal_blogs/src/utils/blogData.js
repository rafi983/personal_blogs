// Blog data and utility functions
const formatDate = (dateStr) => {
  const format = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return format.format(new Date(dateStr));
};

const blogPosts = [
  {
    id: 1,
    title: "Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated",
    slug: "balancing-hobbies-and-coding",
    publishedAt: "2025-02-18T00:00:00Z",
    date: formatDate("2025-02-18T00:00:00Z"),
    category: "Lifestyle",
    description: "Thoughts on maintaining energy and focus through outdoor activities and exercise.",
    content: `Today I want to talk about how I juggle my love for hiking and rock climbing with my growing passion for coding. It's easy to get so deep into front-end development that we forget to step away from our screens. But for me, embracing outdoor adventures has been crucial in keeping my mind fresh and my motivation strong.

---

## Why Balance Matters
It's tempting to pour all your energy into coding—especially when you're in a good flow or *this close* to fixing that stubborn bug. However, **taking breaks** and staying active can help you:

1. **Clear Your Head**: Stepping away from lines of code often leads to creative problem-solving breakthroughs.
2. **Maintain Physical Health**: Coding can be pretty sedentary, so regular exercise helps offset hours at the computer.
3. **Boost Mental Resilience**: Outdoor hobbies let you recharge, fight stress, and come back stronger for the next coding challenge.

---

> **Warning: Be aware of burnout**  \
> Overworking at your desk—even if you love what you're doing—can lead to burnout. If you're feeling overwhelmed or fatigued, consider stepping away for a quick walk or a stretching session. Your code (and your body) will thank you!

---

## My Outdoor Adventures

### 1. Hiking
I've always loved the feeling of conquering a trail and reaching a scenic overlook. Hiking challenges my endurance and keeps me grounded in nature's beauty. Whether it's a short trail on a lazy afternoon or a full-day trek in the mountains, the fresh air and picturesque views give me the clarity I need when I'm stuck on a tricky coding problem.

> **Tip: Bring a small notebook on your hikes**  \
Sometimes, those “aha” moments pop up when you're miles away from your keyboard!

### 2. Rock Climbing
Rock climbing might seem worlds away from coding, but it actually mirrors the problem-solving aspects of development:

- **Strategic Thinking**: Each route is like a puzzle, and you have to figure out the sequence of moves.
- **Incremental Progress**: You improve over time, one hold at a time, just like learning new coding concepts.

Rock climbing also helps build confidence—if I can overcome a tough route on the wall, I can handle whatever JavaScript throws at me.

---

## Tips for Staying Motivated

1. **Plan Your Adventure**: Before a big project, schedule a hike or climbing session. It gives you a goal to work toward and a well-deserved break afterward.
2. **Start Small**: If you're new to outdoor activities, you don't have to summit the highest peak. A simple walk in the park can do wonders for your mood.
3. **Listen to Your Body**: If you're tired, don't force yourself to climb a 5.12 route! Find a balance between pushing your limits and staying safe.
4. **Track Your Progress**: Just like version control, keep track of your achievements in both coding and hobbies. Looking back at how far you've come is super motivating.

---

## Final Thoughts
Balancing coding with activities like hiking and rock climbing has been a game-changer for me. By stepping away from the computer, I find renewed focus, more creativity, and a stronger sense of well-being. Whether you're a seasoned developer or just starting out, remember: taking care of your mind and body is just as important as mastering that new JavaScript framework.

Thanks for reading!

— Paulina`
  },
  {
    id: 2,
    title: "Understanding JavaScript Basics",
    slug: "understanding-javascript-basics",
    date: formatDate("2025-01-28T00:00:00Z"),
    category: "Learning",
    description: "My adventure into JavaScript's fundamentals—variables, functions, loops, and more.",
    content: `Diving into JavaScript has been both thrilling and challenging. As a language that's essential for web development, getting a grip on JavaScript basics felt like unlocking a new level in my coding journey. Here's a peek into what I learned and some tips for fellow beginners.

---

## The Magic of Variables
Variables are like the *nouns* of programming—they hold values we can work with. In JavaScript, we have different types of variables:

- **\`let\`**: For variables that can change.
- **\`const\`**: For variables that should stay constant.
- **\`var\`**: An older way to declare variables, but still good to know.

> **Tip:** Use \`const\` by default. It helps prevent accidental changes to your variables.

---

## Functions: The Building Blocks
Functions are reusable blocks of code that perform a specific task. They come in handy to keep our code DRY (Don't Repeat Yourself).

Here's a simple function:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

And calling it looks like this:

\`\`\`javascript
let message = greet('Paulina');
console.log(message); // Hello, Paulina!
\`\`\`

> **Tip:** Get comfortable with both function declarations and arrow functions (\`const greet = (name) => \`), as you'll see both styles often.

---

## Control Structures: Ifs and Loops
These are essential for making decisions and repeating actions in our code.

- **If statements** let us execute code based on conditions.
- **Loops** (like \`for\` and \`while\`) help us run the same block of code multiple times.

Example of a \`for\` loop:

\`\`\`javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
\`\`\`

> **Tip:** When using loops, be cautious of off-by-one errors. They happen when you miscalculate the number of iterations, often leading to unexpected results.

---

## My Biggest Challenge
Understanding asynchronous JavaScript was tough. Concepts like callbacks, promises, and async/await felt overwhelming initially. But after building a few simple projects and practicing, it started to click.

---

## Resources That Helped Me
1. **MDN Web Docs**: Comprehensive and easy-to-understand documentation.
2. **JavaScript.info**: A modern tutorial from the basics to advanced topics.
3. **YouTube**: Channels like Traversy Media and The Net Ninja have fantastic JavaScript playlists.

---

## Final Thoughts
JavaScript is a powerful language that opens up a world of possibilities in web development. My advice to beginners? Be patient, practice consistently, and don't hesitate to seek help from the developer community. We're all learning and growing together.

Catch you in the next post, where I'll dive into my favorite development tools!`
  },
  {
    id: 3,
    title: "My Favorite Dev Tools for Productivity",
    slug: "dev-tools-for-productivity",
    date: formatDate("2025-01-29T00:00:00Z"),
    category: "Tools",
    description: "A quick look at the tools I rely on, from code editors to browser extensions.",
    content: `As I delve deeper into the world of web development, I've come to appreciate the tools that make the journey smoother and more enjoyable. Here's a rundown of my current favorites:

---

## 1. Code Editor: Visual Studio Code
VS Code has been a game changer for me. Its features include:

- **IntelliSense**: Smart completions based on variable types, function definitions, and imported modules.
- **Debugging**: Built-in debugging support for Node.js.
- **Extensions**: From GitHub integration to ESLint, the marketplace has tools that cater to almost every need.

> **Tip:** Spend time customizing your editor. A well-set-up environment can significantly boost your productivity.

---

## 2. Browser: Google Chrome
Chrome remains my go-to browser for development, mainly because of its powerful DevTools. With it, I can:

- Inspect HTML/CSS in real-time.
- Debug JavaScript using breakpoints.
- Analyze performance and optimize accordingly.

> **Tip:** Learn the keyboard shortcuts for DevTools. They can greatly speed up your workflow.

---

## 3. Version Control: Git & GitHub
Tracking changes and collaborating with others has never been easier. Key commands I use often:

- \`git init\`: Initialize a new Git repository.
- \`git add .\`: Stage changes for commit.
- \`git commit -m "message"\`: Commit your changes.
- \`git push\`: Upload your changes to GitHub.

> **Tip:** Write clear, concise commit messages. They serve as a log of your project's history and are invaluable when you look back later.

---

## 4. CSS Framework: Bootstrap
Bootstrap has sped up my front-end development significantly. Its grid system and pre-designed components allow for responsive design with minimal effort.

> **Tip:** Even if you customize Bootstrap, it's good to understand the underlying CSS. It will help you troubleshoot issues and make more informed design decisions.

---

## 5. JavaScript Libraries: jQuery & Axios
- **jQuery** simplifies DOM manipulation and event handling. Even though vanilla JS has caught up in terms of capabilities, jQuery's simplicity is still appealing for smaller projects.
- **Axios** is my preferred choice for making HTTP requests. Its promise-based architecture fits in seamlessly with modern JavaScript async/await syntax.

> **Tip:** Always keep an eye on the network tab in DevTools when working with APIs. It provides insights into the requests being made and helps in debugging issues.

---

## 6. DevOps: Docker
Docker has revolutionized the way I approach development and deployment. By containerizing applications, I ensure consistency across different environments.

> **Tip:** Start with the basics: understand images, containers, and Docker Hub. As you grow more comfortable, explore Docker Compose and Docker Swarm for orchestration.

---

## Conclusion
The right tools can make a world of difference in your development workflow. While it's essential to find what works best for you, I hope this list gives you a solid starting point. As always, the developer community is full of resources, so never stop exploring and learning.

Until next time, happy coding!`
  },
  {
    id: 4,
    title: "Exploring the World of Responsive Design",
    slug: "exploring-responsive-design",
    date: formatDate("2025-02-04T00:00:00Z"),
    category: "Technical",
    description: "The importance of making websites look great on different devices.",
    content: `Responsive design is no longer just a nice-to-have—it's essential. With the variety of devices available today, ensuring that our websites look good everywhere is crucial. Here's what I've learned about responsive design and some techniques that have worked for me.

---

## The Fluid Grid
At the heart of responsive design is the fluid grid concept. Instead of using fixed sizes, we use relative units like percentages. This approach allows our layouts to adapt to different screen sizes.

> **Tip:** Start with a mobile-first approach. Design for the smallest screen first, then progressively enhance for larger screens.

---

## Flexible Images
Images should also be responsive. Using CSS, we can ensure that images scale nicely to fit their containers.

Example:

\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`

> **Tip:** Always optimize images for the web. Tools like ImageOptim or TinyPNG can reduce file size without sacrificing quality.

---

## Media Queries
Media queries are a cornerstone of CSS3, allowing us to apply styles based on device characteristics.

Example:

\`\`\`css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
\`\`\`

> **Tip:** Use media queries to adjust layouts, typography, and images. But be cautious not to overdo it—too many media queries can make your CSS hard to maintain.

---

## The Importance of Viewport
The viewport meta tag is crucial for responsive web apps. It ensures that our designs look good on all devices by controlling the layout's scaling.

Example:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

> **Tip:** Always include the viewport meta tag in your responsive designs. It prevents unexpected zooming and scaling on mobile devices.

---

## Testing Responsiveness
No discussion on responsive design is complete without mentioning testing. Tools like Chrome's DevTools allow us to simulate various devices. But nothing beats testing on actual devices.

> **Tip:** Regularly test your designs on multiple devices and orientations. It helps catch issues early and ensures a consistent user experience.

---

## Conclusion
Responsive design is an integral part of modern web development. By embracing fluid grids, flexible images, and media queries, we can create websites that offer a seamless experience across devices. As always, the key is to test, iterate, and stay updated with the latest best practices.

In the next post, I'll share my thoughts on overcoming imposter syndrome as a developer. Stay tuned!`
  },
  {
    id: 5,
    title: "Overcoming Imposter Syndrome as a New Developer",
    slug: "overcoming-imposter-syndrome",
    date: formatDate("2025-02-10T00:00:00Z"),
    category: "Personal Growth",
    description: "Tips and personal reflections on dealing with self-doubt when learning to code.",
    content: `Imposter syndrome is something many of us face, especially when we're starting. That nagging feeling that you don't belong or that you're not as skilled as others can be overwhelming. Here's my take on overcoming it.

---

## Recognize That You're Not Alone
First off, understand that imposter syndrome is common. Many developers, even those with years of experience, feel this way. It's not a reflection of your abilities but rather a sign that you're pushing your boundaries.

---

## Celebrate Small Wins
Every step forward is a victory. Whether it's fixing a bug, learning a new concept, or completing a project, take a moment to celebrate. These small wins add up and serve as a reminder of your progress.

> **Tip:** Keep a journal of your achievements. When self-doubt creeps in, revisit this journal to remind yourself of how far you've come.

---

## Seek Feedback and Mentorship
Don't hesitate to seek feedback. Constructive criticism helps you grow, and positive reinforcement boosts your confidence. Additionally, having a mentor can provide guidance, support, and a reality check when your inner critic gets too loud.

---

## Embrace Continuous Learning
The tech world is always evolving, and so should you. Embrace the mindset of a lifelong learner. Attend workshops, take online courses, read books, and most importantly, build projects. The more you learn and practice, the more confident you'll become.

---

## Connect with Others
Join developer communities, both online and offline. Sharing your experiences and hearing others' stories can be incredibly validating. Platforms like GitHub, Stack Overflow, and local meetups are great places to start.

---

## Practice Self-Compassion
Be kind to yourself. Understand that everyone makes mistakes and faces challenges. Instead of berating yourself for perceived shortcomings, treat yourself with the same kindness and understanding that you would offer a friend.

---

## Conclusion
Imposter syndrome is a hurdle, but it's one that can be overcome. By recognizing your worth, celebrating your journey, and continuously striving to learn and grow, you can silence the inner critic and embrace your identity as a developer.

In the next post, I'll be sharing some of the books that have inspired me on my coding journey. Until next time, keep pushing forward!`
  },
  {
    id: 6,
    title: "Reading for Inspiration: 5 Books That Shaped My Coding Journey",
    slug: "5-books-that-shaped-my-coding-journey",
    date: formatDate("2025-02-15T00:00:00Z"),
    category: "Learning",
    description: "A few of my favorite books, both fiction and non-fiction, that keep me motivated.",
    content: `Reading has always been a source of inspiration for me. Here are five books that have significantly influenced my coding journey:

---

## 1. "Clean Code" by Robert C. Martin
This book is a must-read for all developers. It emphasizes the importance of writing clean, understandable code and provides practical advice on how to achieve it.

---

## 2. "The Pragmatic Programmer" by Andrew Hunt and David Thomas
A timeless classic that offers tips and techniques to help you become a more adaptable and efficient programmer.

---

## 3. "You Don't Know JS" (book series) by Kyle Simpson
This series dives deep into the mechanics of JavaScript, helping you understand the language like never before.

---

## 4. "Eloquent JavaScript" by Marijn Haverbeke
A beautiful book that not only teaches you JavaScript but also how to think like a programmer.

---

## 5. "The Mythical Man-Month" by Frederick P. Brooks Jr.
Though it's more about software project management, the insights in this book are invaluable for understanding the broader picture of software development.

---

## Conclusion
Books have the power to inspire, educate, and transform. I hope this list gives you some ideas for your reading list. Remember, the journey of a thousand miles begins with a single step (or in our case, a single line of code).

In the next post, I'll discuss how I balance my hobbies with coding, and how activities like hiking and rock climbing keep me motivated. Stay tuned!`
  },
  {
    id: 7,
    title: "Getting Started with Web Development",
    slug: "getting-started",
    date: formatDate("2025-01-10T00:00:00Z"),
    category: "Learning",
    description: "My journey into the world of web development and why I decided to start coding.",
    content: `Embarking on the web development journey has been one of the most rewarding decisions of my life. Here's a glimpse into my beginnings and some advice for those looking to dive in.

---

## The Spark
My interest in web development was piqued when I stumbled upon a website showcasing stunning animations and interactive elements. I thought, "If they can do it, why not me?" That curiosity led me to explore the vast world of HTML, CSS, and JavaScript.

---

## First Steps
Like many, I started with the basics:

- **HTML**: Learning about tags, elements, and attributes was fascinating. I loved how I could structure content and create links between pages.
- **CSS**: This is where the magic of design came in. I enjoyed playing with colors, fonts, and layouts. The power of the box model, flexbox, and grid system opened up a new realm of possibilities.
- **JavaScript**: The logic and interactivity blew my mind. Understanding variables, functions, and events was challenging but exhilarating.

> **Tip:** Don't rush the learning process. Take your time to understand each concept thoroughly. Build small projects to apply what you've learned.

---

## Overcoming Challenges
The journey hasn't been without hurdles. There were times when I felt overwhelmed, especially when debugging complex issues or trying to understand advanced concepts. But each challenge overcame was a confidence booster.

> **Tip:** When stuck, take a break. Often, stepping away for a bit helps clear your mind. And don't hesitate to seek help from the developer community.

---

## Building Projects
One of the most effective ways I learned was by building projects. From simple static pages to dynamic web apps, each project taught me something new. They also served as a great addition to my portfolio.

> **Tip:** Start with small projects. As you gain confidence, gradually take on more complex challenges. And always prioritize quality over quantity.

---

## The Joy of Problem Solving
Web development is essentially about problem-solving. Whether figuring out why a layout isn't working or optimizing a site's performance, the satisfaction of finding a solution is unparalleled.

---

## Conclusion
Web development is a journey of continuous learning and growth. For those considering this path, my advice is simple: dive in! Embrace the challenges, celebrate the victories, and never stop learning.

In the next post, I'll share my thoughts on the importance of responsive design in today's multi-device world. Until next time, happy coding!`
  }
];

export const getAllPosts = () => blogPosts;
export const getPostById = (id) => blogPosts.find(post => post.id === parseInt(id));
export const getLatestPosts = () => blogPosts.slice(0, 5);
export const getPostBySlug = (slug) => blogPosts.find(post => post.slug === slug);

export { blogPosts };
