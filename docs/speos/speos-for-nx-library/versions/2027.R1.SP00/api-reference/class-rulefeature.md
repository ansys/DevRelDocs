# RuleFeature

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Feature["Feature"]
    click Feature "class-feature.md" "Open Feature"
    RuleFeature["RuleFeature"]
    click RuleFeature "class-rulefeature.md" "Open RuleFeature"
    Feature --> RuleFeature
```

**Classes:**

- [Feature](class-feature.md)
- [RuleFeature](class-rulefeature.md)

## Description

Represents a Speos rule feature.

## Member Summary

| Member | Type |
| --- | --- |
| [Status](#status) | public |

## Public Static Attributes

### Status

`bool Status`

Gets the rule status.

**Value type**: Boolean.  
  
The default value is false.
