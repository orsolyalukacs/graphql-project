const graphql = require('graphql');
var _ = require('lodash');

//dummy data
var usersData = [
    {id: '1', name: 'Peter', age: 12, profession: 'student'},
    {id: '2', name: 'John', age: 24, profession: 'fireman'},
    {id: '3', name: 'Kate', age: 27, profession: 'journalist'}
]

var hobbiesData = [
    {id: '1', title: 'Learning', description: 'Reading books and memorizing.', userId: '1'},
    {id: '2', title: 'Rock climbing', description: 'Hiking in Rocky mountains', userId: '2'},
    {id: '3', title: 'Writing', description: 'Grabbing a pen and scratching paper with it.', userId: '3'}
]

var postsData = [
    {id: '1', comment: 'Sharpening my mind.', userId: '1'},
    {id: '2', comment: 'Its burning, man!', userId: '2'},
    {id: '3', comment: 'Scribble.', userId: '3'}
]

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList
} = graphql

//Create types
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user...',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        profession: {type: GraphQLString },

        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return _.filter(postsData, {userId: parent.id});
            }
        },
        
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve(parent, args) {
                return _.filter(hobbiesData, {userId: parent.id})
            }
        }
    })
});

const HobbyType = new GraphQLObjectType({
    name: 'Hobby',
    description: 'Hobby description',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString },
        description: {type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args){
                return _.find(usersData, {id: parent.userId})
            }
        }
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post description',
    fields: () => ({
        id: {type: GraphQLID},
        comment: {type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args){
                return _.find(usersData, {id: parent.userId})
            }
        }
    })
})

// RootQuery
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    description: 'Description',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},

            resolve(parent, args) {
                //we resolve with data
                //get and return data from a data source
                return _.find(usersData, {id: args.id})
            }
        },

        hobby: {
            type: HobbyType,
            args: {id: {type: GraphQLID}},

            resolve(parent, args) {
                // return data for our hobby
                return _.find(hobbiesData, {id: args.id})
            }
        },

        post: {
            type: PostType,
            args: {id: {type: GraphQLID}},

            resolve(parent, args) {
                return _.find(postsData, {id: args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})