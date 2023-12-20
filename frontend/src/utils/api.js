export async function fetchSpaceContent(space) {
  try {
    const url = `http://localhost:3001/space-content/simple/${space}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return {status: 500, message: 'Parece ser um erro interno do servidor. Tente recarregar a página.'};
  }
}

export async function fetchOffer(offerId) {
  try {
    const url = `http://localhost:3001/offers/${offerId}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}