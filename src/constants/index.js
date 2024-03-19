import {
  fighters,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,
  telegram,
  twitter,

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "home",
    url: "#home",
  },
  {
    id: "1",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "Trainers",
    url: "#trainers",
  },
  {
    id: "3",
    title: "Gallery",
    url: "#gallery",
  },
  {
    id: "4",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "5",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];


export const brainwaveServices = [
  "Become the best fighter ",
  "Expert training programs",
  "World-class Muay Thai training",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];


export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "The program offers an introduction to fundamental techniques, gradual strength and conditioning, mastering basic combinations",
    price: "300",
    features: ["Introduction to fundamental techniques",
      "Mastering basic combinations","Group training sessions", "Access to equipment and facilities"
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "The intermediate program emphasizes advanced striking techniques, clinch work, defensive strategies, and tactical awareness in Muay Thai",
    price: "450",
    features: ["Skill refinement and expansion",
    "Participation in drills, intense sparring, and simulations",
    "Improved proficiency and tactical awareness"
      
    ],
  },
  {
    id: "2",
    title: "Pro",
    description: "Geared for experienced fighter aiming to elevate their skills to a professional levels. Through intense training, preparing for elite competition",
    price: null,
    features: ["Emphasizes skill-specific drills and intense sparring",
      "Includes comprehensive strength and conditioning",
      "Prepares for elite competition through technique refinement"
    ],
  },
];

