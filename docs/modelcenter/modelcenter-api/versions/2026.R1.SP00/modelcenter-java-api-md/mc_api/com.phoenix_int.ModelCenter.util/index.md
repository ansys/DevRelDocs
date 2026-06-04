# Package-level declarations

## Types

| Name | Summary |
|---|---|
| [BeanshellUtil](-beanshell-util/index.md) | public class [BeanshellUtil](-beanshell-util/index.md)<br>Utility class to execute any arbitrary Beanshell script from native code and return an object that can be accessed via JNI. |
| [LoggerUpdater](-logger-updater/index.md) | public class [LoggerUpdater](-logger-updater/index.md)<br>This class is called by the Java logging infrastructure to notify the the C++ logger it update its local logging level. |
| [PHXCOMObject](-p-h-x-c-o-m-object/index.md) | public class [PHXCOMObject](-p-h-x-c-o-m-object/index.md)<br>This is a base class for Java objects that mirror ModelCenter COM objects |
| [PHXCOMObjectHolder](-p-h-x-c-o-m-object-holder/index.md) | public class [PHXCOMObjectHolder](-p-h-x-c-o-m-object-holder/index.md)&lt;[T](-p-h-x-c-o-m-object-holder/index.md) : [PHXCOMObject](-p-h-x-c-o-m-object/index.md)?&gt; |
| [PHXEquationParser](-p-h-x-equation-parser/index.md) | public class [PHXEquationParser](-p-h-x-equation-parser/index.md) |
| [PHXIOConsole](-p-h-x-i-o-console/index.md) | public class [PHXIOConsole](-p-h-x-i-o-console/index.md) : [ActionListener](https://docs.oracle.com/javase/8/docs/api/java/awt/event/ActionListener.html)<br>A utility class for redirecting IO to a window |
| [PHXJarLocation](-p-h-x-jar-location/index.md) | public class [PHXJarLocation](-p-h-x-jar-location/index.md) |
| [PHXMCJarLoader](-p-h-x-m-c-jar-loader/index.md) | public class [PHXMCJarLoader](-p-h-x-m-c-jar-loader/index.md) : [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html)<br>This class reads a jar file and automatically loads all of its .class files. |
| [PHXPlugInLauncher](-p-h-x-plug-in-launcher/index.md) | public class [PHXPlugInLauncher](-p-h-x-plug-in-launcher/index.md)<br>Upgraded, thread-safe, etc. |
| [PHXReferenceMonitor](-p-h-x-reference-monitor/index.md) | public class [PHXReferenceMonitor](-p-h-x-reference-monitor/index.md) : [ActionListener](https://docs.oracle.com/javase/8/docs/api/java/awt/event/ActionListener.html), [ListSelectionListener](https://docs.oracle.com/javase/8/docs/api/javax/swing/event/ListSelectionListener.html), [WindowListener](https://docs.oracle.com/javase/8/docs/api/java/awt/event/WindowListener.html), [ItemListener](https://docs.oracle.com/javase/8/docs/api/java/awt/event/ItemListener.html)<br>A utility class for showing active COM references from PHXCOMObject |
| [PHXURLClassLoader](-p-h-x-u-r-l-class-loader/index.md) | public class [PHXURLClassLoader](-p-h-x-u-r-l-class-loader/index.md) : [URLClassLoader](https://docs.oracle.com/javase/8/docs/api/java/net/URLClassLoader.html)<br>This class added a public method addURL2 that adds a URL to the search path, as well as overrides loadClass to do post-delegation class loading. |
| [ValueHolder](-value-holder/index.md) | public class [ValueHolder](-value-holder/index.md)&lt;[T](-value-holder/index.md)&gt;<br>Object that allows pass-by-reference. |
