import Card from '../../base/components/Card';

interface PhotoProps {
  title: string,
  thumbnailUrl: string
}

export default function Photo({ title, thumbnailUrl }: PhotoProps) {
  return (
    <Card width='200px'>
      <img src={thumbnailUrl} alt={title} />
      <span>{title}</span>
    </Card>
  );
}