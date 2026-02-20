// Language translations
const translations = {
    en: {
        // Navigation
        "name": "Chaima KTARI",
        "title": "Software Engineer",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.skills": "Skills",
        "nav.languages": "Languages",
        "nav.projects": "Projects",
        "nav.campus": "Involvement",
        "nav.courses": "Certifications",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.greeting": "Hi, I'm <span class='highlight'>Chaima KTARI</span>",
        "hero.subtitle": "Software Engineer (FullStack Web Developer / AI Enthusiast)",
        "hero.cta": "Contact Me",
        
        // About Section
        "about.title": "About Me",
        "about.para1": "I am a recently graduated and passionate computer engineering professional, with diverse hands-on experience gained through several industry internships. My background combines a solid academic foundation with practical development experience in various environments.",
        "about.para2": "I communicate fluently in both French and English, allowing me to work effectively in international contexts. Driven by strong intellectual curiosity, I enjoy continuous learning and adapting to new technologies. My teamwork experience, strengthened through associative involvement, has taught me the importance of collaboration and active listening in delivering successful projects.",
        "about.para3": "Today, I am seeking to join a dynamic team where I can contribute to innovative projects while continuing to develop my skills within a supportive and stimulating environment.",
        "about.email": "Email:",
        "about.location": "Location:",
        "about.location.value": "Tunis, Tunisia",
        "about.availability": "Availability:",
        "about.availability.value": "Open to opportunities",
        
        // Experience Section
        "experience.title": "Professional Experience",
        "experience.internship": "Internship",
        "experience.achievements": "Key Achievements",
        
        // Job 1
       "experience.job1.title": "Full Stack .NET Developer (ASP.NET Core)",
        "experience.job1.company": "AsteelFlash, Tunis, Tunisia",
        "experience.job1.achievement1": "Design and development of a Full Stack application using .NET, including data flow management and business rules implementation.",
        "experience.job1.achievement2": "Implementation of an automated Excel file import system with direct database integration to eliminate manual entry and reduce errors.",
        "experience.job1.achievement3": "Development of custom user interfaces using HTML, CSS, and JavaScript.",
        "experience.job1.achievement4": "Implementation of automated processes in Python to ensure data integrity and compliance.",
        "experience.job1.achievement5": "Automated reel scanning system validating references by prototype from Excel and integrating only compliant data.",
        "experience.job1.achievement6": "Data analysis and KPI visualization using Power BI for performance monitoring, anomaly detection, and decision support.",
        "experience.job1.achievement7": "Work in an Agile SCRUM environment with close collaboration with business teams (user stories, sprints, meetings).",
        "experience.job1.achievement8": "Data persistence management using Entity Framework Core and SQL Server.",
        "experience.job1.achievement9": "Integration of an intelligent assistant based on an LLM (Ollama) to answer production and quality-related questions.",

        // Job 2
        "experience.job2.title": "Full Stack Web Developer (Java Spring Boot / React)",
        "experience.job2.company": "Talan Tunisia, Tunis, Tunisia",
        "experience.job2.achievement1": "Business requirements analysis, design, and development of a full-stack web application for employee leave and absence management.",
        "experience.job2.achievement2": "Development of REST APIs using Java (Spring Boot) and integration with the React front-end.",
        "experience.job2.achievement3": "Implementation of real-time GPS tracking for animals using simulated data via Express.js and interactive maps with Leaflet.",
        "experience.job2.achievement4": "Integration of WebSocket for instant messaging and email notifications.",
        "experience.job2.achievement4": "Real-time notifications using Firebase for zone and health alerts.",
        "experience.job2.achievement5": "Implementation of blockchain features for animal identification.",
        "experience.job2.achievement6": "User management and application security using Spring Security.",
        "experience.job2.achievement7": "Data access and persistence using Spring Data JPA with a MySQL database.",

        
        // Job 3
        "experience.job3.title": "Odoo ERP Integration and Infrastructure",
        "experience.job3.company": "Tunisia, Tunis, Tunisia",
        "projects.project1.achievement1": "Installation and configuration of Odoo.",
        "projects.project1.achievement2": "Customization of ERP modules.",
        "projects.project1.achievement3": "Implementation of a Load Balancer for high availability.",


        // Education Section
        "education.title": "Education",
        "education.view-diploma": "View Diploma",
        "education.diploma3.alt": "Engineering Degree",
        "education.diploma2.alt": "Bachelor's Degree in Mechanics",
        "education.diploma1.alt": "Technical Sciences Baccalaureate",
        
        // Degree 1
        "education.degree1.title": "National Engineering Degree in Computer Science",
        "education.degree1.school": "Private Higher School of Engineering and Technology (ESPRIT)",
        "education.degree1.details": "Specialization: Web Development | Honors: Very Good | GPA: 16.03",

        // Degree 2
        "education.degree2.title": "National Bachelor's Degree in Mechanics",
        "education.degree2.school": "Higher Institute of Technological Studies of Beja (ISET)",
        "education.degree2.details": "Specialization: Mechatronics | Honors: Good | GPA: 13.34",
        
        // Degree 3
        "education.degree3.title": "Technical Sciences Baccalaureate",
        "education.degree3.school": "Bach Hamba High School, Bizerte",
        "education.degree3.details": "Honors: Passable | GPA: 9.85",
        
        // Skills Section
        "skills.title": "Skills",
        "skills.langages": "Programming Languages",
        "skills.frontend": "Frontend Development Frameworks",
        "skills.backend": "Backend Development Frameworks",
        "skills.BD": "Databases",
        "skills.devops": " DevOps & CI/CD",
        "skills.administration": "System and Network Administration",
        "skills.agile": "Agile Methods",
        "skills.analyse": "Data Analysis",
        "skills.tests": "Testing & Quality Assurance",
        
        // Languages Section
        "languages.title": "Languages",
        "languages.arabic": "Arabic",
        "languages.french": "French",
        "languages.english": "English",
        "languages.level.native": "Native language",
        "languages.level.b2": "Level B2",
        
        // Projects Section
        "projects.title": "Academic Projects",
        "projects.description": "Project Description",
        "projects.achievements": "Technical Achievements",
        "projects.view.code": "View Code",
        "projects.view.github": "View Source Code",
        
        // Project 1
        "projects.project1.title": "CI/CD DevOps Pipeline with Jenkins",
        "projects.project1.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project1.description": "Implementation of a complete CI/CD pipeline for a Spring Boot application, automating integration, testing, security, containerization and deployment with real-time monitoring.",
        "projects.project1.achievement1": "Jenkins: Complete orchestration of the CI/CD pipeline.",
        "projects.project1.achievement2": "Git: Version management and continuous integration.",
        "projects.project1.achievement3": "JUnit: Automated unit tests with code coverage report.",
        "projects.project1.achievement4": "SonarQube: Static code analysis and continuous quality metrics.",
        "projects.project1.achievement5": "Docker: Containerization of the Spring Boot application.",
        "projects.project1.achievement6": "Docker Compose: Docker container orchestration.",
        "projects.project1.achievement7": "Nexus: Centralized management of artifacts and Docker images.",
        "projects.project1.achievement8": "Prometheus: Collection and monitoring of application metrics.",
        "projects.project1.achievement9": "Grafana: Visualization of performance and health dashboards.",
        "projects.project1.achievement10": "Trivy: Docker image security scanning.",
        
        // Project 2
        "projects.project2.title": "Full-Stack ERP Platform for Company, Employee, and Inventory Management (Java/Angular)",
        "projects.project2.subtitle": "Private Higher School of Engineering and Technology (ESPRIT)",
        "projects.project2.description": "Development of a platform for company, employee, and inventory management.",
        "projects.project2.achievement1": "Development of REST APIs on the backend using Spring Boot and data management with Spring Data JPA.",
        "projects.project2.achievement2": "Implementation of application security and user role management with Spring Security.",
        "projects.project2.achievement3": "REST API testing using Postman and implementation of unit and integration tests with JUnit.",
        "projects.project2.achievement4": "Development of user interfaces using Angular, including full backend integration, forms, dynamic tables, and dashboards.",
        "projects.project2.achievement5": "Version control and team collaboration using Git.",
        "projects.project2.achievement6": "API documentation using Swagger/OpenAPI and environment configuration.",
        "projects.project2.achievement7": "Media and image management using Cloudinary.",
        "projects.project2.achievement8": "Real-time notifications and messaging using Twilio (SMS) and WebSocket/STOMP (internal chat), including alerts for accepted applications.",
        "projects.project2.achievement9": "Real-time video features using WebRTC / Twilio Video for meetings and internal communications.",
        "projects.project2.achievement10": "Project developed following the Agile / SCRUM methodology for effective planning, tracking, and delivery.",

        // Project 3
        "projects.project3.title": "Web and Desktop Development Project",
        "projects.project3.subtitle": "Private Higher School of Engineering and Technology (ESPRIT)",
        "projects.project3.description": "Development of a web and desktop application for event organization and management.",
        "projects.project3.achievement1": "Development of the web application using Symfony 5 with MVC architecture.",
        "projects.project3.achievement2": "Development of the desktop application using JavaFX with a modern user interface.",
        "projects.project3.achievement3": "Synchronization between the web and desktop applications.",

        // Contact Section
        "contact.title": "Contact Me",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.location": "Location",
        "contact.location.value": "Tunis, Tunisia",
        "contact.availability": "Availability",
        "contact.availability.value": "Open to Full-Stack and AI opportunities",
        "contact.note": "Feel free to contact me via email or LinkedIn to discuss collaborations or opportunities."
    },
    fr: {
        // Navigation (French text from HTML - included for completeness)
        "name": "Chaima KTARI",
        "title": "Ingénieure Informatique",
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.experience": "Expérience",
        "nav.education": "Éducation",
        "nav.skills": "Compétences",
        "nav.languages": "Langues",
        "nav.projects": "Projets",
        "nav.campus": "Implication",
        "nav.courses": "Certifications",
        "nav.contact": "Contact",
        
        // Hero Section
        "hero.greeting": "Bonjour, je suis <span class='highlight'>Chaima KTARI</span>",
        "hero.subtitle": "Ingénieure Informatique (Développeuse FullStack Web / Passionnée d'IA)",
        "hero.cta": "Contactez-moi",
        
        // About Section
        "about.title": "À propos de moi",
        "about.para1": "Je suis une jeune ingénieure informatique récemment diplômée et passionnée par les technologies, j'ai acquis une expérience professionnelle diversifiée à travers plusieurs stages en entreprise. Mon parcours allie une formation académique solide à une pratique concrète du développement dans des environnements variés.",
        "about.para2": "Je communique facilement en français et en anglais, ce qui me permet de travailler efficacement dans des contextes internationaux. Dotée d'une grande curiosité intellectuelle, j'aime apprendre en continu et m'adapter aux nouvelles technologies. Mon expérience en travail d'équipe, renforcée par mon engagement associatif, m'a enseigné l'importance de la collaboration et de l'écoute pour mener des projets à succès.",
        "about.para3": "Aujourd'hui, je souhaite intégrer une équipe dynamique afin de contribuer à des projets innovants tout en poursuivant le développement de mes compétences au sein d’un environnement stimulant et bienveillant.",
        "about.email": "Email:",
        "about.location": "Localisation:",
        "about.location.value": "Tunis, Bizerte",
        "about.availability": "Disponibilité:",
        "about.availability.value": "Ouverte aux opportunités",
        
        // Experience Section
        "experience.title": "Expérience Professionnelle",
        "experience.internship": "Stage",
        "experience.achievements": "Principales Réalisations",
        
        // Job 1
        "experience.job1.title": "Développeuse Full Stack .NET (ASP.NET Core)",
        "experience.job1.company": "AsteelFlash, Tunis, Tunisie",
        "experience.job1.achievement1":"Conception et développement d'une application Full Stack en DotNET, avec gestion des flux de données et des règles métier.",
        "experience.job1.achievement2": "Mise en place d'un système d'import automatique de fichiers Excel, avec intégration directe en base de données pour éliminer la saisie manuelle et réduire les erreurs.",
        "experience.job1.achievement3": "Développement d'interfaces utilisateur spécifiques en HTML, CSS et JavaScript.",
        "experience.job1.achievement4": "Implémentation de processus automatisés en Python pour assurer l'intégrité et la conformité des données.",
        "experience.job1.achievement5": "Système automatisé de scan des bobines, validant les références par prototype depuis Excel et intégrant uniquement les données conformes.",
        "experience.job1.achievement6": "Analyse des données collectées et visualisation des KPI avec Power BI pour le suivi des performances, la détection d'anomalies et le support à la décision.",
        "experience.job1.achievement7": "Travail en environnement Agile SCRUM, avec collaboration étroite avec les équipes métier (user stories, sprints, réunions).",
        "experience.job1.achievement8" : "Gestion de la persistance des données avec Entity Framework Core et SQL Server.",
        "experience.job1.achievement9": "Intégration d'un assistant intelligent basé sur un LLM (Ollama) pour répondre aux questions liées à la production et à la qualité.",
        
        // Job 2
      "experience.job2.title": "Développeuse Web Full-Stack (Java Spring Boot / React)",
      "experience.job2.company": "Talan Tunisia, Tunis, Tunisie",
      "experience.job2.achievement1": "Analyse des besoins métiers, conception et développement d'une application web full-stack pour la gestion des absences et congés des employés.",
      "experience.job2.achievement2": "Développement d'API REST en Java (Spring Boot) et intégration avec le front-end React.",
      "experience.job2.achievement3": "Mise en place du suivi GPS en temps réel des animaux avec des données simulées via Express.js et cartes interactives avec Leaflet.",
      "experience.job2.achievement4": "Intégration de WebSocket pour la messagerie instantanée et des notifications par e-mail.",
      "experience.job2.achievement4": "Notifications temps réel via Firebase pour les alertes de zone et de santé.",
      "experience.job2.achievement5": "Implémentation de fonctionnalités de blockchain pour l'identification des animaux.",
      "experience.job2.achievement6": "Gestion des utilisateurs et de la sécurité de l'application avec Spring Security.",
      "experience.job2.achievement7": "Accès et persistance des données avec Spring Data JPA sur une base MySQL.",

        
        // Job 3
        "experience.job3.title":  "Intégration ERP Odoo et infrastructure",
        "experience.job3.company": " Tunisia, Tunis, Tunisie",
        "projects.project1.achievement1": "Installation et configuration d'Odoo.",
        "projects.project1.achievement2": "Personnalisation des modules ERP.",
        "projects.project1.achievement3": "Mise en place d'un Load Balancer pour la haute disponibilité.",

        // Education Section
        "education.title": "Éducation",
        "education.view-diploma": "Voir le diplôme",
        "education.diploma3.alt": "Diplôme d'Ingénieur",
        "education.diploma2.alt": "Licence en Mecanique",
        "education.diploma1.alt": "Baccalauréat Sciences Technique",
        
        // Degree 1
        "education.degree1.title": "Diplôme National d'Ingénieur en Informatique",
        "education.degree1.school": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "education.degree1.details": "Spécialité: Développement Web | Mention: Très Bien | Moyenne : 16.87",
        
        // Degree 2
        "education.degree2.title": "Licence National en Mecanique",
        "education.degree2.school": "Institut Supérieur de Etudes Technologique de BEJA (ISET)",
        "education.degree2.details": "Spécialisation: Mecatronique | Mention: Bien | Moyenne : 13.34",
        
        // Degree 3
        "education.degree3.title": "Baccalauréat Sciences Technique",
        "education.degree3.school": "Lycée Bach Hamba Bizerte",
        "education.degree3.details": "Mention: Passable | Moyenne 9.85",
        
        // Skills Section
        "skills.title": "Compétences",
        "skills.langages": "Langages de programmation",
        "skills.frontend": "Framework de développement Web Frontend",
        "skills.backend": "Framework de développement Web Backend",
        "skills.BD": "Bases de données",
        "skills.devops": " DevOps & CI/CD",
        "skills.administration": "Administration système et réseau",
        "skills.agile": "Méthodes Agile",
        "skills.analyse": "Analyse des données",
        "skills.tests": "Tests & Assurance Qualité",
        
        // Languages Section
        "languages.title": "Langues",
        "languages.arabic": "Arabe",
        "languages.french": "Français",
        "languages.english": "Anglais",
        "languages.level.native": "Langue maternelle",
        "languages.level.b2": "Niveau B2",
        
        // Projects Section
        "projects.title": "Projets Académiques",
        "projects.description": "Description du projet",
        "projects.achievements": "Réalisations Techniques",
        "projects.view.code": "Voir le code",
        "projects.view.github": "Voir le code source",
        
        // Project 1
        "projects.project1.title": "Pipeline CI/CD DevOps avec Jenkins",
        "projects.project1.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project1.description": "Implémentation d'un pipeline CI/CD complet pour une application Spring Boot, automatisant l'intégration, les tests, la sécurité, la conteneurisation et le déploiement avec monitoring en temps réel.",
        "projects.project1.achievement1": "Jenkins : Orchestration complète du pipeline CI/CD.",
        "projects.project1.achievement2": "Git : Gestion de versions et intégration continue.",
        "projects.project1.achievement3": "JUnit : Tests unitaires automatisés avec rapport de couverture de code.",
        "projects.project1.achievement4": "SonarQube : Analyse statique de code et métriques de qualité en continu.",
        "projects.project1.achievement5": "Docker : Conteneurisation de l'application Spring Boot.",
        "projects.project1.achievement6": "Docker Compose : Orchestration du contenaire Docker.",
        "projects.project1.achievement7": "Nexus : Gestion centralisée des artefacts et image Docker.",
        "projects.project1.achievement8": "Prometheus : Collecte et monitoring des métriques applicatives.",
        "projects.project1.achievement9": "Grafana : Visualisation des dashboards de performance et santé.",
        "projects.project1.achievement10": "Trivy : Scan de sécurité de l'image Docker.",
        
        // Project 2
        "projects.project2.title": "Plateforme ERP full-stack pour la gestion des sociétés, du personnel et des stocks(Java/Angular)",
        "projects.project2.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project2.description": "Creation d'une plateforme pour la gestion des sociétés, du personnel et des stocks .",
        "projects.project2.achievement1": "Développement des API REST côté backend avec Spring Boot et gestion des données avec Spring Data JPA.",
        "projects.project2.achievement2": "Mise en place de la sécurité et des rôles utilisateurs avec Spring Security.",
        "projects.project2.achievement3": "Tests des API REST avec Postman et réalisation de tests unitaires et d'intégration avec JUnit.",
        "projects.project2.achievement4": "Développement des interfaces utilisateurs avec Angular, intégration complète avec le backend, création de formulaires, tableaux dynamiques et dashboards.",
        "projects.project2.achievement5": "Gestion des versions et collaboration avec Git.",
        "projects.project2.achievement6": "Documentation des API avec Swagger/OpenAPI et configuration des environnements.",
        "projects.project2.achievement7": "Gestion des médias et images avec Cloudinary.",
        "projects.project2.achievement8": "Notifications et messagerie en temps réel avec Twilio (SMS) et WebSocket/STOMP (chat interne), incluant alertes pour candidatures acceptées.",
        "projects.project2.achievement9": "Fonctionnalités vidéo en temps réel avec WebRTC / Twilio Video pour les réunions et communications internes.",
        "projects.project2.achievement10": "Projet réalisé selon la méthode Agile / SCRUM pour planifier, suivre et livrer les fonctionnalités efficacement.",

        // Project 3
        "projects.project3.title": "Projet de développemnt Web et Desktop",
        "projects.project3.subtitle": "École Supérieure Privée d'Ingénierie et Technologie (ESPRIT)",
        "projects.project3.description": "Développement d'un application web et desktop pour l'organisation et la getion des evenements.",
        "projects.project3.achievement1": "Développement de l'application web Symfony 5 avec architecture MVC",
        "projects.project3.achievement2": "Développement de l'application desktop avec JavaFX avec interface moderne",
        "projects.project3.achievement3": "Synchronisation entre l'application web et desktop",
        
        // Contact Section
        "contact.title": "Contactez-moi",
        "contact.email": "Email",
        "contact.phone": "Téléphone",
        "contact.location": "Localisation",
        "contact.location.value": "Tunis, Tunisie",
        "contact.availability": "Disponibilité",
        "contact.availability.value": "Ouverte aux opportunités en développement Full-Stack,DevOps et IA",
        "contact.note": "N'hésitez pas à me contacter par email ou LinkedIn pour discuter de collaborations ou opportunités."
    }
};

