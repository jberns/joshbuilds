import 'twin.macro';

export function ContactForm() {
  return (
    <div tw="flex justify-center w-full text-gray-900 dark:(text-white)">
      <form name="contact" action="/" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label htmlFor="name">Name:</label> <br />
          <input
            tw="bg-gray-800 rounded w-full"
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label> <br />
          <input
            tw="bg-gray-800 rounded w-full"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label> <br />
          <textarea
            tw="bg-gray-800 rounded w-full"
            name="message"
            id="message"
          ></textarea>
        </div>

        <button
          tw="py-1 px-3 rounded bg-purple-600 text-gray-100 dark:(bg-purple-400)"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
