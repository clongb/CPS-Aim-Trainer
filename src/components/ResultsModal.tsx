import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Result } from '../interfaces/result';
import { Score } from '../interfaces/score';

export function ResultsModal({result, visible, setVisible, addScore}: {result: Result, visible: boolean, setVisible: (b: boolean) => void, addScore: (s: Score) => void}): JSX.Element {
    const [id, setId] = useState("UserGuy18");
    let cps: number = 0;
    if(visible){
        cps = result.clicks/result.time;
    }
    function saveId() {
        addScore({
            id: id,
            value: cps
        });
        setVisible(false);
    }

    const hide = () => setVisible(false);
    return (
        <Modal show={visible} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>Nice Clicking!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="addCardForm.idTextArea">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        value={id}
                        onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setId(ev.target.value)}/>
                </Form.Group>
            </Form>
            <p>Your CPS: {cps}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={hide}>Close</Button>
                <Button variant="primary" onClick={saveId}>Save changes</Button>
            </Modal.Footer>
        </Modal>)
}