const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function getEvents() {
  const res = await fetch(`${API_URL}/api/events`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch events');
  return res.json();
}

export async function getEventInfo(eventId) {
  const res = await fetch(`${API_URL}/api/events/${eventId}/info`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch event info');
  return res.json();
}

export async function getIntroduction(eventId) {
  const res = await fetch(`${API_URL}/api/events/${eventId}/introduction`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch introduction');
  return res.json();
}

export async function getAgenda(eventId) {
  const res = await fetch(`${API_URL}/api/events/${eventId}/agenda`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch agenda');
  return res.json();
}

export async function getSpeakers(eventId) {
  const res = await fetch(`${API_URL}/api/events/${eventId}/speakers`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch speakers');
  return res.json();
}

export async function getEventDetail(eventId) {
  const res = await fetch(`${API_URL}/api/events/${eventId}/detail`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch event detail');
  return res.json();
}

export async function getPreviousEvents(eventId) {
  const res = await fetch(`${API_URL}/api/events/${eventId}/previous-events`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch previous events');
  return res.json();
}

export async function getFAQ(eventId) {
  const res = await fetch(`${API_URL}/api/events/${eventId}/faq`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch FAQ');
  return res.json();
}
