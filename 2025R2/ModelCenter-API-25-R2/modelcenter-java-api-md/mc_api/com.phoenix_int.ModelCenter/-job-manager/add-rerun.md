# addRerun


public [addRerun](add-rerun.md)(runNum: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))

designates a given run already in an associated Data Collector to be rerun when submit() is called. NOTE: calling this function should not be used in tandem with addInput(), setInput(), or addOutput() calls.

#### Parameters



| | |
|---|---|
| runNum | a run in the Data Collector to rerun (0-based index) |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
