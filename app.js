import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//type
import {typeDefs} from './Schema.js';

//fake db
import database from './_db.js'

//make function resolvers
const resolvers ={
Query:{
    users(){
       return database.users
    },
    posts(){
        return database.posts
    },
    comments(){
        return database.comment
    },
//get by id function
   user(_,args){
    //by map to check every element if he = to args.id will return
return database.users.find((user)=>user.id===args.id)
   },
   post(_,args){
    return database.posts.find((post)=>post.id===args.id)
   },
   comment(_,args){
    return database.comment.find((comment)=>comment.id===args.id)
   },

   // in url the graphql
//    query FindById($id:ID!){
//     comment(id: $id) {
//       body
      
//     }
//   }

// related data
// user:{
//     post(parent){
//         return database.posts.filter((p)=>p.postId===parent.id)

//     }
// },


},
//delete data 
Mutation:{
    deletepost(_,args){
        database.posts.filter((p)=>p.id !== args.id)
        return  database.posts

    }
}
}
const server = new ApolloServer({
    typeDefs,
  resolvers,
});
const {url}=await startStandaloneServer(server,{
   listen:{port:3000}
})

console.log(`Server ready at 4000`);