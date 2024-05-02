import { Card, CardContent } from '@/components/ui/card';

type Props = {
  id: number;
  name: string;
};

const SkillsCard = ({ name }: Props) => {
  return (
    <Card>
      <CardContent>
        <p className=" font-bold flex text-center items-center justify-center">
          {name}
        </p>
      </CardContent>
    </Card>
  );
};

export default SkillsCard;
