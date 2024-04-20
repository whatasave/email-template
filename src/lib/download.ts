export function downloadURI(uri: string, name: string) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function downloadURIToText(uri: string) {
  return await fetch(uri).then((res) => res.text());
}