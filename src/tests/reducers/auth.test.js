import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'blahdebleh'
  };

  const state = authReducer(undefined, action);
  expect (state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  }

  let state = authReducer({ uid: 'anything' }, action);
  expect(state).toEqual({});
});
