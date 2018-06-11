# sh curl-scripts/json/update-game.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}"

echo

# data needs to include all these data sets as variables:
# {
#   "games": [
#     {
#       "id": 1,
#       "cells": ["o","x","o","x","o","x","o","x","o"],
#       "over": true,
#       "player_x": {
#         "id": 1,
#         "email": "and@and.com"
#       },
#       "player_o": {
#         "id": 3,
#         "email": "dna@dna.com"
#       }
#     },
#     {
#       "id": 2,
#       "cells": ["","","","","","","","",""],
#       "over": false,
#       "player_x": {
#         "id": 3,
#         "email": "dna@dna.com"
#       },
#       "player_o": {
#         "id": 1,
#         "email": "and@and.com"
#       }
#     }
#   ]
# }
