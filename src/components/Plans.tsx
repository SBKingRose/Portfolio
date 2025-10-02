import { useState } from "react";
import "./styles/Plans.css";

const Plans = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="plans" className="career-section plans-section section-container">
      <div className="career-container">
        <h2>
          Continuous <span>Learning</span>
          <br /> Plan
        </h2>
        
        <div className="plans-toggle" onClick={toggleExpanded}>
          <span className="plans-toggle-text">
            {isExpanded ? "Hide Learning Plan" : "View Learning Plan"}
          </span>
          <span className={`plans-toggle-arrow ${isExpanded ? 'expanded' : ''}`}>
            ▼
          </span>
        </div>

        <div className={`career-info plans-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>CKA (without cert)</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">End of October 2025</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>Service Mesh, Helm</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">First week of November 2025</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>ArgoCD, FluxCD, GitHub Actions</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">First week of November 2025</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>SAST, DAST, Pipeline Testing</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">Second week of November 2025</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>ELK Stack</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">Till December 2025</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>K6, Falco, Backstage</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">First week of January 2026</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>Gremlin, Litmus Chaos, TF Policy Checks</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">Second week of January 2026</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>PagerDuty, eBPF</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">Third week of January 2026</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>MLOps (Kubeflow, MLflow, Vertex AI)</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">Till end of February 2026</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>AWS DevOps Professional</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">By end of July 2026</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>CKA Certification</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">By end of September 2026</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>Terraform Associate</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">Q4 2026</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>AZ-104</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">March 2027</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>Azure DevOps Expert</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">July 2027</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>GCP Associate</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">December 2027</h5>
            </div>
          </div>

          <div className="career-info-box plans-info-box">
            <div className="plans-box-left">
              <div className="career-role">
                <h4>GCP Professional Cloud DevOps</h4>
              </div>
            </div>
            <div className="plans-box-right">
              <h5 className="plans-date">2028</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;


