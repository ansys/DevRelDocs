

### *class* stdcpp_python_export.BasePathMode

**Enumeration**


#### ABSOLUTE_PATH *= stdcpp_python_export.BasePathMode.ABSOLUTE_PATH*


#### NUM_BASEPATH_MODES *= stdcpp_python_export.BasePathMode.NUM_BASEPATH_MODES*


#### PROJECT_RELATIVE *= stdcpp_python_export.BasePathMode.PROJECT_RELATIVE*


#### PROJECT_WORKING_DIR_RELATIVE *= stdcpp_python_export.BasePathMode.PROJECT_WORKING_DIR_RELATIVE*


#### REFERENCE_FILES_DIR_RELATIVE *= stdcpp_python_export.BasePathMode.REFERENCE_FILES_DIR_RELATIVE*


#### WORKING_DIR_RELATIVE *= stdcpp_python_export.BasePathMode.WORKING_DIR_RELATIVE*


### *class* stdcpp_python_export.DoublePair


#### \_\_init_\_()


#### *property* first


#### *property* second


### stdcpp_python_export.MakeVariableNameValid(arg1: str) → str

### stdcpp_python_export.MakeVariableNameValid(arg1: str, arg2: object) → str


### *class* stdcpp_python_export.Path


#### \_\_init_\_()

#### \_\_init_\_(arg2: str)


#### \_\_str_\_() → str


### *class* stdcpp_python_export.PathSet

A mutable set.


#### \_\_and_\_(arg2: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return the intersection of this set and other.


#### \_\_contains_\_(arg2: [Path](#stdcpp_python_export.Path)) → bool


#### \_\_delitem_\_(arg2: [Path](#stdcpp_python_export.Path))


#### \_\_hash_\_()


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_or_\_(arg2: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return the union of this set and other.


#### \_\_sub_\_(arg2: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return elements of this set that are not in other.


#### \_\_xor_\_(arg2: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return elements that are either in this set or in other but not in both.


#### add(element: [Path](#stdcpp_python_export.Path))

Add element.


#### difference(other: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return elements of this set that are not in other.


#### intersection(other: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return the intersection of this set and other.


#### remove(element: [Path](#stdcpp_python_export.Path))

Remove element.


#### symmetric_difference(other: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return elements that are either in this set or in other but not in both.


#### union(other: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return the union of this set and other.


### *class* stdcpp_python_export.RelativeSplittedPath


#### \_\_init_\_()

#### \_\_init_\_(arg2: [Path](#stdcpp_python_export.Path))

#### \_\_init_\_(arg2: [Path](#stdcpp_python_export.Path), arg3: [BasePathMode](#stdcpp_python_export.BasePathMode))

#### \_\_init_\_(arg2: [Path](#stdcpp_python_export.Path), arg3: [BasePathMode](#stdcpp_python_export.BasePathMode), arg4: [Path](#stdcpp_python_export.Path))

#### \_\_init_\_(arg2: [SplittedPath](#stdcpp_python_export.SplittedPath))

#### \_\_init_\_(arg2: [SplittedPath](#stdcpp_python_export.SplittedPath), arg3: [BasePathMode](#stdcpp_python_export.BasePathMode))

#### \_\_init_\_(arg2: [SplittedPath](#stdcpp_python_export.SplittedPath), arg3: [BasePathMode](#stdcpp_python_export.BasePathMode), arg4: [Path](#stdcpp_python_export.Path))


#### *property* base_path


#### *property* base_path_mode


#### *property* splitted_path


### *class* stdcpp_python_export.SizeSet

A mutable set.


#### \_\_and_\_(arg2: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return the intersection of this set and other.


#### \_\_contains_\_(arg2: int) → bool


#### \_\_delitem_\_(arg2: int)


#### \_\_hash_\_()


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_or_\_(arg2: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return the union of this set and other.


#### \_\_sub_\_(arg2: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return elements of this set that are not in other.


#### \_\_xor_\_(arg2: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return elements that are either in this set or in other but not in both.


#### add(element: int)

Add element.


#### difference(other: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return elements of this set that are not in other.


#### intersection(other: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return the intersection of this set and other.


#### remove(element: int)

Remove element.


#### symmetric_difference(other: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return elements that are either in this set or in other but not in both.


#### union(other: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return the union of this set and other.


### *class* stdcpp_python_export.SplittedPath


#### \_\_init_\_()

#### \_\_init_\_(arg2: str)

#### \_\_init_\_(arg2: str, arg3: str)

#### \_\_init_\_(arg2: [Path](#stdcpp_python_export.Path))

#### \_\_init_\_(arg2: [Path](#stdcpp_python_export.Path), arg3: [Path](#stdcpp_python_export.Path))


#### \_\_str_\_() → str


#### *property* head


#### isSplitted() → bool


#### joined() → [Path](#stdcpp_python_export.Path)


#### *property* tail


### *class* stdcpp_python_export.StrList


#### StrExportList() → [StrList](#stdcpp_python_export.StrList)


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: str)


#### size() → int


#### sort()


### *class* stdcpp_python_export.StrPair


#### \_\_init_\_()


#### *property* first


#### *property* second


### *class* stdcpp_python_export.StrSet

A mutable set.


#### \_\_and_\_(arg2: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return the intersection of this set and other.


#### \_\_contains_\_(arg2: str) → bool


#### \_\_delitem_\_(arg2: str)


#### \_\_hash_\_()


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_or_\_(arg2: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return the union of this set and other.


#### \_\_sub_\_(arg2: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return elements of this set that are not in other.


#### \_\_xor_\_(arg2: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return elements that are either in this set or in other but not in both.


#### add(element: str)

Add element.


#### difference(other: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return elements of this set that are not in other.


#### intersection(other: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return the intersection of this set and other.


#### remove(element: str)

Remove element.


#### symmetric_difference(other: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return elements that are either in this set or in other but not in both.


#### union(other: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return the union of this set and other.


### *class* stdcpp_python_export.WStrList


#### StrExportList() → [WStrList](#stdcpp_python_export.WStrList)


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: str)


#### size() → int


#### sort()


### *class* stdcpp_python_export.WStrPair


#### \_\_init_\_()


#### *property* first


#### *property* second


### *class* stdcpp_python_export.WStrSet

A mutable set.


#### \_\_and_\_(arg2: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return the intersection of this set and other.


#### \_\_contains_\_(arg2: str) → bool


#### \_\_delitem_\_(arg2: str)


#### \_\_hash_\_()


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_or_\_(arg2: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return the union of this set and other.


#### \_\_sub_\_(arg2: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return elements of this set that are not in other.


#### \_\_xor_\_(arg2: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return elements that are either in this set or in other but not in both.


#### add(element: str)

Add element.


#### difference(other: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return elements of this set that are not in other.


#### intersection(other: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return the intersection of this set and other.


#### remove(element: str)

Remove element.


#### symmetric_difference(other: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return elements that are either in this set or in other but not in both.


#### union(other: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return the union of this set and other.


### *class* stdcpp_python_export.boolVec


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: bool)


#### size() → int


### stdcpp_python_export.bool_list_to_vec(arg1: list) → [boolVec](#stdcpp_python_export.boolVec)


### stdcpp_python_export.convertList2Vec(arg1: [StrList](#stdcpp_python_export.StrList)) → [stringVec](#stdcpp_python_export.stringVec)


### stdcpp_python_export.convertPyList2WList(arg1: list) → [WStrList](#stdcpp_python_export.WStrList)


### stdcpp_python_export.convertVec2List(arg1: [stringVec](#stdcpp_python_export.stringVec)) → [StrList](#stdcpp_python_export.StrList)


### stdcpp_python_export.convertWList2PyList(arg1: [WStrList](#stdcpp_python_export.WStrList)) → list


### stdcpp_python_export.convertWList2Vec(arg1: [WStrList](#stdcpp_python_export.WStrList)) → object


### stdcpp_python_export.convertWVec2List(arg1: object) → [WStrList](#stdcpp_python_export.WStrList)


### *class* stdcpp_python_export.doubleVec


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: float)


