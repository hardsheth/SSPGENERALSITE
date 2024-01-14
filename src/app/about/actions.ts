import { cookies } from "next/headers";

async function create() {
    cookies().set('token', 'value', { maxAge: 60 });
    // cookies().set('token', 'lee')
    // or
    // cookies().set('name', 'lee', { secure: true })
    // or
    // cookies().set({
    //   name: 'name',
    //   value: 'lee',
    //   httpOnly: true,
    //   path: '/',
    // })
  }