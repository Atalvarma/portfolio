export const portfolioData = {
    personal: {
        name: "Atal Mudunuru",
        initials: "AM",
        role: "Full Stack & Cloud Engineer",
        location: "Dallas, TX",
        email: "atalbm11@gmail.com",
        phone: "(602) 815-2992",
        phoneRaw: "+16028152992",
        summary: "Full Stack and Cloud Engineer with 3+ years of designing and scaling AWS-based distributed systems using Java, Spring Boot, and React.",
        about: [
            "Full Stack and Cloud Engineer with 3+ years of designing and scaling AWS-based distributed systems using Java, Spring Boot, and React. Proven track record building EKS microservices across 200+ pods achieving 99.9% uptime, 35% throughput gains, and 30% infrastructure efficiency improvements.",
            "Expert in CI/CD pipelines, event-driven architectures, and observability tooling that reduced incident resolution time by 40%. Passionate about building scalable, reliable, and efficient cloud-native applications."
        ]
    },
    skills: {
        "Cloud Platforms": ["AWS", "EC2", "EKS", "Lambda", "API Gateway", "DynamoDB", "S3", "CloudWatch", "CloudFormation"],
        "DevOps & IaC": ["Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD", "Prometheus", "ELK Stack"],
        "Languages": ["Java", "JavaScript", "Python", "TypeScript", "SQL"],
        "Frameworks": ["Spring Boot", "Spring Cloud", "React", "Hibernate"],
        "Databases & Messaging": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQS", "SNS"],
    },
    experience: [
        {
            role: "Software Engineer",
            company: "Western Union",
            period: "Oct 2023 – Present",
            description: [
                "Designed and deployed AWS EKS microservices using Docker, Java 17 and Spring Boot, improving platform throughput by 35% and uptime to 99.9% for financial transaction systems.",
                "Automated CI/CD pipelines using Terraform and Jenkins, reducing deployment time by 60% and enabling daily production releases.",
                "Expanded observability coverage across 20+ microservices and 200+ EKS pods using CloudWatch, Prometheus, and ELK Stack, improving visibility and cutting mean time to recovery (MTTR) by 40%.",
                "Increased infrastructure efficiency by 30% through instance right-sizing, Spot Instance adoption, and scaling policy optimizations, reducing unused compute capacity by 22% while maintaining 99.9% services.",
            ],
        },
        {
            role: "Associate Software Developer",
            company: "Future Generali Life Insurance",
            period: "Jun 2020 – Jul 2021",
            description: [
                "Developed and maintained RESTful APIs using Java 8 and Spring Boot to power internal analytics and policy management systems used by 10k+ employees and agents nationwide.",
                "Optimized PostgreSQL queries and implemented Redis caching, improving API response times by 20% and enabling faster access to customer policy data.",
                "Integrated backend services with React-based dashboards, increasing front-end data reliability and cutting client-side load times by 25%.",
            ],
        },
    ],
    education: [
        {
            degree: "Master of Information Technology",
            school: "Arizona State University",
            period: "2021 – May 2023",
            location: "Tempe, AZ"
        },
        {
            degree: "Bachelor of Technology in Computer Science",
            school: "GITAM University",
            period: "2016 – Jun 2020",
            location: "Visakhapatnam, India"
        }
    ]
}
