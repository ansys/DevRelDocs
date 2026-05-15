# Package com.phoenix_int.aserver.types

Provides a collection of basic data types that contain meta-information like description and units.

## Interface Summary

| Interface | Description |
| --- | --- |
| [IPHXDescription](IPHXDescription.md) | Interface for types with descriptions |
| [IPHXFormat](IPHXFormat.md) | Interface for variables that support formats |
| [IPHXRefPropInfo](IPHXRefPropInfo.md) | This interface provides information about a reference property: **name**: String **type**: String **enumValues**: String[] **description**: String **title**: String **input**: boolean, where `type` may be any of the following: "long", "double", "boolean", "string" |
| [IPHXType](IPHXType.md) | The interface for all Phoenix types. |
| [IPHXType2](IPHXType2.md) | The interface for Phoenix types which use PHXStringBuffer instead of String for performance. |
| [IPHXType2.IVisitor](IPHXType2.IVisitor.md)<T> | The interface of a visitor into an IPHXType2. |
| [IPHXUnits](IPHXUnits.md) | Interface for PHX variables that support units |

## Class Summary

| Class | Description |
| --- | --- |
| [PHXAppearance](PHXAppearance.md) | This is a utility class for holding appearance properties. |
| [PHXBoolean](PHXBoolean.md) | The type for booleans. |
| [PHXBooleanArray](PHXBooleanArray.md) | Class wraps an array of PHXBoolean variables for the ScriptWrapper utility. |
| [PHXDataCollector](PHXDataCollector.md) | A class for Driver Components to tell ModelCenter what to do with the DataCollector while the component is running. |
| [PHXDouble](PHXDouble.md) | The type for doubles. |
| [PHXDoubleArray](PHXDoubleArray.md) | Class wraps an array of PHXDouble variables for the ScriptWrapper utility. |
| [PHXFile](PHXFile.md) | Deprecated |
| [PHXGeometry](PHXGeometry.md) | The type for geometry. |
| [PHXGeomInfo](PHXGeomInfo.md) | this is a utility class that mirrors the structures in ModelCenter. |
| [PHXInteger](PHXInteger.md) | Deprecated |
| [PHXLong](PHXLong.md) | The type for longs. |
| [PHXLongArray](PHXLongArray.md) | Class wraps an array of PHXLong variables for the ScriptWrapper utility. |
| [PHXMassProperties](PHXMassProperties.md) | This is a utility class for holding mass property information. |
| [PHXObjectArray](PHXObjectArray.md) | Placeholder for an array of any random Java Object. |
| [PHXOrientation](PHXOrientation.md) | This is a utility class for holding orientation information. |
| [PHXRawFile](PHXRawFile.md) | The type for Files. |
| [PHXRawFileArray](PHXRawFileArray.md) | Wraps an array of PHXRawFile variables for the ScriptWrapper utility. |
| [PHXRefArrayProperty](PHXRefArrayProperty.md) | This is a class for holding properties of a reference object **type**: String **enumValues**: String[] **description**: String **title**: String **input**: boolean, where `type` may be any of the following: "long", "double", "boolean", "string" |
| [PHXReference](PHXReference.md) | The type for references. |
| [PHXReferenceArray](PHXReferenceArray.md) | The type for references. |
| [PHXRefProperty](PHXRefProperty.md) | This is a class for holding properties of a reference object **type**: String  **enumValues**: String[]**description**: String **title**: String **input**: boolean, where `type` may be any of the following: "long", "double", "boolean", "string" |
| [PHXScriptObject](PHXScriptObject.md) | The PHX type for object variables. |
| [PHXSimpleArray](PHXSimpleArray.md)<T extends [PHXSimpleType](PHXSimpleType.md)> | This class enables components to create resizeable arrays where the number of dimensions is variable as well as the size of each dimension. |
| [PHXSimpleType](PHXSimpleType.md) | A base class for most Phoenix data types. |
| [PHXString](PHXString.md) | The type for Strings. |
| [PHXStringArray](PHXStringArray.md) | Class wraps an array of PHXString variables for the ScriptWrapper utility. |
| [PHXTypeFactory](PHXTypeFactory.md) | A class for creating variables |

## Exception Description

| Exception | Description |
| --- | --- |
| [PHXInvalidTypeException](PHXInvalidTypeException.md) | An exception that is thrown when trying to use a bad type |
| [PHXNumberFormatException](PHXNumberFormatException.md) | Like a NumberFormatException except that it isn't a runtime exception and must be caught |
| [PHXTypeMismatchException](PHXTypeMismatchException.md) | An exception thrown when trying to set a value using an incompatible type, or when trying to  compare two values of incompatible types |

## Package com.phoenix_int.aserver.types Description
Provides a collection of basic data types that contain meta-information like description and units.