class User < ApplicationRecord
  has_secure_password
  validates :password, presence: true
  validates :username, presence: true
  validates :password_confirmation, presence: true
  validates :email, uniqueness: true

  def secure_random
    self.authorization_token = SecureRandom.hex(64)
  end

  def logout
    self.authorization_token = SecureRandom.hex(64)
    self.save
  end

end
