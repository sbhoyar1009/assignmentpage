import React, { Component } from "react";
import Row from "./Row";

class LeaderBoard extends Component {
  render() {
    return (
     <div className="leaderboard">
        <div className="content">
            <h2>LeaderBoard</h2>
            <p></p>            
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>UserName</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <Row rank={1} username="Gaurav@example.com" score={ 100 } />
                    <Row rank={2} username="Gaurav@example.com" score={ 100 } />
                    <Row rank={3} username="Gaurav@example.com" score={ 100 } />
                    <Row rank={4} username="Gaurav@example.com" score={ 100 } />

                </tbody>
            </table>
       </div>
     </div>
    );
  }
}

export default LeaderBoard;