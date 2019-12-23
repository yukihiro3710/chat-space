# ChatSpaceデータベース

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true|
|password|string|null: false|
|name|string|null: false, add_index: true|

### Association
- has_many :groups_users
- has_many :messages
- has_many  :groups,  through:  :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

Column|Type|Options|
|------|----|-------|
｜name｜string|null: false, unique: true|


## Association
- has_many :groups_users
- has_many :users, through: groups_users
- has_many :messages

## messagesテーブル

Column|Type|Options|
|------|----|-------|
|body|text|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


|
## Association
- belongs_to :user
- belongs_to :group
