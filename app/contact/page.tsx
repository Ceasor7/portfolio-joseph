import ContactAnimation from '@/components/ContactAnimation';
import ContactForm from '@/components/ContactForm';
import ContactMeCard from '@/components/ContactMeCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reach Out',
  description: 'Want to Collab or Work with me? Reach out',
};

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="container max-w-4xl h-auto md:h-[75vh] flex flex-col md:flex-row items-center justify-center">
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full">
        <ContactAnimation />
        <ContactMeCard />
      </div>
      <div className="w-full  md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;
