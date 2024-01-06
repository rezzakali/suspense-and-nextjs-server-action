import Users from '@/components/Users';
import UserSkeleton from '@/ui/UserSkeleton';
import { Suspense } from 'react';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const page = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=1'
  );
  const posts: Post[] = await res.json();

  return (
    <div>
      <ul className="space-y-2">
        {posts?.map((post, index) => (
          <li key={index} className="border p-2 rounded">
            <h6 className="font-semibold capitalize">{post.title}</h6>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <br />
      <Suspense fallback={<UserSkeleton count={2} />}>
        <Users />
      </Suspense>
    </div>
  );
};

export default page;
