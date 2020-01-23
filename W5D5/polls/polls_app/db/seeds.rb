# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create(username: "Iryna")
u2 = User.create(username: "Scott")

Poll.destroy_all

p1 = Poll.create(title: "App Academy Poll 2020", user_id: u2.id)
p2 = Poll.create(title: "Weekend Plans", user_id: u1.id)
p3 = Poll.create(title: "Favorite Pokemons", user_id: u2.id)

Question.destroy_all

p1q1 = Question.create(body: "Do you like it here?", poll_id: p1.id)
p1q2 = Question.create(body: "How happy are you?", poll_id: p1.id)
p2q1 = Question.create(body: "Are you planning to drink?", poll_id: p2.id)
p2q2 = Question.create(body: "Weekend Trips?", poll_id: p2.id)
p2q3 = Question.create(body: "Preparing for Assessment?", poll_id: p2.id)
p3q1 = Question.create(body: "Favorite First Generation Starter?", poll_id: p3.id)
p3q2 = Question.create(body: "Red or Blue?", poll_id: p3.id)
p3q3 = Question.create(body: "Pikachu or Eevee?", poll_id: p3.id)

AnswerChoice.destroy_all

p1q1a1 = AnswerChoice.create(choice: "Yes", question_id: p1q1.id)
p1q1a2 = AnswerChoice.create(choice: "No", question_id: p1q1.id)
p1q2a1 = AnswerChoice.create(choice: "Very Happy", question_id: p1q2.id)
p1q2a2 = AnswerChoice.create(choice: "Happy", question_id: p1q2.id)
p1q2a3 = AnswerChoice.create(choice: "Sad", question_id: p1q2.id)
p1q2a4 = AnswerChoice.create(choice: "Very Sad", question_id: p1q2.id)
p2q1a1 = AnswerChoice.create(choice: "Yes", question_id: p2q1.id)
p2q1a2 = AnswerChoice.create(choice: "No", question_id: p2q1.id)
p2q2a1 = AnswerChoice.create(choice: "Yes", question_id: p2q2.id)
p2q2a2 = AnswerChoice.create(choice: "No", question_id: p2q2.id)
p2q3a1 = AnswerChoice.create(choice: "Yes", question_id: p2q3.id)
p2q3a2 = AnswerChoice.create(choice: "No", question_id: p2q3.id)
p3q1a1 = AnswerChoice.create(choice: "Bulbasaur", question_id: p3q1.id)
p3q1a2 = AnswerChoice.create(choice: "Squirtle", question_id: p3q1.id)
p3q1a3 = AnswerChoice.create(choice: "Charmander", question_id: p3q1.id)
p3q2a1 = AnswerChoice.create(choice: "Red", question_id: p3q2.id)
p3q2a2 = AnswerChoice.create(choice: "Blue", question_id: p3q2.id)
p3q3a1 = AnswerChoice.create(choice: "Pikachu", question_id: p3q3.id)
p3q3a2 = AnswerChoice.create(choice: "Eevee", question_id: p3q3.id)

Response.destroy_all

p1q1r1 = Response.create(choice_id: p1q1a1.id, user_id: u1.id)
p1q2r1 = Response.create(choice_id: p1q2a1.id, user_id: u1.id)
p2q1r1 = Response.create(choice_id: p2q1a2.id, user_id: u1.id)
p2q2r1 = Response.create(choice_id: p2q2a1.id, user_id: u1.id)
p2q3r1 = Response.create(choice_id: p2q3a1.id, user_id: u1.id)
p3q1r1 = Response.create(choice_id: p3q1a2.id, user_id: u2.id)
p3q2r1 = Response.create(choice_id: p3q2a2.id, user_id: u2.id)
p3q3r1 = Response.create(choice_id: p3q3a1.id, user_id: u1.id)
p3q3r2 = Response.create(choice_id: p3q3a2.id, user_id: u2.id)