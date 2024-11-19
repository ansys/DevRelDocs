<a id="interfaceModelCenter_1_1IAddToModel"></a>
# Interface ModelCenter::IAddToModel

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 121)



COM Instance.





Examples:






**Adding to the Model**:

This example is of adding a Trade Study or Data Collector Plug-In to the Model as a Component. 
```
Dim atm As IAddToModel

atm.addInput "x", "double", "0"
atm.addInput "x2", "double", "0"
atm.addOutput "y", "double", "0"
atm.addToModel
```


**Adding an input**:

A sample Component Plug-In has input x and output y. Add another input x2. 
```
Dim atm As IAddToModel

atm.addInput "x", "double", "0"
atm.addInput "x2", "double", "0"
atm.addOutput "y", "double", "0"
atm.updateComponent
```


**Removing an output**:

A sample Component Plug-In has input x and outputs y, y2. Remove the y2 variable. 
```
Dim atm As IAddToModel

atm.addInput "x", "double", "0"
atm.addOutput "y", "double", "0"
atm.updateComponent
```

## Members

* [addInput](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a62816c713535ea573159c78f709aa04e)
* [addInput2](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a915f8989fd54300d4ce830d37c2682bf)
* [addMethod](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a1ef6ce942ff5def3c8faa1c4d6d52106)
* [addOutput](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a073c5f4a93c492f05fe361ca1799974e)
* [addOutput2](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a34633d249d8fd7b02a28c3158c6dbae6)
* [addToModel](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a58f5f3bc676a7c683ea4fc9b531d608f)
* [addToModel2](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1ab0bc1abd000532d2d89d6179868431fc)
* [addToModel3](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1ac2d1861e463ef89757948bb091502dbb)
* [autoRun](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1aa714911e950223667ee525a435b00b7a)
* [clearBusyFlag](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1aa73cb2b559ec21ef817b241e7f943e8a)
* [getComponent](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1ae5ee8b89f3b20182eb2ab707460fe751)
* [getProgID](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a0b7490ab8fe0d89e8ecb6478cfbee8e9)
* [getRegID](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1ac0dd856b24d06484c6ded0aba0199016)
* [prevalidateInputs](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1ac59a55cf1a42f612e494d429c3879595)
* [setAuthor](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a0799afa68197fad61909e0a271e28993)
* [setComponentRequirements](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a0b44c7a2dbdcac528e00911168a8ae05)
* [setDescription](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a04419d1a39017fa8f13b83720fdca196)
* [setHelpURL](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1af83b75cc2e88ab4935fdbd04e094bc21)
* [setIcon](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1ad14bf669563d84f430c220a1bc1bd94c)
* [setKeywords](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a1cafe3fad847bbafcea6adc616c2f97b)
* [setVersion](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a13e4e0a07dfd282fa44afcb16c06aac8)
* [updateComponent](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a7f5a3a1914714827435dfd59e9be5e32)

## Properties

<a id="interfaceModelCenter_1_1IAddToModel_1ac59a55cf1a42f612e494d429c3879595"></a>
### Property prevalidateInputs

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IAddToModel::prevalidateInputs
```



Whether or not pre-validate inputs before running is turned on for the Component.






**Returns**:

yes(TRUE) or no(FALSE).

Example demonstrating how to set the <code>prevalidateInputs</code> property of the Component: 
```
Dim atm As IAddToModel

atm.prevalidateInputs=false
```



**Return type**: boolean

<a id="interfaceModelCenter_1_1IAddToModel_1aa714911e950223667ee525a435b00b7a"></a>
### Property autoRun

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IAddToModel::autoRun
```



Whether or not auto-run if inputs change is turned on for the Component.






**Returns**:

yes(TRUE) or no(FALSE).

Example demonstrating how to set the <code>autoRun</code> property: 
```
Dim atm As IAddToModel

atm.autoRun=True
```



**Return type**: boolean

## Public functions

<a id="interfaceModelCenter_1_1IAddToModel_1a58f5f3bc676a7c683ea4fc9b531d608f"></a>
### Function addToModel

![][public]

```
void ModelCenter::IAddToModel::addToModel()
```



Adds a Trade Study or Data Collector Plug-In to the Model as a Component Plug-In. This method is not allowed to be called in the <code>run()</code> method.



**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1a7f5a3a1914714827435dfd59e9be5e32"></a>
### Function updateComponent

![][public]

```
void ModelCenter::IAddToModel::updateComponent()
```



Reinitializes the inputs and outputs of a Component Plug-In. The [addInput()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a62816c713535ea573159c78f709aa04e) and [addOutput()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a073c5f4a93c492f05fe361ca1799974e) methods must be called for each input and output for the new configuration before calling [updateComponent()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a7f5a3a1914714827435dfd59e9be5e32). This method is not allowed to be called in the <code>run()</code> method.



