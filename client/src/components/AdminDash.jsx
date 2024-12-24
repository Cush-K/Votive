import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { useSnackbar } from "notistack";
import UploadWidget from "./UploadWidget";

useEffect(()=>{
    document.title = 'Admin Dashboard'
}, [])

function AdminDash() {
    const [images, setImages] = useState([]);
    const [redirectLink, setRedirectLink] = useState(""); // To store the inputted redirect link
    const [uploadedImage, setUploadedImage] = useState(null); // To store the uploaded image details
    const { enqueueSnackbar } = useSnackbar();
    const [resetTrigger, setResetTrigger] = useState(false);

    useEffect(() => {
        fetch("/api/images")
            .then((response) => response.json())
            .then((data) => {
                setImages(data);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleDelete = (imageId) => {
        fetch(`/api/images/${imageId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    setImages(images.filter((i) => i.id !== imageId));
                    enqueueSnackbar("Image deleted successfully", { variant: "success" });
                } else {
                    enqueueSnackbar("Failed to delete image", { variant: "error" });
                }
            })
            .catch((error) => {
                console.error(error);
                enqueueSnackbar("An error occurred while deleting the image", { variant: "error" });
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!uploadedImage || !redirectLink) {
            enqueueSnackbar("Please upload an image and provide a redirect link", { variant: "warning" });
            return;
        }

        const imageDetails = {
            name: uploadedImage.name,
            image_url: uploadedImage.image_url,
            redirect_link: redirectLink,
        };

        fetch("/api/images", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(imageDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setImages((prevImages) => [...prevImages, data]);
                    enqueueSnackbar("Image uploaded and saved successfully!", { variant: "success" });
                    setUploadedImage(null); // Clear uploaded image
                    setRedirectLink(""); // Clear redirect link input
                    setResetTrigger(prev => !prev); // Trigger a re-render to update the image list
                } else {
                    enqueueSnackbar("Failed to save image data", { variant: "error" });
                }
            })
            .catch((error) => {
                console.error(error);
                enqueueSnackbar("An error occurred while uploading the image", { variant: "error" });
            });
    };

    return (
        <>
            <Navbar />
            <div className="dash-container">
                <div className="dash-header">
                    <h1>Admin Dashboard</h1>
                    <div className="dash-uploads">
                        <UploadWidget resetTrigger={resetTrigger} onUpload={(imageData) => setUploadedImage(imageData)} />
                        {/* Input for redirect link */}
                        <input
                            type="text"
                            placeholder="Enter redirect link"
                            value={redirectLink}
                            onChange={(e) => setRedirectLink(e.target.value)}
                        />
                        <button onClick={handleSubmit} className="submit-btn">
                            Submit
                        </button>
                    </div>
                </div>
                <div className="card-container">
                    {images.map((image) => (
                        <div className="card" key={image.id}>
                            <IoTrashOutline
                                className="delete-icon"
                                onClick={() => handleDelete(image.id)}
                            />
                            <Link to={image.redirect_link}>
                                <img
                                    className="card-image"
                                    src={image.image_url}
                                    alt={image.name}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AdminDash;
