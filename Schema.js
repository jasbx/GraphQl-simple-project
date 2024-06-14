export const typeDefs=`#graphql
type User{
id:ID!,
name:String!,
age:String!
#related data

posts:Post!
}
type Post{
    id:ID!,
    title:String!,
    body:String!,
    author:String!,
    postId:ID!
    
}

type Comment{
    id:ID!,
    body:String!,
    author:String!
}

type Query{
    users:[User]
    user(id:ID!):User #this is single game get by id
    posts:[Post]
    post(id:ID!):Post
    comments:[Comment]
    comment(id:ID!):Comment
   
},
#deleted data

type Mutation{
    deletepost(id:ID!):[Post]
}
`
//the query not options must be there in types.
 //get by id we gave the post Id from client => game(id:ID!):Game AND ID must be requierd !