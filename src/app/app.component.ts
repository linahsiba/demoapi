import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'demoapi';
  posts:any[] = []
//  message = "";
  constructor(private http: HttpClient) {}

  loadPosts() {
    this.http.get(/*'https:/jsonplaceholder.typicode.com/posts'*/"http://localhost:8080/toshokan").subscribe(
      //(res) => 
      (posts:any) => {
//        this.message=JSON.stringify(res)
//       alert(this.message)
        this.posts = posts
      }
    ) 
  }
}
