# Troubleshooting

## Issues with Python Installation

* When installing Pythonnet, a clr-related error may occur.
One possible reason for this is that there are two packages with the name clr: one used by Pythonnet, and another unrelated package.
This can cause a conflict.
If such a conflict arises, you can try the following steps:

1. Uninstall the conflicting clr package:

	```
	pip uninstall clr
	```

2. Install pythonnet:

	```
	pip install pythonnet
	```

By reinstalling Pythonnet, you'll ensure that the correct clr module is used for interacting with .NET

## Input issues related to the Characteristics Component, including Contour, Vector and Curve and More

* There is an issue where users are unsure about which input values to use when creating Contour, VectorDisplay Curves, and other elements with the Operation API or Result File Reader API.
To resolve this, we suggest the following solution: refer to the Characteristic and Component details displayed in the UI, and use the values shown in the UI as input for the API.

## Issues with using the Standard Library in the Operation API

* When using the Operation API, there is an issue where the Standard Library cannot be accessed.
To resolve this, follow the steps below. This solution applies to Motion version 25R1 and later.

* Issue Resolution Steps :

	1. Navigate to [python.net](https://github.com/IronLanguages/ironpython2/releases/tag/ipy-2.7.12)
	2. Download the IronPython.StdLib.2.7.12.zip file.
	3. Go to the Motion installation directory (e.g., v251\Motion\bin)
	4. In this directory, create a folder named Lib.
	5. Extract the downloaded zip file and place its contents into the Lib folder.

## Issues with Namespace

* If you encounter a reference-related error when using the Operation API or Result File Reader API, most issues can be resolved by following the guidelines below.
* Please refer to  ResultFileReaderAPI.py or OperationAPI.py in "Ansys installed path/Motion/Document/Postprocessor API for Python.zip"