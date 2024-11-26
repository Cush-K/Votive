import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { useSnackbar } from 'notistack'

function AdminDash() {
    const [images, setImages] = useState([])
    const { enqueueSnackbar } = useSnackbar()


    useEffect(() => {
        fetch('http://127.0.0.1:5555/api/images')
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error(error))
    }, [])

    const handleDelete = (imageId) => {
        fetch(`http://127.0.0.1:5555/api/images/${imageId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: imageId })
        })
           .then(response => response.json())
           .then(data => {
                setImages(images.filter(i => i.id!== imageId))
                enqueueSnackbar("Image deleted successfully", { variant: 'success' })
            })
           .catch(error => console.error(error))
           enqueueSnackbar('Failed to delete image', { variant: 'error' })
    }

    return (
        <>
            <Navbar />
            <div className="dash-container">
                <h1>Admin Dashboard</h1>
                <div>
                    {
                        images.map(image => (
                            <div key={image.id}>
                                <>
                                <IoTrashOutline onClick={() => handleDelete(image.id)}/>
                                <Link to={image.redirect_link}>
                                    <img src={image.url} alt={image.name} />
                                </Link>
                                </>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AdminDash;