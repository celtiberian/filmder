
```bash
# start
# ML listening at localhost:5000
sh dc.sh up
# stop:
sh dc.sh down
```
To add the missing sbt file to the docker
```
docker exec -it <docker-pio-id> curl -L -o /root/.sbt/launchers/1.2.8/sbt-launch.jar https://repo1.maven.org/maven2/org/scala-sbt/sbt-launch/1.2.8/sbt-launch-1.2.8.jar --create-dirs
```