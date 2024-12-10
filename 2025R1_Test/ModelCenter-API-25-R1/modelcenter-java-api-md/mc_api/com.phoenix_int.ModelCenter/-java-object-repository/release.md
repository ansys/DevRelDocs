# release


public [release](release.md)(key: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)

Removes the global Java object associated with the specified ID and name

#### Return

the new reference counter

#### Parameters



| | |
|---|---|
| key | Identifier used to identify the object |
| id | A unique identifier used to distinguish between objects with the same key. This is usually the unique DataHistory ID. |

#### Throws

| |
|---|
| [Exception](https://docs.oracle.com/javase/8/docs/api/java/lang/Exception.html) |
