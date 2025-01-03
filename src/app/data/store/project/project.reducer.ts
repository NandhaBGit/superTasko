import { createReducer, on } from '@ngrx/store';
import { ProjectActions } from './project.actions';
import { Project } from './project.model';
import { LoadingStatus } from '../common.model';

export const projectFeatureKey = 'projectState';

export interface projectState extends LoadingStatus {
  projectData: Project[]

}

export const initialState: projectState = {
  projectData: [],
  loading: false,
  success: false,
};

export const projectReducer = createReducer(
  initialState,
  on(ProjectActions['[Project]FetchProjectFormSuccess'], (State, { project }) => ({
    ...State,
    projectData: project,
    loading: false,
    success: true,
  })),
  on(ProjectActions['[ProjectAdd]FetchProjectAddFormSuccess'], (state, { project }) => ({
    ...state,
    projectData: [...state.projectData, project],
    success: true, // success
  })),
  on(ProjectActions['[ProjectEdit]FetchProjectEditFormSuccess'], (state, { project }) => ({
    ...state,
    projectData: state.projectData.map((item) =>
      item.refKey === project.refKey ? { ...item, ...project } : item
    ),
    success: true, // success
  })),
  on(ProjectActions['[ProjectDelete]FetchProjectDeleteFormSuccess'], (state, { project }) => ({
    ...state,
    projectData: state.projectData.filter((item) => item.title !== project.title) || [],
    success: true, // success
  }))
);

