# graphql-project 
I started this project by following a mini graphql course on udemy by [pdichone](https://github.com/pdichone).

### 1. From server folder install packages and start the app:
```
cd server
npm i
nodemon app
```

### 2. 
Send queries at http://localhost:4000/graphql to the GraphQL server in the following format:

```
query{
	user(id: "1"){
    name
    age
    profession
    hobbies {
      id
      title
      description
    }
    posts{
      comment
      id
    }
  }
}

//or

mutation{
  createPost(comment: "makmak", userId: 2){
    comment
    user {
      id
      profession
      name
    }
  }
}

```

### 3. 
You can also make mutations like createUser, updateUser, removeUser, etc. for hobby and post as well.
Read more about queries:
[graphql queries](https://graphql.org/learn/queries/)


### 4.
I have deployed this app on heroku:
[graphql012](https://graphql012.herokuapp.com/graphql)