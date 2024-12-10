# JavaObjectRepository


public class [JavaObjectRepository](index.md)

## Constructors

| | |
|---|---|
| [JavaObjectRepository](-java-object-repository.md) | constructor() |

## Functions

| Name | Summary |
|---|---|
| [get](get.md) | public [get](get.md)(key: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>Retrieves a global Java object previously stored using set() |
| [getRunDataAction](get-run-data-action.md) | public [getRunDataAction](get-run-data-action.md)(id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [IRunDataAction](../-i-run-data-action/index.md)<br>Retrieves a global Java object that implements IRunDataAction Note that we assume that there is only one instance of it stored. |
| [put](put.md) | public [put](put.md)(key: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), obj: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>Store a global Java object. |
| [release](release.md) | public [release](release.md)(key: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Removes the global Java object associated with the specified ID and name |
