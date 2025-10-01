import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>Cloud Architecture & Automation</h3>
              <h4>Description</h4>
              <p>
                I build secure, scalable AWS environments with Terraform, CDK, and Ansible, optimizing cost, performance, and compliance.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Terraform</div>
                <div className="what-tags">CDK</div>
                <div className="what-tags">Ansible</div>
                <div className="what-tags">Datadog</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CI/CD Pipelines</h3>
              <h4>Description</h4>
              <p>
                I build robust CI/CD pipelines with Bitbucket, Jenkins, and AWS services that enable push-button deployments, artifact promotion, and one-click releases, reducing deployment times from hours to minutes.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Bitbucket Pipelines</div>
                <div className="what-tags">Jenkins</div>
                <div className="what-tags">Harness</div>
                <div className="what-tags">AWS CodePipeline</div>
                <div className="what-tags">Husky</div>
                <div className="what-tags">SonarQube</div>
                <div className="what-tags">Trivy</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* New: Security & Compliance */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>Security & Compliance</h3>
              <h4>Description</h4>
              <p>
                I enforce WAF, IAM hardening, secrets rotation, and tooling like Talisman while driving HIPAA, HITRUST, and ONC readiness, sustaining 97%+ SecurityHub compliance.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">WAF</div>
                <div className="what-tags">IAM</div>
                <div className="what-tags">Secrets Mgmt</div>
                <div className="what-tags">Talisman</div>
                <div className="what-tags">SecurityHub</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* New: Monitoring & Observability */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 3)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>Monitoring & Observability</h3>
              <h4>Description</h4>
              <p>
                I deliver proactive visibility with Prometheus, Grafana, Datadog, and CloudWatch—enabling alerting, tuning, and faster MTTR.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Prometheus</div>
                <div className="what-tags">Grafana</div>
                <div className="what-tags">Datadog</div>
                <div className="what-tags">CloudWatch</div>
                <div className="what-tags">SLOs</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          {/* New: Leadership & Team Enablement */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 5)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>Leadership & Team Enablement</h3>
              <h4>Description</h4>
              <p>
                I align teams on DevOps best practices, automate onboarding, and scale secure branching and pipelines to boost delivery and collaboration.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">DevOps Coaching</div>
                <div className="what-tags">Branching Strategy</div>
                <div className="what-tags">Secure Pipelines</div>
                <div className="what-tags">GitOps</div>
                <div className="what-tags">Documentation</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
