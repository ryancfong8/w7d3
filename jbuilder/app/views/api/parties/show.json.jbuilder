json.partial! 'api/parties/party', party: @party

json.guests @party.guests do |guest|
  json.name guest.name
  json.gifts guest.gifts do |gift|
    json.title gift.title
  end
end

# gifts = @party.guests.map { |guest| guest.gifts }

# json.array! gifts do |gift|
#   json.title gift.title
#   json.description gift.description
# end

# json.array! @party do |party|
#   json.guest do
#     @party.guests do |guest|
#       json.gift do
#         gifts do |gift|
#           json.title party.guest.gift.title
#           json.description party.guest.gift.description
#         end
#       end
#     end
#   end
# end
