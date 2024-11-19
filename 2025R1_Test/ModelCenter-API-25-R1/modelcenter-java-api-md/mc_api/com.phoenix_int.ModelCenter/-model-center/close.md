//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[ModelCenter](index.md)/[close](close.md)

# close


public [close](close.md)()

closes ModelCenter. This function is also called by the finalizer for this class, but since finalizers are not guarenteed to be called, this method should be called directly. It is safe to call close() multiple times.

#### Deprecated

close() is just an alias for &quot;release()&quot;, which is the preferred way to release the object. ModelCenter will close when all objects pointing to it are released().

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
