// Code written by Pranav Durai
export interface ExperienceRole {
  title: string;
  duration: string;
  bullets: string[];
}

export interface Experience {
  organization: string;
  type?: string;
  location?: string;
  overallDuration?: string;
  roles: ExperienceRole[];
}

export interface Publication {
  title: string;
  authors?: string;
  venue: string;
  year: number;
  link?: string;
  highlight?: boolean;
  citation?: string;
  type?: "paper" | "dataset";
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  highlight?: boolean;
}

export interface Talk {
  title: string;
  venue: string;
  year: number;
  image?: string;
  youtubeLink?: string;
}

export interface Achievement {
  text: string;
}

export const experiences: Experience[] = [
  {
    organization: "FRNTL",
    type: "Full-time",
    location: "Greater Bengaluru Area · On-site",
    roles: [
      {
        title: "Co-Founder & CTO",
        duration: "Sep 2025 – Present",
        bullets: [
          "It's about time.",
        ],
      },
    ],
  },
  {
    organization: "Stanford University School of Medicine",
    type: "Full-time",
    location: "Palo Alto, California, United States",
    roles: [
      {
        title: "Research Fellow",
        duration: "Jun 2023 – Present",
        bullets: [
          "Area of Research: Multi-bed PET-CT Imaging for Early Detection of Cancer Cells",
          "Leading a team to develop BiRAT: Software for Pre-Clinical 3D Image Processing, Archiving / Translation",
          "Designed and developed a novel 3D Multi-bed Removal Algorithm for PET-CT scans",
          "PHASE 1 of work presented at World Molecular Imaging Congress, Montréal, Canada — 2024",
          "PHASE 2 of work presented at World Molecular Imaging Congress, Alaska, USA — 2025",
          "Collaborator: Dr. Frezghi Habte, Director — Stanford Center for Innovation in In-Vivo Imaging (SCi3)",
        ],
      },
    ],
  },
  {
    organization: "REPLACI",
    type: "Part-time",
    location: "Greater Bengaluru Area · Remote",
    roles: [
      {
        title: "Technology Strategist",
        duration: "Oct 2024 – Present",
        bullets: [
          "Invented a novel, patent-pending furniture replacement engine for 2D images",
          "Leading the full engineering lifecycle for Full-stack, 3D Design, AI and Computer Vision teams",
          "Built engineering culture, recruited talent, and drove technical ramp-ups for rapid scaling",
        ],
      },
    ],
  },
  {
    organization: "Origin",
    type: "Full-time",
    location: "Greater Bengaluru Area · On-site",
    roles: [
      {
        title: "Senior Perception Engineer",
        duration: "Aug 2024 – Aug 2025",
        bullets: [
          "Built and scaled the Computer Vision & Perception (CVP) Team from scratch as a Founding Engineer",
          "Architected and deployed an EOA vision system for drywall-finishing robot using UR10e 6DOF",
          "Setup scalable VLM / VLA data pipeline with prompt templates from 750GB+ videos",
          "Developed 20+ CV modules incl. FFT filter, 3× faster flat-field, and ECC-based high-res image stitching",
          "Built deep-learning model training packages for object detection and segmentation tasks",
          "Designed and integrated vision-assisted sanding correction algorithm with ROS2-based mechanism",
          "Built 2D→3D calibration pipelines for Sony IMX545 (GS/RS/fisheye) cameras with Livox 3D LiDAR",
          "Led collection of 100K+ images across 6 datasets and automated GT labeling with CVAT and heuristics",
          "Authored technical design documents on novel model architectures and annotation protocols",
          "Designed custom imaging setups and specialized high-resolution image analysis tools",
          "Mentored Junior CV Engineers, conducted code reviews, hiring, and 400+ technical interviews",
        ],
      },
    ],
  },
  {
    organization: "OpenCV",
    type: "Full-time",
    location: "Palo Alto, California, United States",
    overallDuration: "Apr 2023 – Aug 2024",
    roles: [
      {
        title: "Senior Computer Vision Engineer",
        duration: "Apr 2024 – Aug 2024",
        bullets: [
          "Area of Research 1: Machine Perception and 3D LiDAR, RADAR / Stereo Vision for Autonomous Vehicles",
          "Area of Research 2: Multi-Modal Digital & Computational Pathology",
          "Area of Research 3: MLOps for ASR on Fine-Tuned WhisperX using GPU-Accelerated Containers",
        ],
      },
      {
        title: "Computer Vision Engineer",
        duration: "Apr 2023 – Apr 2024",
        bullets: [
          "Designed & developed an Interactive Computer Vision Console for Broadcom BCM2711 SoC (64-bit)",
          "Extensive R&D on Generative AI models: TXT2VIDEO, IMG2VIDEO, VIDEO2VIDEO, SDXL 1.0",
          "Robust Small Object Detection on Multi-spectral Satellite Imagery",
          "Multi-class Face Recognition with Anti-Spoofing using Monocular Depth Perception",
          "GPUs used for Training: NVIDIA A100 XSM4, RTX A6000, RTX 4080, TESLA P100, TESLA T4 (MULTI)",
          "Research Article Contributor: learnopencv.com",
        ],
      },
    ],
  },
  {
    organization: "Modernmonklabs",
    type: "Internship",
    location: "Greater Bengaluru Area · On-site",
    roles: [
      {
        title: "AI Research Engineer",
        duration: "Apr 2022 – Nov 2022",
        bullets: [
          "Designed and developed various AI Pipelines (Synthetic Datasets), and Image Dissection Tool",
          "Extensive Research: SOTA Object Detectors (YOLO), Variational Autoencoders for B/W Image Coloration",
          "Implemented 3D Vision Transformer for Classification of Viral Pneumonia on Chest MRI",
          "Authored Research Articles: Multi-agent Planning, Expectation Maximization Algorithm, Kalman Filter",
          "Management of AWS Infrastructure",
        ],
      },
    ],
  },
  {
    organization: "Google",
    location: "Greater Bengaluru Area",
    roles: [
      {
        title: "Core Team Member",
        duration: "Sep 2021 – Aug 2022",
        bullets: [
          "Delivered multiple keynotes and hands-on sessions on Google Crowd Source, Explore ML, Pandas, Matplotlib for 500+ students",
          "Provided assistance to manage 30 Days of Google Cloud | Explore ML",
          "Delivered keynotes on Explore ML, Pandas Library for Data Science, and MatPlotLib for Data Science",
        ],
      },
    ],
  },
  {
    organization: "TotalCross Platform",
    location: "Portugal",
    roles: [
      {
        title: "Technical Consultant",
        duration: "Jul 2021 – Aug 2021",
        bullets: [
          "Reported directly to COO: Tested the pilot KnowCode Product (now FlutterVision) — AI-based GUI Tool with 2500+ active users",
          "Provided fixes for critical bugs, UI redesign strategies in the form of detailed technical review",
          "Proposed Figma-to-Flutter code conversion feature and drag-drop methodology for embedded deployment",
        ],
      },
    ],
  },
  {
    organization: "Saint-Gobain",
    type: "Internship",
    location: "Greater Bengaluru Area · On-site",
    roles: [
      {
        title: "Computer Vision Engineer",
        duration: "Nov 2020 – Apr 2021",
        bullets: [
          "Development of PPE Safety Kit Detection System for Factories",
          "Defined the convolutional neural network architecture with YOLOv4 for Object Detection",
          "Designed and developed the Multi-processing Pipeline",
          "Contributed towards system integration of web-application using Django Framework",
        ],
      },
    ],
  },
];

