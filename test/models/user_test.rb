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
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
