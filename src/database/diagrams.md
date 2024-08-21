+-----------------+
|     users       |
+-----------------+
| id              |
| username        |
| email           |
| password_hash   |
| created_at      |
| updated_at      |
+-----------------+

+-----------------+
|     roles       |
+-----------------+
| id              |
| name            |
| type            |
| description     |
+-----------------+

+-----------------+
|  permissions    |
+-----------------+
| id              |
| name            |
| type            |
| description     |
+-----------------+

+-----------------+
| organizations   |
+-----------------+
| id              |
| name            |
| description     |
| created_at      |
| updated_at      |
+-----------------+

+-----------------+
|     cells       |
+-----------------+
| id              |
| name            |
| description     |
| organization_id |
| created_at      |
| updated_at      |
+-----------------+

+-----------------+
| organization_users |
+-----------------+
| user_id (FK)    |
| organization_id (FK) |
| role_id (FK)    |
+-----------------+

+-----------------+
|   cell_users    |
+-----------------+
| user_id (FK)    |
| cell_id (FK)    |
| role_id (FK)    |
| member_since    |
+-----------------+

+-----------------+
| role_permissions|
+-----------------+
| role_id (FK)    |
| permission_id (FK) |
| organization_id |
+-----------------+

+-----------------+
|  invitations    |
+-----------------+
| user_id (FK)    |
| cell_id (FK)    |
| status          |
| created_at      |
| updated_at      |
+-----------------+
