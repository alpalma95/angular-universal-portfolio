import { Injectable } from '@angular/core';
import { ProjectCard } from '../interfaces/project-card.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private _pojectsInformation: ProjectCard[] = [
    {
      title: 'Display and Hide',
      codeLink: 'https://github.com/alpalma-BOSONIT/angular-01-hide',
      route: 'display-hide',
      image: 'url(../../../assets/01_hide.png)',
    },
    {
      title: 'Communication',
      codeLink:
        'https://github.com/alpalma-BOSONIT/02-angular-component-communication',
      route: 'communication',
      image: 'url(../../../assets/02_Communication.png)',
    },
    {
      title: 'CRUD operations',
      codeLink: 'https://github.com/alpalma-BOSONIT/03-angular-CRUD',
      route: 'crud',
      image: 'url(../../../assets/03_CRUD.png)',
    },
    {
      title: 'Counter with RxJs',
      codeLink: 'https://github.com/alpalma-BOSONIT/04_counter_rxjs',
      route: 'counter',
      image: 'url(../../../assets/04_Counter.png)',
    },
    {
      title: 'User secret',
      codeLink:
        'https://github.com/alpalma-BOSONIT/angular-universal-portfolio/tree/main/src/app/secret',
      route: 'secret/login',
      image: 'url(../../../assets/05_Secret.png)',
    },
  ];

  get projectsInformation(): ProjectCard[] {
    return this._pojectsInformation;
  }
}
