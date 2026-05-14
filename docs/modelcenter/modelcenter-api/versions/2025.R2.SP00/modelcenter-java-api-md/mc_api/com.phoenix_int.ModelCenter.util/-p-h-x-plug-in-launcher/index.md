# PHXPlugInLauncher


public class [PHXPlugInLauncher](index.md)

Upgraded, thread-safe, etc. plug-in launcher for ModelCenter.

#### Author

Dave

## Constructors

| | |
|---|---|
| [PHXPlugInLauncher](-p-h-x-plug-in-launcher.md) | constructor() |

## Functions

| Name | Summary |
|---|---|
| [classExists](class-exists.md) | public [classExists](class-exists.md)(jarFile: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), className: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Utility method to determine if a class exists in a JAR file. |
| [cleanUp](clean-up.md) | public [cleanUp](clean-up.md)()<br>Do cleanup of any resources we've created as part of the launcher setup. |
| [constructModelCenter](construct-model-center.md) | public [constructModelCenter](construct-model-center.md)(mcStream: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [ModelCenter](../../com.phoenix_int.ModelCenter/-model-center/index.md)<br>Constructs a ModelCenter object. |
| [disableIOConsole](disable-i-o-console.md) | public [disableIOConsole](disable-i-o-console.md)(discardOutput: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br> Prevents a [PHXIOConsole](../-p-h-x-i-o-console/index.md) from ever being created and optionally redirects [err](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#err--) and [out](https://docs.oracle.com/javase/8/docs/api/java/lang/System.html#out--) to the bit bucket. |
| [getDummyFrame](get-dummy-frame.md) | public [getDummyFrame](get-dummy-frame.md)(): [JFrame](https://docs.oracle.com/javase/8/docs/api/javax/swing/JFrame.html)<br> Returns a dummy frame object to be used as a parent frame for Java plug-ins. |
| [launchComponentPlugIn](launch-component-plug-in.md) | public [launchComponentPlugIn](launch-component-plug-in.md)(mcStream: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), jarFile: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), className: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), atmStream: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [IComponentPlugIn](../../com.phoenix_int.ModelCenter/-i-component-plug-in/index.md)<br>Construct an instance of the specified Component PlugIn class. |
| [launchDataCollectorPlugIn](launch-data-collector-plug-in.md) | public [launchDataCollectorPlugIn](launch-data-collector-plug-in.md)(mcStream: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), jarFile: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), className: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), atmStream: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), dcStream: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [IDataCollectorPlugIn](../../com.phoenix_int.ModelCenter/-i-data-collector-plug-in/index.md)<br>Construct an instance of the specified Data Collector PlugIn class. |
| [launchPlugInMetaData](launch-plug-in-meta-data.md) | public [launchPlugInMetaData](launch-plug-in-meta-data.md)(jarFile: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), className: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [IPlugInMetaData](../../com.phoenix_int.ModelCenter/-i-plug-in-meta-data/index.md)<br>Get the specified PlugIn metadata class. |
| [launchTradeStudyPlugIn](launch-trade-study-plug-in.md) | public [launchTradeStudyPlugIn](launch-trade-study-plug-in.md)(mcStream: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), jarFile: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), className: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), atmStream: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [ITradeStudyPlugIn](../../com.phoenix_int.ModelCenter/-i-trade-study-plug-in/index.md)<br>Construct an instance of the specified Trade Study PlugIn class. |
