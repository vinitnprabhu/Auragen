export default [
  {
    name: "Blog Ideas",
    desc: "An AI tool that generates blog ideas based on the topic you provide.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt: "Give me 5 blog topic ideas in bullet points for: ",
    slug: "ai-blog-title",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog writer, generating high-quality SEO-ready blog posts in seconds.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    aiPrompt: "Generate Blog Content for the title: ",
    slug: "ai-blog-content",
    form: [
      {
        label: "Enter your blog title",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "SMS",
    desc: "An AI tool that writes awesome message replies in seconds.",
    category: "SMS",
    icon: "https://cdn-icons-png.flaticon.com/128/890/890260.png",
    aiPrompt: "How to reply to this message: ",
    slug: "ai-message",
    form: [
      {
        label: "Enter the message you want to reply to",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Email Reply",
    desc: "An AI tool that serves as your personal assistant to write professional email replies in seconds.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/944/944948.png",
    aiPrompt: "How to reply to this email: ",
    slug: "ai-email",
    form: [
      {
        label: "Enter the email content to respond to",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Food Research",
    desc: "An AI tool that generates insights on the health benefits of food items.",
    category: "Food",
    icon: "https://cdn-icons-png.flaticon.com/128/706/706164.png",
    aiPrompt:
      "Research and help me understand the health benefits of this food: ",
    slug: "ai-food",
    form: [
      {
        label: "Enter the food name",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Chef AI",
    desc: "An AI tool that generates healthy and delicious recipes based on your preferences.",
    category: "Recipes",
    icon: "https://cdn-icons-png.flaticon.com/128/1830/1830839.png",
    aiPrompt: "Generate an easy and healthy recipe for: ",
    slug: "ai-chef",
    form: [
      {
        label: "Enter ingredients or preferences",
        field: "textarea",
        name: "preferences",
        required: true,
      },
    ],
  },
  {
    name: "Rewrite Article",
    desc: "Rewrites existing content to make it plagiarism-free and bypass AI detectors.",
    category: "Rewriting Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    aiPrompt:
      "Rewrite the given article without plagiarism in rich text editor format.",
    slug: "ai-rewrite-article",
    form: [
      {
        label: "Provide content to rewrite",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "Generates catchy Instagram posts based on keywords.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    aiPrompt:
      "Generate 3 Instagram posts based on given keywords, formatted in rich text.",
    slug: "ai-instagram-post-generator",
    form: [
      {
        label: "Enter keywords for the post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hashtag Generator",
    desc: "Generates relevant Instagram hashtags.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    aiPrompt:
      "Generate 15 Instagram hashtags based on given keywords, formatted in rich text.",
    slug: "ai-instagram-hash-tag-generator",
    form: [
      {
        label: "Enter keywords for hashtags",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammar Check",
    desc: "Corrects grammar in provided text.",
    category: "English",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    aiPrompt:
      "Rewrite the input text by correcting grammar and format the output in rich text.",
    slug: "ai-english-grammar-checker",
    form: [
      {
        label: "Enter text for grammar correction",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "Explains programming code line by line.",
    category: "Coding",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    aiPrompt:
      "Explain the provided code line by line, formatting output in a code block.",
    slug: "ai-explain-code",
    form: [
      {
        label: "Enter code to explain",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Creates a catchy tagline for your brand or product.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    aiPrompt:
      "Generate 5-10 taglines for the given brand or product description, formatted in rich text.",
    slug: "ai-tagline-generator",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Description",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
];
