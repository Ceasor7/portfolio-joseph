import { Card, CardContent, CardFooter } from '@/components/ui/card';

type Props = {};

const ContactMeCard = (props: Props) => {
  return (
    <div>
      <Card>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactMeCard;
