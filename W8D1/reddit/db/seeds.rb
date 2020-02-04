# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(username: 'kyle', password: 'password')
u2 = User.create(username: 'scott', password: 'password')
u3 = User.create(username: 'danny', password: 'password')

Sub.destroy_all

s1 = Sub.create(title: 'Rule 34', description: 'If it exists, there\'s PORN', moderator_id: u1.id)
s2 = Sub.create(title: 'App Academy', description: 'Learn how to Code', moderator_id: u2.id)

Post.destroy_all

s1p1 = Post.create(title: '[Overwatch] Mercy', url: "https://cdn.inprnt.com/thumbs/74/d6/74d633a804fb854eb98575b6c6fc519e.jpg?response-cache-control=max-age=2628000", content: "Look at her skillset", sub_id: s1.id, author_id: u2.id)
s1p2 = Post.create(title: '[Pokemon] Misty', url: "https://i.ytimg.com/vi/F_MY0mEP_pY/maxresdefault.jpg", content: "I wish @-@", sub_id: s1.id, author_id: u2.id)
s1p3 = Post.create(title: '[Pokemon] May', url: "https://i.ytimg.com/vi/1Lhju2R8M3c/maxresdefault.jpg", content: "Please senpai~! Onegaishimasu! Itadakimasu~!", sub_id: s1.id, author_id: u1.id)

Comment.destroy_all

p1c1 = Comment.create(content: 'This makes my pp hard', author_id: u3.id, post_id: s1p1.id)
p2c1 = Comment.create(content: 'This makes my pp hard', author_id: u3.id, post_id: s1p2.id)
p3c1 = Comment.create(content: 'This makes my pp hard', author_id: u3.id, post_id: s1p3.id)
