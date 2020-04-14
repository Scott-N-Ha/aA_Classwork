# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(username: 'test', email: 'test', password: 'password')

Bench.destroy_all

b1 = Bench.create(description: 'App Academy', lat: '37.798879', lng: '-122.401250')
b2 = Bench.create(description: 'Disneyland', lat: '33.809059', lng: '-117.919018')