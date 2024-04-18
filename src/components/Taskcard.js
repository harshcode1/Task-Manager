import React from 'react'

const Taskcard = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Task Title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Personal</h6>
                <p className="card-text">Hello There It is the first Text that i have created here</p>
                <hr />
                <p className="card-text">Due Date: January 31, 2024</p>
                <hr />
                <a to="/" className="card-link">Delete</a>
                <a to="/" className="card-link">Edit</a>
                <a to="/" className="card-link">Completed</a>
            </div>
        </div>
    )
}

export default Taskcard
