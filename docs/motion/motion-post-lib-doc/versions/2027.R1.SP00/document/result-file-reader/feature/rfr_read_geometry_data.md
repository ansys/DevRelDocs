# Read Geometry Data
This feature covers geometry-data operations provided by [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md), including reading body geometry information, node values, named selections, node counts, and outer-face connectivity.

## Reading Geometry
Read geometry information for a named body or for all body entities with [`GetGeometryInfo(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetGeometryInfo.md) and [`GetGeometryInfoArray()`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetGeometryInfoArray.md). Read the node coordinate values for a named body with [`GetGeometryNodes(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetGeometryNodes.md).

## Reading Entity Data
Read named selections with [`GetNamedSelections()`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetNamedSelections.md). Count selected body nodes with [`GetBodiesNodeCount(IList<string>)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetBodiesNodeCount.md) and count selected body nodes before a target body with [`GetPreviousBodiesNodeCount(IList<string>, string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetPreviousBodiesNodeCount.md).

## Reading Outer-Face Connectivity
Read visible outer-face triangle connectivity for a body with [`GetOuterface(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetOuterface.md).