export const publications: Publication[] = [
  {
    title: "MANTLE: A Framework for Adaptive In-Situ Planetary Perception Using a Modular Uplink Principle",
    authors: "Pranav Durai, Gary Doran",
    venue: "arXiv · Pre-print",
    year: 2026,
    highlight: true,
    link: "https://arxiv.org/abs/2608.28724",
  },
  {
    title: "HiRISE Landform Classification Dataset",
    authors: "Pranav Durai, Gary Doran",
    venue: "Zenodo",
    year: 2026,
    link: "https://doi.org/10.5281/zenodo.21300384",
    highlight: true,
    type: "dataset",
    citation: "P. Durai and G. Doran, “HiRISE Landform Classification Dataset”. Zenodo, Jul. 10, 2026. doi: 10.5281/zenodo.21300384.",
    description: "Copyright (C) 2026 Pranav Durai and Gary Doran. Raw HiRISE imagery courtesy of NASA/JPL-Caltech/University of Arizona, available through the University of Arizona HiRISE platform and the NASA Planetary Data System (PDS) under NASA's open data policy. Released under Creative Commons Attribution 4.0 International (CC BY 4.0)."
  },
  {
    title: "MSL Boulder Segmentation Dataset",
    authors: "Pranav Durai, Gary Doran",
    venue: "Zenodo",
    year: 2026,
    link: "https://doi.org/10.5281/zenodo.21313774",
    highlight: true,
    type: "dataset",
    citation: "P. Durai and G. Doran, “MSL Boulder Segmentation Dataset”. Zenodo, Jul. 11, 2026. doi: 10.5281/zenodo.21313774.",
    description: "Copyright (C) 2026 Pranav Durai and Gary Doran. Raw MSL Mastcam imagery courtesy of NASA/JPL-Caltech, available through the NASA Planetary Data System (PDS) under NASA's open data policy. Released under Creative Commons Attribution 4.0 International (CC BY 4.0)."
  },
  {
    title: "Evaluation of a New Web-based Platform (BiRAT) for Biomedical Image Registry and Management",
    authors: "Frezghi Habte, Parth Patel, Vivek Pitroda, Pranav Durai, Varadan Kalkunte, Lisa Marie Evans, Heike E. Daldrup-Link",
    venue: "World Molecular Imaging Congress (WMIC) · Alaska, USA",
    year: 2025,
    link: "https://link.springer.com/article/10.1007/s11307-025-02066-5#:~:text=LB305%2D%C2%A0Evaluation%20of%20a%20New%20Web%2Dbased%20Platform%20(BiRAT)%20for%20Biomedical%20Image%20Registry%20and%20Management",
    highlight: true,
    citation: "Habte, F., Patel, P., Pitroda, V., Durai, P., Kalkunte, V., Evans, L. M., & Daldrup-Link, H. E. (2026). Evaluation of a New Web-based Platform (BiRAT) for Biomedical Image Registry and Management. 2025 World Molecular Imaging Congress Program. Mol Imaging Biol 28 (Suppl 1), 1–371. https://doi.org/10.1007/s11307-025-02066-5",
  },
  {
    title: "QuViT: Quantum Vision Transformer",
    authors: "Pranav Durai",
    venue: "Acta Scientific Computer Sciences - USA",
    year: 2024,
    link: "https://actascientific.com/ASCS/ASCS-06-0549.php",
    highlight: true,
    citation: "Pranav Durai. “QuViT: Quantum Vision Transformer\". Acta Scientific Computer Sciences 6.9 (2024):05-10.",
  },
  {
    title: "BiRAT: Platform for Biomedical Image Data Registry and Processing",
    authors: "Frezghi Habte, Parth Patel, Pranav Durai, Varadan Kalkunte, Lisa Marie Evans, Heike E. Daldrup-Link",
    venue: "World Molecular Imaging Congress (WMIC) · Montréal, Canada",
    year: 2024,
    link: "https://link.springer.com/article/10.1007/s11307-024-01977-z",
    highlight: true,
    citation: "Habte, F., Patel, P., Durai, P., Kalkunte, V., Evans, L. M., & Daldrup-Link, H. E. (2025). BiRAT: Platform for Biomedical Image Data Registry and Processing. 2024 World Molecular Imaging Congress Program. Mol Imaging Biol 27 (Suppl 2), 761–1256. https://doi.org/10.1007/s11307-024-01977-z",
  },
  {
    title: "Fine-Tuning YOLOv10 Models on Custom Dataset for Kidney Stone Detection",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2024,
    link: "https://learnopencv.com/fine-tuning-yolov10/",
  },
  {
    title: "Fine-Tuning YOLOv9 Models on Custom Dataset",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2024,
    link: "https://learnopencv.com/fine-tuning-yolov9/",
  },
  {
    title: "Depth Anything: Accelerating Monocular Depth Perception",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2024,
    link: "https://learnopencv.com/depth-anything/",
  },
  {
    title: "Stereo Vision in ADAS: Pioneering Depth Perception Beyond LiDAR",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2024,
    link: "https://learnopencv.com/adas-stereo-vision/",
  },
  {
    title: "Integrating ADAS with Keypoint Feature Pyramid Network for 3D LiDAR Object Detection",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2024,
    link: "https://learnopencv.com/3d-lidar-object-detection/",
  },
  {
    title: "3D LiDAR Visualization using Open3D: A Case Study on 2D KITTI Depth Frames for Autonomous Driving",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2023,
    link: "https://learnopencv.com/3d-lidar-visualization/",
  },
  {
    title: "SegFormer: Fine-Tuning for Improved Lane Detection in Autonomous Vehicles",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2023,
    link: "https://learnopencv.com/segformer-fine-tuning-for-lane-detection/",
  },
  {
    title: "Empowering Drivers: The Rise and Role of Advanced Driver Assistance Systems",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2023,
    link: "https://learnopencv.com/advanced-driver-assistance-systems/",
  },
  {
    title: "Facial Emotion Recognition",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2023,
    link: "https://learnopencv.com/facial-emotion-recognition/",
  },
  {
    title: "Exploring SAHI: Slicing Aided Hyper Inference for Small Object Detection",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2023,
    link: "https://learnopencv.com/slicing-aided-hyper-inference/",
  },
  {
    title: "Advancements in Face Recognition Models, Toolkit and Datasets",
    authors: "Pranav Durai",
    venue: "OpenCV (learnopencv.com)",
    year: 2023,
    link: "https://learnopencv.com/face-recognition-models/",
  },
  {
    title: "A Novel Human Face Recognition and Temperature Detection System - FRTDS",
    authors: "Varalatchoumy M, Pranav Durai",
    venue: "Computational Intelligence in Data Mining. Smart Innovation, Systems and Technologies, vol 281. Springer, Singapore",
    year: 2022,
    link: "https://link.springer.com/chapter/10.1007/978-981-16-9447-9_13",
    citation: "M, V., Durai, P. (2022). A Novel Automated Human Face Recognition and Temperature Detection System Using Deep Neural Networks—FRTDS. In: Nayak, J., Behera, H., Naik, B., Vimal, S., Pelusi, D. (eds) Computational Intelligence in Data Mining. Smart Innovation, Systems and Technologies, vol 281. Springer, Singapore. https://doi.org/10.1007/978-981-16-9447-9_13",
  },
];

