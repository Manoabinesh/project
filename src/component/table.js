import React from 'react';

export const Table = (props) => {
    return (
        <div>
            <h1>Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ? (
                        props.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.Name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button className="button muted-button">Edit</button>
                                    <button
                                        onClick={() => props.deleteUser(user.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>No user Data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

