//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[AddToModel](index.md)/[newInstance](new-instance.md)

# newInstance


public [newInstance](new-instance.md)(): [AddToModel](index.md)

creates a new AddToModel object (that is connected to the same ModelCenter session) that is not currently attached to any thread. Use this method if you need to call AddToModel from multiple threads. The spawning thread should call this function for each thread that needs to call AddToModel. The new instance should be passed to the spawned thread and used there.

#### Return

a AddToModel instance that is not attached to any thread

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
