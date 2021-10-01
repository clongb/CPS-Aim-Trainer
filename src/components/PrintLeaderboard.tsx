import { Row, Table } from 'react-bootstrap';
import { Score } from '../interfaces/score';
import React, { useEffect } from 'react';

export function PrintLeaderboard({sortedLb, hasResults}: {sortedLb: Score[], hasResults: boolean}): JSX.Element {
    for(let i = 0; i < sortedLb.length-1; i++){
        let temp: Score;
        let maxIndex = i;
        for (let j = i + 1; j < sortedLb.length; j++) {
            if (sortedLb[j].value > sortedLb[maxIndex].value){
                maxIndex = j;
                temp = sortedLb[maxIndex];
                sortedLb[maxIndex] = sortedLb[i];
                sortedLb[i] = temp;
            }
        }
    }
    

    return <Row>
        <Table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">CPS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    {sortedLb[0] != null && <td>{sortedLb[0].id}</td>}
                    {sortedLb[0] != null && <td>{sortedLb[0].value}</td>}
                </tr>
                <tr>
                    <th scope="row">2</th>
                    {sortedLb[1] != null && <td>{sortedLb[1].id}</td>}
                    {sortedLb[1] != null && <td>{sortedLb[1].value}</td>}
                </tr>
                <tr>
                    <th scope="row">3</th>
                    {sortedLb[2] != null && <td>{sortedLb[2].id}</td>}
                    {sortedLb[2] != null && <td>{sortedLb[2].value}</td>}
                </tr>
                <tr>
                    <th scope="row">4</th>
                    {sortedLb[3] != null && <td>{sortedLb[3].id}</td>}
                    {sortedLb[3] != null && <td>{sortedLb[3].value}</td>}
                </tr>
                <tr>
                    <th scope="row">5</th>
                    {sortedLb[4] != null && <td>{sortedLb[4].id}</td>}
                    {sortedLb[4] != null && <td>{sortedLb[4].value}</td>}
                </tr>
            </tbody>
        </Table>
    </Row>
}