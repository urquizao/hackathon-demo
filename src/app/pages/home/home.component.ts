import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatContainerComponent } from '../../components/chat-container/chat-container.component';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { ChatType } from '../../types/chat.types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatContainerComponent, UserListComponent, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  chatType: ChatType = ChatType.USER;
  userName: string = this.chatType == ChatType.AI ? 'User' : 'AI';
  messages: any[] | undefined = [
    {
      Sender: 'You',
      Message: 'Hello',
      Timestamp: '04/26/2022',
    },
    {
      Sender: 'AI (Chatbot)',
      Message: 'Hello I am Chat AI',
      Timestamp: '04/26/2022',
    },
  ];

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
      FirstName: 'Test',
      LastName: 'Me',

      Email: 'test.me@dotfoods.com',
    },
  ];
  selectedUser: any = this.myUsers[0];

  handleSetChat(e: any) {
    this.chatType = e;
  }

  test(e: any) {
    console.log('Hello World');
  }

  setUserName(e: any) {
    this.userName = e.target.value;
  }
}
