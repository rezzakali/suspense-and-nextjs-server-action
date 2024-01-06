'use server';

import { revalidateTag } from 'next/cache';

export const addPost = async (formData: FormData) => {
  // console.log(Object.fromEntries(formData));
  const { title, body, userId } = Object.fromEntries(formData);

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result = await res.json();
  revalidateTag('posts');
  console.log(result);
};
