import axios from 'axios';

export const getReels = async () => {
  try {
    const res: any = await axios.get(
      'https://pixabay.com/api/videos/?key=32415825-5fa62ce69fc37f8d4760ede43',
    );
    let response: any = {};
    response.status = res.status;
    response.data = res.data;
    switch (response.status) {
      case 401:
        response.error_message = 'not authorized.';
        response.data = null;
      case 201:
      case 200:
      case 204:
        break;
      default:
        response.error_message = res?.message;
        response.data = null;
        break;
    }
    return response;
  } catch (error) {
    return error;
  }
};
