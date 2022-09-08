const graphql = require('graphql')
const{
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const UserType = new GraphQLObjectType({
    name:'user',
    fields:()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name:"xyz",
    fields:{
        codeimprove:{
            type: new GraphQLList(UserType),
            resolve(parent, args){
                let data = [{
                    id:11, name:'aaa', email:'Kishan@gmail.com', phone:7291864691
                },
                {
                    id:12, name:'bbb', email:'Anish@gmail.com', phone:8191864691
                }]

                return data
            }
        }
    }
})


module.exports = new GraphQLSchema({query: RootQuery})