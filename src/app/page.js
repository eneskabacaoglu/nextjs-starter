'use client';

import { AuthGuard } from "@/components/AuthGuard";
import { Button } from "@/components/ui/button";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Layers, Grid2x2Plus, User, Bolt, Power } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import React from "react";
import { supabase } from "@/lib/supabase";

export default function HomePage() {
  async function handleLogout() {
    await supabase.auth.signOut();
    // AuthGuard will handle redirect
  }

  const tabAlerts = [
    "Your blends",
    "Blocks to add",
    "profile page",
    "settings page"
  ];

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState("");

  const tabIndexToAlertIndex = (index) => {
    return [0, 1, null, 2, 3, null, 4][index] ?? null;
  };

  return (
    <AuthGuard>
      <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', position: 'relative' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
          Welcome to <b>Blend</b>
        </h1>
        <Button onClick={handleLogout} style={{ marginTop: '2rem', fontSize: '1rem', cursor: 'pointer' }}>
          Logout
        </Button>
        <div style={{ position: 'fixed', bottom: 80, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
          <ExpandableTabs
            tabs={[
              { title: 'Blends', icon: Layers },
              { title: 'Blocks', icon: Grid2x2Plus },
              { type: 'separator' },
              { title: 'Profile', icon: User },
              { title: 'Settings', icon: Bolt },
              { type: 'separator' },
              { title: 'Logout', icon: Power}
            ]}
            onChange={(index) => {
              if (index === 6) {
                handleLogout();
                return;
              }
              
              // Handle other tab clicks
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
    </AuthGuard>
  );
}
