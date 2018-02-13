class User < ApplicationRecord

  validates :first_name, :last_name, :email, presence: true
  validates :gender, inclusion: { in: ["male", "female", ""] }
  validates :tos, inclusion: {in: [true],  message: "Must Accept Terms of Service"}
  validate :validate_email

  has_many :questions

  def validate_email
    unless /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.match(email)
      errors.add(:email, "must be a valid email address")
    end
  end

end
