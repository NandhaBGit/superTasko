import { Injectable } from '@angular/core';
import { Project } from '../store/project/project.model';
import { Store } from '@ngrx/store';
import { ProjectActions } from '../store/project/project.actions';
import { Observable } from 'rxjs';
import { selectLoadingStatus, selectProjectData, selectSuccessStatus } from '../store/project/project.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private store: Store) { }

  addProject(projectData: Project) {
    this.store.dispatch(ProjectActions['[ProjectAdd]FetchProjectAddFormSuccess'](projectData))
  }

  editProject(projectData: Project) {    
    this.store.dispatch(ProjectActions['[ProjectEdit]FetchProjectEditFormSuccess'](projectData))
  }

  deleteProject(projectData: Project) {
    this.store.dispatch(ProjectActions['[ProjectDelete]FetchProjectDeleteFormSuccess'](projectData))
  }

  getFormValues(): Observable<Project[]> {
    return this.store.select(selectProjectData);
  }

  getSuccessStatus(): Observable<boolean> | any {
    return this.store.select(selectSuccessStatus);
  }

  getLoadingStatus(): Observable<boolean> | any {
    return this.store.select(selectLoadingStatus);
  }
}
