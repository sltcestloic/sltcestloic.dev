import { NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ProjectCardComponent, NgIf],
	templateUrl: './portal.component.html',
	styleUrl: './portal.component.scss'
})
export class PortalComponent implements OnInit {

	private readonly _mobileWidth = 768;

	public isMobile: boolean;

	ngOnInit(): void {
		this.isMobile = window.innerWidth < this._mobileWidth;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.isMobile = event.target.innerWidth < this._mobileWidth;
	}
}
