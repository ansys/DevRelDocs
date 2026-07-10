# closeDataHistory


abstract fun [closeDataHistory](close-data-history.md)(dataHistory: [DataHistory](./../-data-history/index.md))

Notify that the user is attempting to close the given data history. This class does not own the DataHistory passed into this method, and it will be released. If a new DataHistory is needed, call the [newInstance](./../-data-explorer/new-instance.md) method.

#### Parameters



| | |
|---|---|
| dataHistory | the data history the user is attempting to close |

#### Throws

| | |
|---|---|
| [Exception](https://docs.oracle.com/javase/8/docs/api/java/lang/Exception.html) | on error |
