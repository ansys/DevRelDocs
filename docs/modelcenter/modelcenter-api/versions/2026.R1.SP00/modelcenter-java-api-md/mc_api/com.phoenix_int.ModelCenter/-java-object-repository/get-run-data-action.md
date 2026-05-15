# getRunDataAction


public [getRunDataAction](get-run-data-action.md)(id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [IRunDataAction](./../-i-run-data-action/index.md)

Retrieves a global Java object that implements IRunDataAction Note that we assume that there is only one instance of it stored.

#### Return

The stored object (null if the object doesn't exist)

#### Parameters



| | |
|---|---|
| id | A unique identifier used to distinguish between objects with the same key. This is usually the unique DataHistory ID. |
