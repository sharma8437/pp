import { X, Upload } from "lucide-react";
import "../../styels/newCandidateform.css";

export default function RegisterForm() {
  return (
    <div className="overlay">
      <div className="form-container">
        {/* Header */}
        <div className="form-header">
          <h2 className="form-heading">Add New Candidate</h2>
          <X className="close-icon" />
        </div>

        {/* Form */}
        <div className="form-body">
          <div className="form-grid">
            <div>
              <input
                type="text"
                placeholder="Full Name*"
                className="input-field"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address*"
                className="input-field"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number*"
                className="input-field"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Position*"
                className="input-field"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Experience*"
                className="input-field"
              />
            </div>

            <div className="file-upload">
              <input
                type="text"
                placeholder="Resume*"
                className="input-field"
              />
              <Upload className="upload-icon" />
            </div>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="checkbox" />
            <span className="checkbox-text">
              I hereby declare that the above information is true to the best of
              my knowledge and belief
            </span>
          </div>

          <div className="submit-container">
            <button type="submit" className="submit-btn">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
