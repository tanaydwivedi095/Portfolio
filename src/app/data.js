/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Publication: LViT Model for Skin Cancer Disease Classification",
    description: "Developed a Vision Image Transformer model with PyTorch, achieving a top accuracy of 95.82% and reducing processing power by 35%. This work, accepted in the Springer International Journal of System Assurance Engineering and Management, improved accuracy by 6% using a fine-tuned B16 architecture.",
    date: "2024-09-20",
    demoLink: "https://link.springer.com/article/10.1007/s13198-024-02521-6",
  },
  {
    id: 2,
    name: "Project: Smart Contact Manager",
    description: "Built a contact management solution with Spring Boot, MySQL, and Spring Security, cutting user onboarding time by 30%. The Thymeleaf and Tailwind CSS interface streamlined access for over 1,000 new users monthly.",
    date: "2024-08-12",
    demoLink: "https://github.com/tanaydwivedi095/SmartContactManager",
  },
  {
    id: 3,
    name: "Publication: A hybrid CNN with transfer learning for skin cancer disease detection",
    description: "I developed a hybrid transfer learning model using EfficientNetV2B3 and other CNN architectures, achieving a top accuracy of 90.11% and reducing computational power by 20%. This work, which improved accuracy by 3%, was published in Springer’s *Medical and Biological Engineering and Computing*.",
    date: "2024-05-14",
    demoLink: "https://link.springer.com/article/10.1007/s11517-024-03115-x",
  },
  {
    id: 4,
    name: "Project: Skin Cancer Classification System",
    description: "Built a skin cancer classifier with TensorFlow and PyTorch, achieving 95.82% accuracy and reducing diagnostic time by 50%. A Streamlit UI improved user experience, cutting waiting time by 40%.",
    date: "2023-12-17",
    demoLink: "https://github.com/tanaydwivedi095/Streamlit-UI-for-Skin-Cancer-Predictions",
  },
  {
    id: 5,
    name: "Project: Stock Price Prediction Model",
    description: "Developed a time series prediction model with Scikit-learn and LSTM, achieving 92% accuracy and improving inventory planning by 15%. The model predicts stocks for 100+ companies, while optimizations boosted efficiency by 25% and reduced computation time by 40%.",
    date: "2022-09-12",
    demoLink: "https://github.com/tanaydwivedi095/Stock-Price-Prediction-Algorithm",
  },
  {
    id: 6,
    name: "Project: Movie Recommendation System",
    description: "Deployed a Cosine-Similarity model to match user preferences with similar movies, increasing user satisfaction by 30% and platform usage by 20%. Additionally, I optimized data processing pipelines, improving model efficiency by 12% and enhancing the recommended content experience.",
    date: "2022-09-02",
    demoLink: "https://github.com/tanaydwivedi095/Project-Movie-Recommendation-System",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects and Publications", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/tanaydwivedi095",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/tanaydwivedi095",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "https://drive.google.com/file/d/17u94YwifkgHYE4YtlNQvSmXBlaMM5-UX/view?usp=sharing",
    icon: "resume",
    newTab: true,
  },
];


