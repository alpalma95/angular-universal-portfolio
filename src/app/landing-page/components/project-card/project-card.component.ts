import { Component, Input, OnInit } from '@angular/core';
import { ProjectCard } from '../../interfaces/project-card.interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() projectProps!: ProjectCard;

  constructor() {}

  ngOnInit(): void {}
}
