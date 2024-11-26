# createComponent


abstract fun [createComponent](create-component.md)(serverPath: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), parentName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

Instantiates a new component into the Model

#### Parameters



| | |
|---|---|
| serverPath | the location of the Component to instantiate, e.g. mcre://localhost/Block |
| name | the name for the instantiated Component |
| parentName | the name of the parent Component to instantiate the new Component into. To instantiate the Component into the top level, the parent name is usually &quot;Model&quot; |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |


abstract fun [createComponent](create-component.md)(serverPath: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), parentName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), xPos: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), yPos: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))

Instantiates a new component into the Model

#### Parameters



| | |
|---|---|
| serverPath | the location of the Component to instantiate, e.g. mcre://localhost/Block |
| name | the name for the instantiated Component |
| parentName | the name of the parent Component to instantiate the new Component into. To instantiate the Component into the top level, the parent name is usually &quot;Model&quot; |
| xPos | the x position for the new component in the Analysis View |
| yPos | the y position for the new component in the Analysis View |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
