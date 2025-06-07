'use client';

import { Button } from "@/components/ui/button";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Layers, Grid2x2Plus, User, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import React from "react";


export default function HomePage() {
  function handleClick() {
    alert('welcome');
  }

  const tabAlerts = [
    "Your blends",
    "Blocks to add",
    "profile page",
    "settings page"
  ];

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState("");

  const tabIndexToAlertIndex = (index) => [0, 1, null, 2, 3][index] ?? null;

  return (
    <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', position: 'relative' }}>

      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
        Welcome to <b>Blend</b>
      </h1>
      <Button onClick={handleClick} style={{ marginTop: '2rem', fontSize: '1rem', cursor: 'pointer' }}>
        Hello
      </Button>
      <div style={{ position: 'fixed', bottom: 80, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
        <ExpandableTabs
          tabs={[
            { title: 'Blends', icon: Layers },
            { title: 'Blocks', icon: Grid2x2Plus },
            { type: 'separator' },
            { title: 'Profile', icon: User },
            { title: 'Settings', icon: Settings }
          ]}
          onChange={(index) => {
            const alertIndex = tabIndexToAlertIndex(index);
            if (alertIndex !== null && tabAlerts[alertIndex]) {
              setDialogMessage(tabAlerts[alertIndex]);
              setDialogOpen(true);
            }
          }}
          dialogOpen={dialogOpen}
        />
      </div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Info</DialogTitle>
            <DialogDescription>{dialogMessage}</DialogDescription>
          </DialogHeader>
          <DialogClose asChild>
            <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded">Close</button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </main>
  );
}
