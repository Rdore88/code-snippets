module UserFactory
  def create_john
    User.create!(
      username: "John",
      email: "john@johnny.com",
      password: "bro",
      password_confirmation: "bro",
      authorization_token: SecureRandom.hex(10)
    )
  end
end
