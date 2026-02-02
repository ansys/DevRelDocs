# Material Model Definitions
The Granta Material Model Service has endpoints to create and download Material Model Definitions.

Here is an example JSON file (Note: - the comments are for information - these should NOT be included in a real Material Model Definitions).

```json
{
    // A unique identity for the model definition.
    "id": "model.id", 

    // A human readable name of the model.
    "name": "Model name",

    // These are material model properties. These will be dependent on the free-parameters (if specified).
    // These are output in a in a single table with a column for each property and each free parameter.
    // If there are no free parameters, then this table will always contain a single row.
    "properties": [ 
        {
            // The name that the property is given in the material-model-output.
            "name": "Property name output in model", 
            
            // The symbol that this property usually takes in the material model equation.
            "symbol": "σ", 
            
            // A list of MI standard names, which identifies which MI attribute data to export for this property.
            // If the first attribute is identified in the database, the MMS will use this; otherwise the next standard name is examined.
            "attributes": [ 
                {           
                    "standardName": "Attribute standard name"
                }
            ],

            // Optional set of free parameters. If specified, the properties specified in the `properties` array will be output as a function of these parameters 
            "freeParameters": [ 
            {
                    // The standard name of the parameter in the MI database. This is also the name that the parameter is given in the material-model-output.
                    "standardName": "Parameter standard name", 

                    // The symbol that this parameter usually takes in the material model.
                    "symbol": "ε" 
                }
            ],

            // Indicate if a property is optional (defaults to false)
            // If a property cannot be resolved and it is not optional, it will cause the export to fail. If the property is optional, it will be omitted from the output.
            "optional": true,

            // Specifies how to produce the value for this property from a range value in MI. Defaults to geometric mean. If the attribute used is not a range, this setting has no effect.
            // Possible values are: [ GeometricMean, ArithmeticMean, Minimum, Maximum ]
            // Defaults to GeometricMean
            "rangeValueToUse": "ArithmeticMean",
        },

        // example of a property which doesn't depend on free parameters
        {
            // The name that the property is given in the material-model-output.
            "name": "Property name output in model", 
            
            // The symbol that this property usually takes in the material model equation.
            "symbol": "x", 
            
            // A list of MI standard names, which identifies which MI attribute data to export for this property.
            // If the first attribute is identified in the database, the MMS will use this; otherwise the next standard name is examined.
            "attributes": [ 
                {           
                    "standardName": "Attribute standard name"
                }
            ]
        }
    ],

    // The value of parameters to use if we need to interpolate MI functional attributes. 
    // These are optional. If omitted, we will use the default parameter value as defined in the MI database.
    "constraints": [
        {
            // The standard name of the MI parameter.
            "parameter": "Temperature",
            // The value of the parameter to use.
            "defaultValue": 73,
            // The unit of the `defaultValue`.
            "unit": "°F"
        }
    ],

    // Packages this MMD applies to. If null/empty, this MMD applies to all packages.
    "restrictedToPackages": [
        {
          "name": "ElectronicsDesktop"
        },
        {
          "name": "ConceptSI"
        }
      ],

    // If true, all properties that have free parameters will be consolidated into a single property in the output. In this case, it is not valid for properties to have
    // different sets of free parameters (except for properties with no free parameters at all). If false, all properties will be kept separate in the output.
    "consolidatePropertiesThatHaveParameters": false
}
```

### Examples
To write a Material Model Definition for the Hooke's law model:

```json
{
  "id": "hookes.law",
  "name": "Hooke's law",
  "properties": [
    {
      "name": "Young's modulus",
      "symbol": "E",
      "attributes": [ 
        {           
          "standardName": "Young's modulus"
        }
      ]
    }
  ]
}
```

To take data from an MI functional attribute and interpolate it at a particular value.
If the constraint for Temperature wasn't required, we would have used the default value defined in the database on the attribute 
(or parameter if the attribute 'Density with Temperature' did not define a default value for Temperature).
```json
{
  "id": "density.room-temperature",
  "name": "Room Temperature Density",
  "properties": [
    {
      "name": "Density",
      "symbol": "ρ",
      "attributes": [ 
        {           
          "standardName": "Density with Temperature"
        }
      ]
    }
  ],
  "constraints": [
    {
      "parameter": "Temperature",
      "unit": "°F",
      "defaultValue": 73
    }
  ]
}
```

### Creating a Material Model Definition

Material Model Definitions can be created by making a POST request to the Granta Material Model Service `/v1alpha/modelDefinitions` endpoint. The body of the request
should be a Material Model Definition in JSON format like the examples above.

Material Model Definitions can be updated using a PATCH request to `/v1alpha/modelDefinitions/{id}`. For example. `/v1alpha/modelDefinitions/hookes.law`.
The request body should be a JSON Material Model Definition, but properties that do not need changing may be omitted (this endpoint uses the
JSON Merge Patch [RFC 7396](https://datatracker.ietf.org/doc/html/rfc7396) format).