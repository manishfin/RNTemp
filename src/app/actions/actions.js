export function intiateLoggin(data) {
  return {
    type: 'USER_LOGGING_IN',
    payload: data,
  };
}
