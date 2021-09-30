import 'twin.macro';
import tw from 'twin.macro';

const Input = tw.input`text-gray-100`;
const Label = tw.label`block text-gray-500 text-sm font-medium mb-1 dark:(text-gray-400)`;
const baseFormStyle = tw`
  w-full border-2 text-gray-700 bg-gray-200 border-gray-200 mb-4 appearance-none rounded leading-tight
  dark:(text-white bg-gray-600 border-gray-700) 
  focus:(bg-white outline-none border-purple-500 ring-0)
  dark:focus:(bg-gray-700 outline-none border-purple-500 ring-0)
  `;

export function ContactForm() {
  return (
    <div tw="flex justify-center">
      <form
        tw="w-full"
        name="contact"
        action="/"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <Label htmlFor="name">Name:</Label>
          <Input css={[baseFormStyle]} type="text" name="name" id="name" />
        </div>

        <div>
          <Label htmlFor="email">Email:</Label>
          <Input css={[baseFormStyle]} type="email" name="email" id="email" />
        </div>

        <div>
          <Label htmlFor="message">Message:</Label>
          <textarea
            css={[baseFormStyle]}
            name="message"
            id="message"
          ></textarea>
        </div>

        <button
          tw="py-2 px-4 font-bold rounded
          bg-purple-600 text-white
          hover:(bg-purple-500)
          dark:(bg-purple-400) 
          dark:hover:(bg-purple-500)
          focus:(outline-none ring-2 ring-offset-2 ring-purple-600 ring-offset-gray-200)
          dark:focus:( ring-purple-400 ring-offset-gray-700)"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
