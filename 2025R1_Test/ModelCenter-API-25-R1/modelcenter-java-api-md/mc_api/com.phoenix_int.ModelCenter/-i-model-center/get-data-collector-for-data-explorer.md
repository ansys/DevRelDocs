//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IModelCenter](index.md)/[getDataCollectorForDataExplorer](get-data-collector-for-data-explorer.md)

# getDataCollectorForDataExplorer


abstract fun [getDataCollectorForDataExplorer](get-data-collector-for-data-explorer.md)(dataExplorer: [DataExplorer](../-data-explorer/index.md)): [DataCollector](../-data-collector/index.md)

Retrieves a DataCollector for the DataExplorer with the specified ID.

#### Return

A DataCollector for the DataExplorer with the specified ID

#### Parameters



| | |
|---|---|
| dataExplorer | The DataExplorer for which to retrieve a DataCollector |

#### Throws

| | |
|---|---|
| [ModelCenterException](../-model-center-exception/index.md) | If something goes wrong in retrieving a DataCollector for the specified DataExplorerID |
