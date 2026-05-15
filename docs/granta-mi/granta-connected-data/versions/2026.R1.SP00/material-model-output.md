# Material Model Output

Material Model Output is the JSON-formatted `ModelExportResponse` that is provided by the `/v1/models/export` endpoint.

The full details of what is returned can be seen in the [Swagger](https://grantamaterials.ansys.com/mi_servicelayer/proxy/v1.svc/mms/swagger/index.html) documentation.

Note: If you cannot access the Swagger documentation, ensure that you have a valid Ansys ID, and that you have logged in to the [MI Service Layer homepage](https://grantamaterials.ansys.com/mi_servicelayer).


## Example

An annotated example of a Material Model Output.
```json
{
    "materials": [
        {
            "materialName": "Alumina, 88% pure", 
            "materialId": "046e7049-c548-4ef0-95fc-84362234a8d9",
            "databaseKey": "MI_Starter_Data",
            "databaseName": "Starter Data",
            "tableName": "Starter Data",
            "unitSystem": "Metric",
            "absoluteUnits": false,
            "exportDateTime": "2026-02-03T16:47:50Z",
            // Provenance information about the material data
            "traceabilityNotes": "Material data from Granta MI\r\n
			Record name: Alumina, 88% pure\r\n
			Table name: Starter Data\r\nDate: 2026-02-03 (UTC)",
            "models": [
                 {
                    "modelName": "Elasticity, isotropic with temperature",
                    "modelId": "elasticity.isotropic.with.temp",
                     // If any constraints were defined in the Material Model Definition, the values and units used will be listed here.
                    "constraints": [],
                    "properties": [
                        {
                            "name": "Tensile modulus",
                            "columns": [
                                {
                                    "name": "Tensile modulus",
                                    "symbol": "E",
                                    "unit": "GPa",
					// Indicates if the column represents a free Parameter or data that is dependent on Parameters.
					// In a 2-D graph, the free Parameter would typically be on the 
					// x-axis and the dependent data on the y-axis. 
                                    "isFreeParameter": false,
                                    "numericValues": [
                                        246.3,
                                        229.5,
                                        217.7,
                                        213.5,
                                        215.3,
                                        219.3,
                                        220.3,
                                        213.4,
                                        195.3,
                                        165.8
                                    ],
					// If the Attribute used to source the data has Parameters that are not specified 
					// in the Materials Model Definition as either a free Parameter or a Constraint,
					// a Constraint value will be chosen based on the default Parameter value in the 
					// database. 
					// These constraints will be listed in this section.
                                    "implicitConstraints": []
                                },
                                {
                                    "name": "Temperature",
                                    "symbol": "T",
                                    "unit": "°C",
                                    "isFreeParameter": true,
                                    "numericValues": [
                                        19.850000000000023,
                                        151,
                                        282.1,
                                        413.19999999999993,
                                        544.3,
                                        675.4,
                                        806.5000000000001,
                                        937.6,
                                        1069,
                                        1200
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Poisson's ratio",
                            "symbol": "v",
                            "numericValue": 0.23916520982779324
                        }
                    ]
                },
				{
                    "modelName": "Classification",
                    "modelId": "classification",
                    "constraints": [],
                    "properties": [
                        {
                            "name": "Material class",
                            "stringValue": "Ceramic"
                        },
                        {
                            "name": "Material family",
                            "stringValue": "Ceramic (technical)"
                        },
                        {
                            "name": "Material sub-class",
                            "stringValue": "Technical ceramic"
                        },
                        {
                            "name": "Material form",
                            "stringValue": "Bulk material"
                        },
                        {
                            "name": "Material state",
                            "stringValue": "Solid"
                        }
                    ]
                },
                {
                    "modelName": "Density",
                    "modelId": "density",
                    "constraints": [],
                    "properties": [
                        {
                            "name": "Density",
                            "symbol": "rho",
                            "unit": "kg/m^3",
                            "numericValue": 3474.823760716134
                        }
                    ]
                },
                {
                    "modelName": "Description",
                    "modelId": "description",
                    "constraints": [],
                    "properties": [
                        {
                            "name": "Description",
                            "stringValue": "Aluminum oxide (88% Al2O3)"
                        }
                    ]
                },
                {
                    "modelName": "Elasticity, isotropic",
                    "modelId": "elasticity.isotropic",
                    "constraints": [],
                    "properties": [
                        {
                            "name": "Tensile modulus",
                            "symbol": "E",
                            "unit": "GPa",
                            "numericValue": 249.99874686880756
                        },
                        {
                            "name": "Poisson's ratio",
                            "symbol": "v",
                            "numericValue": 0.23916520982779324
                        }
                    ]
                },
                {
                    "modelName": "Simple failure",
                    "modelId": "simple.failure",
                    "constraints": [],
                    "properties": [
                        {
                            "name": "Tensile strength, yield",
                            "symbol": "YS",
                            "unit": "MPa",
                            "numericValue": 200.0124996093994
                        }
                    ]
                },
                {
                    "modelName": "Specific heat capacity",
                    "modelId": "specific.heat.capacity",
                    "constraints": [],
                    "properties": [
                        {
                            "name": "Specific heat capacity",
                            "symbol": "Cp",
                            "unit": "J/kg.°C",
                            "numericValue": 804.2387705153241
                        }
                    ]
                },
                {
                    "modelName": "Thermal conductivity",
                    "modelId": "thermal.conductivity",
                    "constraints": [],
                    "properties": [
                        {
                            "name": "Thermal conductivity",
                            "symbol": "k",
                            "unit": "W/m.°C",
                            "numericValue": 13.73899558884097
                        }
                    ]
                }
            ]
        }
    ]
}
```