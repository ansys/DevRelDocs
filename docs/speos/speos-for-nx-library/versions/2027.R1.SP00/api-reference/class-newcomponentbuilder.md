# NewComponentBuilder

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Builder["Builder"]
    click Builder "class-builder.md" "Open Builder"
    NewComponentBuilder["NewComponentBuilder"]
    click NewComponentBuilder "class-newcomponentbuilder.md" "Open NewComponentBuilder"
    Builder --> NewComponentBuilder
```

**Classes:**

- [Builder](class-builder.md)
- [NewComponentBuilder](class-newcomponentbuilder.md)

## Description

Represents a builder to create new assembly components.

## Member Summary

| Member | Type |
| --- | --- |
| [Name](#name) | public |
| [ReferenceSetName](#referencesetname) | public |
| [NewComponent](#newcomponent) | public |

## Public Static Attributes

### Name

`str Name`

Gets or sets the name of the new component to create.

**Value type**: String.  
  
The default value is an empty string.

---

### ReferenceSetName

`str ReferenceSetName`

Gets or sets the name of the NX reference set to use.

**Value type**: String.  
  
The default value is "Entire Part" Reference Set.

---

### NewComponent

`Component NewComponent`

Returns the created component tag.

**Value type**: Component tag.  
  
The default value is 0.
