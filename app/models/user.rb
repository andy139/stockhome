# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  account_type    :string
#  email           :string           not null
#  fname           :string           not null
#  interests       :string
#  lname           :string           not null
#  password_digest :string           not null
#  phone_number    :integer
#  referral        :string
#  session_token   :string           not null
#  zipcode         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#
class User < ApplicationRecord


  validates :email, :fname, :lname, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }, allow_nil: true

  before_validation :ensure_session_token

  attr_reader :password


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user&.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    update!(session_token: SecureRandom.urlsafe_base64)
    session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end



  has_one :saved_property,
  class_name: :SavedProperty,
  primary_key: :id,
  foreign_key: :user_id



  has_many :saved_properties,
  through: :saved_property,
  source: :property
  


  # has_one :shopping_cart

  # has_many :cart_properties,
  # through: :shopping_cart,
  # source: :properties
  

end
