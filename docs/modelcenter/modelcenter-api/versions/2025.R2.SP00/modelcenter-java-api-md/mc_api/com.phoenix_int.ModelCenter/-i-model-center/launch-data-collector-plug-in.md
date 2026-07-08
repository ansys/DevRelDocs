# launchDataCollectorPlugIn


abstract fun [launchDataCollectorPlugIn](launch-data-collector-plug-in.md)(plugInName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), dataExplorer: [DataExplorer](../-data-explorer/index.md))

Launches a specific Data Collector PlugIn, by name, on the specified Data Explorer.

#### Parameters



| | |
|---|---|
| plugInName | The name of the Data Collector PlugIn to be launched |
| dataExplorer | The Data Explorer for which to launch the PlugIn |

#### Throws

| | |
|---|---|
| [ModelCenterException](../-model-center-exception/index.md) | If something goes wrong in launching the PlugIn |
