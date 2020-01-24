# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(name: 'alex', email: 'alex@gmail.com')
u2 = User.create(name: 'scott', email:'scott@gmail.com')
u3 = User.create(name: 'kevin', email: 'kevin@gmail.com')
u4 = User.create(name: 'random', email: 'rando@gmail,com')

Artwork.destroy_all

a1 = Artwork.create(title: 'masterpiece', image_url:'1', artist_id: u1.id)
a2 = Artwork.create(title: 'aa', image_url: '2', artist_id: u2.id)
a3 = Artwork.create(title: 'last supper', image_url: '3', artist_id: u3.id)
a4 = Artwork.create(title: 'something random', image_url: '4', artist_id: u4.id)
a5 = Artwork.create(title: 'favorite artwork', image_url: '5', artist_id: u1.id, favorite: true)

ArtworkShare.destroy_all

as1 = ArtworkShare.create(viewer_id:u2.id, artwork_id:a1.id)
as2 = ArtworkShare.create(viewer_id:u1.id, artwork_id:a2.id)
as3 = ArtworkShare.create(viewer_id:u1.id, artwork_id:a3.id)
as4 = ArtworkShare.create(viewer_id:u1.id, artwork_id:a4.id)

Comment.destroy_all

c1 = Comment.create(body: 'wow 1', user_id: u1.id, artwork_id: a2.id)
c2 = Comment.create(body: 'wow 2', user_id: u2.id, artwork_id: a1.id)
c3 = Comment.create(body: 'wow 3', user_id: u3.id, artwork_id: a2.id)
c4 = Comment.create(body: 'wow 4', user_id: u4.id, artwork_id: a2.id)

Like.destroy_all

l1 = Like.create(user_id: u1.id, likeable: a2)
l2 = Like.create(user_id: u1.id, likeable: a3)
l3 = Like.create(user_id: u1.id, likeable: a4)
l4 = Like.create(user_id: u2.id, likeable: a1)
l5 = Like.create(user_id: u2.id, likeable: c1)
l6 = Like.create(user_id: u2.id, likeable: c4)
l7 = Like.create(user_id: u2.id, likeable: c3)

Collection.destroy_all

collect1 = Collection.create(user_id: u2.id, name: 'my collection', artwork_id: a1.id)
collect2 = Collection.create(user_id: u2.id, name: 'my collection', artwork_id: a2.id)
collect3 = Collection.create(user_id: u2.id, name: 'my collection', artwork_id: a3.id)
collect4 = Collection.create(user_id: u2.id, name: 'my collection', artwork_id: a4.id)
collect5 = Collection.create(user_id: u2.id, name: 'my collection', artwork_id: a5.id)


