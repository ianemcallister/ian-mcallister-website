// ClientSideComponent.tsx
"use client";

import { useEffect } from 'react';

const ClientSideComponent = () => {
  useEffect(() => {
    // Any DOM manipulations or client-side logic here
    console.log("Client-side logic executed");
  }, []);

  return null; // This component can return anything needed
};

export default ClientSideComponent;
