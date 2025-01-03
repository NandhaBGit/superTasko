import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Project } from './project.model';

export const ProjectActions = createActionGroup({
  source: 'Project',
  events: {
    '[Project] fetch project form success': (project: Project[]) => ({ project }),

    '[Project Add] fetch project Add form success': (project: Project) => ({ project }),

    '[Project Edit] fetch project Edit form success': (project: Project) => ({ project }),

    '[Project Delete] fetch project Delete form success': (project: Project) => ({ project }),

  }
});
