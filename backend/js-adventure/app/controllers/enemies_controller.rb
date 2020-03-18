class EnemiesController < ApplicationController
    
    def index
        enemies = Enemy.all
        render json: enemies
    end

end