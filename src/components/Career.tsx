import "./styles/Career.css";

const Career = () => {
  return (
    <div id="career" className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps Manager</h4>
                <h5>Woundtech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              At Woundtech, I modernized the company's DevOps ecosystem by introducing trunk-based development, artifact promotion, and one-click deployments, cutting release times from 3 hours to under 10 minutes. I led major upgrades including Aurora PostgreSQL (v11 → v16) and the HAPI FHIR platform, which eliminated billions of legacy objects and saved thousands in extended support costs. By driving cloud cost optimization, I reduced AWS spend from $42K to $12K per month. I also enhanced security and compliance with WAF, secrets rotation, and SecurityHub improvements, helping the organization advance towards HIPAA and HITRUST certifications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Consultant</h4>
                <h5>KPMG</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              At KPMG, I designed and implemented enterprise-grade CI/CD pipelines that improved code quality and security through SonarQube, Trivy, and automated testing frameworks. I built secure AWS-to-EKS integrations for secret management, automated infrastructure with Terraform Enterprise, and streamlined operations with Ansible and dynamic inventories. My work on serverless deployments, Kubernetes orchestration, and observability with Prometheus/Grafana significantly improved scalability, monitoring, and compliance for client environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technology Analyst</h4>
                <h5>Infosys</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              At Infosys, I led governance and security across 15+ AWS accounts, ensuring compliance and operational excellence. I drove cloud migration projects, built CI/CD pipelines with Jenkins and CodePipeline, and automated infrastructure using Ansible and Python. I deployed and managed Kubernetes clusters, enabling secure, scalable workloads while implementing HA/DR strategies for critical systems. My focus on automation, monitoring, and security improved efficiency, reduced downtime, and accelerated delivery across client engagements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Engineer</h4>
                <h5>Ericsson</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              At Ericsson, I built and optimized cloud environments on AWS, deploying EC2 instances, configuring CloudWatch monitoring, and managing Linux/Windows systems. I introduced Docker containerization for web applications, improving scalability and reliability. Using Python automation scripts, I streamlined data management, enabled secure file transfers via S3 and SMB protocols, and reduced manual overhead. This role laid the foundation for my expertise in cloud, automation, and DevOps practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
