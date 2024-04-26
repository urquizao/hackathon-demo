import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatContainerComponent } from '../../components/chat-container/chat-container.component';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { ChatType } from '../../types/chat.types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ChatContainerComponent,
    UserListComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  messageToSend: string | undefined;
  chatType: ChatType = ChatType.USER;
  userName: string = this.chatType == ChatType.AI ? 'User' : 'AI';

  /* THIS ARRAY IS TO DISPLAY THE MESSAGES BETWEEN USERS (TEXT ONLY) - FOLLOW THE FORMAT ON THE COMMENTED OBJECT - MIGHT HAVE TO SWITCH TO OBSERVABLE IF MAKING ASYNC CALLS...*/
  messages: any[] | undefined = [
    // {
    //   Sender: 'You',
    //   Message: 'Hello',
    //   Timestamp: '04/26/2022',
    // },
    // {
    //   Sender: 'AI (Chatbot)',
    //   Message: 'Hello I am Chat AI',
    //   Timestamp: '04/26/2022',
    // },
  ];

  /*DISPLAYS THE USERS - WILL CHANGE FOR USER LIST */
  myUsers: any[] = [
    {
      UserId: 1,
      FirstName: 'AI',
      LastName: '(Chatbot)',
      Department: '',
      Email: '',
    },
    {
      UserId: 2,
      FirstName: 'Omar',
      LastName: 'Urquiza',
      Department: 'Dry',
      Email: 'omar.urquiza@dotfoods.com',
    },
    {
      UserId: 3,
      FirstName: 'John',
      LastName: 'Doe',
      Department: 'Frozen',
      Email: 'test.me@dotfoods.com',
    },
    {
      UserId: 4,
      FirstName: 'Jane',
      LastName: 'Dough',
      Department: 'Frozen',
      Email: 'test.me@dotfoods.com',
    },
  ];
  selectedUser: any = this.myUsers[0];

  handleSetChat(e: any) {
    this.chatType = e;
  }

  selectUser(e: any, user: any) {
    this.selectedUser = user;
    this.messages = [];
  }

  setUserName(e: any) {
    this.userName = e.target;
  }

  send(event: any) {
    this.messages?.push({
      Sender: 'You',
      Message: this.messageToSend,
      Timestamp: '04/26/2022',
    });
    this.messageToSend = '';
  }
}
