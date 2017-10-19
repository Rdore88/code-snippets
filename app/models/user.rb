class User < ApplicationRecord
  has_secure_password
  validates :password, presence: true
  validates :username, presence: true
  validates :password_confirmation, presence: true
  validates :email, uniqueness: true
  validates :email, presence: true

  def secure_random
    self.authorization_token = SecureRandom.hex(64)
  end

  def logout
    self.authorization_token = SecureRandom.hex(64)
    self.save
  end

  def organize_errors
  errors_to_return = []
  self.errors.messages.each do |key, value|
    errors_to_return.push(" #{key} #{value[0]}")
  end
  errors_to_return
end

end
