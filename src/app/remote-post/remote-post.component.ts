import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts/posts.service';
import { PostInterface } from '../services/posts/posts.model';

@Component({
  selector: 'app-remote-post',
  templateUrl: './remote-post.component.html',
  styleUrls: ['./remote-post.component.scss']
})
export class RemotePostComponent implements OnInit {

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
      this._postsService.getGnewsPosts(this.countrys[this.count]). subscribe(data =>{
      
        this.posts = [...this.posts, ...data];
        this.count ++;
        
      });
    }
    
  }

}
