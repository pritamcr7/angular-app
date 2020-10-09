import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url='http://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }


  getPost(){
     return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url,post)
  }

  updatePost(i){
    return this.http.patch(this.url+'/'+i.id,JSON.stringify({isRead:true}))
  }

  deletePost(i){
    return this.http.delete(this.url+'/'+i.id)
  }
}
