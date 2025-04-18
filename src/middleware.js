import { NextResponse } from "next/server";

const middleware = (request) => {
    const token = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token');
    if (!token) {
        const loginURL = new URL('/auth/login', request.url);
        return NextResponse.redirect(loginURL);
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!auth/login|api/auth|_next/|favicon.ico|assets/).*)'],
};

export default middleware;