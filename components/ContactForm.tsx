import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <h2 className="font-bold pb-4">Let`s Connect!</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
