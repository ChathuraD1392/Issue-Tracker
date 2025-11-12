// app/components/ClientLinkWrapper.tsx
"use client";

import React from "react";

export default function ClientLinkWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <a>{children}</a>;
}
