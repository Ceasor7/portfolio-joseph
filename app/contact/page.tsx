import EmailContact from '@/components/contact/EmailContact';
import LottieAnimation from '@/components/contact/LottieAnimation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reach Out',
  description: 'Want to Collab or Work with me? Reach out',
};

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="container mx-auto max-w-4xl flex flex-col ">
      <div className="flex flex-col py-10 sm:flex-row sm:justify-between">
        <div className=" sm:w-1/2">
          <LottieAnimation />
        </div>
        <div className="sm:w-1/2 flex flex-col gap-2">
          <EmailContact />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
