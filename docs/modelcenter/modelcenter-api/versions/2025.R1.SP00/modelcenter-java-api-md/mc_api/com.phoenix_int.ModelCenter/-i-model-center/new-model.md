# newModel


abstract fun [newModel](new-model.md)()

loads ModelCenter with a new, empty Model (data dependency model - MODEL_TYPE_DATA)

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |


abstract fun [newModel](new-model.md)(modelType: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

loads ModelCenter with a new, empty Model

#### Parameters



| | |
|---|---|
| modelType | can be either MODEL_TYPE_DATA to create a traditional data dependency ModelCenter model or MODEL_TYPE_PROCESS to create a model that can incorporate newer process modeling components and features |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
