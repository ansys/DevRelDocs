# put


public [put](put.md)(key: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), obj: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))

Store a global Java object. Can be used to share an object between different Java Data Explorer Plug-Ins.

#### Parameters



| | |
|---|---|
| key | Identifier an arbitrary string used to identify the object |
| obj | The object |
| id | A unique identifier used to distinguish between objects with the same key. This is usually the unique DataHistory ID. |
