import { Component, Host, HostListener, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ProjectCardComponent, NgIf],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

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
