import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ProjectCard } from '../../interfaces/project-card.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(public ps: ProjectsService) {}

  get projectsInformation(): ProjectCard[] {
    return this.ps.projectsInformation;
  }

  ngOnInit(): void {}
}
