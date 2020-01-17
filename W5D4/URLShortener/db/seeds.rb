# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Url.destroy_all

u1 = User.create(email: "shortboy@url.com")
u2 = User.create(email: "tallboy@aa.com")
url1 = Url.create(long_url: "wikipedia.org", short_url: 'q2fFkcuiI7NoDc0NYi08_A', user_id: u1.id)
