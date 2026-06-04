# Changelog

## Release - March 2026
Component Versions
 - Ansys Granta MI Enterprise™ 2026 R1
 - Granta Integration Service API 1.0


This release provides:

 - The Granta Materials Picker compatible with the following:
     - Ansys Discovery™ 2026 R1
     - Ansys Sherlock™ 2026 R1
     - Ansys Zemax OpticStudio 2026 R1
 - Ansys Granta MI Enterprise 2026 R1 hosted in a cloud instance, that can be integrated with other applications.


### Highlights of this release

#### Hosted Data
This release includes access to the following databases:

| Database | Description |
|----------|-------------|
| Starter Data |  A collection of records that is designed to help show the types of data that are available in Granta Connected Data. These are available to help develop and test applications. |
| Ansys MaterialUniverse® |  Complete and comparable data for over 4400 commercially-available engineering materials, providing physical, cost, mechanical, thermal, electrical, optical, durability, and environmental data, plus extensive data on over 240 processes.|
| Electromagnetic Materials| Materials used for low frequency and high frequency electromagnetic applications. Includes printed circuit board materials (prepreg, core and laminate), soft magnetic alloys, permanent magnets and EM shielding/absorbing materials.|
|Global Polymers | Comprehensive data for plastic grades and plastics additives. Includes plastics data from Prospector Plastics, with more than 107000 data sheets from over 1000 manufacturers. More than 15000 additives data records provide key properties for additive, filler and masterbatch products, that can be compounded with plastic materials to enhance performance or safety, reduce weight and cost, or improve processing processes.|
|Optics Design Data | Over 4000 vendor-provided materials optimized for use in Ansys Zemax OpticStudio, including data for refractive index, internal transmittance, refraction data vs. wavelength and temperature, as well as mechanical properties.|

#### Granta Material Picker
The Granta Material Picker is a hosted web interface that can be integrated with your application, and supports:

 - Searching for materials
 - Filtering by database, table, and property values
 - Viewing results as a list, scatter plot, or graph
 - Viewing the available models for a material, and selecting material models to import to your application
#### Integration Service

The Integration Service uses a REST API that supports the development of lightweight plugins, that launch Granta Material Picker and receive material model data.

 - Supports programming environments that can execute HTTP requests and parse JSON responses (examples provided)
 - Supports the specification of parameters, including:
    - An Analysis Package that the Material Models must be compatible with
    - The Unit System that will be used to export the Material Model Output data (the default is 'SI (Consistent)')

#### Documentation and Examples
- Information about Material Models, and suggestions for creating your plugin.
- API documentation and examples.
- Resources to help you achieve a consistent look and feel when integrating Granta Material Picker into your application.

### Upgrading from earlier versions
If you have developed an integration against Version 1.0 of the API, there are no breaking changes at this release that you need to be aware of.

The following enhancements and bug fixes have been made:
 - Granta Material Picker now displays numeric data with an accuracy of 6 significant figures.
 - Granta Material Picker can now export up to 100 Material Model records in a single session, subject to the maxRecordBatch limit specified in the session request.
 - Granta Material Picker now respects the display theme that is selected.
