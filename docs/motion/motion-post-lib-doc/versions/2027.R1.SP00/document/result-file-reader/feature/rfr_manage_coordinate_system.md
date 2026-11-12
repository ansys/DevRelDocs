# Manage a Coordinate System
<div align="right"><a href="/document/result-file-reader/feature/rfr_manage_coordinate_system.md" download="rfr_manage_coordinate_system.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

This feature covers coordinate-system marker operations provided by [`OutputReader`](../../../lib/VM.Post.API.OutputReader.OutputReader.md), including creating, reading, exporting, and removing marker results.

A created coordinate system can support coordinate transformation and operations that accept coordinate system references.

## Creating
Create a coordinate-system marker with [`CreateCoordinateSystem(string, string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.CreateCoordinateSystem.md). The new marker is added to the Dynamics analysis result.

## Getting
Read values for one marker with [`GetMarkerInfo(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetMarkerInfo.md). Read positions for several markers at once with [`GetMarkerPosition(IList<string>)`](../../../lib/VM.Post.API.OutputReader.OutputReader.GetMarkerPosition.md). A name that does not match a marker is simply left out of the result.

## Exporting
Export marker values for chosen states with [`ExportMarkerToFile(string, int[], IResultMarker[])`](../../../lib/VM.Post.API.OutputReader.OutputReader.ExportMarkerToFile.md). The output file contains the marker values for each chosen state.

## Removing
Remove a coordinate-system marker by name with [`RemoveCoordinateSystem(string)`](../../../lib/VM.Post.API.OutputReader.OutputReader.RemoveCoordinateSystem.md). The built-in Inertia coordinate system is preserved.
