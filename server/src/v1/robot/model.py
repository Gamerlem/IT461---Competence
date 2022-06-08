from db import Db

class RobotModel():
    def sanitize(self, robots):
        if not isinstance(robots, (list, tuple)):
            robots = [robots]
        clean_robots = []
        for robot in robots:
            if not isinstance(robot, dict):
                continue
            if not ('id' in robot and 'robotname' in robot and 'password' in robot):
                continue
            clean_robots.append(robot)
        return clean_robots

    def create(self, robots):
        if not isinstance(robots, (list, tuple)):
            robots = [robots]
        clean_robots = self.sanitize(robots)
        if len(robots) != len(clean_robots):
            return False
        queries = []
        for robot in clean_robots:
            sql = "INSERT INTO robots(robotname,capabilities,created,updated,createdby) VALUES(%s,%s,%s,%s,%s)"
            queries.append({"sql": sql, "bind": (robot['robotname'], robot['capabilities'], robot['created'], robot['updated'], robot['createdby'])})
        db = Db.get_instance()
        result = db.transactional(queries)
        return robots

    def read(self, filters=None, count_only=False):
        db = Db.get_instance()
        fields = ['*']
        offset = 0
        limit = 5
        if filters is not None:
            if 'fields' in filters:
                tmp_fields = []
                for field in filters['fields']:
                    if field in ['id', 'robotname', 'capabilities', 'created', 'updated', 'createdby']:
                        tmp_fields.append(field)
                if len(tmp_fields) > 0:
                    fields = tmp_fields
            if 'id' in filters:
                sql = "SELECT " + ','.join(fields) + " FROM robots WHERE id = %s"
                robot = db.fetchone(sql, filters['id'])
                return robot
            if 'offset' in filters:
                offset = int(filters['offset'])
            if 'limit' in filters:
                limit = int(filters['limit'])
            # auth method
            if 'username' and 'password' in filters:
                sql = "SELECT " + ','.join(fields) + " FROM users WHERE username = %s AND password = %s"
                robot = db.fetchone(sql, (filters['username'], filters['password']))
                return robot
        cols = 'COUNT(*) AS total' if count_only else ','.join(fields)
        sql = "SELECT " + cols + " FROM robots"
        if not count_only:
            sql += " ORDER BY robotname LIMIT " + str(offset) + ", " + str(limit)
        if count_only:
            row = db.fetchone(sql)
            return row['total'] if row else 0
        else:
            return db.fetchall(sql)

    def update(self, robots):
        if not isinstance(robots, (list, tuple)):
            robots = [robots]
        clean_robots = self.sanitize(robots)
        if len(robots) != len(clean_robots):
            return False
        queries = []
        for robot in clean_robots:
            sql = "UPDATE robots SET robotname = %s, capabilities = %s WHERE id = %s"
            queries.append({"sql": sql, "bind": (robot['robotname'], robot['capabilities'], robot['id'])})
        db = Db.get_instance()
        db.transactional(queries)
        return robots

    def delete(self, robots):
        counter = 0
        if not isinstance(robots, (list, tuple)):
            robots = [robots]
        placeholder = []
        queries = []
        for robot in robots:
            placeholder.append('%s')
        sql = "DELETE FROM robots WHERE id IN (" + ", ".join(placeholder) + ")"
        queries.append({"sql": sql, "bind": robots})
        db = Db.get_instance()
        counter = db.transactional(queries)
        return counter
