# How to use the Problem Test Suite

The problem test suite included with the Algorithm Developer Tools allows developers to run their algorithms against a variety of academic and real-world test problems and compare the performance of their algorithm against the performance of the algorithms included with ModelCenter. New evaluators can be added to the test suite by implementing the `IEvaluator` interface.

## PHXProblemTestSuite *[options] [file]*

With no options, all algorithms are run against all evaluators using their default options.

Options:

- `/help` - get command line help
- `/generate [file]` - generates a new config file without running tests. If a file location is specified, the config file will be generated in that location, otherwise, the config file will be generated in the default location of:<br>
`C:\Users\*[username]*\Documents\Optimization Tool\user.xml`<br>  
If the file already exists, it will be updated with any new algorithms or evaluators, but retaining modifications.
- `[fileName]` - Test suite will run with options and inputs from config file specified and generate a `report.txt` in the same directory.

## *user.xml* File format

The ***user.xml*** file has three top-level elements. The basic format is as follows:

```xml
<PHXProblemsTestSuite>
	<NumberOfStartPoints>30</NumberOfStartPoints>
	<Evaluators></Evaluators>
	<Algorithms></Algorithms>
</PHXProblemsTestSuite>
```

- `NumberOfStartPoints` - Specifies the number of start points that should be used to calculate the performance statistics. (Default: 30)

- `Evaluators` - Lists all of the evaluators found by the problem test suite. The format of the Evaluator element is as follows:

  ```xml
  <Evaluator Name="Rosenbrock discrete function" Use="true"/>
  ```
  
  where:
  - `Name` - has the name of the evaluator
  - `Use` - specifies whether or not the evaluator should be run in this configuration (Default: true)

- `Algorithms` - contains nodes for each of the algorithms found by the problem test suite. The format of the Algorithms element is as follows:

  ```xml
  <Algorithms>
  	<Algorithm Name="Nelder-Mead algorithm with bounded variables" GUID="FBAA5E50-CBB2-484E-BB7D-59FC81A5CD72" Use="true">
  		<Options>
  			<NMOptionsObj>
  				<Size>0.05</Size>
  				<Tolerance>0.0001</Tolerance>
  				<MaxIterations>1000</MaxIterations>
  			</NMOptionsObj>
  		</Options>
  	</Algorithm>
  </Algorithms>
  ```
  
  where:
  - `Name` - The name of the algorithm
  - `GUID` - GUID of the algorithm
  - `Use` - specifies whether or not the evaluator should be run in this configuration (Default: true)
  - `Options` - The XML serialization of the algorithm options



