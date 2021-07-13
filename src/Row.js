import React from 'react'

function Row(props) {
    const { rank, username, score } = props;
    return (
        <tr>
            <td>{rank}</td>
            <td>{username}</td>
            <td>{score}</td>
        </tr>
    )
}

export default Row
