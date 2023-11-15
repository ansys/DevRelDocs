# Expression Class
 

This class is to represent the expression.


## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.Expression<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="c794ccad-5ca0-53dd-0a27-ffcb06e11dff">VM.Managed.Direction</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="543e5794-0f7d-8fb3-1a5e-3408fb00bf2e">VM.Managed.OrientationBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="824cb89f-229f-dd10-5d61-bbb5abd95124">VM.Managed.Point</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="0257b55b-f437-6f07-b674-7156d6d4b79b">VM.Managed.TransformBase</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="59e4bf1e-caf6-a97f-eb24-a86f32f38d65">VM.Managed.Variable</a><br />
**Namespace:**&nbsp;<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed</a><br />**Assembly:**&nbsp;VMAppCore (in VMAppCore.dll) Version: 24.1.23299.31577

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public class Expression : LinkContainer, IExpression
```

**VB**<br />
``` VB
<SerializableAttribute>
Public Class Expression
	Inherits LinkContainer
	Implements IExpression
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class Expression : public LinkContainer, 
	IExpression
```

**F#**<br />
``` F#
[<SerializableAttribute>]
type Expression =  
    class
        inherit LinkContainer
        interface IExpression
    end
```

The Expression type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="bef2fa31-3dc3-8085-f9f0-e0fcc2d14481">Expression</a></td><td>
Initializes a new instance of the Expression class</td></tr></table>&nbsp;
<a href="#expression-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="7f2df114-e1bc-dda4-77df-152b3017af0c">String</a></td><td>
Gets or sets the expression string.</td></tr></table>&nbsp;
<a href="#expression-class">Back to Top</a>

## Methods
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="cb435449-a7ee-91f8-4852-4100c5357cf4">AddReferenceObject</a></td><td>
Add the reference object.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="231780ea-ef1a-1f83-5516-0f0b371d89ec">CheckReferenceObject</a></td><td>
Check reference object.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="1e71df7c-9041-6579-a829-df15a6e84091">ConvertToValue</a></td><td>
Convert to value.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="5af2ba1b-6a0b-a1a8-0c5a-5b55b3fe3465">GetNumericValue</a></td><td>
Get numeric value.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="8e180845-9b74-e84f-863a-9be967fdf941">Initialize</a></td><td>
Initialize this class.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="cf4152fd-1950-3213-9ba4-831ce3d745e2">OnDeserialization</a></td><td>
Called when [deserialization].
 (Overrides <a href="64076d3c-3baa-043e-784b-5e010de1a6ec">LinkContainer.OnDeserialization(Object)</a>.)</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="c74c1128-711c-534f-c85a-4be7af0b5e0e">ParseToValue</a></td><td>
Parse to value.</td></tr><tr><td>![Protected method](media/protmethod.gif "Protected method")</td><td><a href="042d1556-d674-e6d7-022e-c050c5bfc2dd">SetDefaultString</a></td><td>
Set default string.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")![Static member](media/static.gif "Static member")</td><td><a href="69a2531f-c3ee-f519-3e33-9368b2ec1a88">Uninitialize</a></td><td>
Release expression handler.</td></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="be0b009b-f333-4b8d-c69c-f866ca475f5f">UpdateByReferenceObject</a></td><td>
The update event occured from the reference object.</td></tr></table>&nbsp;
<a href="#expression-class">Back to Top</a>

## Fields
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public field](media/pubfield.gif "Public field")![Static member](media/static.gif "Static member")</td><td><a href="51d071a2-b117-2878-1e37-5f5a012bfe86">g_bSkipUpdate</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="95fbb20d-ad2b-3e30-3d00-7cf35624057f">m_dicReferenceObject</a></td><td> **Obsolete. **</td></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="1f5ec97a-919f-9759-8904-0160ba707c3a">m_linkCollectionReferenceObject</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="d78fd0c1-82dc-ae6b-9965-36f1944cb6bb">m_lstReferenceObject</a></td><td> **Obsolete. **</td></tr><tr><td>![Protected field](media/protfield.gif "Protected field")![Static member](media/static.gif "Static member")</td><td><a href="214ae11d-e718-1420-9aea-218616b47bdc">m_pExpressionHandler</a></td><td /></tr><tr><td>![Protected field](media/protfield.gif "Protected field")</td><td><a href="6a67763a-6f3b-ba36-d24a-fe733ec773a9">m_strValue</a></td><td /></tr></table>&nbsp;
<a href="#expression-class">Back to Top</a>

## See Also


#### Reference
<a href="05a7f2f9-3551-60b1-3652-371a61dfb10b">VM.Managed Namespace</a><br />