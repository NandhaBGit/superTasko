import { createActionGroup, emptyProps, props, createAction } from '@ngrx/store';
import { AuthModel } from './auth';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Add User': (auth: AuthModel) => ({ auth }),
  },
});
