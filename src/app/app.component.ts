import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Blog';
	lastUpdate = new Date();
	posts = [
	{
		title: 'Mon premier post',
		content: 'ceci est un morceau de texte',
		loveIts: 1,
		created_at: new Date()
	},{
		title: 'Post2',
		content: 'ceci est un morceau de texte',
		loveIts: -1,
		created_at: new Date()
	},{
		title: 'Post3',
		content: 'ceci est un morceau de texte',
		loveIts: 0,
		created_at: new Date()
	}]
}
