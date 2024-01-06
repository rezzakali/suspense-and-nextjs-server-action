'use client';

import { addPost } from '@/actions/serverActions';
import { useTransition } from 'react';

const AddTodoClient = () => {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();

  formData.append('title', 'title 1');
  formData.append('body', 'body 1');
  formData.append('userId', '1');

  return (
    <button
      className="px-2 border rounded my-4"
      onClick={() => startTransition(() => addPost(formData))}
    >
      {isPending ? 'Pending...' : 'Add Todo'}
    </button>
  );
};

export default AddTodoClient;
