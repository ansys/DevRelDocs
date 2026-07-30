# id

<a id="id.HID"></a>

## *class* id.HID

- <a id="id.HID.FromString"></a>`*static* FromString() → [HID](#id.HID)`
- <a id="id.HID.GetChild"></a>`GetChild() → [HID](#id.HID)`
- <a id="id.HID.GetDepth"></a>`GetDepth() → int`
- <a id="id.HID.GetLeaf"></a>`GetLeaf() → [HID](#id.HID)`
- <a id="id.HID.GetNumber"></a>`GetNumber() → int`
- <a id="id.HID.HasChild"></a>`HasChild() → bool`
- <a id="id.HID.RemoveUndermostChild"></a>`RemoveUndermostChild() → [HID](#id.HID)`
- <a id="id.HID.ToString"></a>`ToString() → str`
- <a id="id.HID.__div__"></a>`__div__(arg2: int) → [HID](#id.HID)`
- <a id="id.HID.__iadd__"></a>`__iadd__(arg2: int) → int`
- <a id="id.HID.__idiv__"></a>`__idiv__(arg2: int) → [HID](#id.HID)`
- <a id="id.HID.__init__"></a>`__init__()`
- `__init__(arg2: int)`
- `__init__(arg2: str) → object`
- <a id="id.HID.__isub__"></a>`__isub__(arg2: int) → int`
- <a id="id.HID.__str__"></a>`__str__() → str`
- <a id="id.HID.from_string"></a>`*static* from_string() → [HID](#id.HID)`
- <a id="id.HID.get_child"></a>`get_child() → [HID](#id.HID)`
- <a id="id.HID.get_depth"></a>`get_depth() → int`
- <a id="id.HID.get_leaf"></a>`get_leaf() → [HID](#id.HID)`
- <a id="id.HID.get_number"></a>`get_number() → int`
- <a id="id.HID.has_child"></a>`has_child() → bool`
- <a id="id.HID.remove_undermost_child"></a>`remove_undermost_child() → [HID](#id.HID)`
- <a id="id.HID.to_string"></a>`to_string() → str`

<a id="id.HIDSet"></a>

## *class* id.HIDSet

A mutable set.

- <a id="id.HIDSet.__and__"></a>`__and__(arg2: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)`<br>
  Return the intersection of this set and other.
- <a id="id.HIDSet.__contains__"></a>`__contains__(arg2: [HID](#id.HID)) → bool`
- <a id="id.HIDSet.__delitem__"></a>`__delitem__(arg2: [HID](#id.HID))`
- <a id="id.HIDSet.__hash__"></a>`__hash__()`
- <a id="id.HIDSet.__init__"></a>`__init__()`
- <a id="id.HIDSet.__iter__"></a>`__iter__() → object`
- <a id="id.HIDSet.__len__"></a>`__len__() → int`
- <a id="id.HIDSet.__or__"></a>`__or__(arg2: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)`<br>
  Return the union of this set and other.
- <a id="id.HIDSet.__sub__"></a>`__sub__(arg2: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)`<br>
  Return elements of this set that are not in other.
- <a id="id.HIDSet.__xor__"></a>`__xor__(arg2: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)`<br>
  Return elements that are either in this set or in other but not in both.
- <a id="id.HIDSet.add"></a>`add(element: [HID](#id.HID))`<br>
  Add element.
- <a id="id.HIDSet.difference"></a>`difference(other: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)`<br>
  Return elements of this set that are not in other.
- <a id="id.HIDSet.intersection"></a>`intersection(other: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)`<br>
  Return the intersection of this set and other.
- <a id="id.HIDSet.remove"></a>`remove(element: [HID](#id.HID))`<br>
  Remove element.
- <a id="id.HIDSet.symmetric_difference"></a>`symmetric_difference(other: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)`<br>
  Return elements that are either in this set or in other but not in both.
- <a id="id.HIDSet.union"></a>`union(other: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)`<br>
  Return the union of this set and other.

<a id="id.Id"></a>

## *class* id.Id

- <a id="id.Id.__init__"></a>`__init__()`
- <a id="id.Id.name"></a>*property* `name`

<a id="id.Tag"></a>

## *class* id.Tag

- <a id="id.Tag.__init__"></a>`__init__()`
- <a id="id.Tag.uuid"></a>*property* `uuid`

<a id="id.UUID"></a>

## *class* id.UUID

- <a id="id.UUID.__init__"></a>`__init__()`<br>
  Raises an exception This class cannot be instantiated from Python
- <a id="id.UUID.__str__"></a>`__str__() → str`
