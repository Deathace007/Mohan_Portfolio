export const profile = {
  name: 'Mohan Borle',
  role: 'AI/ML Engineer',
  location: 'Pune, India',
  email: 'mohanborle17@gmail.com',
  phone: '+91 7420870251',
  linkedin: 'https://www.linkedin.com/in/mohan-borle-b0263b200/',
  summary: [
    'B.Tech in Information Technology with strong foundations in backend development, cloud tooling, and AI/ML workflows.',
    'Proficient in Python, PyTorch, Docker, and REST APIs with experience fine-tuning deep learning and LLM models.',
    'Eager to build impactful AI systems and ship production-grade solutions.',
  ],
}

export const skills = [
  { category: 'Languages', items: ['Python', 'Core Java', 'JavaScript'] },
  { category: 'Web & Backend', items: ['Flask', 'Django', 'REST APIs', 'ReactJS', 'Node.js', 'Next.js', 'Express.js'] },
  { category: 'AI/ML & Data', items: ['PyTorch', 'TensorFlow', 'OpenCV', 'Pandas', 'NLP', 'GenAI', 'Transfer Learning'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB'] },
  { category: 'Cloud & Tools', items: ['AWS', 'Docker', 'Git', 'GitHub', 'Hugging Face'] },
  { category: 'IDEs', items: ['VS Code', 'Google Colab', 'Eclipse', 'Project IDX', 'IntelliJ IDEA'] },
]

export const projects = [
  {
    title: 'Fine-Tuning Large Language Models with LoRA',
    period: '2024',
    tags: ['Python', 'PyTorch', 'Hugging Face', 'LoRA', 'PEFT', 'Transformers', 'Colab'],
    summary:
      'Fine-tuned Gemma via instruction-tuned custom datasets using LoRA (PEFT) to optimize memory/computation; built a complete HF training pipeline with data cleaning, JSONL formatting, tokenization, and evaluation.',
  },
  {
    title: 'Real-Time Crowd Counting (CDENet)',
    period: '2023',
    tags: ['Python', 'OpenCV', 'PyTorch', 'CUDA', 'Deep Learning'],
    summary:
      'Designed a VGG16-derived (10-layer) model tailored for crowd density estimation; implemented real-time inference with OpenCV, dataset preprocessing for ShanghaiTech, and modular PyTorch codebase.',
  },
]

export const experience = [
  {
    role: 'Web Developer Intern',
    company: 'Real Tech Pvt. Ltd.',
    period: 'Aug 2024 – Jan 2025',
    bullets: [
      'Built responsive, accessible web pages in HTML/CSS/JS and React.',
      'Collaborated with design/engineering to enhance UX and performance.',
      'Worked with Git and REST APIs in a team environment.',
    ],
    tech: ['HTML5', 'CSS', 'JavaScript', 'React', 'Git', 'REST APIs', 'VS Code'],
  },
]

export const education = [
  {
    degree: 'Bachelor of Information Technology (Data Science)',
    school: 'Ajeenkya D Y Patil University',
    period: '2020 – 2024',
    meta: 'CGPA: 8.22',
  },
  {
    degree: 'HSC',
    school: 'Chate School & Jr. College',
    period: '2019 – 2020',
    meta: 'Percentage: 68.60%',
  },
]

export const certifications = [
  {
    name: 'Introduction to PyTorch (Udemy)',
    details: 'Hands-on tensors, autograd, computation graphs; built CV models and training pipelines.',
  },
  {
    name: 'Mastering Docker for DevOps (Udemy)',
    details: 'Containerization, Dockerfiles, volumes, networking; deployed real-world apps with Docker Compose.',
  },
  {
    name: 'Full Stack Developer (Seed Infotech)',
    details: 'Frontend/Backend with React, Node.js, Express.js, Spring Boot; SQL (MySQL) and NoSQL (MongoDB).',
  },
]
