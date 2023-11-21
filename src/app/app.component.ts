import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_DATA_QUERY = gql`
  query GetArticles {
    getArticles {
      headline
      text
      authorId
    }
  }
`;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aws-test';
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: GET_DATA_QUERY
    })
    .valueChanges
    .subscribe(({ data, loading }) => {
      console.log('data: ', data)
    });
  }
}
