import ConfigSection from "../../../components/config/ConfigSection";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ContentConfigPage.css";

function ContentConfigPage() {
  return (
    <div className="container">
      <ConfigSection
        title="Navbar"
        inputs={[
          { id: "brand-name", label: "Brand Name", placeholder: "Enter brand name" },
          { id: "cta-button", label: "CTA Button Text", placeholder: "Enter button text" },
        ]}
      />

      <ConfigSection
        title="About Us"
        inputs={[
          { id: "about-title", label: "Title", placeholder: "Enter title" },
          { id: "about-content", label: "Content", placeholder: "Enter content", type: "textarea" },
        ]}
      />

      <ConfigSection
        title="Footer"
        inputs={[
          { id: "about-title", label: "Title", placeholder: "Enter title" },
          { id: "about-content", label: "Content", placeholder: "Enter content", type: "textarea" },
        ]}
      />

      <ConfigSection
        title="Footer"
        columns={3}
        inputs={[
          { id: "footer1-title", label: "Section 1 Title", value: "Company" },
          { id: "footer1-links", label: "Section 1 Links", type: "textarea", value: "About Us, Blog, Careers, Press" },
          { id: "footer2-title", label: "Section 2 Title", value: "Resources" },
          { id: "footer2-links", label: "Section 2 Links", type: "textarea", value: "Documentation, Tutorials, API Reference" },
          { id: "footer3-title", label: "Section 3 Title", value: "Legal" },
          { id: "footer3-links", label: "Section 3 Links", type: "textarea", value: "Privacy Policy, Terms of Service, Cookie Policy" },
        ]}
      />

      <button className="save-button">
        <i className="bi bi-save"></i> Save All Changes
      </button>
    </div>
  );
};

export default ContentConfigPage;
