import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
  }

  ngOnInit() {
  }

  addLove(){
  	this.loveIts ++;
  	console.log('addLove');
  }

  addDLove(){
  	this.loveIts --;
  	console.log('removeLove');
  }
}
