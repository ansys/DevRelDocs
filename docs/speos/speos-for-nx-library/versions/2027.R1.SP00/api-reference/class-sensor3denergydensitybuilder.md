# Sensor3DEnergyDensityBuilder

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Builder["Builder"]
    click Builder "class-builder.md" "Open Builder"
    FeatureBuilder["FeatureBuilder"]
    click FeatureBuilder "class-featurebuilder.md" "Open FeatureBuilder"
    Sensor3DEnergyDensityBuilder["Sensor3DEnergyDensityBuilder"]
    click Sensor3DEnergyDensityBuilder "class-sensor3denergydensitybuilder.md" "Open Sensor3DEnergyDensityBuilder"
    FeatureBuilder --> Sensor3DEnergyDensityBuilder
    Builder --> FeatureBuilder
```

**Classes:**

- [Builder](class-builder.md)
- [FeatureBuilder](class-featurebuilder.md)
- [Sensor3DEnergyDensityBuilder](class-sensor3denergydensitybuilder.md)

## Description

Represents the builder for a 3D energy density sensor.

## Member Summary

| Member | Type |
| --- | --- |
| [Type](#type) | public |
| [XSize](#xsize) | public |
| [XSampling](#xsampling) | public |
| [YSize](#ysize) | public |
| [YSampling](#ysampling) | public |
| [ZSize](#zsize) | public |
| [ZSampling](#zsampling) | public |

## Public Static Attributes

### Type

`int Type`

Gets or sets the sensor type.

The values are:  
0 - Photometric. The sensor considers the visible spectrum.  
1 - Radiometric. The sensor considers the entire spectrum.  
**Value type**: Integer.  
  
The default value is 0.

---

### XSize

`float XSize`

Gets or sets the X size.

**Value type**: Double (in mm).  
**Range** The value must be superior to 0.0.  
  
The default value is 50.0 mm.

---

### XSampling

`int XSampling`

Gets or sets the X sampling.

**Value type**: Integer.  
**Range** The value must be superior to 0.  
  
The default value is 100.

---

### YSize

`float YSize`

Gets or sets the Y size.

**Value type**: Double (in mm).  
**Range** The value must be superior to 0.0.  
  
The default value is 50.0 mm.

---

### YSampling

`int YSampling`

Gets or sets the Y sampling.

**Value type**: Integer.  
**Range** The value must be superior to 0.  
  
The default value is 100.

---

### ZSize

`float ZSize`

Gets or sets the Z size.

**Value type**: Double (in mm).  
**Range** The value must be superior to 0.0.  
  
The default value is 50.0 mm.

---

### ZSampling

`int ZSampling`

Gets or sets the Z sampling.

**Value type**: Integer.  
**Range** The value must be superior to 0.  
  
The default value is 100.
