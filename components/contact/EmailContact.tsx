import { Card, CardHeader } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { Icons } from '../icons';

type Props = {};

const EmailContact = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row gap-7 py-6 justify-center items-center text-center">
          <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
            <span className="sr-only">Twitter</span>
            <Icons.email className="h-9 w-9" />
          </a>
          <p>Nairobi, Kenya</p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default EmailContact;
