import React from 'react';
import './ScannerPage.css';

const ScannerPage = () => {
  return (
    <div className="scanner-page-container">
      <h1 className="scanner-title stunning-title">DermaScan</h1>
      <p className="scanner-description">Upload images of your skin to check for potential signs of skin cancer.</p>

      <div className="upload-section">
        <input type="file" id="skin-image-upload" accept="image/*" className="image-upload-input" />
        <label htmlFor="skin-image-upload" className="upload-button cta-button">
          Upload Image
        </label>
        {/* You'll likely need state and handlers to manage the uploaded image */}
      </div>

      <div className="image-preview">
        {/* Image preview will go here */}
      </div>

      <button className="analyze-button cta-button">Analyze Image</button>

      <div className="results-section">
        {/* Results will be displayed here */}
      </div>
    </div>
  );
};

export default ScannerPage;     
