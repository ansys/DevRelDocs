# getDataHistoryToModel


public [getDataHistoryToModel](get-data-history-to-model.md)(): [IDataHistoryToModel](./../-i-data-history-to-model/index.md)

Gets the dataHistoryToModel. NOTE: not implemented! Will throw an exception. We don't allow the user to retrieve this. If we did, we'd need a wrapper class around the IDataHistoryToModel COM object. But the only time this object is of interest is when we're installing our own custom object to replace the default one, in which case that COM object is just wrapping a Java object we've created here. That would cause a sort of weird circular dependency and I'd prefer to avoid even trying it until we're absolutely sure we need it.

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |
