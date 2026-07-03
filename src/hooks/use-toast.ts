import { useState, useCallback } from "react";

type ToastVariant = "default" | "destructive";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
}

let toastListeners: ((toasts: Toast[]) => void)[] = [];
let toasts: Toast[] = [];

function notify() {
  toastListeners.forEach((l) => l([...toasts]));
}

export function toast({
  title,
  description,
  variant = "default",
}: Omit<Toast, "id">) {
  const id = Math.random().toString(36).slice(2);
  toasts = [...toasts, { id, title, description, variant }];
  notify();
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    notify();
  }, 4000);
}

export function useToast() {
  const [list, setList] = useState<Toast[]>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const subscribe = useCallback(() => {
    toastListeners.push(setList);
    return () => {
      toastListeners = toastListeners.filter((l) => l !== setList);
    };
  }, []);
  return { toast, toasts: list, subscribe };
}
