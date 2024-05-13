import { Card, CardHeader } from '@/components/ui/card';
import { Icons } from '../icons';

type Props = {};

const EmailContact = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row cursor-pointer gap-7 py-4 justify-center items-center text-center">
          <a href="mailto:josephkgateru7@gmail.com">
            <span className="sr-only">Email</span>
            <Icons.email className="h-9 w-9" />
          </a>
          <p>
            <a href="mailto:josephkgateru7@gmail.com">
              josephkgateru7@gmail.com
            </a>
          </p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default EmailContact;
