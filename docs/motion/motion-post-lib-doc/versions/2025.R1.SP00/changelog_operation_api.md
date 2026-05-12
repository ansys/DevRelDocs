# Operation API

## Common setting

Import the OperationAPI.py file from the "Ansys installed path/Motion/Document/Postprocessor API for Python.zip" file.

## Added

- The functionality to create, retrieve, update, and delete pages has been added.
- The view has been relocated, and a capture feature has been added.
- The functionality to create Contour, VectorDisplay, Node, Element, and Expression has been added.
- Features related to animation have been added, including animation recording, animation loading, and camera movement within the screen.
- Additional features for modifying various attribute values have been added.

## Changed

- Name Changes
	- **PythonUtility** class -> **OperationAPIService**
	- **CreateLineDataSeires** -> **CreateLineDataSeries**
	- **CreateCalculusDifferent** -> **CreateDifferentiatedCurve**
	- **CreateCalculusIntegrate** -> **CreateIntegratedCurve**
	- **JournalService** -> **OperationAPIService**
	- **RemoveDocument** -> **CloseDocument**
- **IAnimationViewModel.AnalysisViewModel.GetViewModelByName** has been changed to **IOperationsAnimationViewModel.GetViewModelByName**.
- **ApplicationHandler** has been moved to the **VM.API.Post.Operations** project.

## Deprecated

- **ApplicationHandler.AddPlotView()** is deprecated and will be removed soon; it is recommended to transition to **IPage.CreateChart()**.
- **ApplicationHandler.GetActiveAnimationView()** is deprecated and will be removed soon; it is recommended to transition to **IPage.GetActiveView()**.
- **ApplicationHandler.GetActivePlotView()** is deprecated and will be removed soon; it is recommended to transition to **IPage.GetActiveView()**.
- **ApplicationHandler.GetView()** is deprecated and will be removed soon; it is recommended to transition to **IPage.GetView()**.
- **ApplicationHandler.RemoveDocument()** is deprecated and will be removed soon; it is recommended to transition to **ApplicationHandler.CloseDocument()**.
- **ApplicationHandler.RemoveView()** is deprecated and will be removed soon; it is recommended to transition to **IPage.CloseView()**.
- The function **ApplicationHandler.ExportImage()** that takes ExportType as a parameter is deprecated and will be removed soon; it is recommended to transition to **ApplicationHandler.ExportImage()** that takes ImageFormat as a parameter.
- **LegendModifierViewModel** is deprecated and will be removed soon; it is recommended to transition to **ChartView.Legend**.