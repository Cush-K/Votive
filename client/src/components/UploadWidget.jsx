import React, { useEffect, useRef, useState } from "react";

function UploadWidget({ onUpload, resetTrigger }) {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const [fileData, setFileData] = useState(null); // State to store uploaded file data

    // Initialize Cloudinary widget
    useEffect(() => {
        if (window.cloudinary) {
            cloudinaryRef.current = window.cloudinary;
            widgetRef.current = cloudinaryRef.current.createUploadWidget(
                {
                    cloudName: "doyklvzgn",
                    uploadPreset: "Votive Images",
                    sources: ["local", "url", "camera", "google_drive"],
                    resourceType: "auto",
                    multiple: false,
                    showPoweredBy: false,
                    cropping: false,
                    maxFiles: 1,
                    clientAllowedFormats: ["image"],
                },
                (error, result) => {
                    if (error) {
                        console.error("Upload Widget Error:", error);
                    } else if (result.event === "success") {
                        const { original_filename, secure_url } = result.info;
                        const uploadedFileData = {
                            name: original_filename,
                            image_url: secure_url,
                        };
                        setFileData(uploadedFileData); // Update state with uploaded file data
                        onUpload(uploadedFileData); // Pass file data to parent component
                    }
                }
            );
        }
    }, [onUpload]);

    // Reset fileData when resetTrigger changes
    useEffect(() => {
        if (resetTrigger) {
            setFileData(null); // Reset fileData to initial state
        }
    }, [resetTrigger]);

    const handleOpenWidget = () => {
        if (widgetRef.current) {
            widgetRef.current.open();
        }
    };

    return (
        <button className="upload-btn" onClick={handleOpenWidget}>
            {fileData ? fileData.name : "Upload Image"} {/* Reset to "Upload Image" when fileData is null */}
        </button>
    );
}

export default UploadWidget;