#### size() → int


### *class* stdcpp_python_export.doubleVecVec


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: [doubleVec](#stdcpp_python_export.doubleVec))


#### size() → int


### stdcpp_python_export.doubleVec_list_to_vec(arg1: list) → [doubleVecVec](#stdcpp_python_export.doubleVecVec)


### stdcpp_python_export.double_list_to_vec(arg1: list) → [doubleVec](#stdcpp_python_export.doubleVec)


### stdcpp_python_export.eraseWListElement(arg1: [WStrList](#stdcpp_python_export.WStrList), arg2: int)


### *class* stdcpp_python_export.intVec


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: int)


#### size() → int


### stdcpp_python_export.int_list_to_vec(arg1: list) → [intVec](#stdcpp_python_export.intVec)


### stdcpp_python_export.list_to_vec(arg1: list) → [intVec](#stdcpp_python_export.intVec)

### stdcpp_python_export.list_to_vec(arg1: list) → [uintVec](#stdcpp_python_export.uintVec)

### stdcpp_python_export.list_to_vec(arg1: list) → [doubleVec](#stdcpp_python_export.doubleVec)

### stdcpp_python_export.list_to_vec(arg1: list) → [stringVec](#stdcpp_python_export.stringVec)

### stdcpp_python_export.list_to_vec(arg1: list) → [doubleVecVec](#stdcpp_python_export.doubleVecVec)

### stdcpp_python_export.list_to_vec(arg1: list) → [boolVec](#stdcpp_python_export.boolVec)


### *class* stdcpp_python_export.map_indexing_suite_string_to_bool_map_entry


#### \_\_init_\_()


#### \_\_repr_\_() → object


#### data() → bool


#### key() → str


### *class* stdcpp_python_export.map_indexing_suite_string_to_double_map_entry


#### \_\_init_\_()


#### \_\_repr_\_() → object


#### data() → float


#### key() → str


### *class* stdcpp_python_export.map_indexing_suite_string_to_uint_map_entry


#### \_\_init_\_()


#### \_\_repr_\_() → object


#### data() → int


#### key() → str


### *class* stdcpp_python_export.stringVec


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: str)


#### size() → int


### stdcpp_python_export.string_list_to_vec(arg1: list) → [stringVec](#stdcpp_python_export.stringVec)


### *class* stdcpp_python_export.string_to_bool_map


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


### *class* stdcpp_python_export.string_to_double_map


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


### *class* stdcpp_python_export.string_to_uint_map


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


### *class* stdcpp_python_export.uintVec


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: int)


#### size() → int


### stdcpp_python_export.uint_list_to_vec(arg1: list) → [uintVec](#stdcpp_python_export.uintVec)
