import { Button } from '@radix-ui/themes';
import Link from 'next/link';

export function BackBtn() {
  return (
    <Button variant="surface" mt={'4'} size={'2'} asChild>
      <Link href="/">Back</Link>
    </Button>
  );
}
