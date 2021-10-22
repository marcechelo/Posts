import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts/posts.service';

import { BehaviorSubject } from 'rxjs';

interface postInterface {
  content: string;
  description: string;
  image: string;
  publishedAt: string;
  source: Object;
  title: string;
  url: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  array = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;

  posts:postInterface[] = [];
  count = 0;
  countrys:string[] = ['au', 'br','ca','ch','cn','de','eg','es','fr','gb','gr'];

  constructor(private _postsService: PostsService) {
  }

  ngOnInit(): void {
    this.getPosts();  
  }

  onScroll(){
    this.getPosts();
  }

  getPosts(){
    if (this.count<=this.countrys.length) {
      this._postsService.getGnewsPosts(this.countrys[this.count]). subscribe(data =>{
      
        this.posts = [...this.posts, ...data];
        this.count ++;
        
      });
    }
    
  }

}
