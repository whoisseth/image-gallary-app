/** @format */

"use client";

import React from "react";

import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();
export default function Provider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>
  );
}
