class AddColumnUnreadToLinks < ActiveRecord::Migration
  def change
    add_column :links, :uread, :boolean, :default => true
  end
end
