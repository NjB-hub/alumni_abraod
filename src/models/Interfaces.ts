interface BaseInterface{
    id:string;
    createdAt:string;
    updatedAt:string;
}

interface Serializable<T>{
    deserialize(input:Object):T;
}

interface Calendar extends BaseInterface{
    
}

interface Comment  extends BaseInterface{
    
}

interface Image  extends BaseInterface{
    
}

interface Issue  extends BaseInterface{
    
}

interface Report  extends BaseInterface{
    
}

interface Offer extends BaseInterface{
    company:string;
    post_id:string;
}

interface Post extends BaseInterface{   
    title:string;
    description:string;
    category:string;
    event: Event[];
    offer: Offer[];
    owner: User;
    ownerProfile: Profile;
    PostComments: Comment[];
    files:string;
    postReport: Report[];
}

interface User extends BaseInterface{
    username:string;
    email:string;
    emailStatus:string;
    emailProofToken:string;
    emailProofTokenExpiresAt:string;
    password:string;
    passwordResetToken:string;
    passwordResetTokenExpiresAt:string;
    unreadPosts:boolean;
    isAdmin:boolean;
    userEvents:Event[];
    userPosts:Post[];
    userComments: Comment[];
    userProfile: Profile[];
    userIssues: Issue[];
    myCalendar: Calendar[];
}

interface Profile extends BaseInterface{
    name:string,
    surname:string,
    gender:string,
    dateOfBirth:string,
    phone:string,
    address:string,
    position:string,
}

interface Event extends BaseInterface{
    dateEvent:string;
    start:string;
    end:string;
    place:string;
    post_id:string;
    participants: User[]
    inCalendar: Calendar[]
}

interface APIResponse{
    message:string;
    data:any;
    token:string;
}

export{BaseInterface, Serializable, Calendar, Comment, Image, Issue, Report, Offer, Post, User, Profile, Event, APIResponse}