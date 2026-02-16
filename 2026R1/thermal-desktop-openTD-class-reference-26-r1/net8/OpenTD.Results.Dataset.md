# <a id="OpenTD_Results_Dataset"></a> Namespace OpenTD.Results.Dataset

### Namespaces

 [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)

### Classes

 [AverageDataArray](OpenTD.Results.Dataset.AverageDataArray.md)

A DerivedDataArray that returns the average value across its InputCollection
for each record. DataArrays in the InputCollection must all be the same length
and have the same data subtype.

 [Browser](OpenTD.Results.Dataset.Browser.md)

Factory for creating a Browser.

 [CSR](OpenTD.Results.Dataset.CSR.md)

A Dataset representing one CSR directory.
Units are automatically read from the CSR, if available.

 [CompareAssertion](OpenTD.Results.Dataset.CompareAssertion.md)

Contains a Comparer and an assertion about whether the Datasets it tests
are expected to be equal.

 [CompareData](OpenTD.Results.Dataset.CompareData.md)

 [CompareSuite](OpenTD.Results.Dataset.CompareSuite.md)

Use a CompareSuite to test whether multiple pairs of Datasets are equal or not. 
Tests a set of CompareAssertions and collects the results.

 [Comparer](OpenTD.Results.Dataset.Comparer.md)

Use to compare two Datasets.

 [ConcatenatedDataset](OpenTD.Results.Dataset.ConcatenatedDataset.md)

A DerivedDataset that joins its InputDatasets together. Use it when you have
multiple Datasets that represent sequential events. You can use the bool ShiftTimes
to determine whether it adds the previous final time to all the times in the next
Dataset. The default is that it does, i.e., it assumes that all of your input Datasets
start at time 0.

 [ConductorHeat](OpenTD.Results.Dataset.ConductorHeat.md)

Represents heatrate data for a conductor connection.

 [DataArray](OpenTD.Results.Dataset.DataArray.md)

Data is returned from Datasets in the form of DataArrays, which in addition to 
containing the actual data, also know the physical dimension of the data, what
units it is in, and have a reference to the Dataset it came from. Use the GetValues
methods to get the data as lists of doubles, or use DataArrays directly as
inputs to SimplePlots.

 [DataArrayCollection](OpenTD.Results.Dataset.DataArrayCollection.md)

A collection of DataArrays, with some metadata describing them.

 [DataArrayEnumerator](OpenTD.Results.Dataset.DataArrayEnumerator.md)

Used internally when iterating over the values in a DataArray.

 [DataItemIdentifier](OpenTD.Results.Dataset.DataItemIdentifier.md)

Identifies a data subtype (T, TL, PL, etc.) -- with an optional fluid
constituent (A, B, W, etc.) -- associated with an "item"
(an entity (node, lump, etc.), register, record number, etc.), e.g.,
MAIN.T6, FLOW.PL100, FLOW.GTA10, MYREGISTER DIMENSIONLESS.
Note: the Units member is only applicable to registers. If null,
default units will be assumed.

 [DataItemIdentifierCollection](OpenTD.Results.Dataset.DataItemIdentifierCollection.md)

Collection of DataItemIdentifiers

 [DataSubtype](OpenTD.Results.Dataset.DataSubtype.md)

Represents one data subtype, e.g., TL (lump temperature). If using C#, you can supply
a StandardDataSubtype anywhere a DataSubtype is expected and it will be implicity converted
to a DataSubtype. This also works with a FullStandardDataSubtype.

 [Dataset](OpenTD.Results.Dataset.Dataset.md)

An abstract class representing a set of solution results from a Sinda run.
Returns data as DataArrays.

 [DatasetFactory](OpenTD.Results.Dataset.DatasetFactory.md)

Use to load various datasets from disk.

 [DatasetSlice](OpenTD.Results.Dataset.DatasetSlice.md)

A DerivedDataset that accepts only one InputDataset and returns data for
a time slice within that Dataset. Use when you're only interested in a
certain time slice within your results.

 [DerivedDataArray](OpenTD.Results.Dataset.DerivedDataArray.md)

A DerivedDataArray is a DataArray that gets its data by operating on its InputCollection
of DataArrays. For example, a SelectMaxDataArray selects the DataArray with the maximum
value and returns data from it only. An AverageDataArray returns the average value of its
InputCollection at each record. To create your own custom DerivedDataArray, inherit from
this class and override at least the SetDerivedData() method.

 [DerivedDataset](OpenTD.Results.Dataset.DerivedDataset.md)

