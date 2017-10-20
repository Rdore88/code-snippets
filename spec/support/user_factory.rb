module UserFactory
  def create_john
    User.create!(
      name: "John",
      email: "john@johnny.com",
      password: "bro",
      authorization_token: SecureRandom.hex(10)
    )
  end
end
