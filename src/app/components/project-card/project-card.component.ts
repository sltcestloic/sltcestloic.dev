import { Component, HostListener, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'project-card',
	standalone: true,
	imports: [],
	templateUrl: './project-card.component.html',
	styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

	@Input() public ProjectName: string;
	@Input() public ProjectDescription: string;
	@Input() public ProjectImage: string;
	@Input() public ProjectLink: string = null;

	@ViewChild('projectCard') projectCard: HTMLElement;

	public handleCardClick() {
		if (!this.ProjectLink) {
			return;
		}
		window.open(this.ProjectLink, '_blank');
	}

	@HostListener('mousemove', ['$event'])
	handleMousemove(event: MouseEvent) {
		const target = (event.currentTarget as HTMLElement).firstChild.firstChild as HTMLElement;

		const x = event.clientX - target.getBoundingClientRect().left;
		const y = event.clientY - target.getBoundingClientRect().top;
		const xRatio = x / target.getBoundingClientRect().width;
		const yRatio = y / target.getBoundingClientRect().height;
		const xRotation = (xRatio - 0.5) * 40;
		const yRotation = (0.5 - yRatio) * 40;

		target.style.transform = `rotateX(${yRotation}deg) rotateY(${xRotation}deg)`;
	}

	@HostListener('mouseenter', ['$event'])
	handleMouseenter(event: MouseEvent) {
		const target = (event.currentTarget as HTMLElement).firstChild.firstChild as HTMLElement;
		target.style.transition = `none`;
	}

	@HostListener('mouseleave', ['$event'])
	handleMouseleave(event: MouseEvent) {
		const target = (event.currentTarget as HTMLElement).firstChild.firstChild as HTMLElement;
		target.style.transition = `transform 0.7s ease`;
		target.style.transform = `rotateX(0deg) rotateY(0deg)`;
	}
}
