import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './Message';

@Injectable({
    providedIn:'root'
}
)

export class MessageService{
    url = "https://localhost:44385/api/FeedBackMessages";
    httpoptions = {headers: new HttpHeaders({'Content-type':'application/json'})};

    constructor(private http:HttpClient) { }

    createMessage(message:Message): Observable<Message> {
        return this.http.post<Message>(this.url,message,this.httpoptions);
    }
}