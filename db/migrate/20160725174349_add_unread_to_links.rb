class AddUnreadToLinks < ActiveRecord::Migration
  def change
    add_column :links, :unread, :boolean, :default => true
  end
end