**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1ae5ee8b89f3b20182eb2ab707460fe751"></a>
### Function getComponent

![][public]

```
IDispatch * ModelCenter::IAddToModel::getComponent()
```



Gets a pointer to the <code>IAddToModel</code> object's [IComponent](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent) object.






**Returns**:

IDispatch* to an [IComponent](interfaceModelCenter_1_1IComponent.md#interfaceModelCenter_1_1IComponent) object.



**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IAddToModel_1ac0dd856b24d06484c6ded0aba0199016"></a>
### Function getRegID

![][public]

```
BSTR ModelCenter::IAddToModel::getRegID()
```



Gets the Plug-In Registry ID that is required for the createDataCollector method in the [IModelCenter](interfaceModelCenter_1_1IModelCenter.md#interfaceModelCenter_1_1IModelCenter) object. ModelCenter must must know the Registry ID of the Plug-In so Trade Study Files can be saved/restored if the user chooses to do so.





Example demonstrating how to query the <code>IAddToModel</code> object for the Registry ID: 
```
Dim atm As IAddToModel

Dim Str As String
Str=atm.getRegID()
```






**Returns**:

Registry ID of the Plug-In.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IAddToModel_1a62816c713535ea573159c78f709aa04e"></a>
### Function addInput

![][public]

```
IDispatch * ModelCenter::IAddToModel::addInput(BSTR name, BSTR type, [optional]VARIANT value)
```



Adds a pending input variable to the <code>IAddToModel</code> object IO structure. The <code>IAddToModel</code> object's input variables are updated when the [addToModel()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a58f5f3bc676a7c683ea4fc9b531d608f) or [updateComponent()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a7f5a3a1914714827435dfd59e9be5e32) methods are called.






**Parameters**:

* **name**: The name of the pending variable.
* **type**: The type of the variable. Add "[]" to the end of the type to indicate an array.<br/>
 Valid types include:
* "double" - double

* "int" - integer

* "string" - string

* "bool" - boolean

* "ref" - reference

* "file" - A binary or ascii file

* "object" - object variable (The default class type "PHXNonStrictType" will be used)

* "quad" - Quad Facet Geometry, a geometry type composed of multiple quadrilaterals.

* "sor" - Surface of Revolution, a geometry type defined by a profile curve rotated about an axis.

* "nurbs" - A geometry type for NURBS.

* "bspline" - A geometry type for B-Spline curves.

* "ruled" - A geometry type for ruled surfaces.

* "skinned" - A geometry type for skinned surfaces.

* "node" - A geometry type for displaying multiple points in space.
* **value**: Value of the variable. If the variable is an array, then each variable value should be separated by a semi-colon:<br/>
 <code>addInput( "myVar", "double[]", "0;1;2.3;4.56" )</code>


**Returns**:

IDispatch* to an [IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable) object



**Parameters**:

* BSTR **name**
* BSTR **type**
* _[optional]_ VARIANT **value**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IAddToModel_1a073c5f4a93c492f05fe361ca1799974e"></a>
### Function addOutput

![][public]

```
IDispatch * ModelCenter::IAddToModel::addOutput(BSTR name, BSTR type, [optional]VARIANT value)
```



Adds a pending output variable to the <code>IAddToModel</code> object IO structure. The <code>IAddToModel</code> object's output variables are updated when the [addToModel()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a58f5f3bc676a7c683ea4fc9b531d608f) or [updateComponent()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a7f5a3a1914714827435dfd59e9be5e32) methods are called.






**Parameters**:

* **name**: The name of the pending variable.
* **type**: The type of the variable. Add "[]" to the end of the type to indicate an array.<br/>
 Valid types include:
* "double" - double

* "int" - integer

* "string" - string

* "bool" - boolean

* "ref" - reference

* "file" - A binary or ascii file

* "object" - object variable (The default class type "PHXNonStrictType" will be used)

* "quad" - Quad Facet Geometry, a geometry type composed of multiple quadrilaterals.

* "sor" - Surface of Revolution, a geometry type defined by a profile curve rotated about an axis.

* "nurbs" - A geometry type for NURBS.

* "bspline" - A geometry type for B-Spline curves.

* "ruled" - A geometry type for ruled surfaces.

* "skinned" - A geometry type for skinned surfaces.

* "node" - A geometry type for displaying multiple points in space.
* **value**: Value of the variable. If the variable is an array, then each variable value should be separated by a semi-colon:<br/>
 <code>addInput( "myVar", "double[]", "0;1;2.3;4.56" )</code>


**Returns**:

IDispatch* to an [IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable) object



**Parameters**:

* BSTR **name**
* BSTR **type**
* _[optional]_ VARIANT **value**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IAddToModel_1a0b7490ab8fe0d89e8ecb6478cfbee8e9"></a>
### Function getProgID

![][public]

```
BSTR ModelCenter::IAddToModel::getProgID()
```



Gets the ProgID for COM Plug-Ins. The ProgID is the the string used to create an instance of a COM object (ex. "Phoenix.myPlugIn").





Example demonstrating how to get the ProgID of a Plug-In: 
```
Dim atm As IAddToModel

Dim Str As String
Str=atm.getProgID()
```






**Returns**:

ProgID of the COM Plug-In.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IAddToModel_1a0799afa68197fad61909e0a271e28993"></a>
### Function setAuthor

![][public]

```
void ModelCenter::IAddToModel::setAuthor(BSTR author)
```



Defines the author of this Plug-In. Use this method to set the Component metadata when you add a Trade Study or Data Collector Plug-In to the Model.






**Parameters**:

* **author**: The author of this Plug-In.



**Parameters**:

* BSTR **author**

**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1a04419d1a39017fa8f13b83720fdca196"></a>
### Function setDescription

![][public]

```
void ModelCenter::IAddToModel::setDescription(BSTR description)
```



Defines the description of this Plug-In. Use this method to set the Component metadata when you add a Trade Study or Data Collector Plug-In to the Model.






**Parameters**:

* **description**: The description for this Plug-In.



**Parameters**:

* BSTR **description**

**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1a13e4e0a07dfd282fa44afcb16c06aac8"></a>
### Function setVersion

![][public]

```
void ModelCenter::IAddToModel::setVersion(BSTR version)
```



Defines the version of this Plug-In. Use this method to set the Component metadata when you add a Trade Study or Data Collector Plug-In to the Model.






**Parameters**:

* **version**: The version information for this Plug-In.



**Parameters**:

* BSTR **version**

**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1af83b75cc2e88ab4935fdbd04e094bc21"></a>
### Function setHelpURL

![][public]

```
void ModelCenter::IAddToModel::setHelpURL(BSTR helpURL)
```



Defines the help URL of this Plug-In. Use this method to set the Component metadata when you add a Trade Study or Data Collector Plug-In to the Model.






**Parameters**:

* **helpURL**: The help URL for this Plug-In.



**Parameters**:

* BSTR **helpURL**

**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1a1cafe3fad847bbafcea6adc616c2f97b"></a>
### Function setKeywords

![][public]

```
void ModelCenter::IAddToModel::setKeywords(BSTR keywords)
```



Defines the keywords for this Plug-In. Use this method to set the Component metadata when you add a Trade Study or Data Collector Plug-In to the Model.






**Parameters**:

* **keywords**: The keywords for this Plug-In.



**Parameters**:

* BSTR **keywords**

**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1aa73cb2b559ec21ef817b241e7f943e8a"></a>
### Function clearBusyFlag

![][public]

```
void ModelCenter::IAddToModel::clearBusyFlag()
```



Clears the busy state of [ModelCenter](namespaceModelCenter.md#namespaceModelCenter).



**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1ab0bc1abd000532d2d89d6179868431fc"></a>
### Function addToModel2

![][public]

```
boolean ModelCenter::IAddToModel::addToModel2()
```



Adds a Trade Study or Data Collector Plug-In to the Model as a Component Plug-In. This method is not allowed to be called in the <code>run()</code> method.






**Returns**:

Whether or not the operation completed successfully.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IAddToModel_1a0b44c7a2dbdcac528e00911168a8ae05"></a>
### Function setComponentRequirements

![][public]

```
void ModelCenter::IAddToModel::setComponentRequirements(BSTR compReq)
```



Defines the requirements for this Plug-In. Use this method to set the Component metadata when you add a Trade Study or Data Collector Plug-In to the Model.






**Parameters**:

* **compReq**: A comma separated list of requirement specifiers for this Plug-In.



**Parameters**:

* BSTR **compReq**

**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1ad14bf669563d84f430c220a1bc1bd94c"></a>
### Function setIcon

![][public]

```
void ModelCenter::IAddToModel::setIcon(BSTR iconFile)
```



Sets the Plug-In icon. 
**Parameters**:

* **iconFile**: The file path to the icon file.



**Parameters**:

* BSTR **iconFile**

**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1a1ef6ce942ff5def3c8faa1c4d6d52106"></a>
### Function addMethod

![][public]

```
void ModelCenter::IAddToModel::addMethod(BSTR name, [optional]VARIANT displayName)
```



Adds the method.






**Parameters**:

* **name**: The name of the method.
* **displayName**: The display name of the method.



**Parameters**:

* BSTR **name**
* _[optional]_ VARIANT **displayName**

**Return type**: void

<a id="interfaceModelCenter_1_1IAddToModel_1a915f8989fd54300d4ce830d37c2682bf"></a>
### Function addInput2

![][public]

```
IDispatch * ModelCenter::IAddToModel::addInput2(BSTR name, BSTR type, BSTR classURL, [optional]VARIANT value)
```



Adds a pending input variable to the <code>IAddToModel</code> object IO structure. The <code>IAddToModel</code> object's input variables are updated when the [addToModel()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a58f5f3bc676a7c683ea4fc9b531d608f) or [updateComponent()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a7f5a3a1914714827435dfd59e9be5e32) methods are called. This method can be used to add an "object" variable with a specified class type.






**Parameters**:

* **name**: The name of the pending variable.
* **type**: The type of the variable. Add "[]" to the end of the type to indicate an array.<br/>
 Valid types include:
* "double" - double

* "int" - integer

* "string" - string

* "bool" - boolean

* "ref" - reference

* "file" - A binary or ascii file

* "object" - object variable (The default class type "PHXNonStrictType" will be used if classURL is empty)

* "quad" - Quad Facet Geometry, a geometry type composed of multiple quadrilaterals.

* "sor" - Surface of Revolution, a geometry type defined by a profile curve rotated about an axis.

* "nurbs" - A geometry type for NURBS.

* "bspline" - A geometry type for B-Spline curves.

* "ruled" - A geometry type for ruled surfaces.

* "skinned" - A geometry type for skinned surfaces.

* "node" - A geometry type for displaying multiple points in space.
* **classURL**: Class of the object variable. If an empty string is passed, PHXNonStrictType will be used.
* **value**: Value of the variable. If the variable is an array, then each variable value should be separated by a semi-colon:<br/>
 <code>addInput( "myVar", "double[]", "0;1;2.3;4.56" )</code>


**Returns**:

IDispatch* to an [IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable) object



**Parameters**:

* BSTR **name**
* BSTR **type**
* BSTR **classURL**
* _[optional]_ VARIANT **value**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IAddToModel_1a34633d249d8fd7b02a28c3158c6dbae6"></a>
### Function addOutput2

![][public]

```
IDispatch * ModelCenter::IAddToModel::addOutput2(BSTR name, BSTR type, BSTR classURL, [optional]VARIANT value)
```



Adds a pending output variable to the <code>IAddToModel</code> object IO structure. The <code>IAddToModel</code> object's output variables are updated when the [addToModel()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a58f5f3bc676a7c683ea4fc9b531d608f) or [updateComponent()](interfaceModelCenter_1_1IAddToModel.md#interfaceModelCenter_1_1IAddToModel_1a7f5a3a1914714827435dfd59e9be5e32) methods are called.






**Parameters**:

* **name**: The name of the pending variable.
* **type**: The type of the variable. Add "[]" to the end of the type to indicate an array.<br/>
 Valid types include:
* "double" - double

* "int" - integer

* "string" - string

* "bool" - boolean

* "ref" - reference

* "file" - A binary or ascii file

* "object" - object variable (The default class type "PHXNonStrictType" will be used)

* "quad" - Quad Facet Geometry, a geometry type composed of multiple quadrilaterals.

* "sor" - Surface of Revolution, a geometry type defined by a profile curve rotated about an axis.

* "nurbs" - A geometry type for NURBS.

* "bspline" - A geometry type for B-Spline curves.

* "ruled" - A geometry type for ruled surfaces.

* "skinned" - A geometry type for skinned surfaces.

* "node" - A geometry type for displaying multiple points in space.
* **classURL**: Class of the object variable. If an empty string is passed, PHXNonStrictType will be used.
* **value**: Value of the variable. If the variable is an array, then each variable value should be separated by a semi-colon:<br/>
 <code>addInput( "myVar", "double[]", "0;1;2.3;4.56" )</code>


**Returns**:

IDispatch* to an [IVariable](interfaceModelCenter_1_1IVariable.md#interfaceModelCenter_1_1IVariable) object



**Parameters**:

* BSTR **name**
* BSTR **type**
* BSTR **classURL**
* _[optional]_ VARIANT **value**

**Return type**: IDispatch *

<a id="interfaceModelCenter_1_1IAddToModel_1ac2d1861e463ef89757948bb091502dbb"></a>
### Function addToModel3

![][public]

```
BSTR ModelCenter::IAddToModel::addToModel3(BSTR suggestedName)
```



Adds a Trade Study or Data Collector Plug-In to the Model as a Component Plug-In. This method is not allowed to be called in the <code>run()</code> method.






**Parameters**:

* **suggestedName**: Desired name for the component. This name will be used unless a component of that name already exists, in which case the variable name will be the desired name plus a number tagged on to the end.


**Returns**:

Whether or not the operation completed successfully.



**Parameters**:

* BSTR **suggestedName**

**Return type**: BSTR

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)