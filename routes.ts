/**
 * An array of routes that are accesssible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    '/auth/login',
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
]

/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api"


/** The default redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/refeicoes"