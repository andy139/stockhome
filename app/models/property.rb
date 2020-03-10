class Property < ApplicationRecord
    validates :address, presence: true

    has_one_attached :photo

    has_many_attached :photos
end
