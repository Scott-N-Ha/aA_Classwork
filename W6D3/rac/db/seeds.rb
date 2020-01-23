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

ArtworkShare.destroy_all

as1 = ArtworkShare.create(viewer_id:u1.id, artwork_id:a1.id)
as2 = ArtworkShare.create(viewer_id:u1.id, artwork_id:a2.id)
as3 = ArtworkShare.create(viewer_id:u1.id, artwork_id:a3.id)
as4 = ArtworkShare.create(viewer_id:u1.id, artwork_id:a4.id)
