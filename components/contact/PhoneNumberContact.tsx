import { Card, CardHeader } from '@/components/ui/card';
import { Icons } from '../icons';

type Props = {};

const PhoneNumberContact = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row cursor-pointer gap-7 py-4 justify-center items-center text-center">
          <a href="tel:+254708234571">
            <span className="sr-only">Phone Number</span>
            <Icons.phonecall className="h-6 w-6" />
          </a>
          <p>
            <a href="tel:+254708234571">+254708 234 571</a>
          </p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default PhoneNumberContact;
