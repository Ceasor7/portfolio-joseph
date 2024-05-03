import { Card, CardContent } from '@/components/ui/card';
import { PhoneCall } from 'lucide-react';

type Props = {};

const ContactMeCard = (props: Props) => {
  return (
    <div>
      <Card>
        <CardContent>
          <p className="flex flex-row text-center gap-x-7 pt-5 items-center justify-center">
            <PhoneCall />
            <span> +254 708 234 571</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactMeCard;
