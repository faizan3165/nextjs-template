import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Proxy (formerly Middleware) allows you to run code before a request is completed.
 * Then, based on the incoming request, you can modify the response by rewriting,
 * redirecting, modifying the request or response headers, or responding directly.
 *
 * Note: Next.js 16 deprecated "middleware" in favor of "proxy" to better reflect its role.
 */
export default function proxy(request: NextRequest) {
  // Create a response object that passes the request through
  const response = NextResponse.next()

  // Example: Add a custom header to the response
  // This is useful for debugging or passing context to the client
  response.headers.set("x-custom-header", "hello-world")

  return response
}

/**
 * Configure which paths the proxy should run on.
 * By default, we match everything except static files and API routes to avoid unnecessary overhead.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
