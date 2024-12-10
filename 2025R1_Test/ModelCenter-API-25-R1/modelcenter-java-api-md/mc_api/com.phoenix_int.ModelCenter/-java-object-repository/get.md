# get


public [get](get.md)(key: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)

Retrieves a global Java object previously stored using set()

#### Return

The stored object (null if the object doesn't exist)

#### Parameters



| | |
|---|---|
| key | Identifier used to identify the object |
| id | A unique identifier used to distinguish between objects with the same key. This is usually the unique DataHistory ID. |
