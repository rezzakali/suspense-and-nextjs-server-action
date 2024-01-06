interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Todos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-cache',
    next: {
      tags: ['posts'],
    },
  });
  const posts: Post[] = await res.json();

  return (
    <div className="max-h-52 overflow-y-scroll">
      <ul className="space-y-1">
        {posts.map((post, index) => {
          return (
            <li key={index} className="border px-1">
              {post.id} {post.title}{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