// Language switching function
// Language switching function - VERSION CORRIGÉE
function switchLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if the element is a nav link (contains an icon)
            if (element.closest('.nav-links')) {
                // For nav links, only update the text content of the span
                const span = element.querySelector('span');
                if (span) {
                    span.textContent = translations[lang][key];
                }
            } else {
                // For other elements, update normally
                const translation = translations[lang][key];
                if (translation.includes('<span') || translation.includes('<i>') || translation.includes('<br>')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        }
    });
    
    // Update form placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update image alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            element.alt = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update page title
    const name = document.querySelector('[data-i18n="name"]')?.textContent || 'Chaima KTARI';
    const title = document.querySelector('[data-i18n="title"]')?.textContent || 'Ingénieure Informatique';
    document.title = `${name} | ${title}`;
    
    // Save preference to localStorage
    localStorage.setItem('preferred-language', lang);
}

// ===== YOUR EXISTING FUNCTIONALITY =====

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Update active link on scroll
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if(scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Form submission handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Get success message based on current language
            const currentLang = document.documentElement.lang || 'fr';
            const successMessages = {
                en: 'Thank you for your message! I\'ll get back to you soon.',
                fr: 'Merci pour votre message! Je vous répondrai bientôt.'
            };
            
            // Show appropriate success message
            alert(successMessages[currentLang] || successMessages.en);
            this.reset();
        });
    }
}

