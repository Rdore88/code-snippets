class User < ApplicationRecord
  has_secure_password
  validates :password, presence: true
  validates :username, presence: true
  validates :password_confirmation, presence: true
  validates :email, uniqueness: true



end
