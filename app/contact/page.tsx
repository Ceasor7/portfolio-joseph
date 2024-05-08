import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reach Out',
  description: 'Want to Collab or Work with me? Reach out',
};

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="container mx-auto max-w-4xl flex flex-col ">
      <h1 className=" font-bold text-2xl py-5">Reach out</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className=" w-1/2">
          <h1>Hello world</h1>
        </div>
        <div className="w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
