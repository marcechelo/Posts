import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts/posts.service';
import { PostInterface } from '../services/posts/posts.model';
  
@Component({
  selector: 'app-local-post',
  templateUrl: './local-post.component.html',
  styleUrls: ['./local-post.component.scss']
})



export class LocalPostComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required]

  });

  posts:PostInterface[]= [];
  newPost: boolean = false;
  editIndex: number = 0;
  certEscolar:any;
  imageUrl:any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    if (localStorage.getItem('posts') == null) {
      localStorage.setItem('posts', JSON.stringify({posts: []}));
    }else{
      let aux = JSON.parse(localStorage.getItem('posts')!);
      this.posts = aux['posts'];
    }
  }

  createPost(){
    console.log("new")
    this.newPost = true;
  }

  onSubmit(){
    let newPost = {
      title: this.checkoutForm.value.title,
      description: this.checkoutForm.value.description,
      image: this.imageUrl
      
    }
    
    if (this.newPost) {
      this.posts.push(newPost);
    } else {
      this.posts[this.editIndex] = newPost;
    }

    this.checkoutForm.reset();
    localStorage.setItem('posts', JSON.stringify({posts: this.posts}));
    
  }

  deletePost(postId:number){
    this.posts.splice(postId, 1);
    localStorage.setItem('posts', JSON.stringify({posts: this.posts}));
  }

  editPost(post:PostInterface, index:number){
    this.newPost = false;
    this.editIndex = index;
    this.checkoutForm.patchValue({title: post.title})
    this.checkoutForm.patchValue({description: post.description})
    this.checkoutForm.patchValue({image: post.image})    
    this.imageUrl = post.image;
  }

  onFileChanged(event: any) {
    if (event.target.files && event.target.files.length) {
      let reader = new FileReader();
      reader.addEventListener("load", () =>{
        this.imageUrl = reader.result;
        this.checkoutForm.patchValue({image: this.imageUrl})
      })
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
