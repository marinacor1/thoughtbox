class ChangeColumnUreadToUnreadForLinks < ActiveRecord::Migration
  def change
    remove_column :links, :uread
  end
end