// Add animation on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements to animate
    document.querySelectorAll('.timeline-item, .education-card, .involvement-card, .cert-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations
function initHeroAnimation() {
    const hero = document.querySelector('.hero');
    if(hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 300);
    }
}

// ===== MAIN INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    initSmoothScrolling();
    initActiveNavOnScroll();
    initContactForm();
    initScrollAnimations();
    initHeroAnimation();
    initDiplomaLightbox();
    initJenkinsfileLightbox();
    initPDFDownloads(); 
    // Initialize language system
    // Check for saved language preference or default to French
    const savedLang = localStorage.getItem('preferred-language') || 'fr';
    
    // Set up language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Apply initial language
    switchLanguage(savedLang);
});

// Lightbox functionality for diploma photos
function initDiplomaLightbox() {
    const lightbox = document.getElementById('diploma-lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // Open lightbox when clicking on diploma thumbnails
    document.querySelectorAll('.photo-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const fullsizeImage = this.getAttribute('data-fullsize');
            const altText = this.querySelector('img').getAttribute('alt');
            
            lightboxImage.src = fullsizeImage;
            lightboxImage.alt = altText;
            lightboxCaption.textContent = altText;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            lightboxImage.src = '';
        }, 300);
    }
    
    // Close on X button click
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Close on mobile swipe down
    let touchStartY = 0;
    lightbox.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    });
    
    lightbox.addEventListener('touchend', function(e) {
        const touchEndY = e.changedTouches[0].clientY;
        if (touchEndY - touchStartY > 100) { // Swiped down
            closeLightbox();
        }
    });
}

