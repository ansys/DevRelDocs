# Manage a Coordinate System
This feature covers coordinate-system marker operations provided by [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md), including creating, reading, exporting, and removing marker results.

A created coordinate system can support coordinate transformation and operations that accept coordinate system references.

## Creating
Create a coordinate-system marker with [`CreateCoordinateSystem(string, string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.CreateCoordinateSystem.md). The new marker is added to the Dynamics analysis result.

## Getting
Read values for one marker with [`GetMarkerInfo(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetMarkerInfo.md). Read positions for several markers at once with [`GetMarkerPosition(IList<string>)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetMarkerPosition.md). A name that does not match a marker is simply left out of the result.

## Exporting
Export marker values for chosen states with [`ExportMarkerToFile(string, int[], IResultMarker[])`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportMarkerToFile.md). The output file contains the marker values for each chosen state.

## Removing
Remove a coordinate-system marker by name with [`RemoveCoordinateSystem(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.RemoveCoordinateSystem.md). The built-in `Inertia` coordinate system is preserved.