import React, { useState } from 'react';
import { overgeneralization } from '../api/distortionAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Main = () => {
  const distortionList = ["overgeneralization", "perfectionism", "fortune telling"];
  const statement = (distortion: string, isTrue: boolean): string => isTrue ? `You may have the cognitive distortion ${distortion}.` : "";

  const [log, setLog] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    setResult(statement(distortionList[0], overgeneralization(log)));
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setLog(event.target.value);

  return (
    <>
      <Header />
      <div className="py-2">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="px-3" >
            <Form.Label className="fw-bold fs-3">How was your day?</Form.Label>
            <Form.Control className="my-2 shadow-none" as="textarea" rows={15} autoFocus={true} value={log} onChange={handleChange} />
            <Button className="shadow-none my-3" variant="warning" type="submit">Submit</Button>
          </Form.Group>
        </Form>
        <div className="py-3">
          {result}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Main;
