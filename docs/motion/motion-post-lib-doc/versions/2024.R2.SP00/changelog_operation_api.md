# Operation API

## 2023R1

| Before | After | Type |
| --- | --- | --- |
| <div align="center">-</div> |	from VM.Models.Post import *													| Added	|
| <div align="center">-</div> |	from VM.ViewModels.Post import *												| Added	|
| <div align="center">-</div> |	from VM.ViewModels.Post.Entities.Charts import *								| Added	|
| <div align="center">-</div> |	from VM.Windows.Post.Controls.Model import *									| Added	|
| from VM.DAFUL.Post.Chart.Models import *					| <div align="center">-</div>							| Removed |
| from VM.DAFUL.Post.Chart.ViewModels.LineSeries import *	| <div align="center">-</div>							| Removed |
| from VM.Enums.Post import *								| <div align="center">-</div>							| Removed |
| from VM.Post.API.OutputReader import *					| <div align="center">-</div>							| Removed |
| GetActivedPlotView										| GetActivePlotView			| Modified |
| PythonUtility												| JournalService			| Modified |
| CreateLineDataSeires										| CreateLineDataSeries		| Modified |
| CreateCalculusDifferent									| CreateDifferentiatedCurve | Modified |
| CreateCalculusIntegrate									| CreateIntegratedCurve		| Modified |
| ExportImage(IChartViewModel lineViewModel, string filepath, ExportType exportType, double width, double height) | ExportImage(IChartViewModel lineViewModel, string filepath, **ImageFormat formatType**, double width, double height) | Modified	|

## 2023R2

| Before | After | Type |
| --- | --- | --- |
| <div align="center">-</div> |	from VM.Models.Post import *													| Added	|
| <div align="center">-</div> |	from VM.ViewModels.Post import *												| Added	|
| <div align="center">-</div> |	from VM.ViewModels.Post.Entities.Charts import *								| Added	|
| <div align="center">-</div> |	from VM.Windows.Post.Controls.Model import *									| Added	|
| from VM.DAFUL.Post.Chart.Models import *					| <div align="center">-</div> 						| Removed |
| from VM.DAFUL.Post.Chart.ViewModels.LineSeries import *	| <div align="center">-</div>							| Removed |
| from VM.Enums.Post import *								| <div align="center">-</div>							| Removed |
| from VM.Post.API.OutputReader import *					| <div align="center">-</div>							| Removed |
| GetActivedPlotView										| GetActivePlotView			| Modified |
| CreateLineDataSeires										| CreateLineDataSeries		| Modified |
| PythonUtility												| JournalService			| Modified |
| CreateCalculusDifferent									| CreateDifferentiatedCurve | Modified |
| CreateCalculusIntegrate									| CreateIntegratedCurve		| Modified |
| ExportImage(IChartViewModel lineViewModel, string filepath, ExportType exportType, double width, double height) | ExportImage(IChartViewModel lineViewModel, string filepath, **ImageFormat formatType**, double width, double height) | Modified	|

## 2024R1

| Before | After | Type |
| --- | --- | --- |
| <div align="center">-</div> | from VM.Models.Post import *																			   | Added	|
| <div align="center">-</div> | from VM.ViewModels.Post import *																		   | Added	|
| <div align="center">-</div> | from VM.ViewModels.Post.Entities.Charts import *														   | Added	|
| <div align="center">-</div> | from VM.Windows.Post.Controls.Model import *															   | Added	|
| from VM.DAFUL.Post.Chart.Models import *					| <div align="center">-</div>												   | Removed |
| from VM.DAFUL.Post.Chart.ViewModels.LineSeries import *	| <div align="center">-</div>												   | Removed |
| from VM.Enums.Post import *								| <div align="center">-</div>												   | Removed |
| from VM.Post.API.OutputReader import *					| <div align="center">-</div>												   | Removed |
| from SciChart.Core import *								| <div align="center">-</div>												   | Removed |
| clr.AddReference("SciChart.Core")							| <div align="center">-</div>												   | Removed |
| GetActivedPlotView										| GetActivePlotView								   | Modified |
| PythonUtility												| JournalService								   | Modified |
| CreateLineDataSeires										| CreateLineDataSeries							   | Modified |
| IAnimationViewModel.AnalysisViewModel.GetViewModelByName	| IOperationsAnimationViewModel.GetViewModelByName | Modified |
| ExportImage(IChartViewModel lineViewModel, string filepath, ExportType exportType, double width, double height) | ExportImage(IChartViewModel lineViewModel, string filepath, **ImageFormat formatType**, double width, double height) | Modified	|