import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../services/posts/posts.model';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-plus-post',
  templateUrl: './plus-post.component.html',
  styleUrls: ['./plus-post.component.scss']
})
export class PlusPostComponent implements OnInit {

  posts:PostInterface[] = [];
  count = 0;
  countrys:string[] = ['au', 'br','ca','ch','cn','de','eg','es','fr','gb','gr'];

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  onScroll(){
    this.getPosts();
  }

  getPosts(){
    if (this.count<=this.countrys.length) {
      this._postsService.getPlusPosts().subscribe(data =>{
      
        this.posts = [...this.posts, ...data];
        this.count ++;
        
      });
    }
    
  }

}
