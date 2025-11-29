import ConfigSection from "../../../components/config/ConfigSection";
import { useState } from "react";
import { useSiteContent } from "../../../contexts/SiteContentContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ContentConfigPage.css";

function ContentConfigPage() {
  // @ts-ignore
  const { updateHome, updateAbout } = useSiteContent();

  // state temporary
  const [formData, setFormData] = useState({
    Navbar: {},
    Home: {},
    About: {},
    Footer: {},
  });

  // receive updates from ConfigSection
  const handleSectionChange = (section, id, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [id]: value,
      },
    }));
  };

  // save button handler
  const handleSave = () => {
    if (formData.Home) {
      updateHome({
        title: formData.Home["about-title"] || "",
        subtitle: formData.Home["about-content"] || "",
      });
    }

    if (formData.About) {
      updateAbout({
        title: formData.About["about-title"] || "",
        subtitle: formData.About["about-content"] || "",
      });
    }

    alert("Saved!");
  };

  return (
    <div className="container">

      <ConfigSection
        title="Navbar"
        onChangeSection={handleSectionChange}
        inputs={[
          { id: "brand-name", label: "Brand Name", placeholder: "Enter brand name" },
          { id: "cta-button", label: "CTA Button Text", placeholder: "Enter button text" },
        ]}
      />

      <ConfigSection
        title="Home"
        onChangeSection={handleSectionChange}
        inputs={[
          { id: "about-title", label: "Title", placeholder: "Enter title" },
          { id: "about-content", label: "Content", placeholder: "Enter content", type: "textarea" },
        ]}
      />

      <ConfigSection
        title="About"
        onChangeSection={handleSectionChange}
        inputs={[
          { id: "about-title", label: "Title", placeholder: "Enter title" },
          { id: "about-content", label: "Content", placeholder: "Enter content", type: "textarea" },
        ]}
      />

      <ConfigSection
        title="Footer"
        onChangeSection={handleSectionChange}
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

      <button className="save-button" onClick={handleSave}>
        <i className="bi bi-save"></i> Save All Changes
      </button>
    </div>
  );
}

export default ContentConfigPage;
