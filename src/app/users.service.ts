
import { Subject } from 'rxjs/Subject';

export class UsersService {
  usersDataService = new Subject();
  sampleData = [{
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "john@example.com",
    gender: 'male'
  },
  {
    id: 2,
    firstname: "Mary",
    lastname: "Moe",
    email: "mary@example.com",
    gender: 'female'
    
  },
  {
    id: 3,
    firstname: "July",
    lastname: "Dooley",
    email: "july@example.com",
    gender: 'female'
    
  }
    ]
    // sampleFilterData = [{
    //   id: 1,
    //   firstname: "John",
    //   lastname: "Doe",
    //   email: "john@example.com"
    // }] 
    getAllUsers(){
      return this.sampleData;
    } 
  getUser(id){
    let userid = 0;
    userid = Number(id);
    let keepGoing = true;
    let result = null;
    this.sampleData.forEach(element => {
      if(keepGoing) {
        if(!isNaN(userid) && userid === element.id){
          keepGoing = false;
          result = element;
        }
      }
     
    });
    return result;
  }
}