export const programs = [
  {
    id: "0",
    title: "Beginner Muay Thai Training Program",
    text: "The beginner program focuses on introducing fundamental Muay Thai techniques, including striking, clinching, and defensive maneuvers, while gradually building strength, conditioning, and familiarity with the sport. Participants will progress from mastering basic techniques to integrating combinations and engaging in controlled sparring sessions, laying a solid foundation for their Muay Thai journey.",
    duration: "4 weeks",
    frequency: "3 sessions per week",
    focus: [
      { "Week 1": "Introduction to basic techniques (jab, cross, kick, knee), stance, and footwork" },
      { "Week 2": "Refinement of basic techniques, introduction to clinching techniques, and defensive maneuvers" },
      { "Week 3": "Integration of basic combinations, focus on conditioning, cardiovascular and strength, and sparring drills" },
      { "Week 4": "Review of all techniques learned, introduction to more advanced combinations, and controlled sparring sessions" }
    ], 
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: fighters,
    imageUrl: fighters,
    light: true,
  },
  {
    id: "1",
    title: "Intermediate Muay Thai Training Program",
    text: "The intermediate program is designed to refine and expand upon existing skills, emphasizing advanced striking techniques, clinch work, and defensive strategies. Participants will engage in combination drills, higher-intensity sparring sessions, and simulated fight scenarios, enhancing their proficiency and tactical awareness in Muay Thai.",
    duration: "8 weeks",
    frequency: "4 sessions per week",
    focus: [
      { "Week 1-2": "Advanced striking techniques (elbows, high kicks), focus on power and precision" },
      { "Week 3-4": "Advanced clinch work, including sweeps, throws, and clinch entry techniques" },
      { "Week 5-6": "Combination drills with emphasis on fluidity and timing, increased sparring intensity (medium contact)" },
      { "Week 7-8": "Advanced defensive strategies, counter-attacking techniques, and simulated fight scenarios" }
  ],
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: fighters,
    imageUrl: fighters,

  },
  {
    id: "2",
    title: "Advanced Muay Thai Training Program",
    text: "The advanced program is tailored to experienced practitioners seeking to further hone their skills and elevate their performance to elite levels. Through daily skill-specific drills, intensive sparring sessions, and comprehensive strength and conditioning workouts, participants will continuously refine their technique, physical fitness, and mental resilience, preparing them for the challenges of elite competition.",
    duration: "Ongoing (continuous training cycle)",
    frequency: "5-6 sessions per week",
    focus: [
      { "Daily": "Skill-specific drills (striking, clinching, defense), tailored to individual strengths and weaknesses" },
      { "Weekly": "Sparring sessions with varying levels of intensity (light to full contact), focusing on tactical application of techniques" },
      { "Bi-weekly": "Strength and conditioning workouts, including weight training, plyometrics, and endurance drills" },
      { "Monthly": "Assessment and review of progress, adjustments to training regimen based on performance and goals" }
  ],  
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: fighters,
    imageUrl: fighters,
    light: true,
  },
  {
    id: "3",
    title: "Competition Preparation Muay Thai Training Program",
    text: "The competition preparation program is designed for dedicated athletes aspiring to compete at the highest levels of Muay Thai. Structured into distinct phases, participants will undergo rigorous training focusing on technical proficiency, fight-specific strategies, peak physical fitness, and mental preparation. With a comprehensive approach encompassing technical training, intense sparring, specialized conditioning, and mental fortitude, participants will be equipped to excel in the demanding arena of competitive Muay Thai.",
    duration: "12 weeks (adjustable based on competition schedule)",
    frequency: "6-7 sessions per week",
    focus: [
      { "Preparation Phase (Weeks 1-4)": "Building a strong foundation through intense conditioning, technical refinement, and mental preparation" },
      { "Peak Phase (Weeks 5-8)": "Increased focus on fight-specific strategies, sharpening techniques, and simulated fight scenarios" },
      { "Tapering Phase (Weeks 9-12)": "Reduced training volume, maintaining peak fitness while allowing for recovery and strategic planning" }
    ],
    
    components: [
      "Technical training: Advanced combinations, counters, and defensive tactics",
      "Sparring: High-intensity sessions, mimicking fight conditions",
      "Strength and conditioning: Tailored to peak performance on fight day",
      "Mental preparation: Visualization, strategy development, and mindset conditioning"
    ],

    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: fighters,
    imageUrl: fighters,

  },
  {
    id: "4",
    title: "Short Period Session",
    text: "Ideal for those seeking rapid improvement, the Short Period Session condenses intense training into a focused two-week program. With five sessions per week, participants delve deep into specific techniques and rigorous conditioning drills, experiencing accelerated skill development and noticeable progress within a short time frame.",
    duration: "2 weeks",
    frequency: "Daily sessions",
    focus: [
      { "Week 1": "Intensive conditioning drills and fundamental technique review" },
      { "Week 2": "Advanced combination drills and simulated fight scenarios" }
  ],
  
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: fighters,
    imageUrl: fighters,
    light: true,
  },
  {
    id: "5",
    title: "Season Session",
    text: "Tailored for athletes gearing up for competitive seasons, the Season Session offers a structured 10-week program. With two weekly sessions, participants undergo comprehensive training, emphasizing skill refinement, strategic development, and physical conditioning. This tailored approach ensures athletes are finely tuned and prepared for peak performance during competitions.",
    duration: "6 weeks",
    frequency: "3 sessions per week",
    focus: [
    { "Week 1-2": "Focus on strength and conditioning, building endurance and power" },
    { "Week 3-4": "Technical refinement and sparring drills, improving precision and timing" },
    { "Week 5-6": "Integration of skills learned, simulated fight scenarios, and mental preparation" }
],

    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: fighters,
    imageUrl: fighters,
   
  },
];
export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const testimonials = [
  {
    id: 0,
    name: "Jacob Szumlas",
    job: "Fitness Trainer",
    avatarUrl: "./src/assets/testimonials/avatar-1.jpg",
    testimonial: "As a fitness trainer, I'm impressed by the dedication and expertise of the trainers at this Muay Thai club. They create personalized training programs that cater to individual goals, helping members achieve remarkable progress. The atmosphere is motivating, and the camaraderie among members makes every session enjoyable.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    light:true
  },
  {
    id: 1,
    name: "Alexia Wong",
    job: "Software Engineer",
    avatarUrl: "./src/assets/testimonials/avatar-2.jpg",
    testimonial: "I've been training at this Muay Thai club for over a year now, and it has transformed my life. The trainers not only teach the techniques but also instill discipline and mental resilience. The training facility is top-notch, and the location is convenient for my daily commute. I've made incredible progress and gained a supportive community of fellow fighters.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",

  },
  {
    id: 2,
    name: "Lucas Parker",
    job: "Marketing Executive",
    avatarUrl: "./src/assets/testimonials/avatar-3.jpg",
    testimonial: "Training at this Muay Thai club has been a game-changer for me. The trainers are incredibly knowledgeable and supportive, providing guidance every step of the way. The training environment is welcoming, and I've formed strong bonds with fellow members. I've seen significant improvements in my skills and confidence since joining.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    light:true
  },
  {
    id: 3,
    name: "Oliver Wilson",
    job: "Student",
    avatarUrl: "./src/assets/testimonials/avatar-4.jpg",
    testimonial: "As a student balancing academics and training, I appreciate the flexibility offered by this Muay Thai club. The trainers understand my commitments and work with me to create a training schedule that fits my busy lifestyle. The facility is equipped with everything I need for effective training, and I've seen remarkable progress in my technique and fitness level.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    job: "Freelance Writer",
    avatarUrl: "./src/assets/testimonials/avatar-5.jpg",
    testimonial: "Joining this Muay Thai club has been one of the best decisions I've ever made. The trainers are not only experts in Muay Thai but also great motivators who push me to exceed my limits. The training facility is clean and spacious, creating the perfect environment for focused workouts. I've met incredible people here and feel stronger and more confident with each session.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    light: true
  },
  {id: 5,
    name: "Francis Co",
    job: "Graphic Designer",
    avatarUrl: "./src/assets/testimonials/avatar-6.jpg",
    testimonial: "At first, I was unsure about joining this Muay Thai club, but now I'm incredibly glad I did. The trainers here are truly exceptional. The gym's location is convenient, making it easy for me to commit to regular sessions, and the facilities are excellent. The supportive community within the club has made my experience even more enriching, and I'm grateful for the camaraderie and motivation it provides.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
  }
];

