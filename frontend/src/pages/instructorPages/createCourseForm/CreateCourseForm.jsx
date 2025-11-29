import { useState } from "react";
import "./MessagePage.css";

function CreateCourseForm() {
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const [congratsMsg, setCongratsMsg] = useState("");

  const handleSave = () => {
    if (!welcomeMsg.trim() || !congratsMsg.trim()) {
      alert("Please fill in both messages before saving");
    } else {
      alert("Messages saved successfully");
    }
  };

  return (
    <div className="container message-section">
      <h3 className="message-title">Message</h3>

      <div className="row">
        {/* Welcome Message */}
        <div className="col-md-6 mb-3">
          <h6>Welcome Message</h6>
          <textarea
            className="form-control message-box"
            rows={20}
            placeholder="Enter course starting message here..."
            value={welcomeMsg}
            onChange={(e) => setWelcomeMsg(e.target.value)}
          ></textarea>
        </div>

        {/* Congratulations Message */}
        <div className="col-md-6 mb-3">
          <h6>Congratulations Message</h6>
          <textarea
            className="form-control message-box"
            rows={20}
            placeholder="Enter your course completed message here..."
            value={congratsMsg}
            onChange={(e) => setCongratsMsg(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="text-end mt-3">
        <button onClick={handleSave} className="btn custom-primary px-4">
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateCourseForm;