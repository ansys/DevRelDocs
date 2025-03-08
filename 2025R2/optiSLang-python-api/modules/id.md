

### *class* id.HID


#### *static* FromString() → [HID](#id.HID)


#### GetChild() → [HID](#id.HID)


#### GetDepth() → int


#### GetLeaf() → [HID](#id.HID)


#### GetNumber() → int


#### HasChild() → bool


#### RemoveUndermostChild() → [HID](#id.HID)


#### ToString() → str


#### \_\_div_\_(arg2: int) → [HID](#id.HID)


#### \_\_iadd_\_(arg2: int) → int


#### \_\_idiv_\_(arg2: int) → [HID](#id.HID)


#### \_\_init_\_()

#### \_\_init_\_(arg2: int)

#### \_\_init_\_(arg2: str) → object


#### \_\_isub_\_(arg2: int) → int


#### \_\_str_\_() → str


#### *static* from_string() → [HID](#id.HID)


#### get_child() → [HID](#id.HID)


#### get_depth() → int


#### get_leaf() → [HID](#id.HID)


#### get_number() → int


#### has_child() → bool


#### remove_undermost_child() → [HID](#id.HID)


#### to_string() → str


### *class* id.HIDSet

A mutable set.


#### \_\_and_\_(arg2: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)

Return the intersection of this set and other.


#### \_\_contains_\_(arg2: [HID](#id.HID)) → bool


#### \_\_delitem_\_(arg2: [HID](#id.HID))


#### \_\_hash_\_()


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_or_\_(arg2: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)

Return the union of this set and other.


#### \_\_sub_\_(arg2: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)

Return elements of this set that are not in other.


#### \_\_xor_\_(arg2: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)

Return elements that are either in this set or in other but not in both.


#### add(element: [HID](#id.HID))

Add element.


#### difference(other: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)

Return elements of this set that are not in other.


#### intersection(other: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)

Return the intersection of this set and other.


#### remove(element: [HID](#id.HID))

Remove element.


#### symmetric_difference(other: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)

Return elements that are either in this set or in other but not in both.


#### union(other: [HIDSet](#id.HIDSet)) → [HIDSet](#id.HIDSet)

Return the union of this set and other.


### *class* id.Id


#### \_\_init_\_()


#### *property* name


### *class* id.Tag


#### \_\_init_\_()


#### *property* uuid


### *class* id.UUID


#### \_\_init_\_()

Raises an exception
This class cannot be instantiated from Python


#### \_\_str_\_() → str
