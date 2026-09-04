# ComponentLightBoxImportBuilder

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Builder["Builder"]
    click Builder "class-builder.md" "Open Builder"
    FeatureBuilder["FeatureBuilder"]
    click FeatureBuilder "class-featurebuilder.md" "Open FeatureBuilder"
    ComponentLightBoxImportBuilder["ComponentLightBoxImportBuilder"]
    click ComponentLightBoxImportBuilder "class-componentlightboximportbuilder.md" "Open ComponentLightBoxImportBuilder"
    FeatureBuilder --> ComponentLightBoxImportBuilder
    Builder --> FeatureBuilder
```

**Classes:**

- [Builder](class-builder.md)
- [FeatureBuilder](class-featurebuilder.md)
- [ComponentLightBoxImportBuilder](class-componentlightboximportbuilder.md)

## Description

Represents a Component Light Box Import Builder.

## Member Summary

| Member | Type |
| --- | --- |
| [SpeosLightBoxFilePath](#speoslightboxfilepath) | public |
| [PasswordRequired](#passwordrequired) | public |
| [PreviewMode](#previewmode) | public |
| [CustomAxisSystem](#customaxissystem) | public |
| [BlackBox](#blackbox) | public |
| [Trajectory](#trajectory) | public |
| [TrajectoryFilePath](#trajectoryfilepath) | public |

## Public Static Attributes

### SpeosLightBoxFilePath

`LightBoxFilePath SpeosLightBoxFilePath`

Gets or sets the Speos light box file path.

**Value type**: String.  
  
The default value is an empty file path (string).

---

### PasswordRequired

`bool PasswordRequired`

Gets the property to know if a password is required to read the Speos light box file.

Returns true if a password is required to read the Speos light box file, otherwise returns false.  
**Value type**: Boolean.  
  
The default value is false.

---

### PreviewMode

`int PreviewMode`

Gets or sets the preview mode.

The values are:  
0 - Meshing.  
1 - Bounding Box.  
**Value type**: Integer.  
  
The default value is 1.

---

### CustomAxisSystem

`bool CustomAxisSystem`

Gets or sets the property to activate or deactivate the use of a custom axis system.

True: Enables custom axis system.  
False: Disables custom axis system.  
**Value type**: Boolean.  
  
The default value is False.

---

### BlackBox

`bool BlackBox`

Gets the property to know if the Speos light box file is protected.

Returns true if the Speos light box file is protected, otherwise returns false.  
**Value type**: Boolean.  
  
The default value is false.

---

### Trajectory

`bool Trajectory`

Gets or sets the property to activate or deactivate the use of the trajectory.

True: Enables the trajectory.  
False: Disables the trajectory.  
**Value type**: Boolean.  
  
The default value is False.

---

### TrajectoryFilePath

`FilePath TrajectoryFilePath`

Gets or sets the trajectory file path.

**Value type**: String.  
  
The default value is an empty file path (string).
