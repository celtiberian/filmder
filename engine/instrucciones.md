
```bash
# start
# ML listening at localhost:8082
sh dc.sh up
# stop:
sh dc.sh down
```
With the docker up you can use `pio-docker` located inside the `bin`folder to manage the prediction.io backend.

First to create an api key,
```
pio-docker app new filmder
```
To upload the data,
```
pip3 install predictionio
python3 ./templates/data/import_eventserver.py --access_key <api-accesss-key> --file /templates/data/output.txt
```
To add the missing sbt file to the docker run before the train
```
docker exec -it engine_pio_1 curl -L -o /root/.sbt/launchers/1.2.8/sbt-launch.jar https://repo1.maven.org/maven2/org/scala-sbt/sbt-launch/1.2.8/sbt-launch-1.2.8.jar --create-dirs
```
Then train and deploy,
```
pio-docker train
pio-docker deploy
```
