class AddCascadeDeleteForPosts < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :comments, :posts
    add_foreign_key :comments, :posts, on_delete: :cascade
  end
end
