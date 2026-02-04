# Material Model Output

The Material Model Output is returned from the Granta Integration Service, or directly from the Granta Material Model Service. The details of what is
returned can be seen on the [Swagger UI page](https://test-grantami.awsansys7np.onscale.com/mi_servicelayer/proxy/v1.svc/mms/swagger/index.html).
(If you get an authentication error, you may have to log in using OIDC to the [MI Service Layer homepage](https://test-grantami.awsansys7np.onscale.com/mi_servicelayer) prior to accessing that link.)

The object returned is a `ModelExportResponse` from the `/v1/models/export` endpoint. More details and examples can be found on that page.

## Example

This is an example of a Material Model Output, with comments added for information.

```json
{
  "materials": [
    {
      "materialName": "Aluminum, 2014, T4",
      // A unique identifier for the material record.
      "materialId": "d1c6a822-cb97-4b3d-a0a8-21cc68b749da",
      // The key for the MI database that the data was exported from.
      "databaseKey": "MI_Pro",
      // The name of the MI database that the data was exported from.
      "databaseName": "MI Pro",
      // The date/time when the export happened
      "exportDateTime": "2025-09-10T10:42:31Z",
      // Provenance information about the material data
      "traceabilityNotes": "Material data from Granta MI\r\nRecord name: Aluminum, 2014, T4\r\nDate: 2025-09-08 (UTC)\r\nTable name: MaterialUniverse",
      "models": [
        {
          "modelName": "True stress with strain",
          "modelId": "stress.strain",
          // If any constraints were defined in the MMD, the values and units used will be listed here.
          "constraints": [],
          "properties": [
            {
              "name": "True stress with strain",
              "columns": [
                {
                  "name": "True stress with strain",
                  "unit": "MPa",
                  // This field indicates if the column represents a free parameter or data that is dependent on the parameters.
                  // In a 2-D graph, the free parameter would typically be on the x-axis and the dependent data on the y-axis. 
                  "isFreeParameter": false,
                  "numericValues": [
                    272.7,
                    323.9,
                    355.7,
                    381.3,
                    403.8,
                    423.1,
                    439.4,
                    453,
                    463.9,
                    472.3
                  ],
                  // If the MI attribute used to source the data has parameters that are not specified in the MMD as either
                  // a free parameter or a constraint, a constraint value will be chosen based on the parameter default
                  // value in MI. These constraints will be listed in this section.
                  "implicitConstraints": [
                    {
                      "name": "Temperature",
                      "numericValue": 293.15,
                      "unit": "K"
                    }
                  ]
                },
                {
                  "name": "Strain",
                  "symbol": "e",
                  "unit": "% strain",
                  "isFreeParameter": true,
                  "numericValues": [
                    0,
                    1.556,
                    3.111,
                    4.667,
                    6.222,
                    7.778,
                    9.333,
                    10.89,
                    12.44,
                    14
                  ]
                }
              ]
            }
          ],
          // If there were any issues exporting the model, they will be listed in this section.
          "notes": [
            {
              "message": "An example error occurred."
            }
          ]
        }
      ]
    }
  ],
  // Information about issues that occurred during export
  "issues": {
    "missingRecordHistoryGuids": [
      "3fa85f64-5717-4562-b3fc-2c963f66afa1"
    ]
  }
}
```

## Properties

The `properties` element will contain one or more items. Those items may have a single value - specified in the `numericValue`,
`stringValue`, or `boolValue` elements - or a `columns` element. These elements are mutually exclusive; only one of them
will be present for a given property.

In this simple example, the property contains the value in the `numericValue` element.
```json
{
  "properties": [
    {
      "name": "Density",
      "symbol": "ρ",
      "unit": "Mg/m^3",
      "numericValue": 1.029
    }
  ]
}
```

Here, the output contains multiple properties, each with multiple columns. Properties do not have to have the
same free parameters in this case.
```json
{
    "properties": [
      {
        "name": "Dynamic viscosity",
        "columns": [
          {
            "name": "Dynamic viscosity",
            "symbol": "μ",
            "unit": "Pa.s",
            "isFreeParameter": false,
            "numericValues": [
              0.0019929,
              0.0017225,
              0.0015008
            ],
            "implicitConstraints": []
          },
          {
            "name": "Temperature",
            "symbol": "T",
            "unit": "°C",
            "isFreeParameter": true,
            "numericValues": [
              15.403999999999996,
              20.350000000000023,
              25.297000000000025
            ]
          }
        ]
      },
      {
        "name": "Kinematic viscosity",
        "columns": [
          {
            "name": "Kinematic viscosity",
            "symbol": "ν",
            "unit": "m^2/s",
            "isFreeParameter": false,
            "numericValues": [
              0.00000195,
              0.00000168,
              0.00000147
            ],
            "implicitConstraints": []
          },
          {
            "name": "Temperature",
            "symbol": "T",
            "unit": "°C",
            "isFreeParameter": true,
            "numericValues": [
              15.403999999999996,
              20.350000000000023,
              25.297000000000025
            ]
          }
        ]
      }
    ]
}
```

This example contains the same data as above, but the properties have been consolidated into a single property (as the 
`consolidatePropertiesThatHaveParameters` flag was set on the Material Model Definition). Consolidated outputs will only contain one property
that is dependent on free parameters, but may have additional simple properties.
```json
{
  "properties": [
    {
      "name": "Viscosity",
      "columns": [
        {
          "name": "Dynamic viscosity",
          "symbol": "μ",
          "unit": "Pa.s",
          "isFreeParameter": false,
          "numericValues": [
            0.0019929,
            0.0017225,
            0.0015008
          ],
          "implicitConstraints": []
        },
        {
          "name": "Kinematic viscosity",
          "symbol": "ν",
          "unit": "m^2/s",
          "isFreeParameter": false,
          "numericValues": [
            0.00000195,
            0.00000168,
            0.00000147
          ],
          "implicitConstraints": []
        },
        {
          "name": "Temperature",
          "symbol": "T",
          "unit": "°C",
          "isFreeParameter": true,
          "numericValues": [
            15.403999999999996,
            20.350000000000023,
            25.297000000000025
          ]
        }
      ]
    }
  ]
}
```