export const projects: Project[] = [
  {
    title: "MANTLE",
    description:
      "Multi-task Adaptive Network for Terrain and Landform Extraction, dual-modality planetary perception via a shared frozen DINOv2 backbone with modular uplink-compatible task-specific heads.",
    tech: ["Extraterrestrial Exploration", "Terrain Classification", "Boulder Segmentation", "Mars", "PyTorch", "NASA JPL"],
    link: "https://github.com/pranavdurai10/mantle",
    highlight: true,
  },
  {
    title: "ML for Planetary Sciences",
    description:
      "Co-Founder of the Zenodo community, hosting open science machine learning datasets, models, and research outputs for planetary exploration.",
    tech: ["Zenodo Community", "Planetary Science", "Planetary Exploration", "Open Science"],
    link: "https://zenodo.org/communities/ml-for-planetary-sciences/",
    highlight: true,
  },
  {
    title: "RT-DeTR",
    description:
      "This repository provides a PyTorch implementation of RT-DeTR, a state-of-the-art Realtime Detection Transformer for object detection tasks.",
    tech: ["Object Detection", "Detection Transformer", "PyTorch", "OpenCV"],
    link: "https://github.com/pranavdurai10/rtdetr-pytorch",
    highlight: true,
  },
];

export const talks: Talk[] = [
  {
    title: "Building AI-Native Startups with Foundation Models",
    venue: "Hatch - E-Cell, Indian Institute of Technology - Bombay (IIT-B), India",
    year: 2026,
    youtubeLink: "https://youtu.be/hl179TUOTys?si=c9vDt44fJiWqPrJr",
  },
  {
    title: "Discussion on Physical AI, Egocentric Data Collection & Tactile Sensing",
    venue: "Robot Learning Lab - Podcast, University of California - Berkeley, USA",
    year: 2026,
    youtubeLink: "https://www.youtube.com/watch?v=pJdaW1Td1hk",
  },
  {
    title: "Data Extraction, Storage, and Access at Scale",
    venue: "Convolve 4.0, PAN IIT AI / ML Hackathon, Indian Institute of Technology – Guwahati (IIT-G), India",
    year: 2026,
    youtubeLink: "https://www.youtube.com/watch?v=IarJVkjmwJI&t=337s",
  },
  {
    title: "Principles of Large Language Models: Attention, Transformers, and Emergent Capability",
    venue: "BNM Institute of Technology - Bangalore, India",
    year: 2026,
  },
  {
    title: "Vision-Action-Language Models for Humanoid Autonomy with Perception, Language and Whole-body Control",
    venue: "ROSCon 2025, COEP Technological University - Pune, India",
    year: 2025,
    youtubeLink: "https://youtu.be/YuYLTu_-VIs?si=mxlPLH0T3sM7bhe7",
  },
  {
    title: "Image Generation using Generative AI",
    venue: "Indian Institute of Technology – Kharagpur (IIT-KGP), India",
    year: 2025,
    youtubeLink: "https://www.youtube.com/watch?v=43LNcfm4N6w",
  },
  {
    title: "Decoding Convolutional Neural Networks using PyTorch",
    venue: "Indian Institute of Technology – Guwahati (IIT-G), India",
    year: 2025,
    youtubeLink: "https://www.youtube.com/watch?v=nQT_ago-lk8",
  },
  {
    title: "Advanced 3D Medical Imaging using Deep Learning",
    venue: "Stanford University – School of Medicine – Palo Alto, CA, USA",
    year: 2025,
  },
  {
    title: "Fundamentals of Convolutional Neural Networks and Design Practices for Computer Vision",
    venue: "National Institute of Technology – Karnataka (NIT-K Surathkal), India",
    year: 2024,
    youtubeLink: "https://www.youtube.com/watch?v=WTL3UsB1wzM",
  },
  {
    title: "Fundamentals of Image Processing and Computer Vision",
    venue: "DevHost2024, Sahyadri College of Engineering and Management, India",
    year: 2024,
  },
  {
    title: "Computer Vision for Space Applications",
    venue: "NASA International Space Apps Challenge, India",
    year: 2024,
  },
  {
    title: "Computer Vision & Deep Learning for Advanced Medical Imaging and Analysis",
    venue: "Stanford University – School of Medicine – Palo Alto, CA, USA",
    year: 2024,
    youtubeLink: "https://youtu.be/h-PwfoyIEII?si=E99WjCczRWIn74I4",
  },
  {
    title: "Deep Learning for Medical Imaging and Analysis",
    venue: "Dayananda Sagar College of Engineering – Bangalore, India",
    year: 2024,
  },
  {
    title: "Classical Computer Vision using OpenCV",
    venue: "Cambridge Institute of Technology – Bangalore, India",
    year: 2024,
    youtubeLink: "https://www.youtube.com/watch?v=onmmbgGfehg",
  },
  {
    title: "A Gentle Introduction to Computer Vision using OpenCV",
    venue: "National Institute of Technology – Karnataka (NIT-K Surathkal), India",
    year: 2023,
    youtubeLink: "https://www.youtube.com/watch?v=Rxi7KsEeqxg&t=599s",
  },
  {
    title: "Quantum Linux: Pioneering the Future of Computing",
    venue: "The Linux Foundation – Monterey, CA, USA",
    year: 2023,
    youtubeLink: "https://www.youtube.com/watch?v=9uD6CQPfe1M&t=631s",
  },
  {
    title: "Generating Images from Scratch using Advanced Generative AI Models",
    venue: "Acharya Institute of Technology – Bangalore, India",
    year: 2023,
  },
  {
    title: "Fine-tuning Stable Diffusion for Image Generation",
    venue: "Cambridge Institute of Technology – Bangalore, India",
    year: 2023,
  },
  {
    title: "Fast Generalized Object Segmentation on Medical Imagery using MedSAM Algorithm",
    venue: "Stanford University – School of Medicine – Palo Alto, CA, USA",
    year: 2023,
  },
  {
    title: "Image Generation using Generative AI",
    venue: "MVJ College of Engineering – Bangalore, India",
    year: 2023,
    youtubeLink: "https://www.linkedin.com/posts/pranav-durai_artificialintelligence-machinelearning-generativeai-activity-7068790559062069248-iivt/?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Advanced 3D Reconstruction using NeRF for Crop Health Monitoring",
    venue: "Indian Institute of Science (IISc) – Bangalore, India",
    year: 2023,
  },
];

