# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'robby', email: 'robby@dore.com', password: 'robby', password_confirmation: 'robby', authorization_token: SecureRandom.hex(64))
User.create(username: 'hello', email: 'hello@hello.com', password: 'hello', password_confirmation: 'hello', authorization_token: SecureRandom.hex(64))
