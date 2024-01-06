'use client';

import { useFormStatus } from 'react-dom';

export default function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="border px-2 w-full bg-teal-500 text-white hover:bg-teal-600 rounded"
    >
      Submit
    </button>
  );
}
