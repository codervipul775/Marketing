import React, { useState } from 'react';
import { Instagram, Twitter, Youtube, Globe, Mail, Linkedin } from 'lucide-react';
import Modal from '../components/Modal';

interface SocialLinks {
  instagram?: string;
  twitter?: string;
  youtube?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  letterboxd?: string;
  spotify?: string;
  blog?: string;
}

interface Contact {
  email?: string;
}

interface Influencer {
  id: number;
  name: string;
  role: string;
  tier: 'Macro-Influencers' | 'Mid-Tier Influencers' | 'Micro-Influencers';
  category: string;
  image: string;
  bio: string;
  detailed_bio: string;
  categories: string[];
  social_links: SocialLinks;
  contact?: Contact;
}

export default function Influencers() {
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);
  const [activeCategory, setActiveCategory] = useState('Business & Finance');
  const [activeTier, setActiveTier] = useState('All');

  const categories = [
    'Business & Finance',
    'Lifestyle & Fashion',
    'Tech & Startups',
    'Entertainment & Pop Culture',
    'Fitness & Health',
    'Travel & Adventure'
  ];

  const tiers = ['All', 'Macro-Influencers', 'Mid-Tier Influencers', 'Micro-Influencers'];

  const influencers: Influencer[] = [
    // Business & Finance
    {
      id: 1,
      name: "Ankur Warikoo",
      role: "Startup mentor ",
      tier: "Macro-Influencers",
      category: "Business & Finance",
      image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/7i4p455hk67skr4ksvj1gmui05._SY450_CR0%2C0%2C450%2C450_.jpg",
      bio: "Investment strategist and fintech expert with over 1M followers",
      detailed_bio: "Ankur Warikoo is an Indian entrepreneur, content creator, author, and mentor known for his insights on startups, personal finance, and self-growth. He co-founded Nearbuy, a deals and experiences platform, and previously served as its CEO.",
      categories: ["Investment", "Entrepreneurship", "Startups"],
      social_links: { instagram: "https://www.instagram.com/ankurwarikoo/", youtube: "https://www.youtube.com/@warikoo" }
    },
    {
      id: 2,
      name: "Raj Shamani",
      role: "Content Creator ",
      tier: "Macro-Influencers",
      category: "Business & Finance",
      image: "https://yt3.googleusercontent.com/86ExV8UBDqlyyJPuhdSiYW7R_lcFYe7_0qg8eti28wiP-FYUZ5FHjBMEKmo1tSdMBvR2fMUyWgw=s160-c-k-c0x00ffffff-no-rj",
      bio: "Co-founder of House of X, which helps creators launch D2C brands.",
      detailed_bio: "One of India's top content creators, with millions of followers on Instagram and YouTube.Raj is an Angel investor in startups like Classplus, Growth School, and Wint Wealth. He has delivered 200+ keynotes in 26 countries, including TEDx and the United Nations.",
      categories: ["Creator", "Advisor", "Startups"],
      social_links: { instagram: "https://www.instagram.com/rajshamani/", youtube: "https://www.youtube.com/@rajshamani" }
    },
    {
      id: 3,
      name: "Sharan Hegde(Finance With Sharan)",
      role: "Personal Finance Expert",
      tier: "Macro-Influencers",
      category: "Business & Finance",
      image: "https://assets.entrepreneur.com/content/3x2/2000/1670587204-Myproject-110.jpg?format=pjeg&auto=webp&crop=16:9&width=675&height=380",
      bio: "Sharan co-founded The 1% Club, an online platform aimed at enhancing financial literacy",
      detailed_bio: "Sharan worked as an Associate Consultant at PwC in Bengaluru from April 2021 until January 2022. During the COVID-19 pandemic, he recognized a gap in accessible financial education and started creating content to share his financial knowledge.",
      categories: ["Finance", "Advisor", "Startups"],
      social_links: { instagram: "https://www.instagram.com/financewithsharan/", youtube: "https://www.youtube.com/@financewithsharan" }
    },
    {
      id: 4,
      name: "Pranjal Kamra",
      role: "Wealth-building expert",
      tier: "Mid-Tier Influencers",
      category: "Business & Finance",
      image: "https://yt3.googleusercontent.com/za9gdE2DnOH_XWwLH8lh2S-lRknCsCqPU2fCvItFhG7hCIbmAAUCFm4TB04FY_u-47Z0rUyfXA=s160-c-k-c0x00ffffff-no-rj",
      bio: "Pranjal Kamra is an Indian financial expert, entrepreneur, and content creator",
      detailed_bio: "In 2018, Pranjal founded Finology Ventures Pvt. Ltd., a legal and financial consultancy firm offering investment advisory services, stock market courses, and research tools. He is also the founder of Finology, a financial education platform that provides financial literacy and investment advice to the masses.",
      categories: ["Expert", "Advisor"],

      social_links: { instagram: "https://www.instagram.com/pranjalkamra/", youtube: "https://www.youtube.com/@pranjalkamra" }
    },
    {
      id: 5,
      name: "Harsh Goela (Goela School of Finance)",
      role: "Market analyst",
      tier: "Mid-Tier Influencers",
      category: "Business & Finance",
      image: "https://goelasf.in/wp-content/uploads/2022/01/Harsh.webp",
      bio: "Harsh Goela is an Indian stock market investor, trainer, and entrepreneur",
      detailed_bio: "Harsh's journey into the stock market began at the age of 18, making him one of the youngest trainers associated with the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE). He has also served as a TEDx speaker, sharing his insights on financial literacy and investment strategies.",
      categories: ["Educator", "Analyst"],

      social_links: { instagram: "https://www.instagram.com/harshgoela/", youtube: "https://www.youtube.com/@goela" }
    },
    {
      id: 6,
      name: "Rachana Ranade ",
      role: "Texation expert",
      tier: "Mid-Tier Influencers",
      category: "Business & Finance",
      image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-422297,resizemode-75,msid-80929105/prime/money-and-markets/meet-rachana-ranade-the-youtuber-who-has-built-a-fortune-by-decoding-stock-market-jargon.jpg",
      bio: "Rachana Ranade is a Chartered Accountant and financial educator from Pune",
      detailed_bio: "She cleared her CA exams on her first attempt and discovered a passion for teaching early in her career. Rachana's YouTube channel, 'Rachana Ranade', has over 1.5 million subscribers and covers topics such as income tax, mutual funds, and stock market investing.",
      categories: ["Investment", "Taxation"],

      social_links: { instagram: "https://www.instagram.com/ca_rachanaranade/", youtube: "https://www.youtube.com/@CARachanaRanade" }
    },
    {
      id: 7,
      name: "Asset Yogi ",
      role: "Content Creator",
      tier: "Micro-Influencers",
      category: "Business & Finance",
      image: "https://assets.telegraphindia.com/telegraph/2021/Jan/1611945157_asset-yogi.jpg",
      bio: "Provides easy-to-understand explanations of complex financial topics.",
      detailed_bio: "Asset Yogi is a popular Indian financial content creator and educator known for simplifying finance, investing, and business concepts. His real identity remains undisclosed, but his YouTube channel, Asset Yogi, has gained millions of subscribers due to its clear and structured financial education content.",
      categories: ["Finance", "Content"],
      social_links: { instagram: "https://www.instagram.com/assetyogi/", youtube: "https://www.youtube.com/@AssetYogi" }
    },
    {
      id: 8,
      name: "Neha Nagar",
      role: "Stock Market Educator",
      tier: "Micro-Influencers",
      category: "Business & Finance",
      image: "https://www.forbesindia.com/lists/digital-stars/videos/Neha_Nagar_2_BG.jpg",
      bio: "Neha Nagar is an Indian entrepreneur, financial educator, and social media influencer",
      detailed_bio: "In 2019, Neha founded TaxationHelp.in, a platform offering legal and financial assistance to startups and established businesses. Her mission is to empower individuals with financial knowledge, covering topics such as the stock market, cryptocurrency, taxation, and trading.",
      categories: ["Educator", "Stock Market"],
      social_links: { instagram: "https://www.instagram.com/iamnehanagar/", youtube: "https://www.youtube.com/@nehanagar" }
    },
    {
      id: 9,
      name: "Aditya Saini ",
      role: "Creator",
      tier: "Micro-Influencers",
      category: "Business & Finance",
      image: "https://tse2.mm.bing.net/th?id=OIP.7gNpsBnXBhTm-7RSnVtjaQHaHY&w=472&h=472&c=7",
      bio: "Aditya Saini is an Indian YouTuber and entrepreneur known for creating content focused on business strategies",
      detailed_bio: "In 2020, Aditya launched his self-titled YouTube channel, Aditya Saini, where he produces explainer videos on topics such as the stock market, business, and finance. His content often includes case studies on various companies, analyzing their successes and failures to provide valuable insights to his audience.",
      categories: ["Content Creator", "Technical Analysis"],
      social_links: { instagram: "https://www.instagram.com/adityasaini99/", youtube: "https://www.youtube.com/@theadityasaini" }
    },

    // Lifestyle & Fashion
    {
      id: 10,
      name: "Komal Pandey",
      role: "Fashion Icon",
      tier: "Macro-Influencers",
      category: "Lifestyle & Fashion",
      image: "https://assets.entrepreneur.com/content/3x2/2000/1610108154-PHOTO-2020-12-11-20-01-25-1.jpg",
      bio: "Prominent Indian fashion blogger, content creator, and social media influencer",
      detailed_bio: "In 2012, Komal launched her fashion blog, The College Couture, aiming to make fashion accessible to a broader audience. Her unique style and relatable content quickly gained attention, leading to a position as a fashion video coordinator with the popular Indian digital platform, POPxo. After gaining valuable experience, she ventured into solo content creation in 2018, focusing on her own YouTube channel and social media platforms. ",
      categories: ["Fashion", "Design", "Styling"],
      social_links: { instagram: "https://www.instagram.com/komalpandeyofficial/", youtube: "https://www.youtube.com/@komalpandey3894" }
    },
    {
      id: 11,
      name: "Siddharth Batra",
      role: "Men's Fashion Expert",
      tier: "Macro-Influencers",
      category: "Lifestyle & Fashion",
      image: "https://confluencr.com/wp-content/uploads/2022/07/Siddharth-Batra1.jpg",
      bio: "Siddharth Batra is an Indian fashion influencer and digital creator",
      detailed_bio: "Batra began his career as a freelance style editor at MensXP, where he developed a distinctive style that blends experimental fashion with metrosexuality. His content often features bold outfits and makeup looks, encouraging men to embrace self-expression beyond conventional boundaries. ",
      categories: ["Expert", "Grooming", "Styling"],
      social_links: { instagram: "https://www.instagram.com/siddharth93batra/", youtube: "https://www.youtube.com/@siddharthbatra8491" }
    },
    {
      id: 12,
      name: "Sejal Kumar",
      role: "Vlogger",
      tier: "Macro-Influencers",
      category: "Lifestyle & Fashion",
      image: "https://popslider.com/wp-content/uploads/2020/10/Sejal-Kumar-1-scaled-1-2048x2048.jpeg",
      bio: "Sejal Kumar is a prominent Indian YouTuber, fashion blogger, and actress",
      detailed_bio: "In February 2014, Sejal launched her YouTube channel, marking her entry into the digital content creation space. Her initial video, Summer Style Turkey, documented her internship trip to Turkey and set the tone for her future content. Over the years, she has produced over 500 videos, amassing more than 1.45 million subscribers and 332 million views as of May 2023. ",
      categories: ["Vlogging", "Lifestyle", "Gen-Z"],
      social_links: { instagram: "https://www.instagram.com/sejalkumar1195/", youtube: "https://www.youtube.com/@sejalkumarofficial" }
    },
    {
      id: 13,
      name: "Juhi Godambe ",
      role: "Styling Expert",
      tier: "Mid-Tier Influencers",
      category: "Lifestyle & Fashion",
      image: "https://cdn.shopify.com/s/files/1/0581/8718/6344/products/Juhi-LabelPrernaMehra10_1024x1024%402x.jpg?v=1636958366",
      bio: "Juhi Godambe is a renowned Indian fashion blogger, entrepreneur, and social media influencer",
      detailed_bio: "In addition to blogging, Juhi co-founded the fashion label Arabella, offering trendy and chic clothing options for women, further cementing her status in the fashion industry. Her entrepreneurial ventures and influential online presence have led to collaborations with numerous brands, enhancing her reputation as a leading fashion influencer in India.",
      categories: ["Styling", "Fashion", ],
      social_links: { instagram: "https://www.instagram.com/juhigodambe/", youtube: "https://www.youtube.com/@JuhiGodambe" }
    },
    {
      id: 14,
      name: "Aashna Shroff ",
      role: "Skincare Expert",
      tier: "Mid-Tier Influencers",
      category: "Lifestyle & Fashion",
      image: "https://outhouse-jewellery.com/cdn/shop/products/Aashna-Shroff-in-Outhouse-Jewellery_fd2ef750-88ce-4498-a8fc-7bc5095288e4.png?v=1736445433",
      bio: "Aashna Shroff is a prominent Indian fashion and beauty influencer, entrepreneur, and content creator",
      detailed_bio: "Expanding her influence, she started her YouTube channel, 'The Snob Journal,' where she shares content related to beauty, fashion, and travel. Her engaging content has garnered her a substantial following, with over 1 million followers on Instagram.",
      categories: ["Skincare", "Beauty", "Fashion"],
      social_links: { instagram: "https://www.instagram.com/aashnashroff/", youtube: "https://www.youtube.com/@Aashna.Shroff" }
    },
    {
      id: 15,
      name: "Karron Dhinggra",
      role: "Men's Fashion Expert",
      tier: "Mid-Tier Influencers",
      category: "Lifestyle & Fashion",
      image: "https://photogallery.indiatimes.com/celebs/celeb-themes/the-journey-of-a-lawyer-turned-social-media-influencer-meet-karron-s-dhinggra/photo/68955281/The-journey-of-a-Lawyer-turned-Social-Media-Influencer-meet-Karron-S-Dhinggra.jpg",
      bio: "Karron S. Dhinggra is a prominent Indian fashion influencer, content creator, and former lawyer",
      detailed_bio: "Karron's journey into fashion began with sharing stylish photos on social media, which resonated with a growing audience. Recognizing his passion, he shifted focus from law to fashion, aiming to help others enhance their personal style. He launched The Formal Edit, a YouTube channel dedicated to men's fashion, offering practical tips on dressing well, grooming, and lifestyle choices.",
      categories: ["Fashion","Formal"],
      social_links: { instagram: "https://www.instagram.com/theformaledit/", youtube: "https://www.youtube.com/@theformaleditofficial" }
    },
    {
      id: 16,
      name: "Ritika Khanna ",
      role: "Budget Fashion Expert",
      tier: "Micro-Influencers",
      category: "Lifestyle & Fashion",
      image: "https://ich.unesco.org/img/face/src/05380.jpg",
      bio: "A working women living in Dubai who loves Beauty, Fashion and Fitness.",
      detailed_bio: "",
      categories: ["Fashion", "Budget"],
      social_links: { instagram: "https://www.instagram.com/ritika.khanna_/", youtube: "https://www.youtube.com/@RitikaKhanna08" }
    },
    {
      id: 17,
      name: "Ishaan Singh",
      role: "Grooming Expert",
      tier: "Micro-Influencers",
      category: "Lifestyle & Fashion",
      image: "https://tse4.mm.bing.net/th?id=OIP.Hyf0Go-owKXrytNtdkAMigHaG6&w=442&h=442&c=7",
      bio: "Ishaan Singh Manhas is an Indian television and film actor",
      detailed_bio: "Ishaan Singh Manhas, an actor known for his role in 'Raisinghani vs Raisinghani', emphasizes the importance of grooming in both professional and personal settings. He believes that grooming reflects self-respect and influences people's perceptions, potentially opening doors to new opportunities",
      categories: ["Grooming","Fashion"],
      social_links: { instagram: "https://www.instagram.com/ishaansinghmanhas/", }
    },
    {
      id: 18,
      name: "Riya Jain",
      role: "Skincare Expert",
      tier: "Micro-Influencers",
      category: "Lifestyle & Fashion",
      image: "https://grazia.wwmindia.com/content/2020/jul/riya81593599828.jpg",
      bio: "Riya Jain is a prominent Indian fashion, travel, and lifestyle blogger",
      detailed_bio: "Riya's consistent efforts in documenting her personal style led to collaborations with renowned brands such as Jimmy Choo, Hermès, and Maybelline. Her aesthetic is characterized by an easy-chic vibe, with a penchant for playing with colors while maintaining a refined sense of taste. In addition to fashion, she has expanded her content to include travel and lifestyle topics, reflecting her diverse interests.",
      categories: ["Skincare","Minimalist Fashion"],
      social_links: { instagram: "https://www.instagram.com/riyajain",}
    },

    // Tech & Startups
    {
      id: 19,
      name: "Varun Mayya ",
      role: "AI influencer",
      tier: "Macro-Influencers",
      category: "Tech & Startups",
      image: "https://images.yourstory.com/cs/images/people/043-1592305758590.jpg?format=auto&w=1920&q=75",
      bio: "Varun Mayya is an Indian entrepreneur, author, and content creator",
      detailed_bio: "In 2014, Varun co-founded Jobspire, a platform aimed at revolutionizing the hiring process by connecting startups with potential employees.  Post-Jobspire, he established Avalon Labs, a startup incubator and think tank that has been instrumental in launching multiple tech ventures.",
      categories: ["AI", "Entrepreneurship", "Startups"],
      social_links: { instagram: "https://www.instagram.com/thevarunmayya/", youtube: "https://www.youtube.com/@VarunMayya" }
    },
    {
      id: 20,
      name: "Tanmay Bhat ",
      role: "Startup mentor",
      tier: "Macro-Influencers",
      category: "Tech & Startups",
      image: "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/socialketchup/media/media_files/WNvpFT3tzrdAKATCtROb.png",
      bio: "Tanmay Bhat is an Indian comedian, writer, producer, and YouTuber",
      detailed_bio: "Widely recognized for his contributions to the Indian comedy scene. He co-founded All India Bakchod (AIB), a creative agency and comedy group known for its satirical sketches and podcasts.In 2018, Tanmay served as a judge on the inaugural season of Comicstaan, a stand-up comedy competition broadcast on Amazon Prime Video, further cementing his role in nurturing emerging comedic talent.",
      categories: ["Investment", "Entrepreneurship", "Startups"],
      social_links: { instagram: "https://www.instagram.com/tanmaybhat/", youtube: "https://www.youtube.com/channel/UC0rE2qq81of4fojo-KhO5rg" }
    },
    {
      id: 21,
      name: "Akshay Saini ",
      role: "Software Developer",
      tier: "Macro-Influencers",
      category: "Tech & Startups",
      image: "https://i.ytimg.com/vi/ufHnsVixMEs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAuqcyvyG-NCeDxZmgkGIE_e0grog",
      bio: "Akshay Saini is an Indian software engineer, educator, and content creator renowned for his contributions to web development education.",
      detailed_bio: "With over a decade of experience in the software industry, Akshay has worked with prominent companies such as Uber and Paytm. His roles in these organizations have significantly shaped his expertise in web development.",
      categories: ["Developer","Tech Education"],
      social_links: { instagram: "https://www.instagram.com/akshaymarch7/", youtube: "https://www.youtube.com/@akshaymarch7" }
      
    },
    {
      id: 22,
      name: "Tech Burner (Shlok Srivastava) ",
      role: "Tech Reviewer",
      tier: "Mid-Tier Influencers",
      category: "Tech & Startups",
      image: "https://tse3.mm.bing.net/th?id=OIP.StotjN4kdzLr-wgoZQ-xkAHaJP&w=474&h=474&c=7",
      bio: "Shlok Srivastava, widely recognized as Tech Burner, is a prominent Indian tech creator",
      detailed_bio: "Entrepreneur known for his engaging technology-focused content. He founded Overlays Clothing and co-founded Layers, a brand specializing in mobile and laptop skins launched in 2022. Throughout his career, he has collaborated with over 200 brands",
      categories: ["Technology","Gadgets"],
      social_links: { instagram: "https://www.instagram.com/techburner", youtube: "https://www.youtube.com/@TechBurner" }
    },
    {
      id: 23,
      name: "Gyan Therapy (Ujjwal Sharma)",
      role: "Tech Reporter",
      tier: "Mid-Tier Influencers",
      category: "Tech & Startups",
      image: "https://files.thehandbook.com/uploads/2021/03/aauvwnjnc1uesfqusjcodhqc0rmb1zbtyycdqxwjtrl2aqs800-c-k-c0x00ffffff-no-rj.jpg",
      bio: "Ujjwal Sharma, known as Gyan Therapy, is a prominent Indian tech creator",
      detailed_bio: "known for his engaging technology-focused content. He founded Overlays Clothing and co-founded Layers, a brand specializing in mobile and laptop skins launched in 2022. Throughout his career, he has collaborated with over 200 brands",
      categories: ["Product Reviews", "Tech News"],
      social_links: { instagram: "https://www.instagram.com/gyantherapy/", youtube: "https://www.youtube.com/c/GyanTherapy" }
    },
    
    {
      id: 24,
      name: "Kush Sharma (AIML Community)",
      role: "AI and ML Expert",
      tier: "Micro-Influencers",
      category: "Tech & Startups",
      image: "",
      bio: "",
      detailed_bio: "",
      categories: [""],
      social_links: {}
    },
    {
      id: 25,
      name: "Digital Pratik",
      role: "Branding Expert",
      tier: "Micro-Influencers",
      category: "Tech & Startups",
      image: "https://tse4.mm.bing.net/th?id=OIP.NOMwWMlS_09vV3V3_l947QHaEK&w=266&h=266&c=7",
      bio: "Digital Pratik is a prominent figure in the digital marketing landscape",
      detailed_bio: "Known for his expertise in branding, NFT marketing, and Meta advertising strategies. With a career spanning over 15 years, he has evolved from customer service roles to becoming a leading digital marketing consultant and content creator.",
      categories: ["Branding", "Digital Marketing"],
      social_links: { instagram: "https://www.instagram.com/digitalpratik/", youtube: "https://www.youtube.com/@DigitalPratikShow" }
    },
    {
      id: 26,
      name: "Manas Taneja",
      role: "Web Developer",
      tier: "Micro-Influencers",
      category: "Tech & Startups",
      image: "",
      bio: "Manas Taneja is a Computer Science and Engineering graduate from Delhi Technological University",
      detailed_bio: "He has a strong foundation in various programming languages and technologies, including C, C++, Java, Python, JavaScript, HTML5, CSS3, and frameworks like React and Angular.js. His expertise extends to areas such as cybersecurity, data science, artificial intelligence, game development, mobile development, and web development.",
      categories: ["Developer", "Web Development"],
      social_links: { instagram: "", youtube: "" }
    },

    // Entertainment & Pop Culture
    {
      id: 27,
      name: "Bhuvan Bam",
      role: "Comedian, Singer, Actor, YouTuber",
      tier: "Macro-Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbPgE2MeJ0Ue7TgWQGJI7QSFqiJrd_Qf57GSkKmh6Ar8iXdmEoX7LBa6gOUs4cSXlQxpnmajnorlAeYXlNb52aCw",
      bio: "Bhuvan Bam is an Indian comedian, singer, actor, and YouTuber, best known for his YouTube channel 'BB Ki Vines'.",
      detailed_bio: "Bhuvan Bam, born on January 22, 1994, in Vadodara, Gujarat, is an Indian comedian, singer, actor, and YouTuber. He gained immense popularity through his YouTube channel 'BB Ki Vines', where he portrays multiple characters in humorous sketches. Beyond YouTube, Bhuvan has ventured into music, releasing original songs, and acting, starring in web series like 'Dhindora'. His innovative content has earned him numerous accolades and a massive following across social media platforms.",
      categories: ["Entertainment", "Comedy", "Music"],
      social_links: { instagram: "https://www.instagram.com/bhuvan.bam22/", youtube: "https://www.youtube.com/channel/UCdcJewBt-YpitVJURKiexVQ" }
    },
    {
      id: 28,
      name: "Ashish Chanchlani",
      role: "Comedian, Actor, YouTuber",
      tier: "Macro-Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://chuglikare.com/wp-content/uploads/2024/07/467846861_18477723028029690_8754499435930866976_n-1024x1024.jpg",
      bio: "Ashish Chanchlani is an Indian comedian, actor, and YouTuber, renowned for his comedic sketches on his YouTube channel 'Ashish Chanchlani Vines'.",
      detailed_bio: "Born on December 8, 1993, in Ulhasnagar, Maharashtra, Ashish Chanchlani is a prominent Indian comedian, actor, and YouTuber. He launched his YouTube channel, 'Ashish Chanchlani Vines', in 2014, where he creates humorous and relatable content, leading to a massive following. His accolades include the Dadasaheb Phalke International Film Festival Award for Best Digital Influencer in 2018 and the Best Comedy Influencer award at the World Bloggers Awards in 2019. Ashish has also ventured into acting and collaborated with brands like Amazon MiniTv, Airtel, and Dream11.",
      categories: ["Entertainment", "Comedy", "Acting"],
      social_links: { instagram: "https://www.instagram.com/ashishchanchlani/", youtube: "https://www.youtube.com/@ashishchanchlanivines" }
    },
    {
      id: 29,
      name: "Harsh Beniwal",
      role: "Comedian, Actor, YouTuber",
      tier: "Macro-Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://images.news18.com/ibnlive/uploads/2022/09/harsh-1.jpg",
      bio: "Harsh Beniwal is an Indian comedian, actor, and YouTuber, renowned for his comedic sketches on his YouTube channel.",
      detailed_bio: "Born on February 13, 1996, in Delhi, India, Harsh Beniwal is a prominent Indian comedian, actor, and YouTuber. He launched his YouTube channel on May 6, 2015, where he creates humorous and relatable content, leading to a massive following. His accolades include acting in the film 'Student of the Year 2' and the web series 'Campus Diaries'. Harsh has also ventured into acting and collaborated with various brands.",
      categories: ["Entertainment", "Comedy", "Acting"],
      social_links: { instagram: "https://www.instagram.com/harshbeniwal/", youtube: "https://www.youtube.com/@TheHarshBeniwal" }
    },
    {
      id: 30,
      name: "Zakir Khan",
      role: "Comedian, Writer, Poet, YouTuber",
      tier: "Mid-Tier Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/zakir-khan-31177-1674544343.jpg",
      bio: "Zakir Khan is an Indian comedian, writer, poet, and YouTuber, acclaimed for his relatable storytelling and unique comedic style.",
      detailed_bio: "Born on August 20, 1987, in Indore, Madhya Pradesh, Zakir Khan hails from a family with a rich musical heritage. He gained prominence in 2012 after winning Comedy Central's 'India's Best Stand Up' competition. Zakir is renowned for his stand-up specials like 'Haq Se Single' (2017), 'Kaksha Gyarvi' (2018), 'Tathastu' (2022), and 'Mannpasand' (2023), all available on Amazon Prime Video. Beyond stand-up, he has been part of shows like 'On Air with AIB' and hosts 'Farzi Mushaira', a comedic poetry series. His content deeply resonates with audiences, making him one of India's most beloved comedians.",
      categories: ["Entertainment", "Comedy", "Poetry"],
      social_links: { instagram: "https://www.instagram.com/zakirkhan_208/", youtube: "https://www.youtube.com/@ZakirKhan" }
    },
    {
      id: 31,
      name: "Ajey Nagar (CarryMinati)",
      role: "YouTuber, Streamer, Rapper",
      tier: "Mid-Tier Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://pearlentertainment.in/wp-content/uploads/classified-listing/2024/08/Carryminati.jpg",
      bio: "Ajey Nagar, known online as CarryMinati, is an Indian YouTuber, streamer, and rapper, acclaimed for his comedic skits, roasting videos, and engaging live streams.",
      detailed_bio: "Born on June 12, 1999, in Faridabad, Haryana, India, Ajey Nagar began his YouTube journey at the age of 10 with football tutorials. He gained prominence through his channel 'CarryMinati', where he posts roasting videos and comedic skits, amassing over 44 million subscribers as of December 2024. His second channel, 'CarryisLive', is dedicated to gaming and live streams. Ajey's unique content has earned him a massive following, making him one of Asia's most-subscribed individual YouTubers.",
      categories: ["Entertainment", "Comedy", "Gaming", "Music"],
      social_links: { instagram: "https://www.instagram.com/carryminati/", youtube: "https://www.youtube.com/@CarryMinati" }
    },
    {
      id: 32,
      name: "Kusha Kapila",
      role: "Social Media Personality, Comedian, Actress",
      tier: "Mid-Tier Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://i.gadgets360cdn.com/products/large/kusha-1-1000x1400-1727439675.jpg?downsize=*:600",
      bio: "Kusha Kapila is an Indian social media personality, comedian, and actress, renowned for her satirical portrayals and relatable content.",
      detailed_bio: "Born on September 19, 1989, in New Delhi, India, Kusha Kapila gained prominence through her humorous interpretations of South Delhi women and other youth-centric comedy videos. She began her career as a junior fashion editor and entertainment writer at iDiva. Her popularity led her to acting roles in Netflix's 'Masaba Masaba', hosting 'Comicstaan Season 3' on Amazon Prime Video, and starring in the film 'Thank You for Coming'. In 2022, she was featured in Forbes India's W-Power list. Kusha has also graced the covers of magazines like Harper's Bazaar India and Cosmopolitan.",
      categories: ["Entertainment", "Comedy", "Acting"],
      social_links: { instagram: "https://www.instagram.com/kushakapila/", youtube: "https://www.youtube.com/@kushakapila5643" }
    },
    {
      id: 33,
      name: "RJ Karishma ",
      role: "Radio Jockey, Comedian, Digital Content Creator",
      tier: "Micro-Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://upload-assets.sgp1.digitaloceanspaces.com/public/2023-05-20T09-19-57.878Z-1670036074250.jpg",
      bio: "Karishma Gangwal, popularly known as RJ Karishma, is an Indian radio jockey, comedian, and digital content creator renowned for her satirical videos on Indian family life.",
      detailed_bio: "Born on July 24, 1994, in Pahalgam, Jammu and Kashmir, India, Karishma Gangwal embarked on her career as a radio jockey with Red FM 93.5. She gained widespread recognition through her comedic sketches portraying various members of typical Indian families, leading to a substantial social media following. Her engaging content earned her a spot on Forbes' 30 Under 30 Asia list in 2023 under the Media, Marketing, and Advertising category.",
      categories: ["Entertainment", "Comedy", "Digital Content Creation"],
      social_links: { instagram: "https://www.instagram.com/rjkarishma/", youtube: "https://www.youtube.com/@rjkarishma." }
    },
    {
      id: 34,
      name: "Aashiv Midha",
      role: "Comedian, Actor, Digital Content Creator",
      tier: "Micro-Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://www.entrepreneurindia.com/influencer/2021/images/speakers/aashiv.jpg",
      bio: "Aashiv Midha is an Indian comedian, actor, and digital content creator, renowned for his comedic sketches and engaging videos on platforms like YouTube and TikTok.",
      detailed_bio: "Born on April 14, 1997, in Maharashtra, India, Aashiv Midha is a prominent comedian, actor, and digital content creator. He gained popularity through his original comedic sketches on TikTok, avoiding typical lip-sync content, and later expanded to YouTube. His collaborations include working with celebrities like Milind Gaba, Himanshi Khurana",
      categories: ["Entertainment", "Comedy", "Acting"],
      social_links: { instagram: "https://www.instagram.com/aashivmidha/", youtube: "https://www.youtube.com/@aashivmidha" }
    },
    {
      id: 35,
      name: "Vivek Atray ",
      role: "Motivational Speaker, Author, Former IAS Officer",
      tier: "Micro-Influencers",
      category: "Entertainment & Pop Culture",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Vivek_Atray.jpg",
      bio: "Vivek Atray is an Indian motivational speaker, author, and former Indian Administrative Service (IAS) officer, renowned for his inspiring talks and writings on personal development and leadership.",
      detailed_bio: "Vivek Atray is a distinguished motivational speaker, author, and former IAS officer with a career spanning over 25 years in public service. He has authored four books: 'It's Still a Wonderful Life', 'Finding Success Within', 'Move on Bunny!', and 'Dubey Ji Bounces Back'. After voluntarily retiring from the IAS in 2017, he pursued his passion for speaking and writing. Vivek has delivered multiple TEDx talks, including 'Read a Book, Write a Book', 'Winning Through Emotional Intelligence', and 'Being Indian in a Global Era'.",
      categories: ["Motivational Speaking", "Personal Development", "Leadership"],
      social_links: { instagram: "https://www.instagram.com/vivekatray/", youtube: "https://www.youtube.com/@vivekatrayofficial" }
    },

    // Fitness & Health
    {
      id: 36,
      name: "Ranveer Allahbadia (BeerBiceps) ",
      role: "Entrepreneur, YouTuber, Podcaster, Content Creator",
      tier: "Macro-Influencers",
      category: "Fitness & Health",
      image: "https://yt3.googleusercontent.com/Vgg0TqxVuR98dBQDoaebgM-4AEu1B_Snn0VmSPFpiD6GbCHOiUPdcophJGke3GlTdbBocotVBw=s900-c-k-c0x00ffffff-no-rj",
      bio: "Ranveer Allahbadia, popularly known as BeerBiceps, is an Indian entrepreneur, YouTuber, podcaster, and content creator renowned for his insights into fitness, lifestyle, and personal development.",
      detailed_bio: "Born on June 2, 1993, in Mumbai, India, Ranveer Allahbadia embarked on his digital journey as a fitness enthusiast, leading to the creation of his YouTube channel 'BeerBiceps' in 2014. Over the years, he expanded his content to encompass lifestyle, entrepreneurship, and personal growth, amassing over 12 million followers across seven YouTube channels. Beyond content creation, Ranveer co-founded Monk Entertainment, a digital media company, and BigBrainCo., an ed-tech platform. His flagship podcast, 'The Ranveer Show,' features conversations with prominent personalities across various fields, making it one of India's most popular podcasts.",
      categories: ["Fitness", "Lifestyle", "Entrepreneurship", "Personal Development"],
      social_links: { instagram: "https://www.instagram.com/beerbiceps/", youtube: "https://www.youtube.com/@beerbiceps" }
    },
    {
      id: 37,
      name: "Jeet Selal (Himalayan Stallion)",
      role: "Fitness Coach, Sports Nutrition Expert, Entrepreneur, YouTuber",
      tier: "Macro-Influencers",
      category: "Fitness & Health",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_lgLFwVMdzoQFysG5p01pmnWsTDXNd5hHRje1SsLpXxEbA=s900-c-k-c0x00ffffff-no-rj",
      bio: "Jeet Selal, known as the Himalayan Stallion, is an Indian-born fitness coach, sports nutrition expert, entrepreneur, and digital content creator, recognized for his dedication to promoting natural fitness practices and a healthy lifestyle.",
      detailed_bio: "Hailing from Pithoragarh, Uttarakhand, Jeet Selal actively participated in sports like Taekwondo and Basketball during his childhood. He pursued higher education in the United Kingdom, graduating with a degree in Sports Science and a double degree in Sports Management. In 2016, he founded the Himalayan Stallion Academy in Melbourne, Australia, aiming to promote fitness and health among the youth. Through his YouTube channel, 'Jeet Selal Aesthetics,' he shares workout plans, diets, and guidance to motivate people towards a healthy lifestyle, amassing over 4.34 million subscribers as of 2024. His commitment to natural fitness practices has made him a prominent figure in the fitness community.",
      categories: ["Fitness", "Health", "Nutrition", "Entrepreneurship"],
      social_links: { instagram: "https://www.instagram.com/jeet_selal/", youtube: "https://www.youtube.com/@JeetSelalAesthetics" }
    },
    {
      id: 38,
      name: "Guru Mann",
      role: "Fitness Trainer, Model, Dietitian, Author, Entrepreneur",
      tier: "Macro-Influencers",
      category: "Fitness & Health",
      image: "https://iansportalimages.s3.amazonaws.com/images/202310263074917.jpg",
      bio: "Guru Mann is an Indian-American fitness trainer, model, dietitian, author, and entrepreneur, renowned for his dedication to promoting health and fitness through natural methods.",
      detailed_bio: "Born on August 26, 1981, in Amritsar, Punjab, India, Guru Mann pursued his passion for fitness from a young age, inspired by figures like Arnold Schwarzenegger. He holds a degree in Biomechanics and Kinesiology and is a certified advanced fitness trainer and dietitian. Over a career spanning more than two decades, Guru has modeled and worked out extensively, sharing his expertise through various platforms. He is the founder of GM Nutrition, a brand dedicated to providing quality nutritional supplements, and the GMSA Fitness Academy, a government-approved fitness academy. Through his YouTube channel and social media presence, Guru offers fitness training and guidance to a global audience, aiming to inspire and educate individuals about healthy living.",
      categories: ["Fitness", "Health", "Nutrition", "Entrepreneurship"],
      social_links: { instagram: "https://www.instagram.com/gurumann/", youtube: "https://www.youtube.com/@GuruMannFitness" }
    },
    {
      id: 39,
      name: "Yash Sharma",
      role: "Fitness Coach, Author, YouTuber, Entrepreneur",
      tier: "Mid-Tier Influencers",
      category: "Fitness & Health",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_lqxBLUo_kdXOSA7yovCjwjgFYx4mYRNMWKftIvtMSFB04=s160-c-k-c0x00ffffff-no-rj",
      bio: "Yash Sharma is an Indian fitness coach, author, YouTuber, and entrepreneur, known for his expertise in strength training and nutrition, as well as his engaging fitness content.",
      detailed_bio: "Born on March 24, 1993, in New Delhi, India, Yash Sharma began his fitness journey as a state-level football player. Transitioning into bodybuilding and powerlifting, he accumulated over eight years of experience in strength training. In 2015, Yash launched his YouTube channel, 'Yash Sharma Fitness,' where he shares workout routines, nutrition advice, and motivational content, amassing a substantial following. As a fitness coach, he has transformed over 100 clients, aiming to educate and inspire individuals to achieve their best physical selves. Yash is also a contributing writer at MensXP, offering insights on exercise routines and health tips.",
      categories: ["Fitness", "Health", "Nutrition", "Motivation"],
      social_links: { instagram: "https://www.instagram.com/yashsharmafitness/", youtube: "https://www.youtube.com/@YashSharmaFitness" }
    },
    {
      id: 40,
      name: "Shivani Gupta",
      role: "Fitness Trainer, Bodybuilder, Social Media Influencer",
      tier: "Mid-Tier Influencers",
      category: "Fitness & Health",
      image: "https://markfeet.com/wp-content/uploads/2022/01/5.jpg",
      bio: "Shivani Gupta is an Indian fitness trainer, bodybuilder, and social media influencer, recognized for her dedication to natural bodybuilding and empowering others in the fitness community.",
      detailed_bio: "Born on October 12, 1998, in Delhi, India, Shivani Gupta began her athletic journey as a national-level volleyball player. Facing challenges in pursuing volleyball professionally, she transitioned to bodybuilding, training under coach Vishal Chaudhary. Despite financial constraints, Shivani's commitment led her to significant achievements, including a gold medal at the MS DELHI YMCA 2019 and a bronze at MS ASIA 2019. She is a certified professional trainer, offering both online and offline fitness coaching. Through her social media platforms, particularly Instagram, Shivani inspires a large audience by promoting fitness and health.",
      categories: ["Fitness", "Bodybuilding", "Coaching", "Social Media Influencing"],
      social_links: { instagram: "https://www.instagram.com/shivanigupta3567/",  }
    },
    {
      id: 41,
      name: "Abhinav Mahajan",
      role: "Fitness Trainer, Lifestyle Coach, Entrepreneur, Content Creator",
      tier: "Mid-Tier Influencers",
      category: "Fitness & Health",
      image: "https://abhinavmahajanlife.com/wp-content/uploads/2023/08/03-abhinav-picture.png",
      bio: "Abhinav Mahajan is an Indian fitness trainer, lifestyle coach, entrepreneur, and content creator, renowned for his expertise in fitness and holistic well-being.",
      detailed_bio: "Abhinav Mahajan is a prominent figure in India's fitness industry, holding 15 international fitness certifications, including titles such as Master Trainer and Elite Coach. With over 15 years of experience, he has transformed the lives of over 10,000 clients globally. Abhinav is the founder and CEO of FITMUSK, an affordable fitness coaching app, and has collaborated with over 300 global brands. He is also a brand ambassador for Puma. His influence extends to social media, where he shares fitness and lifestyle content with over 3 million followers.",
      categories: ["Fitness", "Health", "Lifestyle", "Entrepreneurship"],
      social_links: { instagram: "https://www.instagram.com/abhinavmahajanlife/", youtube: "https://www.youtube.com/@ABHINAVMAHAJAN" }
    },
    {
      id: 42,
      name: "Virender Rawat",
      role: "Fitness Trainer",
      tier: "Micro-Influencers",
      category: "Fitness & Health",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OxZXmP-fwiXDGGIFm54c_5TvjTtWdhHrhg&s",
      bio: "Virender Rawat is a certified fitness trainer associated with HealthifyMe, specializing in personalized fitness programs to help clients achieve their health goals.",
      detailed_bio: "Virender Rawat is a professional fitness trainer affiliated with HealthifyMe, a leading health and fitness platform. He offers tailored fitness programs designed to meet individual health objectives, focusing on sustainable and effective training methods. Through his expertise, Virender has assisted numerous clients in improving their fitness levels and overall well-being.",
      categories: ["Fitness", "Health", "Personal Training"],
      social_links: { instagram: "https://www.instagram.com/vijendrarawat175/", }
    },
    {
      id: 43,
      name: "Pranit Shilimkar ",
      role: "Fitness Trainer, Entrepreneur, Content Creator",
      tier: "Micro-Influencers",
      category: "Fitness & Health",
      image: "https://images.indianexpress.com/2022/02/Pranit-Shilimkar-1200_pr-.jpg",
      bio: "Pranit Shilimkar is an Indian fitness trainer, entrepreneur, and content creator, known for his dedication to promoting healthy living and fitness.",
      detailed_bio: "Pranit Shilimkar is a health and fitness entrepreneur, and founder of Fitnesstalks. His fitness journey began during his college days when he was overweight and insecure about his body. Through working out and focusing on his health, he discovered a passion for teaching and helping others achieve their fitness goals. This led to the creation of Fitnesstalks, a venture aimed at making fitness exciting and accessible for everyone. Pranit has also been involved in transforming actors and individuals, emphasizing the importance of a positive relationship with one's body and the food consumed.",
      categories: ["Fitness", "Health", "Entrepreneurship", "Content Creation"],
      social_links: { instagram: "https://www.instagram.com/fitnesstalks_with_pranit/", youtube: "https://www.youtube.com/@fitnesstalks_with_pranit" }
    },
    {
      id: 44,
      name: "Shweta Pal",
      role: "Fitness Trainer, Fashion Influencer, Social Media Personality",
      tier: "Micro-Influencers",
      category: "Fitness & Health",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKoFVY4bmJHZkz-kJgNdNm4VleiBD5HxINQ&s",
      bio: "Shweta Pal is an Indian fitness trainer and fashion influencer, recognized for her dedication to promoting fitness and a healthy lifestyle.",
      detailed_bio: "Shweta Pal, hailing from Delhi, India, has emerged as a prominent fitness and fashion influencer on Instagram. Her journey into the fitness world began a few years ago, and she has since become a leading face among fitness fashionistas. Through her social media platforms, Shweta shares workout routines, fitness tips, and fashion insights, inspiring her followers to adopt a healthier lifestyle. Her stylish and driven approach has positioned her as a desirable influencer, making significant strides in the realms of fitness and fashion.",
      categories: ["Fitness", "Health", "Fashion", "Social Media Influencing"],
      social_links: { instagram: "https://www.instagram.com/shwetaapal/", }
    },

    // Travel & Adventure
    {
      id: 45,
      name: "Gaurav Taneja (Flying Beast)",
      role: "Travel Vlogger, Pilot, Fitness Enthusiast",
      tier: "Macro-Influencers",
      category: "Travel & Adventure",
      image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/06/gaurav-taneja-flying-beast-1592240848.jpeg",
      bio: "Gaurav Taneja, popularly known as 'Flying Beast,' is an Indian travel vlogger, commercial pilot, and fitness enthusiast, renowned for his engaging travel content and insights into aviation and health.",
      detailed_bio: "Born on July 9, 1986, in Kanpur, Uttar Pradesh, Gaurav Taneja pursued his passion for aviation by obtaining a degree in Civil Engineering from the Indian Institute of Technology Kharagpur. He furthered his aviation training in Madrid, Spain, and began his career as a pilot with IndiGo Airlines in 2011, later joining AirAsia as a captain in 2019. Alongside his aviation career, Gaurav developed a keen interest in fitness, leading him to start his YouTube channel 'FitMuscle TV' in 2016, focusing on fitness and nutrition. Subsequently, he launched 'Flying Beast,' a channel where he shares travel vlogs, aviation experiences, and glimpses into his personal life, amassing a substantial following. Gaurav's dedication to authentic content and his multifaceted career have made him a prominent figure in the digital space.",
      categories: ["Travel", "Aviation", "Fitness", "Lifestyle"],
      social_links: { instagram: "https://www.instagram.com/taneja.gaurav/", youtube: "https://www.youtube.com/@FlyingBeast320" }
    },
    {
      id: 46,
      name: "Nikhil Sharma (Mumbiker Nikhil)",
      role: "Motovlogger, Lifestyle Vlogger, Entrepreneur",
      tier: "Macro-Influencers",
      category: "Travel & Adventure",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_md2LxhGNhaz22n2nz_UQxakY3-ZvdpgLI9lwhyffl8--4=s900-c-k-c0x00ffffff-no-rj",
      bio: "Nikhil Sharma, widely recognized as 'Mumbiker Nikhil,' is one of India's top motovloggers, known for his enthralling motorcycle travel vlogs and lifestyle content.",
      detailed_bio: "Born on November 4, 1991, in Mumbai, Maharashtra, Nikhil Sharma developed a passion for videography and motorcycles early in life. After completing a course in Hotel Management, he worked as a flight attendant with Qatar Airways before returning to Mumbai to pursue his passion for storytelling and travel. In 2013, he started his YouTube channel 'Mumbiker Nikhil,' where he documents his motorcycle journeys across India and abroad, sharing experiences, travel tips, and lifestyle content. His engaging storytelling and adventurous spirit have garnered him a massive following, establishing him as a leading figure in the Indian vlogging community.",
      categories: ["Travel", "Motorcycling", "Lifestyle", "Entrepreneurship"],
      social_links: { instagram: "https://www.instagram.com/nikkkhil/", youtube: "https://www.youtube.com/@MumbikerNikhil" }
    },
    {
      id: 47,
      name: "Tanya Khanijow",
      role: "Travel Vlogger, Photographer, Content Creator",
      tier: "Macro-Influencers",
      category: "Travel & Adventure",
      image: "https://yt3.googleusercontent.com/ytc/AIdro_ljlLx12VNsirHiq66uuXJUZETPSswAfp-l64zDK1UxuiFq=s900-c-k-c0x00ffffff-no-rj",
      bio: "Tanya Khanijow is an Indian travel vlogger and photographer, acclaimed for her captivating travel content and expertise in international travel.",
      detailed_bio: "Tanya Khanijow embarked on her journey as a travel content creator, sharing her experiences and travel stories through her YouTube channel and social media platforms. Her keen eye for photography and storytelling has led her to explore various destinations worldwide, providing her audience with insightful travel guides, tips, and visual narratives. Tanya's commitment to authentic and informative content has established her as a trusted voice in the travel community, inspiring many to explore and appreciate diverse cultures and landscapes.",
      categories: ["Travel", "Photography", "Content Creation", "Lifestyle"],
      social_links: { instagram: "https://www.instagram.com/tanyakhanijow/", youtube: "https://www.youtube.com/@TanyaKhanijow" }
    },
    {
      id: 48,
      name: "Kritika Goel",
      role: "Solo Traveler, Lifestyle Vlogger, Content Creator",
      tier: "Mid-Tier Influencers",
      category: "Travel & Adventure",
      image: "https://images.squarespace-cdn.com/content/v1/6072ff0d5b1ec10002a688d8/1624522634626-DYQ2JH73UPMKSI1P4P47/Kritika+Goel+YT+Guide.jpg",
      bio: "Kritika Goel is an Indian solo traveler and lifestyle vlogger, inspiring audiences with her travel experiences and personal development content.",
      detailed_bio: "Kritika Goel left her corporate job to pursue her passion for travel and content creation. She documents her journeys and personal growth on her YouTube channel, which has grown to over 300k subscribers, and her Instagram, boasting over 100k followers. Kritika aims to help content creators build profitable careers and make content creation their full-time profession. She shares travel vlogs, personal development insights, and other engaging content, inspiring her audience to pursue their passions.",
      categories: ["Travel", "Lifestyle", "Personal Development", "Content Creation"],
      social_links: { instagram: "https://www.instagram.com/kritika_goel/", youtube: "https://www.youtube.com/@KritikaGoel" }
    },
    {
      id: 49,
      name: "Larissa D'sa",
      role: "Travel Filmmaker, Storyteller, Social Media Influencer",
      tier: "Mid-Tier Influencers",
      category: "Travel & Adventure",
      image: "https://yt3.googleusercontent.com/AFtCcoOKha-DByzYEe2S6CrK1I-evIQC8eUqTw1B4RajgmC7TW9Uie5wDbZ6-U_UqeeEMnOyuA=s900-c-k-c0x00ffffff-no-rj",
      bio: "Larissa D'sa is an Indian travel filmmaker and storyteller, renowned for her engaging travel and lifestyle content across social media platforms.",
      detailed_bio: "Larissa D'sa has carved a niche in the digital space with her captivating travel and lifestyle content. Over a decade-long journey, she transitioned from social media endeavors to hosting the travel show 'Unwind' on Travelxp, with the inaugural episode shot in Rishikesh airing in December 2020. Her storytelling prowess earned her the title of Cosmo Travel Influencer of the Year 2020-21. In March 2024, Larissa explored Meghalaya, India's 'Abode of Clouds,' sharing the region's mystique through her lens. Beyond travel, she is a GoPro Ambassador and has been recognized among Forbes' top 100 digital influencers.",
      categories: ["Travel", "Lifestyle", "Storytelling", "Photography"],
      social_links: { instagram: "https://www.instagram.com/larissa_wlc/", youtube: "https://www.youtube.com/@larissa_wlc" }
    },
    {
      id: 50,
      name: "Deepanshu Sangwan (Nomadic Indian)",
      role: "Traveler, Vlogger, Content Creator",
      tier: "Mid-Tier Influencers",
      category: "Travel & Adventure",
      image: "https://hamariweb.com/profiles/images/profile/7578-656-10185.jpg",
      bio: "Deepanshu Sangwan, known as 'Nomadic Indian,' is an Indian traveler and vlogger, sharing authentic travel experiences and cultural insights through his content.",
      detailed_bio: "Deepanshu Sangwan left traditional career paths to embrace a nomadic lifestyle, traveling across various regions and sharing his experiences through vlogs. His YouTube channel, 'Nomadic Indian,' offers viewers an immersive look into diverse cultures and destinations. Deepanshu is also active on Instagram, where he connects with his audience and shares travel stories. His journey reflects a passion for exploration and a commitment to authentic storytelling.",
      categories: ["Travel", "Adventure", "Cultural Exploration", "Content Creation"],
      social_links: { instagram: "https://www.instagram.com/nomadic.indian/", youtube: "https://www.youtube.com/@NomadicIndian" }
    },
    {
      id: 51,
      name: "Aakash Malhotra (WanderWithSky)",
      role: "Travel Influencer, Adventure Content Creator",
      tier: "Micro-Influencers",
      category: "Travel & Adventure",
      image: "https://cms-article.forbesindia.com/media/digital-stars/Aakash_Malhotra_H.webp",
      bio: "Aakash Malhotra, known as 'Sky,' is an Indian travel influencer and adventure content creator, renowned for his aerial and drone-based travel content.",
      detailed_bio: "Aakash Malhotra's passion for travel ignited during a trip to Switzerland, leading him to embark on a month-long solo backpacking journey across Greece, Italy, Croatia, and Germany. In 2017, he left his job and bought a one-way ticket to Thailand, marking the beginning of his career as a freelancer and content creator.",
      categories: ["Travel", "Adventure", "Aerial Photography", "Content Creatio"],
      social_links: { instagram: "https://www.instagram.com/wanderwithsky/", youtube: "https://www.youtube.com/@WanderWithSky" }
    },
    {
      id: 52,
      name: "Divyakshi Gupta",
      role: "Travel Blogger, Writer",
      tier: "Micro-Influencers",
      category: "Travel & Adventure",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VJ6jzojZ0c852ogNG9DE7eON8lpu42GNtg&s",
      bio: "Divyakshi Gupta is an Indian travel blogger and writer, celebrated for her focus on cultural and heritage travel.",
      detailed_bio: "Based in Mumbai, Divyakshi Gupta is a professional travel blogger and writer who delights in exploring offbeat destinations to uncover hidden stories, cultures, and personal insights. She is known for her fascination with unique doors and finding the extraordinary in the mundane. Her work has been featured in publications such as NatGeo Traveller, JetWings Magazine, Lonely Planet Magazine, Go Getter Magazine, Gulf Life Magazine, and Air Asia’s Travel Sixty Magazine.",
      categories: ["Travel", "Cultural Exploration", "Heritage", "Writing"],
      social_links: { instagram: "https://www.instagram.com/divsigupta/",}
    },
    {
      id: 53,
      name: "Siddhartha Joshi (The Wanderer)",
      role: "Travel Blogger, Photographer, Designer",
      tier: "Micro-Influencers",
      category: "Travel & Adventure",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtv30FZQf4nPULLPFYqNnbiC2o3sEqEJgVPWCwcACRx8s-TK96xta2U4ruXI6t5Cl2Q2AOfxJ0eeTWQGjpnS0DKHhaH9OKKaoPDLAzy0kAaTF2EQDYTNZwKOVWcG7o0OVcMHEXpiEaJEJS/s1600/Siddhartha-Joshi.jpg",
      bio: "Siddhartha Joshi, known as 'The Wanderer,' is an Indian travel blogger, photographer, and designer, acclaimed for his offbeat travel vlogging.",
      detailed_bio: "Siddhartha Joshi is a designer and traveler who curates exceptional stories through his blog 'SidTheWanderer.' He shares a diverse range of travel tips, photography shots, travelogues, and product reviews, aiming to inspire others to explore the world. Born and raised in Pune and Mumbai, Maharashtra, Siddhartha's work reflects his passion for storytelling and cultural exploration.",
      categories: ["Travel", "Photography", "Design", "Storytelling"],
      social_links: { instagram: "https://www.instagram.com/siddharthajoshi/", youtube: "https://www.youtube.com/@SiddharthaJoshiFilms" }
    }
  ];

  const filteredInfluencers = influencers.filter(influencer => 
    influencer.category === activeCategory && 
    (activeTier === 'All' || influencer.tier === activeTier)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-white to-indigo-300 text-transparent bg-clip-text">
            Our Influencers
          </h1>
          <p className="text-gray-400 text-lg md:text-xl text-center mb-12 max-w-2xl mx-auto">
            Discover industry leaders across different categories and influence tiers
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-indigo-600/20 hover:text-indigo-400'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`px-4 py-2 rounded-full ${
                  activeTier === tier
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-indigo-600/20 hover:text-indigo-400'
                } transition-colors`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Influencers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredInfluencers.map((influencer) => (
              <div
                key={influencer.id}
                className="bg-slate-800/50 rounded-2xl overflow-hidden group hover:bg-slate-800 transition-colors cursor-pointer"
                onClick={() => setSelectedInfluencer(influencer)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-indigo-600/80 text-white px-3 py-1 rounded-full text-sm">
                      {influencer.tier.split('-')[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{influencer.name}</h3>
                  </div>
                  <p className="text-indigo-400 text-sm mb-2">{influencer.role}</p>
                  <p className="text-slate-400 text-sm mb-4">{influencer.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {influencer.categories.map((category, index) => (
                      <span
                        key={index}
                        className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <button className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium">
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State */}
      {filteredInfluencers.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No influencers found in this category and tier combination.
          </p>
        </div>
      )}

      {/* Influencer Modal */}
      <Modal isOpen={!!selectedInfluencer} onClose={() => setSelectedInfluencer(null)}>
        {selectedInfluencer && (
          <div className="text-white">
            <div className="flex items-start gap-6 mb-8">
              <img
                src={selectedInfluencer.image}
                alt={selectedInfluencer.name}
                className="w-32 h-32 rounded-xl object-cover"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-bold">{selectedInfluencer.name}</h2>
                  <span className="bg-indigo-600/80 text-white px-3 py-1 rounded-full text-sm">
                    {selectedInfluencer.tier.split('-')[0]}
                  </span>
                </div>
                <p className="text-indigo-400 text-xl mt-2">{selectedInfluencer.role}</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About</h3>
                <p className="text-slate-300 leading-relaxed">{selectedInfluencer.detailed_bio}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedInfluencer.categories.map((category, index) => (
                    <span key={index} className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-sm">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(selectedInfluencer.social_links).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={`${url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600/20 transition-colors"
                    >
                      {platform === 'instagram' && <Instagram className="w-4 h-4" />}
                      {platform === 'twitter' && <Twitter className="w-4 h-4" />}
                      {platform === 'youtube' && <Youtube className="w-4 h-4" />}
                      {platform === 'website' && <Globe className="w-4 h-4" />}
                      {platform === 'linkedin' && <Linkedin className="w-4 h-4" />}
                      {platform === 'github' && <Globe className="w-4 h-4" />}
                      {platform === 'letterboxd' && <Globe className="w-4 h-4" />}
                      {platform === 'spotify' && <Globe className="w-4 h-4" />}
                      {platform === 'blog' && <Globe className="w-4 h-4" />}
                      <span className="capitalize">{platform}</span>
                    </a>
                  ))}
                  {selectedInfluencer.contact?.email && (
                    <a
                      href={`mailto:${selectedInfluencer.contact.email}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600/20 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
