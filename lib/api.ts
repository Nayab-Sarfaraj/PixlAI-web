const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function joinWaitlist(
  email: string, 
  source: 'hero' | 'cta'
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(`${API_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source })
    })
    const data = await res.json()
    if (!res.ok) return { success: false, error: data.error }
    return { success: true }
  } catch {
    return { 
      success: false, 
      error: 'Connection failed, please try again' 
    }
  }
}
