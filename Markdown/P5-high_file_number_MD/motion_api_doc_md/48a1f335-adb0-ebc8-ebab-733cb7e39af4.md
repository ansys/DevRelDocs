# ConfigurationExtraCollection Class
 

This class is to represent the extra simulation configuration collection.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.Simulation.ConfigurationExtraCollection<br />
**Namespace:**&nbsp;<a href="1c5a1fc2-0c5b-dd04-9702-e89ce745554d">VM.Managed.Simulation</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class ConfigurationExtraCollection : LinkContainer, 
	IXmlSerializable, IDictionary<string, SimulationConfigurationExtraBase>, ICollection<KeyValuePair<string, SimulationConfigurationExtraBase>>, 
	IEnumerable<KeyValuePair<string, SimulationConfigurationExtraBase>>, IEnumerable
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class ConfigurationExtraCollection
	Inherits LinkContainer
	Implements IXmlSerializable, IDictionary(Of String, SimulationConfigurationExtraBase), 
	ICollection(Of KeyValuePair(Of String, SimulationConfigurationExtraBase)), IEnumerable(Of KeyValuePair(Of String, SimulationConfigurationExtraBase)), 
	IEnumerable
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class ConfigurationExtraCollection : public LinkContainer, 
	IXmlSerializable, IDictionary<String^, SimulationConfigurationExtraBase^>, ICollection<KeyValuePair<String^, SimulationConfigurationExtraBase^>>, 
	IEnumerable<KeyValuePair<String^, SimulationConfigurationExtraBase^>>, IEnumerable
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type ConfigurationExtraCollection =  
    class
        inherit LinkContainer
        interface IXmlSerializable
        interface IDictionary<string, SimulationConfigurationExtraBase>
        interface ICollection<KeyValuePair<string, SimulationConfigurationExtraBase>>
        interface IEnumerable<KeyValuePair<string, SimulationConfigurationExtraBase>>
        interface IEnumerable
    end
```

The ConfigurationExtraCollection type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="b2553717-d44c-b9db-6c19-f6b2f646372e">ConfigurationExtraCollection</a></td><td>
Initializes a new instance of the ConfigurationExtraCollection class.</td></tr></table>&nbsp;
<a href="#configurationextracollection-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="886c7470-da24-1632-8306-8d5668ca1eeb">Count</a></td><td>
Gets the number of elements contained in the ICollection(T).</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="8723b944-05af-9ccb-0711-80cb8e7cf6ec">Item</a></td><td>
Gets or sets the <a href="91fc7645-80a0-fee1-06ff-7a4f5ea27678">SimulationConfigurationExtraBase</a> with the specified key.</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="f5f2cca1-6ebc-f07e-8bc5-43a424740deb">Keys</a></td><td>
Gets an ICollection(T) containing the keys of the IDictionary(TKey, TValue).</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="e20a4b8e-18ec-2f06-8b7d-3f586000710a">Values</a></td><td>
Gets an ICollection(T) containing the values in the IDictionary(TKey, TValue).</td></tr></table>&nbsp;
<a href="#configurationextracollection-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="f28ac23b-cad7-13e4-fa18-4dc5a4c88e0d">Add</a></td><td>
Adds an element with the provided key and value to the IDictionary(TKey, TValue).</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="0d5e6b39-58eb-9d07-1d50-95addcb61711">Clear</a></td><td>
Removes all items from the ICollection(T).</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="5e736405-9562-d36d-da68-c0041182cf91">ContainsKey</a></td><td>
Determines whether the IDictionary(TKey, TValue) contains an element with the specified key.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="9d81c0d6-5c6f-7b71-457a-c987f85ccec1">GetEnumerator</a></td><td>
Returns an enumerator that iterates through the collection.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="93e5cd75-46cd-cfb5-a8a5-dcea0dbe09c3">GetSchema</a></td><td>
This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the XmlSchemaProviderAttribute to the class.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="8e7a8522-55a7-d582-045e-a76316f66447">ReadXml</a></td><td>
Generates an object from its XML representation.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="97cd0aba-8a91-3b93-e4a8-b81e33631926">Remove</a></td><td>
Removes the element with the specified key from the IDictionary(TKey, TValue).</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="9b74f789-ba8f-3f4c-8f02-281ef4727045">TryGetValue</a></td><td>
Gets the value associated with the specified key.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="5c0ae86f-5a7d-391d-c21b-c91b568984e1">WriteXml</a></td><td>
Converts an object into its XML representation.</td></tr></table>&nbsp;
<a href="#configurationextracollection-class">Back to Top</a>

## See Also


#### Reference
<a href="1c5a1fc2-0c5b-dd04-9702-e89ce745554d">VM.Managed.Simulation Namespace</a><br />