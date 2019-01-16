class Config(object):
    DEBUG = False
    TESTING = False
    DATABASE_URI = 'sqlite://:memory:'
    SQLALCHEMY_RECORD_QUERIES = True
    # slow database query threshold (in seconds)
    DATABASE_QUERY_TIMEOUT = 0.5

    @staticmethod
    def init_app(app):
        pass

class ProductionConfig(Config):
    DATABASE_URI = 'mysql://user@localhost/foo'

class DevelopmentConfig(Config):
    DEBUG = True

class TestingConfig(Config):
    TESTING = True

config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
    'profiler': DevelopmentConfig,
    # 'heroku': HerokuConfig,
    # 'docker': DockerConfig,
    # 'unix': UnixConfig,

    'default': DevelopmentConfig
}