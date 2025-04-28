import React from 'react';
import ResumeModal from './ResumeModal'


function ImageSection() {
    return (
        <div className="ImageSection">

            <div className="about-info">
                <h4>I am<span> Ian Jordan</span></h4>
                <p className="about-text">
                    I’m a full stack web developer living in Jacksonville, Florida, United States. I code for a living and I live to code.

                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Schooling</p>
                        <p>Experience</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>City</p>
                        <p>State</p>
                    </div>
                    <div className="right-section">
                        <p>: Ian Jordan</p>
                        <p>: FullStack Academy</p>
                        <p>: 4 Years</p>
                        <p>: American</p>
                        <p>: English</p>
                        <p>: Jacksonville</p>
                        <p>: Florida</p>
                    </div>
                </div >
                <div style={{ width: '100%', marginTop: '25px', display: 'flex', justifyContent: 'center' }}>
                    <ResumeModal className="btn" />
                </div>
            </div>
        </div>
    )
}

export default ImageSection
