import { addPost } from '@/actions/serverActions';
import AddTodoClient from '@/components/AddTodoClient';
import Button from '@/components/Button';
import Todos from '@/components/Todos';

const page = () => {
  return (
    <div>
      <h1 className="text-2xl mb-3">Nextjs Server Action</h1>

      <form
        action={addPost}
        className="flex items-center flex-col space-y-2 border p-3 mx-auto w-1/3 my-3"
      >
        <input
          type="text"
          placeholder="title"
          className="border px-2 w-full"
          name="title"
        />
        <input
          type="text"
          placeholder="body"
          className="border px-2 w-full"
          name="body"
        />
        <input
          type="number"
          placeholder="userId"
          className="border px-2 w-full"
          name="userId"
        />

        <Button />
      </form>
      <hr />
      <AddTodoClient />
      <Todos />
    </div>
  );
};

export default page;
