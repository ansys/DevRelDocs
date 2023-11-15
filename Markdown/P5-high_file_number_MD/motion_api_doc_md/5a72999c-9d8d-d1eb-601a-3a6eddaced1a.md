# PressureLoadUserSubroutine Class
 


This class is to represent the characteristic properties of user-subroutine type.

이 클래스는 사용자 정의 함수의 특성을 나타냅니다.



## Inheritance Hierarchy
System.Object<br />&nbsp;&nbsp;ObservableObject<br />&nbsp;&nbsp;&nbsp;&nbsp;LinkableBase<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="61a8a328-b3bc-8c9a-50d7-bb860f7c67ef">VM.Managed.LinkContainer</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="e45ad736-f950-0f25-ba25-aa2369574505">VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VM.Managed.DAFUL.Flexible.Force.PressureLoadUserSubroutine<br />
**Namespace:**&nbsp;<a href="2176cd38-d759-6613-9416-91f34e05328d">VM.Managed.DAFUL.Flexible.Force</a><br />**Assembly:**&nbsp;VMFlexibleBase (in VMFlexibleBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
[SerializableAttribute]
public sealed class PressureLoadUserSubroutine : PressureLoadFunction, 
	IReservable
```

**VB**<br />
``` VB
<SerializableAttribute>
Public NotInheritable Class PressureLoadUserSubroutine
	Inherits PressureLoadFunction
	Implements IReservable
```

**C++**<br />
``` C++
[SerializableAttribute]
public ref class PressureLoadUserSubroutine sealed : public PressureLoadFunction, 
	IReservable
```

**F#**<br />
``` F#
[<SealedAttribute>]
[<SerializableAttribute>]
type PressureLoadUserSubroutine =  
    class
        inherit PressureLoadFunction
        interface IReservable
    end
```

The PressureLoadUserSubroutine type exposes the following members.


## Constructors
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public method](media/pubmethod.gif "Public method")</td><td><a href="0dd6f3e3-bb13-6a3c-afc3-d3173eb33e30">PressureLoadUserSubroutine</a></td><td>

Initializes a new instance of the PressureLoadUserSubroutine class.

PressureLoadUserSubroutine 클래스의 새로운 객체를 초기화 해줍니다.</td></tr></table>&nbsp;
<a href="#pressureloadusersubroutine-class">Back to Top</a>

## Properties
&nbsp;<table><tr><th></th><th>Name</th><th>Description</th></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="8ad1c082-ee53-fe4d-cb8e-aef596861df6">Type</a></td><td>

Gets the function type.

함수 타입을 가져오거나 넣어줍니다.

 (Overrides <a href="d68f597c-dc7a-6844-938a-1470564c6be1">PressureLoadFunction.Type</a>.)</td></tr><tr><td>![Public property](media/pubproperty.gif "Public property")</td><td><a href="4ba080f8-153f-50f4-416c-f7216a259005">UserSubroutine</a></td><td>

Gets or sets the user subroutine.

사용자 정의 함수를 가져오거나 넣어줍니다.

Type : UserSubroutine LinkRequestUpdate 시 처리 : N/A Read/Write : Read/Write Read/Write Condition : N/A 연관 프로퍼티 : N/A Validation 조건 : N/A UI Visibility : true Label : User Subroutine Control Type : User Subroutine Editor ToolTip : N/A Error Message : N/A Category : Load Category Index : 1 변경 시 DFS 재생성 여부 : Yes 변경 시 DFG 재생성 여부 : No 변경 시 GINF 재생성 여부 : No</td></tr></table>&nbsp;
<a href="#pressureloadusersubroutine-class">Back to Top</a>

## See Also


#### Reference
<a href="2176cd38-d759-6613-9416-91f34e05328d">VM.Managed.DAFUL.Flexible.Force Namespace</a><br />