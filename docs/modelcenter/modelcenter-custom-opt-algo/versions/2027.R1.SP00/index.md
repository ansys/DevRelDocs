# Introduction

The ModelCenter Custom Optimization Algorithm SDK enables you to create custom optimization algorithms for use in ModelCenter products. Use the SDK to implement proprietary or research optimization methods, integrate external solvers, and extend ModelCenter's built-in algorithm catalog for automated engineering studies.

With this SDK you can define algorithm behavior and options, register capabilities, validate implementations against standard test problems, and package algorithms for distribution to ModelCenter users.

For an overview of the algorithm lifecycle, see [Create an algorithm index](create_algorithm/create_algo_index.md).

## Who should use this SDK?

This SDK is designed for:

- Software developers implementing custom optimization algorithms for ModelCenter workflows
- Engineering teams integrating proprietary or research optimization methods into automated studies
- Algorithm authors who need to test and benchmark implementations before deployment

## Supported languages and platforms

- **Languages:** Java and .NET (C#)
- **Platform:** Windows
- **Audience:** Developers with experience in object-oriented programming and optimization concepts

## Licensing considerations

Developing and running custom optimization algorithms requires a valid **ModelCenter** license on machines where algorithms are built, tested, and executed in workflows.

If your algorithm uses FlexLM licensing for its own features, implement the [`LicenseFeature`](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#licensefeature) property on your algorithm class. Return an empty string when your algorithm does not require a separate license feature.

When you test algorithms with the problem test suite or evaluate models through [`ModelCenterEvaluator`](api/Namespaces/NamespaceList/Phoenix/Optimization/AlgorithmTests/Evaluators/ModelCenterEvaluator.md), ModelCenter enforces its standard licensing.
