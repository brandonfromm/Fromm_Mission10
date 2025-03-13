import { useEffect, useState } from 'react';
import { bowler } from './types/bowler';


function Bowlers () {

    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowlers = async () => {
            const response = await fetch('https://localhost:5010/api/Bowling');
            const data = await response.json();
            setBowlers(data);
        }
        fetchBowlers();
    }, []);

    return (
        <>
            <h1>Bowlers in the League</h1>
            <table>
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {bowlers.map((bowler: bowler) => (
                        <tr key={bowler.bowlerId}>
                            <td>{bowler.bowlerFirstName} {bowler.bowlerMiddleInit} {bowler.bowlerLastName}</td>
                            <td>{bowler.team.teamName}</td>
                            <td>{bowler.bowlerAddress}</td>
                            <td>{bowler.bowlerCity}</td>
                            <td>{bowler.bowlerState}</td>
                            <td>{bowler.bowlerZip}</td>
                            <td>{bowler.bowlerPhoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Bowlers;

