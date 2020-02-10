import _ from 'lodash';

export function logInReducer(currentState = {logging: false}, action) {
  switch (action.type) {
    case 'USER_LOGGING_IN':
      return _.assign({}, currentState, {logging: true});
    default:
      return currentState;
  }
}
