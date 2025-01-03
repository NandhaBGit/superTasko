import { createFeatureSelector, createSelector } from '@ngrx/store';
import { projectState } from './project.reducer';

export const selectFormState = createFeatureSelector<projectState>('projectState');




export const selectProjectData = createSelector(
  selectFormState,
  (state) => state.projectData
);

export const selectLoadingStatus = createSelector(
  selectFormState,
  (state) => state.loading
);

export const selectSuccessStatus = createSelector(
  selectFormState,
  (state) => state.success
);