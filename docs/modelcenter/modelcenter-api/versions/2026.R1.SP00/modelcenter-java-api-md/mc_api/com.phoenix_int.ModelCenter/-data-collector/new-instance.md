# newInstance


public [newInstance](new-instance.md)(): [DataCollector](index.md)

creates a new DataCollector object (that is connected to the same ModelCenter session) that is not currently attached to any thread. Use this method if you need to call DataCollector from multiple threads. The spawning thread should call this function for each thread that needs to call DataCollector. The new instance should be passed to the spawned thread and used there.

#### Return

a DataCollector instance that is not attached to any thread

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |
