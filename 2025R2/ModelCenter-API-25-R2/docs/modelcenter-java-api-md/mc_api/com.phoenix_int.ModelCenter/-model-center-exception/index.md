# ModelCenterException

public class [ModelCenterException](index.md) : [Exception](https://docs.oracle.com/javase/8/docs/api/java/lang/Exception.html)

This class wraps exceptions thrown by the ModelCenter native methods.

#### Author

Haisma, 2/2000

#### See also

| |
|---|
| [ModelCenter](../-model-center/index.md) |

## Constructors

| | |
|---|---|
| [ModelCenterException](-model-center-exception.md) | constructor()constructor(s: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))constructor(cause: [Throwable](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html))constructor(s: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), cause: [Throwable](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html)) |

## Properties

| Name | Summary |
|---|---|
| [cause](index.md#-1023347080%2FProperties%2F-2117262581) | open val [cause](index.md#-1023347080%2FProperties%2F-2117262581): [Throwable](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html) |
| [stackTrace](index.md#1573944892%2FProperties%2F-2117262581) | open var [stackTrace](index.md#1573944892%2FProperties%2F-2117262581): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[StackTraceElement](https://docs.oracle.com/javase/8/docs/api/java/lang/StackTraceElement.html)&gt; |

## Functions

| Name | Summary |
|---|---|
| [addSuppressed](index.md#-1898257014%2FFunctions%2F-2117262581) | fun [addSuppressed](index.md#-1898257014%2FFunctions%2F-2117262581)(exception: [Throwable](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html)) |
| [fillInStackTrace](index.md#-1207709164%2FFunctions%2F-2117262581) | public [fillInStackTrace](index.md#-1207709164%2FFunctions%2F-2117262581)(): [Throwable](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html) |
| [getLocalizedMessage](index.md#-2138642817%2FFunctions%2F-2117262581) | public [getLocalizedMessage](index.md#-2138642817%2FFunctions%2F-2117262581)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) |
| [getMessage](index.md#1068546184%2FFunctions%2F-2117262581) | public [getMessage](index.md#1068546184%2FFunctions%2F-2117262581)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) |
| [getSuppressed](index.md#1678506999%2FFunctions%2F-2117262581) | fun [getSuppressed](index.md#1678506999%2FFunctions%2F-2117262581)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Throwable](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html)&gt; |
| [initCause](index.md#-104903378%2FFunctions%2F-2117262581) | public [initCause](index.md#-104903378%2FFunctions%2F-2117262581)(cause: [Throwable](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html)): [Throwable](https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html) |
| [printStackTrace](index.md#-1357294889%2FFunctions%2F-2117262581) | public [printStackTrace](index.md#-1357294889%2FFunctions%2F-2117262581)() |
| [toString](index.md#1869833549%2FFunctions%2F-2117262581) | public [toString](index.md#1869833549%2FFunctions%2F-2117262581)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) |
