export async function fetchSpaceContent(space) {
  try {
    const url = `http://localhost:3001/space-content/simple/${space}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}