A dataset derived from one or more input datasets. When you request data from a DerivedDataset,
it performs an operation on the input datasets to combine their data. For example, a
ConcatenatedDataset stitches together all of the data from its input datasets.

 [FormulaDataArray](OpenTD.Results.Dataset.FormulaDataArray.md)

A DerivedDataArray that generate values using a formula that
references 0 or more arrays from its InputCollection.

 [HeatratesBetween](OpenTD.Results.Dataset.HeatratesBetween.md)

Helper class for <code>NodeHeatrates</code> providing summary calculations
for heatrates between "From" and "To" node collections.  Positive heatrates
indicate heat flowing out of the From set.

 [ItemIdentifier](OpenTD.Results.Dataset.ItemIdentifier.md)

A class to generalize "items" that are associated with data,
e.g., entities (nodes, lumps, etc.), registers, record numbers, etc.

 [ItemIdentifierCollection](OpenTD.Results.Dataset.ItemIdentifierCollection.md)

Collection of ItemIdentifiers

 [MaxDataArray](OpenTD.Results.Dataset.MaxDataArray.md)

A DerivedDataArray that returns the maximum value across its InputCollection
for each record. DataArrays in the InputCollection must all be the same length
and have the same data subtype.

 [MinDataArray](OpenTD.Results.Dataset.MinDataArray.md)

A DerivedDataArray that returns the minimum value across its InputCollection
for each record. DataArrays in the InputCollection must all be the same length
and have the same data subtype.

 [NodeConductorHeatrates](OpenTD.Results.Dataset.NodeConductorHeatrates.md)

Rerpesents a node and the heatrates for connected conductors.

 [NodeHeatrates](OpenTD.Results.Dataset.NodeHeatrates.md)

Holds a node and heatrates for its connected conductors and ties.

 [NodeTieHeatrates](OpenTD.Results.Dataset.NodeTieHeatrates.md)

Rerpesents a node and the heatrates for connected ties.

 [OneSubtypeDerivedDataArray](OpenTD.Results.Dataset.OneSubtypeDerivedDataArray.md)

A derived data array where all DataArrays in the InputCollection have the
same subtype, e.g., they are all arrays of TL data.

 [PercentDifferenceCompareData](OpenTD.Results.Dataset.PercentDifferenceCompareData.md)

This ICompareData implementation compares data of a single subtype (T, TL, etc.)
for all applicable common entities (nodes or lumps or... etc.) between two
datasets by examining the percent difference between pairs of values at each
record for each common-named entity. For this comparison, Datasets must have
the same number of records.

 [RadkDatabase](OpenTD.Results.Dataset.RadkDatabase.md)

Dataset representing data stored in a radk database.

 [SaveFile](OpenTD.Results.Dataset.SaveFile.md)

A Dataset representing one save file.
Units are automatically read from the save file, if available.

 [SaveXFile](OpenTD.Results.Dataset.SaveXFile.md)

A Dataset representing one savex file.
Units are automatically read from the savex file, if available.

 [SelectMaxDataArray](OpenTD.Results.Dataset.SelectMaxDataArray.md)

A SelectOneDataArray that selects the DataArray with the maximum
value and returns data from it only.

 [SelectMinDataArray](OpenTD.Results.Dataset.SelectMinDataArray.md)

A SelectOneDataArray that selects the DataArray with the minimum
value and returns data from it only.

 [SelectOneDataArray](OpenTD.Results.Dataset.SelectOneDataArray.md)

A DerivedDataArray that uses some criterion to select one of its input DataArrays
and returns data solely from it.

 [SimpleDataset](OpenTD.Results.Dataset.SimpleDataset.md)

Base class for simple datasets for which it might make sense to get all
of the data at once using a single method.
Implements the <xref href="OpenTD.Results.Dataset.Dataset" data-throw-if-not-resolved="false"></xref>
Implements the <xref href="OpenTD.Results.Dataset.ISimpleDataset" data-throw-if-not-resolved="false"></xref>
Implements the <xref href="OpenTD.Results.Dataset.IDataset" data-throw-if-not-resolved="false"></xref>

 [SpreadsheetDataFile](OpenTD.Results.Dataset.SpreadsheetDataFile.md)

Dataset representing data stored in a csv-style file. Each column is a series,
while each row is a record. The first row contains DataItemIdentifiers. The
second row contains units. Third and subsequent rows contain data. "NaN" or
empty cells are treated as NaN. Default delimiters are comma and tab. All registers
(except TIMEN) are considered dimensionless and their units are ignored. The name
"time" (case-insensitive) can also be used for TIMEN.

 [SumDataArray](OpenTD.Results.Dataset.SumDataArray.md)

