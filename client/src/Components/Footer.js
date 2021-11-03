import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "10vh",
        width: "100%",
    }
    return (
        <div className="bg-dark text-light" style={footerStyle}>
            <footer className="text-center py-4">
            Copyright &copy; MyTodosList.com
            </footer>
        </div>
    )
}
