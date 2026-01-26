---
uid: class_speos_n_x__2512_1_1_result_feature
title: ResultFeature
---

# ResultFeature Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `Feature`

Represents a Speos result feature.

## Description

A base class for all Speos result features.



This class provides the basic functionality common to all result features.
 To obtain an instance of this class, refer to `FeatureSimulation::GetResults()`.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `AssociatedLPFResult` | `str` | Returns the LPF result feature associated to this XMP result feature. |
| `FilePath` | `str` | Gets the result file path. |
| `Filename` | `str` | Gets the result file name with its extension. |
| `Measures` | `str` | Returns the collection of measures belonging to this result. |
| `Rules` | `str` | Returns the collection of rules belonging to this result. |
