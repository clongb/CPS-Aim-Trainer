import { Col } from 'react-bootstrap';
import { Result } from '../interfaces/result';

export function ShowCPS({result, cpsRevealed}: {result: Result, cpsRevealed: boolean}): JSX.Element {
    function calcCPS(result: Result) {
        let cps: number;
        cps = result.clicks/result.time;
        return cps;
    }
    return <Col>
        <p></p>
        {cpsRevealed && <p>You got a CPS of {calcCPS(result)}</p>}
        {cpsRevealed && <p>Press start again to retry!</p>}
    </Col>
}