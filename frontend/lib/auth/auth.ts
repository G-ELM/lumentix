export async function clearTokens(): Promise<void> {
  await fetch("/api/auth/logout", { method: "POST" });
}

export function getAccessToken(): string | null {
  return null;
}

export function getRefreshToken(): string | null {
  return null;
}
