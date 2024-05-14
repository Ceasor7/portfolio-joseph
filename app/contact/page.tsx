import EmailContact from '@/components/contact/EmailContact';
import LocationContact from '@/components/contact/LocationContact';
import LottieAnimation from '@/components/contact/LottieAnimation';
import PhoneNumberContact from '@/components/contact/PhoneNumberContact';
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
        <div className=" sm:w-1/2">
          <LottieAnimation />
        </div>
        <div className="sm:w-1/2 flex flex-col gap-2">
          <LocationContact />
          <PhoneNumberContact />
          <EmailContact />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
