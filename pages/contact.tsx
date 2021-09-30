import { NextPage } from 'next';
import 'twin.macro';
import tw from 'twin.macro';
import { ContactForm } from '../components/ContactForm';

const ContactContainer = tw.div`w-full max-w-sm p-10 rounded-lg bg-white shadow-md dark:(bg-gray-700)`;
const ContactHeadingBase = tw.h2`text-lg font-medium text-gray-900 dark:(text-gray-200)`;
const ContactHeadingOptions = tw(ContactHeadingBase)`mb-2`;
const ContactHeadingDivider = tw(
  ContactHeadingBase,
)`text-2xl my-10 text-center text-gray-500`;

const ContactEmail = tw.p`
  py-2 font-bold rounded shadow bg-purple-600 text-white text-center
  dark:(bg-purple-400 text-gray-100) 
  `;

const Contact: NextPage = () => {
  return (
    <div tw="w-full">
      <div tw="flex flex-col justify-center items-center py-20 bg-gray-100 dark:(bg-gray-800)">
        <ContactContainer>
          <ContactHeadingOptions>Email me directly:</ContactHeadingOptions>
          <ContactEmail>josh@joshbuilds.io</ContactEmail>
          <ContactHeadingDivider> - OR - </ContactHeadingDivider>
          <ContactHeadingOptions>Use the contact form:</ContactHeadingOptions>
          <ContactForm />
        </ContactContainer>
      </div>
    </div>
  );
};

export default Contact;
