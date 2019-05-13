import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './Message';
import {HOST_URL} from 'src/app/config'

@Injectable({
    providedIn:'root'
}
)

export class MessageService{
    url = HOST_URL;
    httpoptions = {headers: new HttpHeaders({'Content-type':'application/json'})};

    constructor(private http:HttpClient) { }

    createMessage(message:Message): Observable<Message> {
        return this.http.post<Message>(this.url+"/api/FeedBackMessages",message,this.httpoptions);
    }
}