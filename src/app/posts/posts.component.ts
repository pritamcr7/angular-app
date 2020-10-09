import { PostService } from './../shared/post.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit{
posts:any;

  constructor(private service:PostService) {
    
   }
   ngOnInit(){
    this.service.getPost()
    .subscribe(response=>{
      this.posts=response;
      console.log(this.posts);
    });
   }

  createPost(title:HTMLInputElement){
    let post={title:title.value};
    title.value='';
    this.service.createPost(post)
    .subscribe(response=>{
      //post['id']=response.id;
      this.posts.splice(0,0,response);
     console.log(post);
    });
  }

updatePost(i){
this.service.updatePost(i)
.subscribe(response=>{
  console.log(response);
});
}

deletePost(i){
  this.service.deletePost(i)
  .subscribe(response=>{
    let index=this.posts.indexOf(i);
    this.posts.splice(index,1);
  })
}
}