export const achievements: Achievement[] = [
  {
    text: "Presented research on quantitative imaging biomarkers at the World Molecular Imaging Congress (WMIC).",
  },
  {
    text: "Achieved 100% classification accuracy on benchmark Mars terrain dataset using MarsFormer architecture.",
  },
  {
    text: "Core contributor to SAHI (Slicing Aided Hyper Inference), an open-source library with 4,000+ GitHub stars.",
  },
  {
    text: "Invited speaker at IIT Madras and IIT Bombay for guest lectures on AI and computer vision.",
  },
  {
    text: "Developed and deployed AI systems processing 10,000+ medical images for clinical decision support.",
  },
  {
    text: "Founded FRNTL — building next-generation AI perception systems for industrial and defense verticals.",
  },
];

export interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface Patent {
  title: string;
  number: string;
  status: "Granted" | "Pending" | "Filed";
  year: number;
  coinventors?: string[];
}

export interface GalleryItem {
  title: string;
  year: number;
  category: string;
  caption: string;
  image: string;
  fit?: "cover" | "contain";
}

export const awards: Award[] = [
  {
    title: "Invited Panelist Recognition",
    organization: "Indian Institute of Technology - Guwahati",
    year: "Jan 2026",
  },
  {
    title: "Invited Guest Lecture Recognition",
    organization: "Indian Institute of Technology - Kharagpur",
    year: "Sep 2025",
  },
  {
    title: "Rising Star Award",
    organization: "OpenCV",
    year: "Mar 2024",
  },
  {
    title: "TIFAC VISION 2047 Award - National Level Finalist",
    organization: "Indian Institute of Science, Bangalore",
    year: "Apr 2023",
  },
  {
    title: "Special Honor on National Technology Day",
    organization: "Cambridge Institute of Technology",
    year: "May 2022",
  },
  {
    title: "Best IEEE IDEATHON Project Award",
    organization: "Cambridge Institute of Technology",
    year: "Oct 2021",
  },
  {
    title: "Best IEEE Technical Paper Award",
    organization: "Cambridge Institute of Technology",
    year: "Jun 2021",
  },
  {
    title: "Most Tech Savvy Student Award",
    organization: "Department of Computer Science, Kensri School",
    year: "Nov 2018",
  },
  {
    title: "Most Valuable Person Award",
    organization: "Department of Computer Science, Kensri School",
    year: "Mar 2018",
  },
  {
    title: "Best Conduct Award",
    organization: "Royale Concorde International School",
    year: "Jan 2017",
  },
  {
    title: "Astra - Best Science Model Award",
    organization: "Royale Concorde International School",
    year: "Aug 2014",
  },
  {
    title: "Prerana - Best Aeronautical Model Design Award",
    organization: "HMR International School",
    year: "Jul 2014",
  },
  {
    title: "Young Innovator Award",
    organization: "Visvesvaraya Industrial & Technological Museum",
    year: "Jul 2014",
  },
];

