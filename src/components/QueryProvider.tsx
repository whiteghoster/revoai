"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
<<<<<<< HEAD

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: { queries: { staleTime: 60 * 1000, retry: 1 } },
=======
import { defaultQueryFn } from "@/lib/queryClient";

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: { queries: { staleTime: 60 * 1000, retry: 1, queryFn: defaultQueryFn } },
>>>>>>> 5d840ee (update ui)
  }));
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
