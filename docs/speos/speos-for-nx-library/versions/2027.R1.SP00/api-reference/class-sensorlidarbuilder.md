# SensorLiDARBuilder

## Class Inheritance

```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    Builder["Builder"]
    click Builder "class-builder.md" "Open Builder"
    FeatureBuilder["FeatureBuilder"]
    click FeatureBuilder "class-featurebuilder.md" "Open FeatureBuilder"
    SensorLiDARBuilder["SensorLiDARBuilder"]
    click SensorLiDARBuilder "class-sensorlidarbuilder.md" "Open SensorLiDARBuilder"
    FeatureBuilder --> SensorLiDARBuilder
    Builder --> FeatureBuilder
```

**Classes:**

- [Builder](class-builder.md)
- [FeatureBuilder](class-featurebuilder.md)
- [SensorLiDARBuilder](class-sensorlidarbuilder.md)

## Description

Represents a LiDAR sensor Builder.

## Member Summary

| Member | Type | Description |
| --- | --- | --- |
| [SensorType](#sensortype) | public | Gets or sets the sensor type. |
| [DisplaySensorField](#displaysensorfield) | public | Gets or sets the property to display the sensor field. |
| [DisplayObjectField](#displayobjectfield) | public | Gets or sets the property to display the object field. |
| [ObjectFieldRadius](#objectfieldradius) | public | Gets or sets the object field radius. |
| [DisplayPupil](#displaypupil) | public | Gets or sets the property to display the pupil. |
| [SourceScanningSequenceFilePath](#sourcescanningsequencefilepath) | public | Gets or sets the scanning sequence file of the source. |
| [SourceRotatingSequenceFilePath](#sourcerotatingsequencefilepath) | public | Gets or sets the rotating sequence file of the source. |
| [SourceUseTrajectoryFile](#sourceusetrajectoryfile) | public | Gets or sets the property to activate or deactivate the use of the trajectory file. |
| [SourceTrajectoryFilePath](#sourcetrajectoryfilepath) | public | Gets or sets the trajectory file of the source. |
| [SourceSpectrumType](#sourcespectrumtype) | public | Gets or sets the spectrum type of the source. |
| [SourceWavelength](#sourcewavelength) | public | Gets or sets the wavelength of the source. |
| [SourceSpectrumFilePath](#sourcespectrumfilepath) | public | Gets or sets the spectrum file of the source. |
| [SourceIntensityType](#sourceintensitytype) | public | Gets or sets the intensity type of the source. |
| [SourceIntensityFilePath](#sourceintensityfilepath) | public | Gets or sets the intensity distribution file of the source. |
| [SourceIntensityTotalAngle](#sourceintensitytotalangle) | public | Gets or sets the total angle of emission of the source. |
| [SourceIntensityFWHMXAngle](#sourceintensityfwhmxangle) | public | Gets or sets the FWHM angle for X direction of the source. |
| [SourceIntensityFWHMYAngle](#sourceintensityfwhmyangle) | public | Gets or sets the FWHM angle for Y direction of the source. |
| [SourcePulseEnergy](#sourcepulseenergy) | public | Gets or sets the pulse energy of the source. |
| [SourceMinIntensityThreshold](#sourceminintensitythreshold) | public | Gets or sets the minimum intensity threshold of the source. |
| [SensorDistortionFilePath](#sensordistortionfilepath) | public | Gets or sets the distortion file of the sensor. |
| [SensorTransmittance](#sensortransmittance) | public | Gets or sets the transmittance of the sensor. |
| [SensorTransmittanceFilePath](#sensortransmittancefilepath) | public | Gets or sets the transmittance file of the sensor. |
| [SensorFocalLength](#sensorfocallength) | public | Gets or sets the focal length of the sensor. |
| [SensorPupilDiameter](#sensorpupildiameter) | public | Gets or sets the pupil diameter of the sensor. |
| [SensorHorizontalFOV](#sensorhorizontalfov) | public | Gets the horizontal field of view of the sensor. |
| [SensorVerticalFOV](#sensorverticalfov) | public | Gets the vertical field of view of the sensor. |
| [SensorImagerWidth](#sensorimagerwidth) | public | Gets or sets the image width of the sensor. |
| [SensorImagerHeight](#sensorimagerheight) | public | Gets or sets the image height of the sensor. |
| [SensorResolution](#sensorresolution) | public | Gets or sets the property to activate or deactivate the use of the sensor resolution. |
| [SensorHorizontalPixels](#sensorhorizontalpixels) | public | Gets or sets the number of horizontal pixels of the sensor. |
| [SensorVerticalPixels](#sensorverticalpixels) | public | Gets or sets the number of vertical pixels of the sensor. |
| [SensorStart](#sensorstart) | public | Gets or sets the start of the sensor. |
| [SensorEnd](#sensorend) | public | Gets or sets the end of the sensor. |
| [SensorSpatialAccuracy](#sensorspatialaccuracy) | public | Gets or sets the spatial accuracy of the sensor. |
| [AimingArea](#aimingarea) | public | Gets or sets the property to define an Aiming Area for the sensor. |
| [AimingAreaType](#aimingareatype) | public | Gets or sets the aiming area type. |
| [AimingAreaWidth](#aimingareawidth) | public | Gets or sets the aiming area width of the sensor. |
| [AimingAreaHeight](#aimingareaheight) | public | Gets or sets the aiming area height of the sensor. |

## Public Static Attributes

### SensorType

`int SensorType`

Gets or sets the sensor type.

The values are:  
0 - Static.  
1 - Scanning.  
2 - Rotating.  
  
**Value type**: Integer.  
  
The default value is 0.

---

### DisplaySensorField

`bool DisplaySensorField`

Gets or sets the property to display the sensor field.

True: Activates the visualization of the imager's field in the 3D view.  
False: Deactivates the visualization of the imager's field in the 3D view.  
  
**Value type**: Boolean.  
  
The default value is True.

---

### DisplayObjectField

`bool DisplayObjectField`

Gets or sets the property to display the object field.

True: Activates the visualization of the sensor's viewing angle in the 3D view.  
False: Deactivates the visualization of the sensor's viewing angle in the 3D view.  
  
**Value type**: Boolean.  
  
The default value is True.

---

### ObjectFieldRadius

`float ObjectFieldRadius`

Gets or sets the object field radius.

**Prerequisite**: The DisplayObjectField property must be True.  
  
**Value type**: Double (in mm).  
**Range**: The value must be superior to 0.0.  
  
The default value is 100.0 mm.

---

### DisplayPupil

`bool DisplayPupil`

Gets or sets the property to display the pupil.

True: Activates the visualization of the sensor's lens in the 3D view.  
False: Deactivates the visualization of the sensor's lens in the 3D view.  
  
**Value type**: Boolean.  
  
The default value is True.

---

### SourceScanningSequenceFilePath

`SequenceFilePath SourceScanningSequenceFilePath`

Gets or sets the scanning sequence file of the source.

The file must be a scanning sequence (.OPTScanSequence) or text (.txt).  
  
**Value type**: String.  
  
The default value is an empty string.

---

### SourceRotatingSequenceFilePath

`SequenceFilePath SourceRotatingSequenceFilePath`

Gets or sets the rotating sequence file of the source.

The file must be a text (.txt).  
  
**Value type**: String.  
  
The default value is an empty string.

---

### SourceUseTrajectoryFile

`bool SourceUseTrajectoryFile`

Gets or sets the property to activate or deactivate the use of the trajectory file.

True: Activates the use of the trajectory file.  
False: Deactivates the use of the trajectory file.  
  
**Value type**: Boolean.  
  
The default value is True.

---

### SourceTrajectoryFilePath

`TrajectoryFilePath SourceTrajectoryFilePath`

Gets or sets the trajectory file of the source.

The file must be a Json (.json).  
  
**Value type**: String.  
  
The default value is an empty string.

---

### SourceSpectrumType

`int SourceSpectrumType`

Gets or sets the spectrum type of the source.

The values are:  
0 - Library.  
1 - Monochromatic.  
  
**Value type**: Integer.  
  
The default value is 1.

---

### SourceWavelength

`float SourceWavelength`

Gets or sets the wavelength of the source.

**Value type**: Double (in nm).  
**Range**: The value must be superior to 0.0.  
  
The default value is 940.0 nm.

---

### SourceSpectrumFilePath

`SpectrumFilePath SourceSpectrumFilePath`

Gets or sets the spectrum file of the source.

The file must be a spectrum (.spectrum).  
  
**Value type**: String.  
  
The default value is an empty string.

---

### SourceIntensityType

`int SourceIntensityType`

Gets or sets the intensity type of the source.

The values are:  
0 - Library.  
1 - Gaussian.  
  
**Value type**: Integer.  
  
The default value is 1.

---

### SourceIntensityFilePath

`IntensityFilePath SourceIntensityFilePath`

Gets or sets the intensity distribution file of the source.

The file must be an IES (.ies) or Eulumdat (.ldt).  
  
**Value type**: String.  
  
The default value is an empty string.

---

### SourceIntensityTotalAngle

`float SourceIntensityTotalAngle`

Gets or sets the total angle of emission of the source.

**Value type**: Double (in degree).  
**Range**: [0.0, 180.0].  
  
The default value is 180 deg.

---

### SourceIntensityFWHMXAngle

`float SourceIntensityFWHMXAngle`

Gets or sets the FWHM angle for X direction of the source.

**Value type**: Double (in degree).  
**Range**: [0.0, 180.0].  
  
The default value is 0.2 deg.

---

### SourceIntensityFWHMYAngle

`float SourceIntensityFWHMYAngle`

Gets or sets the FWHM angle for Y direction of the source.

**Value type**: Double (in degree).  
**Range**: [0.0, 180.0].  
  
The default value is 0.2 deg.

---

### SourcePulseEnergy

`float SourcePulseEnergy`

Gets or sets the pulse energy of the source.

**Value type**: Double (in joule).  
**Range**: The value must be superior to 0.0.  
  
The default value is 0.0000003 j.

---

### SourceMinIntensityThreshold

`float SourceMinIntensityThreshold`

Gets or sets the minimum intensity threshold of the source.

**Value type**: Double.  
**Range**: [0.0, 100.0]  
  
The default value is 1.0.

---

### SensorDistortionFilePath

`DistortionFilePath SensorDistortionFilePath`

Gets or sets the distortion file of the sensor.

The file must be an .OPTDistortion file.  
  
**Value type**: String.  
  
The default value is an empty string.

---

### SensorTransmittance

`float SensorTransmittance`

Gets or sets the transmittance of the sensor.

**Value type**: Double.  
**Range**: The value must be superior to 0.0.  
  
The default value is 85.0.

---

### SensorTransmittanceFilePath

`TransmittanceFilePath SensorTransmittanceFilePath`

Gets or sets the transmittance file of the sensor.

**Prerequisite**: This property is only available for LiDAR sensor scanning or rotating with the SourceSpectrumType property sets to Library.  
  
The file must be a spectrum (.spectrum).  
  
**Value type**: String.  
  
The default value is an empty string.

---

### SensorFocalLength

`float SensorFocalLength`

Gets or sets the focal length of the sensor.

**Value type**: Double (in mm).  
**Range**: The value must be superior or equal to 0.0.  
  
The default value is 15.0 mm.

---

### SensorPupilDiameter

`float SensorPupilDiameter`

Gets or sets the pupil diameter of the sensor.

**Value type**: Double (in mm).  
**Range**: The value must be superior to 0.0.  
  
The default value is 10.0 mm.

---

### SensorHorizontalFOV

`float SensorHorizontalFOV`

Gets the horizontal field of view of the sensor.

**Value type**: Double.

---

### SensorVerticalFOV

`float SensorVerticalFOV`

Gets the vertical field of view of the sensor.

**Value type**: Double.

---

### SensorImagerWidth

`float SensorImagerWidth`

Gets or sets the image width of the sensor.

**Value type**: Double.  
**Range**: The value must be superior to 0.0.  
  
The default value is 3.2.

---

### SensorImagerHeight

`float SensorImagerHeight`

Gets or sets the image height of the sensor.

**Value type**: Double.  
**Range**: The value must be superior to 0.0.  
  
The default value is 3.2.

---

### SensorResolution

`bool SensorResolution`

Gets or sets the property to activate or deactivate the use of the sensor resolution.

True: Activates the use of the sensor resolution.  
False: Deactivates the use of the sensor resolution.  
  
**Value type**: Boolean.  
  
The default value is False.

---

### SensorHorizontalPixels

`int SensorHorizontalPixels`

Gets or sets the number of horizontal pixels of the sensor.

**Value type**: Integer.  
**Range**: The value must be superior to 0.  
  
The default value is 64.

---

### SensorVerticalPixels

`int SensorVerticalPixels`

Gets or sets the number of vertical pixels of the sensor.

**Value type**: Integer.  
**Range**: The value must be superior to 0.  
  
The default value is 64.

---

### SensorStart

`float SensorStart`

Gets or sets the start of the sensor.

**Value type**: Double.  
**Range**: The value must be superior or equal to 0.0.  
  
The default value is 0.0.

---

### SensorEnd

`float SensorEnd`

Gets or sets the end of the sensor.

**Value type**: Double.  
**Range**: The value must be superior or equal to 0.0.  
  
The default value is 0.0.

---

### SensorSpatialAccuracy

`float SensorSpatialAccuracy`

Gets or sets the spatial accuracy of the sensor.

**Value type**: Double.  
**Range**: The value must be superior to 0.0.  
  
The default value is 100.0.

---

### AimingArea

`bool AimingArea`

Gets or sets the property to define an Aiming Area for the sensor.

True: Activates the Aiming Area.  
False: Deactivates the Aiming Area.  
  
**Value type**: Boolean.  
  
The default value is False.

---

### AimingAreaType

`int AimingAreaType`

Gets or sets the aiming area type.

The values are:  
0 - Rectangular.  
1 - Elliptic.  
  
**Value type**: Integer.  
  
The default value is 1.

---

### AimingAreaWidth

`float AimingAreaWidth`

Gets or sets the aiming area width of the sensor.

**Value type**: Double.  
**Range**: The value must be superior to 0.0.  
  
The default value is 0.0.

---

### AimingAreaHeight

`float AimingAreaHeight`

Gets or sets the aiming area height of the sensor.

**Value type**: Double.  
**Range**: The value must be superior to 0.0.  
  
The default value is 0.0.
