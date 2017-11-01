import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AboutService {

  constructor(private http: Http) { }

  getPersonData() {
    return this.http.get('./assets/person.json')
      .map((response: Response) => response.json());
  }
}
