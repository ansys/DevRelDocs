# getCompletedRunData


public [getCompletedRunData](get-completed-run-data.md)(startSequenceNumber: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), maxLength: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), allVariables: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [CompletedRunData](./../-completed-run-data/index.md)

Gets information about the completed run data, including the runIDs, error IDs, error messages, and variable values.

#### Return

A [com.phoenix_int.ModelCenter.CompletedRunData](./../-completed-run-data/index.md) object, which contains information about the completed runs.

#### Parameters



| | |
|---|---|
| startSequenceNumber | index in the completed-run list to begin fetching from. Specify 0 to fetch from the beginning of the list. |
| maxLength | maximum number of completed runs to fetch. Specify -1 to fetch all available runs. |
| allVariables | flag if true will result in run data returned for all variables else only design variable data will be returned |

#### Throws

| | |
|---|---|
| [ModelCenterException](./../-model-center-exception/index.md) | if something goes wrong when attempting to get the completed run data. |
