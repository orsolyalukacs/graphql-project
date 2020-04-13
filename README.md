# graphql-project

# 1. From server folder install packages and start the app:
```
cd server
npm i
nodemon app
```

# 2. 
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

# 3. 
```
Read more about this:
https://graphql.org/learn/queries/
```