# Operation API

## Common Settings

## Added
- Introduced fatigue durability analysis functionality.
- Added the **ResultName** property to the **DurabilityAnalysisParameter** class.
- Added the **ExportContourResultToFile** method to the **Export** class.
- Added functions to **IOperationsAnimation** that allow changing the state of entities to Fit, Hide, or Show.

## Changed
- Changed the namespace from **VM.Post.API.Fatigue.Models** to **VM.Operation.Post**.
- Renamed **IOperationAnalysisResultViewModel** to **IOperationAnalysisResult**.
- Renamed **IOperationsFEBodyViewModel** to **IOperationsFEBody**.
- Renamed the **FilePath** property in the **DurabilityAnalysisParameter** class to **DocumentFilePath**. The **FilePath** property will be removed in the future.
- Renamed the **UpperValue** property in the **DurabilityAnalysisParameter** class to **End**. The **UpperValue** property will be removed in the future.
- Renamed the **LowValue** property in the **DurabilityAnalysisParameter** class to **Start**. The **LowValue** property will be removed in the future.
- Changed the result item name from **Max Principal** to **Max Abs Principal**.
- Changed the result item name from **Max Shear Stress** to **Max Shear**.

## Deprecated
- Removed the **VM.Post.API.Fatigue** DLL.
- The **FatigueParameter** class will be removed in the future. It will be replaced by a property in **FEBody**.