# Create Algorithm Tests

A suite of unit tests for the algorithm are included with the Developer Tools. Implementing and running the tests help ensure that the algorithm will work properly within the Optimization Tool.

## Added NUnit Tests

The algorithm tests require NUnit to run. NUnit can be downloaded for free from [nunit.org](http://www.nunit.org/download). 

1. Select **New > Project** from the **File** menu in Visual Studio, or select **New Project** from the **File** menu in Visual Studio or Visual Studio Express.

2. Select the **PHXAlgorithmTests** template from the **Visual C#** section and enter a project name (something like "*[algorithm name]* Tests").

3. Select **Add to Solution** and then click the **OK** button.

4. One method and one property need to be implemented:
   - [`createAlgorithm()`](../api/Namespaces/NamespaceList/Phoenix/Optimization/AlgorithmTests/AlgorithmTestFixture.md#createAlgorithm) - Method to instantiate the algorithm to be tested.
   - [`AlgorithmInstallationPath`](../api/Namespaces/NamespaceList/Phoenix/Optimization/AlgorithmTests/AlgorithmTestFixture.md#property.AlgorithmInstallationPath) - Method used by the test to locate the algorithm to be tested.

### See Also

- [AlgorithmTestFixture](../api/Namespaces/NamespaceList/Phoenix/Optimization/AlgorithmTests/AlgorithmTestFixture.md)



