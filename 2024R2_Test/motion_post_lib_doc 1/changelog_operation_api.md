# Changelog

## 2023R1
| Before | After | Type |
|---|---|------|
||	from VM.Models.Post import *														| Added	|
||	from VM.ViewModels.Post import *													| Added	|
||	from VM.ViewModels.Post.Entities.Charts import *									| Added	|
||	from VM.Windows.Post.Controls.Model import *										| Added	|
|from VM.DAFUL.Post.Chart.Models import *					|							| Removed |
|from VM.DAFUL.Post.Chart.ViewModels.LineSeries import *	|							| Removed |
|from VM.Enums.Post import *								|							| Removed |
|from VM.Post.API.OutputReader import *						|							| Removed |
|GetActivedPlotView											| GetActivePlotView			| Modified	|
|PythonUtility												| JournalService			| Modified	|
|CreateLineDataSeires										| CreateLineDataSeries		| Modified	|
|CreateCalculusDifferent									| CreateDifferentiatedCurve | Modified	|
|CreateCalculusIntegrate									| CreateIntegratedCurve		| Modified	|
|ExportImage(IChartViewModel lineViewModel, string filepath, ExportType exportType, double width, double height) | ExportImage(IChartViewModel lineViewModel, string filepath, **ImageFormat formatType**, double width, double height) | Modified	|

## 2023R2
| Before | After | Type |
|---|---|------|
||	from VM.Models.Post import *														| Added	|
||	from VM.ViewModels.Post import *													| Added	|
||	from VM.ViewModels.Post.Entities.Charts import *									| Added	|
||	from VM.Windows.Post.Controls.Model import *										| Added	|
|from VM.DAFUL.Post.Chart.Models import *					|							| Removed |
|from VM.DAFUL.Post.Chart.ViewModels.LineSeries import *	|							| Removed |
|from VM.Enums.Post import *								|							| Removed |
|from VM.Post.API.OutputReader import *						|							| Removed |
|GetActivedPlotView											| GetActivePlotView			| Modified |
|CreateLineDataSeires										| CreateLineDataSeries		| Modified |
|PythonUtility												| JournalService			| Modified |
|CreateCalculusDifferent									| CreateDifferentiatedCurve | Modified |
|CreateCalculusIntegrate									| CreateIntegratedCurve		| Modified |
|ExportImage(IChartViewModel lineViewModel, string filepath, ExportType exportType, double width, double height) | ExportImage(IChartViewModel lineViewModel, string filepath, **ImageFormat formatType**, double width, double height) | Modified	|

## 2024R1
| Before | After | Type |
|---|---|---|
||from VM.Models.Post import *																				   | Added	|
||from VM.ViewModels.Post import *																			   | Added	|
||from VM.ViewModels.Post.Entities.Charts import *															   | Added	|
||from VM.Windows.Post.Controls.Model import *																   | Added	|
|from VM.DAFUL.Post.Chart.Models import *					|												   | Removed |
|from VM.DAFUL.Post.Chart.ViewModels.LineSeries import *	|												   | Removed |
|from VM.Enums.Post import *								|												   | Removed |
|from VM.Post.API.OutputReader import *						|												   | Removed |
|from SciChart.Core import *								|												   | Removed |
|clr.AddReference("SciChart.Core")							|												   | Removed |
|GetActivedPlotView											| GetActivePlotView								   | Modified |
|PythonUtility												| JournalService								   | Modified |
|CreateLineDataSeires										| CreateLineDataSeries							   | Modified |
|IAnimationViewModel.AnalysisViewModel.GetViewModelByName	| IOperationsAnimationViewModel.GetViewModelByName | Modified |
|ExportImage(IChartViewModel lineViewModel, string filepath, ExportType exportType, double width, double height) | ExportImage(IChartViewModel lineViewModel, string filepath, **ImageFormat formatType**, double width, double height) | Modified	|