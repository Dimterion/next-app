export async function fetchData<T>(url: string): Promise<T[]> {
  if (!url) {
    throw new Error("Missing fetch URL.");
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data: T[] = await response.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function fetchText(url: string): Promise<string> {
  if (!url) {
    throw new Error("Missing fetch URL.");
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const text = await response.text();
    return text;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
