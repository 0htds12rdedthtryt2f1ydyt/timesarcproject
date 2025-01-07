import API_URL from '../utils/url';

const getData = async (route, params) => {
  try {
    const URL_ROUTE = `${API_URL}${route}`;
    const queryParams = new URLSearchParams(params).toString();
    const response = await fetch(`${URL_ROUTE}?${queryParams}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const postData = async (route, data) => {
  try {
    const URL_ROUTE = `${API_URL}${route}`;
    const response = await fetch(URL_ROUTE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export { getData, postData };
