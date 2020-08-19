import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/Button/Button.tsx';
import './index.sass';

function Index() {
  return (
    <main>
      <Helmet>
        <title>Gatsby</title>
      </Helmet>
      <h1>Buttons</h1>
      <h2>Size: X-Small</h2>
      <div className="example">
        <Button type="primary" size="xs">Primary</Button>
        <Button type="secondary" size="xs">Secondary</Button>
        <Button type="caution" size="xs">Caution</Button>
      </div>
      <code class="code">
        &lt;Button type="primary" size="xs"&gt;Primary&lt;/Button&gt;<br />
        &lt;Button type="secondary" size="xs"&gt;Secondary&lt;/Button&gt;<br />
        &lt;Button type="caution" size="xs"&gt;Caution&lt;/Button&gt;
      </code>

      <h2>Size: Small</h2>
      <div className="example">
        <Button type="primary" size="sm">Primary</Button>
        <Button type="secondary" size="sm">Secondary</Button>
        <Button type="caution" size="sm">Caution</Button>
      </div>
      <code class="code">
        &lt;Button type="primary" size="sm"&gt;Primary&lt;/Button&gt;<br />
        &lt;Button type="secondary" size="sm"&gt;Secondary&lt;/Button&gt;<br />
        &lt;Button type="caution" size="sm"&gt;Caution&lt;/Button&gt;
      </code>

      <h2>Size: Medium (Default)</h2>
      <div className="example">
        <Button type="primary" size="md">Primary</Button>
        <Button type="secondary" size="md">Secondary</Button>
        <Button type="caution" size="md">Caution</Button>
      </div>
      <code class="code">
        &lt;Button type="primary" size="md"&gt;Primary&lt;/Button&gt;<br />
        &lt;Button type="secondary" size="md"&gt;Secondary&lt;/Button&gt;<br />
        &lt;Button type="caution" size="md"&gt;Caution&lt;/Button&gt;
      </code>

      <h2>Size: Large</h2>
      <div className="example">
        <Button type="primary" size="lg">Primary</Button>
        <Button type="secondary" size="lg">Secondary</Button>
        <Button type="caution" size="lg">Caution</Button>
      </div>
      <code class="code">
        &lt;Button type="primary" size="lg"&gt;Primary&lt;/Button&gt;<br />
        &lt;Button type="secondary" size="lg"&gt;Secondary&lt;/Button&gt;<br />
        &lt;Button type="caution" size="lg"&gt;Caution&lt;/Button&gt;
      </code>
    </main>
  );
}

export default Index;