// Fonction pour le lightbox du Jenkinsfile
function initJenkinsfileLightbox() {
    const jenkinsfileLightbox = document.getElementById('jenkinsfile-lightbox');
    const jenkinsfileCode = document.querySelector('.jenkinsfile-code');
    const copyBtn = document.querySelector('.copy-jenkinsfile-btn');
    const closeBtn = jenkinsfileLightbox.querySelector('.lightbox-close');
    
    // Ouvrir le lightbox
    document.querySelectorAll('.view-jenkinsfile-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            jenkinsfileLightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Fermer le lightbox
    function closeLightbox() {
        jenkinsfileLightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    
    // Fermer en cliquant en dehors
    jenkinsfileLightbox.addEventListener('click', function(e) {
        if (e.target === jenkinsfileLightbox) {
            closeLightbox();
        }
    });
    
    // Copier le code
    copyBtn.addEventListener('click', function() {
        const codeToCopy = jenkinsfileCode.textContent;
        
        navigator.clipboard.writeText(codeToCopy)
            .then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copié!';
                this.classList.add('copied');
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.classList.remove('copied');
                }, 2000);
            })
            .catch(err => {
                console.error('Erreur de copie:', err);
            });
    });
    
    // Fermer avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && jenkinsfileLightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Fonction pour gérer les téléchargements PDF
function initPDFDownloads() {
    const pdfFiles = {
        'az900-module1.pdf': 'assets/PDF/Coursera 2KP2WEFELPLV.pdf',
        'az900-module2.pdf': 'assets/PDF/Coursera_course2.pdf',
        'az900-module3.pdf': 'assets/PDF/Course3.pdf',
        'az900-module4.pdf': 'assets/PDF/Course4.pdf'
    };
    
    // Ajouter l'événement click sur chaque bouton
    document.querySelectorAll('.download-pdf-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const pdfName = this.getAttribute('data-pdf');
            const pdfPath = pdfFiles[pdfName];
            
            if (pdfPath) {
              
                const downloadLink = document.createElement('a');
                downloadLink.href = pdfPath;
                downloadLink.download = pdfName;
                downloadLink.target = '_blank'; 
                
               
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                
                
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Téléchargé!';
                this.style.background = '#10b981';
                this.style.borderColor = '#10b981';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = '';
                    this.style.borderColor = '';
                }, 2000);
            } else {
                alert('Fichier non disponible');
            }
        });
    });
}






