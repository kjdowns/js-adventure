class GamesController < ApplicationController
    
    def show
        game = Game.find_by(username: params[:id])
        render json: game
    end

    def update
        game = Game.find_or_create_by(username: params["game"]["username"])
        game.hp = params["game"]["hp"]
        game.current_level = params["game"]["current_level"]
        game.save
    end

end