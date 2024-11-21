# PHXMCJarLoader


public class [PHXMCJarLoader](index.md) : [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html)

This class reads a jar file and automatically loads all of its .class files.

#### Author

Woyak, 9/01

## Constructors

| | |
|---|---|
| [PHXMCJarLoader](-p-h-x-m-c-jar-loader.md) | constructor(jarFileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Loads a .jar file. |

## Properties

| Name | Summary |
|---|---|
| [name](../-p-h-x-u-r-l-class-loader/index.md#-496928135%2FProperties%2F-2117262581) | val [name](../-p-h-x-u-r-l-class-loader/index.md#-496928135%2FProperties%2F-2117262581): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) |
| [parent](../-p-h-x-u-r-l-class-loader/index.md#1459003258%2FProperties%2F-2117262581) | val [parent](../-p-h-x-u-r-l-class-loader/index.md#1459003258%2FProperties%2F-2117262581): [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html) |
| [unnamedModule](../-p-h-x-u-r-l-class-loader/index.md#1201644394%2FProperties%2F-2117262581) | val [unnamedModule](../-p-h-x-u-r-l-class-loader/index.md#1201644394%2FProperties%2F-2117262581): [Module](https://docs.oracle.com/javase/8/docs/api/java/lang/Module.html) |

## Functions

| Name | Summary |
|---|---|
| [classExists](class-exists.md) | public [classExists](class-exists.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [clearAssertionStatus](../-p-h-x-u-r-l-class-loader/index.md#1259311869%2FFunctions%2F-2117262581) | public [clearAssertionStatus](../-p-h-x-u-r-l-class-loader/index.md#1259311869%2FFunctions%2F-2117262581)() |
| [getDefinedPackage](../-p-h-x-u-r-l-class-loader/index.md#-1237778274%2FFunctions%2F-2117262581) | fun [getDefinedPackage](../-p-h-x-u-r-l-class-loader/index.md#-1237778274%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Package](https://docs.oracle.com/javase/8/docs/api/java/lang/Package.html) |
| [getDefinedPackages](../-p-h-x-u-r-l-class-loader/index.md#1895612036%2FFunctions%2F-2117262581) | fun [getDefinedPackages](../-p-h-x-u-r-l-class-loader/index.md#1895612036%2FFunctions%2F-2117262581)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Package](https://docs.oracle.com/javase/8/docs/api/java/lang/Package.html)&gt; |
| [getPlatformClassLoader](../-p-h-x-u-r-l-class-loader/index.md#-1125909726%2FFunctions%2F-2117262581) | public [getPlatformClassLoader](../-p-h-x-u-r-l-class-loader/index.md#-1125909726%2FFunctions%2F-2117262581)(): [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html) |
| [getResource](index.md#1715467245%2FFunctions%2F-2117262581) | public [getResource](index.md#1715467245%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html) |
| [getResourceAsStream](index.md#1361516731%2FFunctions%2F-2117262581) | public [getResourceAsStream](index.md#1361516731%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html) |
| [getResources](../-p-h-x-u-r-l-class-loader/index.md#26826512%2FFunctions%2F-2117262581) | public [getResources](../-p-h-x-u-r-l-class-loader/index.md#26826512%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Enumeration](https://docs.oracle.com/javase/8/docs/api/java/util/Enumeration.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt; |
| [getSystemClassLoader](../-p-h-x-u-r-l-class-loader/index.md#1201052190%2FFunctions%2F-2117262581) | public [getSystemClassLoader](../-p-h-x-u-r-l-class-loader/index.md#1201052190%2FFunctions%2F-2117262581)(): [ClassLoader](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassLoader.html) |
| [getSystemResource](../-p-h-x-u-r-l-class-loader/index.md#-1625599170%2FFunctions%2F-2117262581) | public [getSystemResource](../-p-h-x-u-r-l-class-loader/index.md#-1625599170%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html) |
| [getSystemResourceAsStream](../-p-h-x-u-r-l-class-loader/index.md#-841312500%2FFunctions%2F-2117262581) | public [getSystemResourceAsStream](../-p-h-x-u-r-l-class-loader/index.md#-841312500%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html) |
| [getSystemResources](../-p-h-x-u-r-l-class-loader/index.md#-467017249%2FFunctions%2F-2117262581) | public [getSystemResources](../-p-h-x-u-r-l-class-loader/index.md#-467017249%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Enumeration](https://docs.oracle.com/javase/8/docs/api/java/util/Enumeration.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt; |
| [isRegisteredAsParallelCapable](../-p-h-x-u-r-l-class-loader/index.md#720218351%2FFunctions%2F-2117262581) | fun [isRegisteredAsParallelCapable](../-p-h-x-u-r-l-class-loader/index.md#720218351%2FFunctions%2F-2117262581)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [loadClass](index.md#1712797503%2FFunctions%2F-2117262581) | public [loadClass](index.md#1712797503%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)&lt;out [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt; |
| [resources](../-p-h-x-u-r-l-class-loader/index.md#110303916%2FFunctions%2F-2117262581) | public [resources](../-p-h-x-u-r-l-class-loader/index.md#110303916%2FFunctions%2F-2117262581)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Stream](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html)&lt;[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)&gt; |
| [setClassAssertionStatus](../-p-h-x-u-r-l-class-loader/index.md#197864046%2FFunctions%2F-2117262581) | public [setClassAssertionStatus](../-p-h-x-u-r-l-class-loader/index.md#197864046%2FFunctions%2F-2117262581)(className: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), enabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [setDefaultAssertionStatus](../-p-h-x-u-r-l-class-loader/index.md#776050745%2FFunctions%2F-2117262581) | public [setDefaultAssertionStatus](../-p-h-x-u-r-l-class-loader/index.md#776050745%2FFunctions%2F-2117262581)(enabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
| [setPackageAssertionStatus](../-p-h-x-u-r-l-class-loader/index.md#-849525892%2FFunctions%2F-2117262581) | public [setPackageAssertionStatus](../-p-h-x-u-r-l-class-loader/index.md#-849525892%2FFunctions%2F-2117262581)(packageName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), enabled: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |
