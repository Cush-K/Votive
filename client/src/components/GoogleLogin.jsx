import React from "react";

const GoogleLoginButton = () => {
    const handleLogin = () => {
        window.location.href = "http://127.0.0.1:5555/api/auth/google/login";
    };

    return (
        <button onClick={handleLogin}>
            Login with Google
        </button>
    );
};

export default GoogleLoginButton;
