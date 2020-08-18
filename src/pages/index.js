import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/Button/Button.tsx';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Gatsby</title>
      </Helmet>
      <h1>Components</h1>
      <div>
        <Button>Button Default</Button>
      </div>

      <br />
      
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
