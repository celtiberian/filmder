docker-compose -f docker-compose.yml \
    -f engine/pgsql/docker-compose.base.yml \
    -f engine/pgsql/docker-compose.meta.yml \
    -f engine/pgsql/docker-compose.event.yml \
    -f engine/pgsql/docker-compose.model.yml $@
