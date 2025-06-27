# Package com.phoenix_int.aserver.types
Provides a collection of basic data types that contain meta-information
like description and units.
See:Description
- | Interface | Description |
| --- | --- |
| [IPHXDescription](../../../../com/phoenix_int/aserver/types/IPHXDescription.html) | Interface for types with descriptions |
| [IPHXFormat](../../../../com/phoenix_int/aserver/types/IPHXFormat.html) | Interface for variables that support formats |
| [IPHXRefPropInfo](../../../../com/phoenix_int/aserver/types/IPHXRefPropInfo.html) | This interface provides information about a reference property:**name**: String**type**: String**enumValues**: String[]**description**: String**title**: String**input**: boolean
 

 where type may be any of the following:

 
 "long"
 "double"
 "boolean"
 "string" |
| [IPHXType](../../../../com/phoenix_int/aserver/types/IPHXType.html) | The interface for all Phoenix types. |
| [IPHXType2](../../../../com/phoenix_int/aserver/types/IPHXType2.html) | The interface for Phoenix types which use PHXStringBuffer instead of String for performance. |
| [IPHXType2.IVisitor](../../../../com/phoenix_int/aserver/types/IPHXType2.IVisitor.html)<T> | The interface of a visitor into an IPHXType2. |
| [IPHXUnits](../../../../com/phoenix_int/aserver/types/IPHXUnits.html) | Interface for PHX variables that support units |
- | Class | Description |
| --- | --- |
| [PHXAppearance](../../../../com/phoenix_int/aserver/types/PHXAppearance.html) | This is a utility class for holding appearance properties. |
| [PHXBoolean](../../../../com/phoenix_int/aserver/types/PHXBoolean.html) | The Phoenix type for booleans. |
| [PHXBooleanArray](../../../../com/phoenix_int/aserver/types/PHXBooleanArray.html) | Class wraps an array of PHXBoolean variables
 for the ScriptWrapper utility. |
| [PHXDataCollector](../../../../com/phoenix_int/aserver/types/PHXDataCollector.html) | A class for Driver Components to tell ModelCenter what to do with the
 DataCollector while the component is running. |
| [PHXDouble](../../../../com/phoenix_int/aserver/types/PHXDouble.html) | The Phoenix type for doubles. |
| [PHXDoubleArray](../../../../com/phoenix_int/aserver/types/PHXDoubleArray.html) | Class wraps an array of PHXDouble variables
 for the ScriptWrapper utility. |
| [PHXFile](../../../../com/phoenix_int/aserver/types/PHXFile.html) | Deprecated |
| [PHXGeometry](../../../../com/phoenix_int/aserver/types/PHXGeometry.html) | The Phoenix type for geometry. |
| [PHXGeomInfo](../../../../com/phoenix_int/aserver/types/PHXGeomInfo.html) | this is a utility class that mirrors the structures in ModelCenter. |
| [PHXInteger](../../../../com/phoenix_int/aserver/types/PHXInteger.html) | Deprecated |
| [PHXLong](../../../../com/phoenix_int/aserver/types/PHXLong.html) | The Phoenix type for longs. |
| [PHXLongArray](../../../../com/phoenix_int/aserver/types/PHXLongArray.html) | Class wraps an array of PHXLong variables
 for the ScriptWrapper utility. |
| [PHXMassProperties](../../../../com/phoenix_int/aserver/types/PHXMassProperties.html) | This is a utility class for holding mass property information. |
| [PHXObjectArray](../../../../com/phoenix_int/aserver/types/PHXObjectArray.html) | Placeholder for an array of any random Java Object. |
| [PHXOrientation](../../../../com/phoenix_int/aserver/types/PHXOrientation.html) | This is a utility class for holding orientation information. |
| [PHXRawFile](../../../../com/phoenix_int/aserver/types/PHXRawFile.html) | The Phoenix type for Files. |
| [PHXRawFileArray](../../../../com/phoenix_int/aserver/types/PHXRawFileArray.html) | Wraps an array of PHXRawFile variables
 for the ScriptWrapper utility. |
| [PHXRefArrayProperty](../../../../com/phoenix_int/aserver/types/PHXRefArrayProperty.html) | This is a class for holding properties of a reference
 object**type**: String**enumValues**: String[]**description**: String**title**: String**input**: boolean
 

 where type may be any of the following:

 
 "long"
 "double"
 "boolean"
 "string" |
| [PHXReference](../../../../com/phoenix_int/aserver/types/PHXReference.html) | The Phoenix type for references. |
| [PHXReferenceArray](../../../../com/phoenix_int/aserver/types/PHXReferenceArray.html) | The Phoenix type for references. |
| [PHXRefProperty](../../../../com/phoenix_int/aserver/types/PHXRefProperty.html) | This is a class for holding properties of a reference
 object**type**: String**enumValues**: String[]**description**: String**title**: String**input**: boolean
 

 where type may be any of the following:

 
 "long"
 "double"
 "boolean"
 "string" |
| [PHXScriptObject](../../../../com/phoenix_int/aserver/types/PHXScriptObject.html) | The PHX type for object variables. |
| [PHXSimpleArray](../../../../com/phoenix_int/aserver/types/PHXSimpleArray.html)<T extends[PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html)> | This class enables components to create resizeable
 arrays where the number of dimensions is variable
 as well as the size of each dimension. |
| [PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html) | A base class for most Phoenix data types. |
| [PHXString](../../../../com/phoenix_int/aserver/types/PHXString.html) | The Phoenix type for Strings. |
| [PHXStringArray](../../../../com/phoenix_int/aserver/types/PHXStringArray.html) | Class wraps an array of PHXString variables
 for the ScriptWrapper utility. |
| [PHXTypeFactory](../../../../com/phoenix_int/aserver/types/PHXTypeFactory.html) | A class for creating variables |
- | Exception | Description |
| --- | --- |
| [PHXInvalidTypeException](../../../../com/phoenix_int/aserver/types/PHXInvalidTypeException.html) | An exception that is thrown when trying to use a bad type |
| [PHXNumberFormatException](../../../../com/phoenix_int/aserver/types/PHXNumberFormatException.html) | Like a NumberFormatException except that it isn't a runtime exception
 and must be caught |
| [PHXTypeMismatchException](../../../../com/phoenix_int/aserver/types/PHXTypeMismatchException.html) | An exception thrown when trying to set a value using an incompatible type, or when trying to 
 compare two values of incompatible types |

## Package com.phoenix_int.aserver.types Description
Provides a collection of basic data types that contain meta-information
like description and units.Put @see and @since tags down here.