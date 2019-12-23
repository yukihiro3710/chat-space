# ChatSpaceデータベース

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|

### Association
- has_many :groups
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
|groupname|


## Association
- belongs_to :user
- has_many :messages

## messagesテーブル

Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id integer|
|user_id|integer|

## Association
- belongs_to :group
- belongs :user
