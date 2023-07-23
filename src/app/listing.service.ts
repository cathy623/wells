import { Injectable } from '@angular/core';
import { Userlist } from './userlist';


@Injectable({
  providedIn: 'root'
})
export class ListingService {
  submitApplication(firstName: string, lastName: string, email: string) {
  console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
}
  userList: Userlist[] = [{
    id: 6,
    name: 'new tweet',
    photo: `assets/bird.jpg`,
   tags: ['twitter', 'colorful bird'],
   bio: 'bird',
   stock: 23

},
{
id:0,
name: 'CEO of google',
photo:`/assets/four.jpg`,
tags: ['adidas', 'addidas'],
bio: 'Name: Sundar Pichai \n From a young age, I was captivated by computers, and that curiosity led me to pursue a career in Computer Science. Throughout my journey, Ive enjoyed tackling challenging coding problems and exploring the fascinating world of artificial intelligence and machine learning.',
stock: 34},
{
id:1,
name: 'Apple',
photo:`/assets/ella.jpg`,
tags: ['apple', 'iPhone'],
bio: 'great phone product ',
stock: 2
},

{id:2,
  name: 'Google',
  photo:`/assets/two.jpg`,
  tags: ['google','goggle'] ,
bio: ' dsf',
stock: 5},
{id:3,
  name: 'Nike',
  photo:`/assets/three.jpg`,
  tags: ['nike', 'check'],
bio: ' sfvjashdf',
stock: 234
},
{id:4,
  name: 'Twitter',
  photo:`/assets/twitter.png`,
  tags:['blue bird', 'twitter'],
bio: 'dfjhf',
stock: 2344},
{id:7,
  name: 'fendi',
  photo:`/assets/fendi.png`,
  tags:['clothes', 'designer'],
bio: 'efef',
stock: 4
},
{id:8,
  name: 'chanel',
  photo:`/assets/chanel.png`,
  tags:['clothes', 'designer'],
bio: 'efef',
stock: 2,
},

];

getAllUserList(): Userlist[]{
  return this.userList;
}
getUserListById(id: number): Userlist | undefined{
  return this.userList.find(userList=>userList.id==id);
}
}
 


  

