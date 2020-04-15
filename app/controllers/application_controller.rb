class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?
    skip_before_action :verify_authenticity_token
  
    def current_user
      return nil unless session[:session_token]
  
      User.find_by(session_token: session[:session_token])
    end
  
    def require_logged_in; end
  
    def logged_in?
      !!current_user
    end
  
    def login(user)
      session[:session_token] = user.reset_session_token!
    end
  
    def logout
      current_user.reset_session_token!
      session[:session_token] = nil
      true
    end




end