A DerivedDataArray that returns the sum across its InputCollection
for each record. DataArrays in the InputCollection must all
have the same data subtype.

 [TextTransientFile](OpenTD.Results.Dataset.TextTransientFile.md)

Represents a TD text transient file, a text-file containing results or
test data in a format specified in the TD manual.
Implements the <xref href="OpenTD.Results.Dataset.SimpleDataset" data-throw-if-not-resolved="false"></xref>
Implements the <xref href="OpenTD.Results.Dataset.ISimpleDataset" data-throw-if-not-resolved="false"></xref>
Implements the <xref href="OpenTD.Results.Dataset.IDataset" data-throw-if-not-resolved="false"></xref>

 [TieHeat](OpenTD.Results.Dataset.TieHeat.md)

Represents heatrate data for a tie connection.

 [UDFADescriptor](OpenTD.Results.Dataset.UDFADescriptor.md)

Describes a user-defined Fortran array (UDFA)

 [WeightedAverageDataArray](OpenTD.Results.Dataset.WeightedAverageDataArray.md)

A DerivedDataArray that returns a weighted average value across its InputCollection
for each record. DataArrays in the InputCollection must all be the same length
and have the same data subtype.
Note: if IgnoreNaNInCalculations is true, NaN in input and weighting arrays will be treated as 0.0.

### Structs

 [Exceedance](OpenTD.Results.Dataset.Exceedance.md)

Contains information about an item that exceeds a tolerance.

 [ExceedancePlot](OpenTD.Results.Dataset.ExceedancePlot.md)

Contains information about a plot that displays an Exceedance.

 [FullStandardDataSubtype](OpenTD.Results.Dataset.FullStandardDataSubtype.md)

Represents a StandardDataSubtype (XG, XMDOT, etc.) and a fluid constituent (A, W, etc.)

### Interfaces

 [IBasicDataset](OpenTD.Results.Dataset.IBasicDataset.md)

 [IBrowser](OpenTD.Results.Dataset.IBrowser.md)

<code>IBrowser</code> interface providing methods for 
<em>Heatmap</em> and <em>HeatBetween</em> nodes and node collecions.

 [ICompareData](OpenTD.Results.Dataset.ICompareData.md)

Represents an algorithm for comparing all data of a single DataSubtype (T, TL, etc.) between two datasets.
Objects that implement this interface can be used within Comparer.ComparisonMethods
or Comparer.DefaultComparisonMethod. See PercentDifferenceCompareData for an example
implementation.

 [IComparerInput](OpenTD.Results.Dataset.IComparerInput.md)

Collects together all of the Comparer members that will be input to an ICompareData object.

 [IComparerOutput](OpenTD.Results.Dataset.IComparerOutput.md)

Collects together all of the Comparer members that will be output from an ICompareData object.

 [IDataset](OpenTD.Results.Dataset.IDataset.md)

An interface to save files, CSR's, spreadsheets and other objects that store solution data.

 [ISimpleDataset](OpenTD.Results.Dataset.ISimpleDataset.md)

Provides a method to get all data at once from a small dataset.

### Enums

 [ArrayIntegerNames](OpenTD.Results.Dataset.ArrayIntegerNames.md)

Sinda results standard names for integer arrays.

 [DataTypeFamilies](OpenTD.Results.Dataset.DataTypeFamilies.md)

Results data families (thermal, fluid, etc.)

 [DataTypes](OpenTD.Results.Dataset.DataTypes.md)

Results data types (node, lump, etc.)

 [FluidConstituents](OpenTD.Results.Dataset.FluidConstituents.md)

For fluid submodels with multiple fluid constituents.

 [IntegerNames](OpenTD.Results.Dataset.IntegerNames.md)

Sinda results standard integer names.

 [StandardDataSubtypes](OpenTD.Results.Dataset.StandardDataSubtypes.md)

Results data subtypes (T, TL, PL, etc.)

 [ItemIdentifier.Types](OpenTD.Results.Dataset.ItemIdentifier.Types.md)

Item Identifier types: register name, SUBMODEL.ID, etc.

 [UDFAType](OpenTD.Results.Dataset.UDFAType.md)

Type of entity (if any) associated with UDFA

 [DataSubtype.ValueTypes](OpenTD.Results.Dataset.DataSubtype.ValueTypes.md)

Value types: double, integer, etc.

