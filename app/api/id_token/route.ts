import { auth } from '@/auth';

export async function GET() {
  const session = auth();

  // const url = 'https://api.jquants.com/v1/token/auth_user';
  // const data = {
  //   mailaddress: process.env.MAIL_ADDRESS,
  //   password: process.env.PASSWORD,
  // };
  // const res = await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
  // const token = await res.json();
  const token = null;
  return Response.json({ token });
}
