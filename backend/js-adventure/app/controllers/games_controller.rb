class GamesController < ApplicationController
    
    def show
        raise params.inspect
    end

    def update
        game = Game.find_or_create_by(username: params["game"]["username"])
        game.hp = params["game"]["hp"]
        game.current_level = params["game"]["current_level"]
        game.save
    end

end