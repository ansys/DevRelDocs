# PHXURLClassLoader


public class [PHXURLClassLoader](index.md) : [URLClassLoader](https://docs.oracle.com/javase/8/docs/api/java/net/URLClassLoader.html)

This class added a public method addURL2 that adds a URL to the search path, as well as overrides loadClass to do post-delegation class loading.

## Constructors

| | |
|---|---|
| [PHXURLClassLoader](-p-h-x-u-r-l-class-loader.md) | constructor(urls: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt;)constructor(urls: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt;, parent: [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html))constructor(urls: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt;, parent: [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html), factory: [URLStreamHandlerFactory](https://docs.oracle.com/javase/8/docs/api/java/net/URLStreamHandlerFactory.html)) |

## Properties

| Name | Summary |
|---|---|
| [name](index.md#-496928135%2FProperties%2F-2117262581) | val [name](index.md#-496928135%2FProperties%2F-2117262581): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) |
| [parent](index.md#1459003258%2FProperties%2F-2117262581) | val [parent](index.md#1459003258%2FProperties%2F-2117262581): [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html) |
| [unnamedModule](index.md#1201644394%2FProperties%2F-2117262581) | val [unnamedModule](index.md#1201644394%2FProperties%2F-2117262581): [Module](https://docs.oracle.com/javase/8/docs/api/java/lang/Module.html) |

## Functions

| Name | Summary |
|---|---|
| [addURL2](add-u-r-l2.md) | public [addURL2](add-u-r-l2.md)(url: [URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html))<br>a public version of URLClassLoader's addURL method |
| [clearAssertionStatus](index.md#1259311869%2FFunctions%2F-2117262581) | public [clearAssertionStatus](index.md#1259311869%2FFunctions%2F-2117262581)() |
| [close](index.md#-1447421798%2FFunctions%2F-2117262581) | public [close](index.md#-1447421798%2FFunctions%2F-2117262581)() |
| [findResource](index.md#-1760582852%2FFunctions%2F-2117262581) | public [findResource](index.md#-1760582852%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html) |
| [findResources](index.md#-356544095%2FFunctions%2F-2117262581) | public [findResources](index.md#-356544095%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Enumeration](https://docs.oracle.com/javase/8/docs/api/java/util/Enumeration.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt; |
| [getDefinedPackage](index.md#-1237778274%2FFunctions%2F-2117262581) | fun [getDefinedPackage](index.md#-1237778274%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Package](https://docs.oracle.com/javase/8/docs/api/java/lang/Package.html) |
| [getDefinedPackages](index.md#1895612036%2FFunctions%2F-2117262581) | fun [getDefinedPackages](index.md#1895612036%2FFunctions%2F-2117262581)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Package](https://docs.oracle.com/javase/8/docs/api/java/lang/Package.html)&gt; |
| [getPlatformClassLoader](index.md#-1125909726%2FFunctions%2F-2117262581) | public [getPlatformClassLoader](index.md#-1125909726%2FFunctions%2F-2117262581)(): [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html) |
| [getResource](get-resource.md) | public [getResource](get-resource.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html) |
| [getResourceAsStream](get-resource-as-stream.md) | public [getResourceAsStream](get-resource-as-stream.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html) |
| [getResources](index.md#26826512%2FFunctions%2F-2117262581) | public [getResources](index.md#26826512%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Enumeration](https://docs.oracle.com/javase/8/docs/api/java/util/Enumeration.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt; |
| [getSystemClassLoader](index.md#1201052190%2FFunctions%2F-2117262581) | public [getSystemClassLoader](index.md#1201052190%2FFunctions%2F-2117262581)(): [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html) |
| [getSystemResource](index.md#-1625599170%2FFunctions%2F-2117262581) | public [getSystemResource](index.md#-1625599170%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html) |
| [getSystemResourceAsStream](index.md#-841312500%2FFunctions%2F-2117262581) | public [getSystemResourceAsStream](index.md#-841312500%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html) |
| [getSystemResources](index.md#-467017249%2FFunctions%2F-2117262581) | public [getSystemResources](index.md#-467017249%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Enumeration](https://docs.oracle.com/javase/8/docs/api/java/util/Enumeration.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt; |
| [getURLs](index.md#-293326280%2FFunctions%2F-2117262581) | public [getURLs](index.md#-293326280%2FFunctions%2F-2117262581)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt; |
| [isRegisteredAsParallelCapable](index.md#720218351%2FFunctions%2F-2117262581) | fun [isRegisteredAsParallelCapable](index.md#720218351%2FFunctions%2F-2117262581)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [loadClass](load-class.md) | public [loadClass](load-class.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)<br>Loads a local class first, if that fails continue with the ClassLoader.loadClass() parent delegation. |
| [newInstance](index.md#-18119435%2FFunctions%2F-2117262581) | public [newInstance](index.md#-18119435%2FFunctions%2F-2117262581)(urls: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt;, parent: [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html)): [URLClassLoader](https://docs.oracle.com/javase/8/docs/api/java/net/URLClassLoader.html) |
| [resources](index.md#110303916%2FFunctions%2F-2117262581) | public [resources](index.md#110303916%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Stream](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt; |
| [setClassAssertionStatus](index.md#197864046%2FFunctions%2F-2117262581) | public [setClassAssertionStatus](index.md#197864046%2FFunctions%2F-2117262581)(className: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), enabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [setDefaultAssertionStatus](index.md#776050745%2FFunctions%2F-2117262581) | public [setDefaultAssertionStatus](index.md#776050745%2FFunctions%2F-2117262581)(enabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [setPackageAssertionStatus](index.md#-849525892%2FFunctions%2F-2117262581) | public [setPackageAssertionStatus](index.md#-849525892%2FFunctions%2F-2117262581)(packageName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), enabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
