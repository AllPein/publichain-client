// @ts-ignore
export const { xrpl } = window;
// @ts-ignore
export const { XummPkce } = window;
// @ts-ignore
export const { XummSdkJwt } = require('xumm-sdk');

export const jwt = JSON.parse(localStorage.getItem('XummPkceJwt')!).jwt;
