export function pravatarUrl(id: number, size = 400) {
  return `https://i.pravatar.cc/${size}?img=${id}`;
}

export function picsumUrl(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
