import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    //   return NextResponse.redirect(new URL('/home', request.url))
    const path = request.nextUrl.pathname;
    let token
    if (typeof localStorage !== 'undefined') {
        // token= request.cookies.get('token')
        token = localStorage.getItem('token');
        console.log(localStorage,"localstorage");
        
    }
    else {
        token = '';
    }
    const ispublicPath = path === "/cotactus"
    console.log(ispublicPath, "ispublicPath", token);

    if (token && !ispublicPath) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
}


export const config = {
    matcher: [
        "/",
        "/about",
        "/contactus"
    ]
}