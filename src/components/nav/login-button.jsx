import React from 'react'

export default function LoginButton(props) {
    const { user, setUser } = props;

    return (
        <button
            onClick={() => {
                if (user) {
                    setUser(null)
                } else {
                    setUser({ name: "Ghanendra", email: "ghanendrarana@gmail.com" })
                }
            }}
        >
            {user ? "Logout" : "Login"}
            {/* ternary operator ?: */}
        </button>
    )
}
