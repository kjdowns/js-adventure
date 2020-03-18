class EnemiesController < ApplicationController
    
    def index
        enemies = Enemy.where("room_id = ?", params[:room_id])
        render json: enemies
    end

end