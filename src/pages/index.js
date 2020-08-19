import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/Button/Button.tsx';
import './index.sass';

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
      <h1>Buttons</h1>
      <h2>Size: X-Small</h2>
      <div class="example">
        <Button size="xs">Button :: Primary</Button>
        <Button type="secondary" size="xs">Button :: Secondary</Button>
      </div>

      <h2>Size: Small</h2>
      <div class="example">
        <Button size="sm">Button :: Primary</Button>
        <Button type="secondary" size="sm">Button :: Secondary</Button>
      </div>

      <h2>Size: Medium</h2>
      <div class="example">
        <Button>Button :: Primary</Button>
        <Button type="secondary">Button :: Secondary</Button>
      </div>

      <h2>Size: Large</h2>
      <div class="example">
        <Button size="lg">Button :: Primary</Button>
        <Button size="lg" type="secondary">Button :: Secondary</Button>
      </div>

      <br />

      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
