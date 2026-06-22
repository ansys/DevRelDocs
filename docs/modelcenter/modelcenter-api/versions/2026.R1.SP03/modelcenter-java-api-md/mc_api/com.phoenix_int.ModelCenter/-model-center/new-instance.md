# newInstance


public [newInstance](new-instance.md)(): [ModelCenter](index.md)

creates a new ModelCenter object (that is connected to the same ModelCenter session) that is not currently attached to any thread. Use this method if you need to call ModelCenter from multiple threads. The spawning thread should call this function for each thread that needs to call ModelCenter. The new instance should be passed to the spawned thread and used there.

#### Return

a ModelCenter instance that is not attached to any thread

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |
