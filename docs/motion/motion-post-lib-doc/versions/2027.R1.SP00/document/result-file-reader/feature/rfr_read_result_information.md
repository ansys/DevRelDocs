# Read Result Information
This feature covers result-information operations provided by [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md) for reading state IDs, reference times, the primary analysis type, and eigenvalue frequency information.

The state IDs and reference times can be used to select result data for later contour and vector operations, see [Get Contour Data](rfr_get_contour_data.md) and [Get Vector Data](rfr_get_vector_data.md).

## State IDs
Read the available state IDs with [`GetStateIDArray()`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetStateIDArray.md). The values come back in result-file order.

## Time Information
Read the reference time for each state with [`GetReferenceTimeArray()`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetReferenceTimeArray.md). Its order matches `GetStateIDArray()`, so the same index in both arrays refers to the same state.

## Analysis Type
Read the primary analysis type with [`GetPrimaryAnalysisResultType()`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetPrimaryAnalysisResultType.md). The result tells which analysis data is the primary one.

## Frequency Information
Read eigenvalue frequency information with [`GetFrequenciesInfoArray()`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetFrequenciesInfoArray.md). Each returned item contains a frequency-result path, a sampling time, and the frequencies found at that time.

## Model Information
Read assembly information with [`GetAssemblyInfo(AssemblyType)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetAssemblyInfo.md) and body information with [`GetBodies(BodyType, bool)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetBodies.md). Read modal mode counts with [`GetModalModeCount(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetModalModeCount.md) and connector information with [`GetConnectors(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetConnectors.md).