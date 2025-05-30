# Introduction

The Ansys Motion Standalone Postprocessor C# Library provides a class library for users who want to automate Ansys Motion Standalone Postprocessor.
The library is divided into two main categories.

## Getting started

The Ansys Motion Standalone Postprocessor C# Library is installed with the Ansys Motion package, so users do not need to do anything extra to install it.

* [Result File Reader using Python language](getting_started_result_file_reader_using_py.md)
* [Operation API using Python language](getting_started_operation_api_using_py.md)

* Changelog
	* [Result File Reader](changelog_result_file_reader_api.md)
	* [Operation API](changelog_operation_api.md)

## Operation API

* Operation script is a useful functionality that allows you to execute functions provided by Postprocess by using Python Script, allowing you to automate repetitive and time-consuming operations using Python Script.
 
* For example, you can use operation script to save time by automating everything from creating screens, adding results, Postprocessor results, and importing and using other library modules. (Some features may not be available.)
 
* Accessible functionalities by Python operation script	:
	* [Animation](example_animation_for_operation_api.md)
		* Coordinate System
	* [Chart](example_chart_for_operation_api.md)
		* Create	
			* Create Chart
			* Add Curve
		* Data Postprocessing 
			* Simple Math
			* Transform
			* Interpolation
			* Calculus
			* Signal Processing
			* FFT
			* STFT
		* [Export](example_export_for_operation_api.md)
			* Export All Curves
			* Export Image
	* [Analysis](example_analysis_for_operation_api.md)
		* Sound Pressure

## Result File Reader

The Postprocessor API is a functionality that allows you to access Ansys Motion analysis results independently of the Postprocessor and extract the desired results. It can be used for process automation, integration with other processes, and integration with design optimization tools.

 * Accessible functionalities by Python Script or C# Library.
	* [Result File Reader](example_result_file_reader.md)

## System requirements

The Ansys Motion Standalone Postprocesor C# Library requires a development environment with the .NET framework version 4.8.

## Python support

The Ansys Motion Standalone Postprocesor C# Library can be executed from Python code using [python.net](https://pythonnet.github.io/) or [IronPython](https://ironpython.net/).

## See also

* [Reference](lib/VM.md)
	* [VM](lib/VM.md)
	* [VM.Post.API.OutputReader](lib/VM.Post.API.OutputReader.md)
	* [VM.Operations.Post](lib/VM.Operations.Post.Interfaces.md)
		* [VM.Operations.Post.Interfaces](lib/VM.Operations.Post.Interfaces.md)
		* [VM.Operations.Post.Interfaces.LineSeries](lib/VM.Operations.Post.Interfaces.LineSeries.md)
		* [VM.Operations.Post.Models](lib/VM.Operations.Post.Models.md)
		* [VM.Operations.Post.Utilities](lib/VM.Operations.Post.Utilities.md)