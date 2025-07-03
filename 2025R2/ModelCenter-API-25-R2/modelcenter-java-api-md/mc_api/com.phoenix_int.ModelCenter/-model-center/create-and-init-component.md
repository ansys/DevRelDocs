# createAndInitComponent


public [createAndInitComponent](create-and-init-component.md)(serverPath: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), parentName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), initString: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), xPos: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), yPos: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [Component](../-component/index.md)

Creates a new component and initializes it from string data. IMPORTANT NOTE: This method can only be invoked on plugins which support IComponentPlugin.fromString(). Furthermore, it should only be used when you know EXACTLY the format that is expected by the component's fromString() method. It is designed to be used from plugins in third-party software which need to initialize a matching component to connect to that software in the model. Ideally, both the plugin for the third-party software and the ModelCenter component WILL SHARE THE SAME CODEBASE, so you can generate the configuration string from the same code which you will use to process it later. Mismatch between formats will almost certainly cause this method to fail.

#### Return

the component created

#### Parameters



| | |
|---|---|
| serverPath | the server path, e.g. &quot;mcre:\\localhost\block&quot; |
| name | the name for the new component |
| parentName | the parent component |
| initString | the initialization string for the component (see above) if initString is NULL, behavior is identical to createComponent() |
| xPos | the x position |
| yPos | the y position |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
