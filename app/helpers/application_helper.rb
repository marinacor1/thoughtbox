module ApplicationHelper

  def login_logout
    if current_user
      link_to "Logout", logout_path, method: :delete, class: "link"
    else
      link_to "Login", login_path, class: "link"
    end
  end
end
