from flask import request, make_response, jsonify
from v1.basecontroller import BaseController
from v1.robot.model import RobotModel

class RobotController(BaseController):
    _instance = None

    def __init__(self) -> None:
        self._instance = RobotModel()

    def post(self):
        print(request.json)
        resp = self._instance.create(request.json)
        if resp == False:
            return make_response(jsonify({
                "error": "Failed to add. There are items in your request that are invalid."
            }), 400)
        return jsonify(resp)

    def check(self, robot_id, filters=None):
        if filters is not None:
            filters['id'] = robot_id
        else:
            filters = {"id": robot_id}
        robot = self._instance.read(filters)
        if robot is None:
            return make_response(jsonify({"error": "Robot id not found."}), 404)
        return robot

    def get(self, robot_id=None):
        filters = {}
        if 'fields' in request.args:
            filters['fields'] = request.args['fields'].split(',')
        if robot_id is not None:
            robot = self.check(robot_id, filters)
            if not isinstance(robot, dict):
                return robot
            return jsonify(robot)
        
        filters['offset'] = int(request.args['offset']) if 'offset' in request.args else 0
        filters['limit'] = int(request.args['limit']) if 'limit' in request.args else 5
        robots = self._instance.read(filters)
        total = self._instance.read(filters, True)
        return jsonify({
            'metadata': {
                'total': total,
                'links': self.build_links(total, filters['offset'], filters['limit'])
            },
            'data': robots
        })

    def put(self, robot_id=None):
        if robot_id is not None:
            robot = self.check(robot_id)
            if not isinstance(robot, dict):
                return robot
            robot_data = request.json
            robot_data['id'] = robot_id
            resp = self._instance.update(robot_data)
            if resp == False:
                return make_response(jsonify({
                    "error": "Failed to update. There are items in your request that are invalid."
                }), 400)
            return jsonify(resp)
        return jsonify(self._instance.update(request.json))

    def delete(self, robot_id=None):
        if robot_id is not None:
            robot = self.check(robot_id)
            if not isinstance(robot, dict):
                return robot
            return jsonify(self._instance.delete(robot_id))
        return jsonify(self._instance.delete(request.json))