export const coaches = [
  {
    name: "Kai Nakamura",
    nickname: "The Iron Fist",
    experience: "15 years of relentless training forged in the fires of competition.",
    accomplishment: "Undefeated champion of three Muay Thai tournaments.",
    motto: "Break through limits, forge your legacy.",
    picture: "./src/assets/coaches/trainer-1.png"
  },
  {
    name: "Chao Li",
    experience: "A decade of dedication to the art, molded by sweat and determination.",
    accomplishment: "Recipient of the Golden Glove award for exceptional technique.",
    motto: "Rise up with every strike, fear nothing",
    picture: "./src/assets/coaches/trainer-2.png",
    light:true,
  },
  {
    name: "Bruce Thompson",
    experience: "12 years mastering the art of silence and thunder in the ring.",
    accomplishment: "Named 'Fighter of the Year' by the Muay Thai Association.",
    motto: "Find strength in silence, unleash fury in motion",
    picture: "./src/assets/coaches/trainer-3.png",
  },
  {
    name: "Martio Romano",
    experience: "Overcame adversity with 10 years of resilience and perseverance.",
    accomplishment: "Champion of the Thai Legends Cup three years in a row.",
    motto: "Rise from ashes, soar with strength",
    picture:"./src/assets/coaches/trainer-4.png",
  },
  {
    name: "Raj Patel",
    experience: "Embarked on a journey of self-discovery, honing skills for 12 years.",
    accomplishment: "Undefeated Champion in Thailand's toughest Muay Thai tournaments.",
    motto: "With each setback, find your strength",
    picture: "./src/assets/coaches/trainer-5.png",
  }
]


