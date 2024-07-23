import { signIn } from '@/auth';

export async function GET() {
  const res = await signIn('credentials', {
    mailaddress: process.env.MAIL_ADDRESS,
    password: process.env.PASSWORD,
  });
  return Response.json({ res });
}
