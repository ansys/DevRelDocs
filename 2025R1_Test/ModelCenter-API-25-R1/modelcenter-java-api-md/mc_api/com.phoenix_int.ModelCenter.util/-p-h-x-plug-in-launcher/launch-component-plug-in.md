# launchComponentPlugIn


public [launchComponentPlugIn](launch-component-plug-in.md)(mcStream: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), jarFile: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), className: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), atmStream: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [IComponentPlugIn](../../com.phoenix_int.ModelCenter/-i-component-plug-in/index.md)

Construct an instance of the specified Component PlugIn class.

#### Return

the plugin object, which will have had [construct](../../com.phoenix_int.ModelCenter/-i-component-plug-in/construct.md) called

#### Parameters



| | |
|---|---|
| mcStream | the IDispatch for the ModelCenter object |
| jarFile | the path to the JAR file containing the class |
| className | the fully-qualified classname of the class to load |
| atmStream | the IDispatch for the AddToModel object |

#### Throws

| | |
|---|---|
| [Exception](https://docs.oracle.com/javase/8/docs/api/java/lang/Exception.html) | on error; the type is determined by the type of failure |
