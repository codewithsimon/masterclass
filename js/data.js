// Masterclass data
const masterclassData = [
  {
    id: 1,
    title: "Advanced Data Science & Machine Learning",
    category: "Technology",
    description: "Master cutting-edge data science techniques and machine learning algorithms with Dr. Sarah Chen, former lead data scientist at Google AI.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Dr. Sarah Chen",
    duration: "8 Weeks",
    format: "Live Online",
    price: "$1,499",
    benefits: [
      "Hands-on projects with real-world datasets",
      "Personalized feedback on machine learning models",
      "Certificate of completion from Tech Institute",
      "Career guidance and networking opportunities"
    ]
  },
  {
    id: 2,
    title: "Executive Leadership & Strategic Management",
    category: "Business",
    description: "Transform your leadership capabilities with former Fortune 500 CEO James Reynolds in this exclusive executive masterclass.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "James Reynolds",
    duration: "6 Weeks",
    format: "Hybrid",
    price: "$2,299",
    benefits: [
      "Personal leadership assessment and development plan",
      "Strategic thinking frameworks for complex challenges",
      "One-on-one executive coaching sessions",
      "Access to exclusive C-suite network"
    ]
  },
  {
    id: 3,
    title: "Cinematic Storytelling & Film Direction",
    category: "Arts",
    description: "Learn the art of visual storytelling from Academy Award-winning director Elena Cortez in this immersive filmmaking masterclass.",
    image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Elena Cortez",
    duration: "10 Weeks",
    format: "In-Person",
    price: "$1,899",
    benefits: [
      "Hands-on experience with professional cinema equipment",
      "Personal review of your short film project",
      "Exclusive insights into the film industry",
      "Networking with industry professionals"
    ]
  },
  {
    id: 4,
    title: "Financial Markets & Investment Strategies",
    category: "Finance",
    description: "Master advanced investment techniques with former Wall Street hedge fund manager Michael Wong in this comprehensive financial masterclass.",
    image: "https://images.pexels.com/photos/6800528/pexels-photo-6800528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Michael Wong",
    duration: "8 Weeks",
    format: "Live Online",
    price: "$1,699",
    benefits: [
      "Real-time market analysis and portfolio construction",
      "Exclusive investment frameworks and models",
      "Personalized investment strategy consultation",
      "Private investor network access"
    ]
  },
  {
    id: 5,
    title: "Architectural Design & Sustainable Building",
    category: "Design",
    description: "Explore innovative architectural concepts and sustainable design practices with award-winning architect Amelia Foster.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Amelia Foster",
    duration: "12 Weeks",
    format: "Hybrid",
    price: "$1,999",
    benefits: [
      "Guided design projects with personalized feedback",
      "Sustainable materials and techniques workshop",
      "3D modeling and visualization masterclass",
      "Industry recognition and certification"
    ]
  },
  {
    id: 6,
    title: "High-Performance Psychology & Mental Coaching",
    category: "Psychology",
    description: "Develop elite mental performance techniques with Dr. Marcus Hill, psychologist for Olympic athletes and Fortune 100 executives.",
    image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    instructor: "Dr. Marcus Hill",
    duration: "6 Weeks",
    format: "Live Online",
    price: "$1,299",
    benefits: [
      "Personalized mental performance assessment",
      "Custom mental training program development",
      "One-on-one coaching sessions",
      "Lifetime access to mental training resources"
    ]
  }
];

// Expert data
const expertData = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Data Science & AI Expert",
    bio: "Former lead data scientist at Google AI with over 15 years of experience in machine learning and artificial intelligence research.",
    image: "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "James Reynolds",
    title: "Executive Leadership Coach",
    bio: "Former Fortune 500 CEO with 20+ years of experience leading global organizations through transformation and growth.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Elena Cortez",
    title: "Academy Award-Winning Director",
    bio: "Renowned filmmaker with multiple international awards and a passion for teaching the next generation of visual storytellers.",
    image: "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Michael Wong",
    title: "Investment Strategist",
    bio: "Former Wall Street hedge fund manager with a track record of exceptional returns and deep expertise in financial markets.",
    image: "https://images.pexels.com/photos/5984652/pexels-photo-5984652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Amelia Foster",
    title: "Sustainable Architecture Pioneer",
    bio: "Award-winning architect whose innovative designs have redefined sustainable building practices worldwide.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    name: "Dr. Marcus Hill",
    title: "Performance Psychologist",
    bio: "Elite mental performance coach who has worked with Olympic athletes, Fortune 100 executives, and special forces operators.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Testimonial data
const testimonialData = [
  {
    id: 1,
    quote: "The Data Science Masterclass completely transformed my career. Within three months of completing Dr. Chen's program, I landed my dream job at a leading tech company with a 40% salary increase.",
    name: "David Park",
    title: "Senior Data Scientist, Tech Innovations Inc.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "James Reynolds' leadership masterclass provided insights and strategies that I continue to use daily as a CEO. The return on investment has been immeasurable in terms of our company's growth and my personal development.",
    name: "Sophia Garcia",
    title: "CEO, Nexus Solutions",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "Studying under Elena Cortez was a once-in-a-lifetime opportunity. Her cinematic masterclass went beyond technique to show us how to truly tell stories that resonate with audiences worldwide.",
    name: "Jamal Williams",
    title: "Independent Filmmaker",
    image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// FAQ data
const faqData = [
  {
    id: 1,
    question: "How are these masterclasses different from regular online courses?",
    answer: "Our masterclasses are exclusive, limited-enrollment programs taught personally by world-renowned experts. Unlike typical online courses, our masterclasses feature direct interaction with the instructor, personalized feedback, and a curated cohort of like-minded professionals. The curriculum is constantly updated to reflect the latest developments in each field."
  },
  {
    id: 2,
    question: "What is the time commitment required for these masterclasses?",
    answer: "Most masterclasses require 5-8 hours per week, which includes live sessions, assignments, and independent work. The specific schedule varies by program, with some offering more flexibility than others. All live sessions are recorded for participants who occasionally cannot attend in real-time."
  },
  {
    id: 3,
    question: "Do I receive a certificate upon completion?",
    answer: "Yes, all masterclass participants receive a verified certificate of completion that can be shared on LinkedIn and other professional platforms. These certificates are recognized by leading companies and institutions worldwide as evidence of high-level professional development."
  },
  {
    id: 4,
    question: "Is there any financial assistance or payment plans available?",
    answer: "We offer payment plans that allow you to spread the cost over 3-6 monthly installments at no additional charge. We also provide a limited number of partial scholarships for each cohort based on merit and need. Please contact our admissions team for more information about financial assistance options."
  },
  {
    id: 5,
    question: "What happens if I need to withdraw from a masterclass?",
    answer: "We understand that circumstances change. If you need to withdraw, we offer a full refund up to 14 days before the masterclass begins. After that point, you can transfer your enrollment to a future cohort or receive a partial refund based on our withdrawal policy. Each case is handled with care by our student success team."
  },
  {
    id: 6,
    question: "How much access do I have to the expert instructor?",
    answer: "Each masterclass includes dedicated Q&A sessions with your instructor, and depending on the program, one-on-one coaching sessions. Many of our instructors also participate actively in the class discussion forums and provide personalized feedback on projects. The exact level of access is detailed in each masterclass description."
  }
];