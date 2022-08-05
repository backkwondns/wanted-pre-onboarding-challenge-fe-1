import { libsInterface } from 'interfaces';
import { getToken, updateToken } from './authLib';

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Content-Type', 'application/json');
requestHeaders.set('Accept', 'application/json');
requestHeaders.set('Authorization', getToken() || 'None');

export const fetchPost = async <requestInterface, responseInterface>(
  url: libsInterface.FetchRequestUrlType,
  body: requestInterface,
): Promise<responseInterface> => {
  updateToken();
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_SERVER_PORT}/${url}`, {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error: any) {
    return error;
  }
};

export const fetchGet = async <responseInterface>(
  url: libsInterface.FetchRequestUrlType,
): Promise<responseInterface> => {
  updateToken();
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_SERVER_PORT}/${url}`, {
      method: 'GET',
      headers: requestHeaders,
    });
    return response.json();
  } catch (error: any) {
    return error;
  }
};
export const fetchPut = async <requestInterface, responseInterface>(
  url: libsInterface.FetchRequestUrlType,
  body: requestInterface,
): Promise<responseInterface> => {
  updateToken();
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_SERVER_PORT}/${url}`, {
      method: 'PUT',
      headers: requestHeaders,
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error: any) {
    return error;
  }
};
export const fetchDelete = async <responseInterface>(
  url: libsInterface.FetchRequestUrlType,
): Promise<responseInterface> => {
  updateToken();
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_SERVER_PORT}/${url}`, {
      method: 'DELETE',
      headers: requestHeaders,
    });
    return response.json();
  } catch (error: any) {
    return error;
  }
};
