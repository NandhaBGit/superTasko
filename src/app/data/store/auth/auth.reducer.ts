import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export const authFeatureKey = 'auth';

export interface authState {

}

export const initialState: authState = {

};

export const authReducer = createReducer(
  initialState,
);