export const patents: Patent[] = [
  {
    title: "Context-Aware Rendering of Objects in an Image",
    number: "Indian Patent No. 202511034956",
    status: "Pending",
    year: 2025,
    coinventors: ["Sarthak Sethi"],
  },
  {
    title: "Novel IoT-based Multi-Coconut Shell Smoothener",
    number: "Indian Patent No. 202341015110",
    status: "Pending",
    year: 2023,
    coinventors: ["Varalatchoumy M", "Girish H"],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "FRNTL Pitch Day - South Park Commons",
    year: 2026,
    category: "Robotics",
    caption: "Pitching FRNTL at the Curiosity event, organized by SPC and held at the Indian Institute of Management - Bangalore (IIM-B).",
    image: "/gallery_pictures/PRANAVDURAI_FOUNDER_2026.jpg"
  },
  {
    title: "Custom 9-DOF Humanoid Arm",
    year: 2026,
    category: "Robotics",
    caption: "Fine-tuning hardware-in-the-loop control loops for FRNTL's in-house dexterous manipulation system.",
    image: "/gallery_pictures/PRANAVDURAI_ROBOTICIST_2_2026.jpg"
  },
  {
    title: "ACM Invited Lecture",
    year: 2026,
    category: "Talks",
    caption: "Delivering a guest lecture on the attention mechanism, Transformer architectures, and emergent capabilities in LLMs.",
    image: "/gallery_pictures/PRANAVDURAI_ACM_LECTURE.png"
  },
  {
    title: "Pan-IIT AI/ML Panelist",
    year: 2026,
    category: "Talks",
    caption: "Invited speaker and panelist at IIT Guwahati's CONVOLVE 4.0, discussing data extraction, storage, and access at scale for robotic systems.",
    image: "/gallery_pictures/PRANAVDURAI_IITG.png"
  },
  {
    title: "Sketching FRNTL's First Humanoid",
    year: 2025,
    category: "Robotics",
    caption: "Designing the initial robot on paper and seeing it come alive on Mohit's CAD later was rewarding.",
    image: "/gallery_pictures/PRANAVDURAI_ROBOTICIST_4_2025.JPG"
  },
  {
    title: "IIT Kharagpur Keynote",
    year: 2025,
    category: "Talks",
    caption: "Invited as Chief Guest for Kshitij 2026 at IIT Kharagpur, delivering an introductory seminar on image generation using Generative AI.",
    image: "/gallery_pictures/PRANAVDURAI_IIT_KHARAGPUR_LECTURE.png"
  },
  {
    title: "Drywall Robot Power System Integration",
    year: 2025,
    category: "Robotics",
    caption: "Wiring structural power and data harnesses for chassis integration on the lab floor.",
    image: "/gallery_pictures/PRANAVDURAI_ROBOTICIST_1_2025.JPG"
  },
  {
    title: "Soldering Test Points on Robot Subsystem",
    year: 2025,
    category: "Robotics",
    caption: "Evaluating components and testing functions at the hardware engineering bench. I absolutely enjoy soldering!",
    image: "/gallery_pictures/PRANAVDURAI_ENGINEER_2024.JPG"
  },
  {
    title: "Training Deep Learning Models at 3AM",
    year: 2025,
    category: "Research",
    caption: "Typically in the 'zone' during late nights. I love to watch models train, one epoch at a time.",
    image: "/gallery_pictures/PRANAVDURAI_CODER_2026.JPG"
  },
  {
    title: "Designing Medical Diagnosis Systems",
    year: 2024,
    category: "Research",
    caption: "Whiteboard brainstorming session at the OpenCV office, designing custom detection pipelines for kidney stones.",
    image: "/gallery_pictures/PRANAVDURAI_COMPUTERVISION_2023.jpg"
  },
  {
    title: "TIFAC Award at IISc",
    year: 2023,
    category: "Awards",
    caption: "Honored by Ex-ISRO Chairman Dr. Kiran Kumar. My proposal on NeRF crop monitoring was selected in the national Top 6.",
    image: "/gallery_pictures/PRANAVDURAI_IISC.png"
  },
  {
    title: "Contribution for COVID-19",
    year: 2020,
    category: "Research",
    caption: "Designed and built a non-contact infrared thermal screening system during lockdown to enable safe building entry.",
    image: "/gallery_pictures/PRANAVDURAI_FRTDS.png"
  },
  {
    title: "Double-Propelled R/C Boat",
    year: 2013,
    category: "Early Maker",
    caption: "Building a light-weight surveillance boat using dual-rotor propulsion for better navigation and silent operation on still waters.",
    image: "/gallery_pictures/PRANAVDURAI_RC_BOAT_2013.jpg"
  },
  {
    title: "The Shoebox Computer",
    year: 2012,
    category: "Early Maker",
    caption: "Built the 'PRANAV-1' shoebox computer from scraps, running a custom kernel on Pentium 4 for 4K image processing using just 256MB RAM.",
    image: "/gallery_pictures/PRANAVDURAI_SHOEBOX_COMPUTER_2012.jpg"
  },
  {
    title: "R/C Handshake Robot",
    year: 2010,
    category: "Early Maker",
    caption: "My first robot built from recycled electronics, delivering remote handshakes via a 1-DOF arm over a 2.4GHz radio signal.",
    image: "/gallery_pictures/PRANAVDURAI_HANDSHAKE_2012.jpeg",
    fit: "contain"
  }
];
