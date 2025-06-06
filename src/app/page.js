'use client';

import { Button } from "@/components/ui/button";

export default function Home() {
  function handleClick() {
    alert('welcome');
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
        Welcome to <b>Blend</b>
      </h1>
      <Button onClick={handleClick} style={{ marginTop: '2rem', fontSize: '1rem', cursor: 'pointer' }}>
        Hello
      </Button>
    </main>
  );
}
