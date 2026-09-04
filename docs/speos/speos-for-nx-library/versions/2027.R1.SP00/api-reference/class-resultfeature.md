# ResultFeature

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Feature["Feature"]
    click Feature "class-feature.md" "Open Feature"
    ResultFeature["ResultFeature"]
    click ResultFeature "class-resultfeature.md" "Open ResultFeature"
    Feature --> ResultFeature
```

**Classes:**

- [Feature](class-feature.md)
- [ResultFeature](class-resultfeature.md)

## Description

Represents a Speos result feature.

## Member Summary

| Member | Type |
| --- | --- |
| [AssociatedLPFResult](#associatedlpfresult) | public |
| [Measures](#measures) | public |
| [Rules](#rules) | public |

## Public Static Attributes

### AssociatedLPFResult

`Feature AssociatedLPFResult`

Returns the LPF result feature associated to this XMP result feature.

**Prerequisite**: The result feature must be an XMP result.

---

### Measures

`MeasureCollection Measures`

Returns the collection of measures belonging to this result.

---

### Rules

`RuleCollection Rules`

Returns the collection of rules belonging to this result.
