// hooks/useAuth.ts
export function useAuth() {

  const isLoggedIn = false
  const role: 'USER' | 'ADMIN' | null = null

  return {
    isLoggedIn,
    role,
  }
}
