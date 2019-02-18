from flask import render_template, redirect, url_for, abort, flash, request,\
    current_app, make_response, jsonify
from . import main


@main.route('/name', methods=['GET', 'POST'])
def index():
    data = {'name': 'david'}
    return jsonify(data)

# @main.after_app_request
# def after_request(response):
#     for query in get_debug_queries():
#         if query.duration >= current_app.config['FLASKY_SLOW_DB_QUERY_TIME']:
#             current_app.logger.warning(
#                 'Slow query: %s\nParameters: %s\nDuration: %fs\nContext: %s\n'
#                 % (query.statement, query.parameters, query.duration,
#                    query.context))
#     return response
