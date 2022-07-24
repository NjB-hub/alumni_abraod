import pkg from "faker";
const { name, internet, datatype, lorem, image, address, phone, company } = pkg;
import _ from "lodash";
import { MongoClient } from "mongodb";

async function seedDB() {
  // Connection URL
  const uri = "mongodb://localhost:27017";

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const userscollection = client.db("alumni").collection("users");
    const profilescollection = client.db("alumni").collection("profiles");
    const postscollection = client.db("alumni").collection("posts");
    const offerscollection = client.db("alumni").collection("offers");
    const certificationscollection = client
      .db("alumni")
      .collection("certifications");
    const eventscollection = client.db("alumni").collection("events");
    const experiencescollection = client.db("alumni").collection("experiences");
    const expertisescollection = client.db("alumni").collection("expertises");
    const formationscollection = client.db("alumni").collection("formations");
    const commentscollection = client.db("alumni").collection("comments");
    const commentRepliescollection = client
      .db("alumni")
      .collection("commentReplies");
    const userEventscollection = client.db("alumni").collection("users_events");

    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    // collection.drop();

    // make a bunch of users
    let users = [];

    for (let i = 0; i < 5; i++) {
      const firstName = name.firstName();
      const lastName = name.lastName();
      let newUser = {
        username: internet.userName(),
        email: internet.email(firstName, lastName),
        password: internet.password(),
        IsAdmin: datatype.boolean(),
      };
      users.push(newUser);
    }
    userscollection.insertMany(users);

    // make a bunch of profiles
    let profiles = [];

    for (let i = 0; i < 5; i++) {
      let newProfile = {
        name: name.firstName(),
        surnamme: name.lastName(),
        gender: name.gender(),
        phone: phone.phoneNumber(),
        location: address.streetAddress(),
        photo: image.people(),
        profession: name.jobTitle(),
        description: name.jobDescriptor(),
        user_id: _.sample(users),
      };
      profiles.push(newProfile);
    }
    profilescollection.insertMany(profiles);

    // make a bunch of posts
    let posts = [];

    for (let i = 0; i < 5; i++) {
      let newPost = {
        creationDate: datatype.datetime(),
        photo: image.avatar(),
        description: lorem.sentence(),
        category: lorem.word(),
        user_id: _.sample(users),
      };
      posts.push(newPost);
    }
    postscollection.insertMany(posts);

    // make a bunch of offers
    let offers = [];

    for (let i = 0; i < 5; i++) {
      let newOffer = {
        enterprise: company.companyName(),
        post_id: _.sample(posts),
      };
      offers.push(newOffer);
    }
    offerscollection.insertMany(offers);

    // make a bunch of certifications
    let certifications = [];

    for (let i = 0; i < 5; i++) {
      let newCertification = {
        enterprise: company.companyName(),
        expirationDate: datatype.datetime(),
        profile_id: _.sample(profiles),
      };
      certifications.push(newCertification);
    }
    certificationscollection.insertMany(certifications);

    // make a bunch of events
    let events = [];

    for (let i = 0; i < 5; i++) {
      let newEvent = {
        dateEvent: datatype.datetime(),
        post_id: _.sample(posts),
      };
      events.push(newEvent);
    }
    eventscollection.insertMany(events);

    // make a bunch of experiences
    let experiences = [];

    for (let i = 0; i < 5; i++) {
      let newExperience = {
        position: lorem.word(),
        occupationDate: datatype.datetime(),
        enterprise: company.companyName(),
        position: lorem.sentence(),
        profile_id: _.sample(profiles),
      };
      experiences.push(newExperience);
    }
    experiencescollection.insertMany(experiences);

    // make a bunch of expertises
    let expertises = [];

    for (let i = 0; i < 5; i++) {
      let newExpertise = {
        value: lorem.sentences(),
        profile_id: _.sample(profiles),
      };
      expertises.push(newExpertise);
    }
    expertisescollection.insertMany(expertises);

    //make a banch of formations
    let formations = [];

    for (let i = 0; i < 5; i++) {
      let newFormation = {
        type: name.jobType(),
        school: name.findName(),
        duration: datatype.number(10),
        diploma: name.jobTitle(),
        profile_id: _.sample(profiles),
      };
      formations.push(newFormation);
    }
    formationscollection.insertMany(formations);

    //make a banch of comments
    let comments = [];

    for (let i = 0; i < 5; i++) {
      let newComment = {
        creationDate: datatype.datetime(),
        value: lorem.sentence(),
        post_id: _.sample(posts),
        usercom_id: _.sample(users),
      };
      comments.push(newComment);
    }
    commentscollection.insertMany(comments);

    //make a banch of commentReply
    let commentReps = [];

    for (let i = 0; i < 5; i++) {
      let newCommentRep = {
        commentParent_id: _.sample(comments),
        commentSon_id: _.sample(comments),
      };
      commentReps.push(newCommentRep);
    }
    commentRepliescollection.insertMany(commentReps);

    //make a banch of commentReply
    let userEvents = [];

    for (let i = 0; i < 5; i++) {
      let newUserEvent = {
        user_id: _.sample(users),
        event_id: _.sample(events),
      };
      userEvents.push(newUserEvent);
    }
    userEventscollection.insertMany(userEvents);

    console.log("Database seeded! :)");
    //  client.close();
  } catch (err) {
    console.log(err.stack);
  }
}

seedDB();
