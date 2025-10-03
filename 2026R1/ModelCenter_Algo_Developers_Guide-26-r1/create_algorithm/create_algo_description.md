# Implement Description Properties

The description properties are read-only properties that provide information about the algorithm to the infrastructure.

- [`Author`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#author) - The author of the algorithm.

- [`Description`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#description) - A brief description of the algorithm.

- [`HelpFilePath`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#helpfilepath) - The path to the help file to be used for the algorithm. The help file can be in any format that Windows is registered to open. The help file path should be a relative path to the help file relative to the location from which the algorithm will be loaded.

- [`HelpURL`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#helpurl) - The `HelpURL` that can be used to get more information about the author, the implementation, and/or the algorithm.

- [`IconLocation`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#iconlocation) - The path to the icon for the algorithm (in `.ico` format) relative to the algorithm's directory.

- [`Keywords`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#keywords) - These are the keywords provided to Optimization Tool infrastructure.

- [`LicenseFeature`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#licensefeature) - This is the FlexLM license feature used for this algorithm. If the algorithm does not use FlexLM licensing, an empty string should be returned.

- [`Name`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#name) - The name of the algorithm that will be displayed by the Optimization Tool.

- [`ReleaseDate`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#releasedate) - This is the release date to be used for the FlexLM licensing. The release date is in YYYY.MMDD format (e.g., 2025.10.05 for October 5, 2025).

- [`Version`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#version) - This is the version information provided to Optimization Tool infrastructure.

It is recommended that `Description`, `HelpFilePath`, `HelpURL`, and `Keywords` be specified using the `UIStrings` resource so that they can be translated. The license feature should not be translatable.








