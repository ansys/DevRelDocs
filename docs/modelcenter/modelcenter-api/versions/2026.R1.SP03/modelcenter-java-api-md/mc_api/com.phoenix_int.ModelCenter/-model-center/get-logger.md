# getLogger


public [getLogger](get-logger.md)(): [Logger](./../../com.phoenix_int.ModelCenter.logging/-logger/index.md)

Retrieves a logger. Note that the logger is always associated with the caller component if there is one, otherwise it is associated with the Model component. If there is not model then a logger associated with the application will be returned

#### Return

a Logger object

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |
