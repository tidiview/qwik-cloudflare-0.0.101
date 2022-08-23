import { component$, $ } from '@builder.io/qwik';
import { RequestHandler } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';

export const onPost: RequestHandler = async ({ request, response }) => {
  response.headers.set('Content-Type', 'text/plain');
  return `HTTP Method: ${request.method}`;
};

interface response {
	name: string;
}

export default component$(() => {
  const qrlSubmit = $(async () => {
    const response = await fetch('/register', {
      method: 'POST',
      body: '{prout: prout}',
      headers: { Accept: 'application/json' },
    });
    console.log(response, 'QRL prout 🥤')
  })
  return (
    <div>
      <h1>Qwik City Test API!</h1>
      <form
      id="form"
        method="POST"
        action="/register"
        preventdefault:submit
        onSubmit$={qrlSubmit}
      >
        <label htmlFor="name">Full Name: </label>
        <input id="name" name="name" type="text" value="François" />
        <button type="submit" class="border border-blue-500 px-3">
          Submit
        </button>
      </form>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Register Form',
};
