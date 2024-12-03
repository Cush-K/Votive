import React from "react";

const GoogleLoginButton = () => {
    const handleLogin = () => {
        window.location.href = "/api/auth/google/login";
    };

    return (
        <button onClick={handleLogin}>
            Login with Google
        </button>
    );
};

export default GoogleLoginButton;
