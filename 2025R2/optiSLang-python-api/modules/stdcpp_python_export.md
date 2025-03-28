# stdcpp_python_export

<a id="stdcpp_python_export.BasePathMode"></a>

## *class* stdcpp_python_export.BasePathMode

**Enumeration**

<a id="stdcpp_python_export.BasePathMode.ABSOLUTE_PATH"></a>

#### ABSOLUTE_PATH *= stdcpp_python_export.BasePathMode.ABSOLUTE_PATH*

<a id="stdcpp_python_export.BasePathMode.NUM_BASEPATH_MODES"></a>

#### NUM_BASEPATH_MODES *= stdcpp_python_export.BasePathMode.NUM_BASEPATH_MODES*

<a id="stdcpp_python_export.BasePathMode.PROJECT_RELATIVE"></a>

#### PROJECT_RELATIVE *= stdcpp_python_export.BasePathMode.PROJECT_RELATIVE*

<a id="stdcpp_python_export.BasePathMode.PROJECT_WORKING_DIR_RELATIVE"></a>

#### PROJECT_WORKING_DIR_RELATIVE *= stdcpp_python_export.BasePathMode.PROJECT_WORKING_DIR_RELATIVE*

<a id="stdcpp_python_export.BasePathMode.REFERENCE_FILES_DIR_RELATIVE"></a>

#### REFERENCE_FILES_DIR_RELATIVE *= stdcpp_python_export.BasePathMode.REFERENCE_FILES_DIR_RELATIVE*

<a id="stdcpp_python_export.BasePathMode.WORKING_DIR_RELATIVE"></a>

#### WORKING_DIR_RELATIVE *= stdcpp_python_export.BasePathMode.WORKING_DIR_RELATIVE*

<a id="stdcpp_python_export.DoublePair"></a>

## *class* stdcpp_python_export.DoublePair

<a id="stdcpp_python_export.DoublePair.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.DoublePair.first"></a>

#### *property* first

<a id="stdcpp_python_export.DoublePair.second"></a>

#### *property* second

<a id="stdcpp_python_export.MakeVariableNameValid"></a>

## stdcpp_python_export.MakeVariableNameValid(arg1: str) → str

## stdcpp_python_export.MakeVariableNameValid(arg1: str, arg2: object) → str

<a id="stdcpp_python_export.Path"></a>

## *class* stdcpp_python_export.Path

<a id="stdcpp_python_export.Path.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: str)

<a id="stdcpp_python_export.Path.__str__"></a>

#### \_\_str_\_() → str

<a id="stdcpp_python_export.PathSet"></a>

## *class* stdcpp_python_export.PathSet

A mutable set.

<a id="stdcpp_python_export.PathSet.__and__"></a>

#### \_\_and_\_(arg2: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return the intersection of this set and other.

<a id="stdcpp_python_export.PathSet.__contains__"></a>

#### \_\_contains_\_(arg2: [Path](#stdcpp_python_export.Path)) → bool

<a id="stdcpp_python_export.PathSet.__delitem__"></a>

#### \_\_delitem_\_(arg2: [Path](#stdcpp_python_export.Path))

<a id="stdcpp_python_export.PathSet.__hash__"></a>

#### \_\_hash_\_()

<a id="stdcpp_python_export.PathSet.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.PathSet.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.PathSet.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.PathSet.__or__"></a>

#### \_\_or_\_(arg2: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return the union of this set and other.

<a id="stdcpp_python_export.PathSet.__sub__"></a>

#### \_\_sub_\_(arg2: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return elements of this set that are not in other.

<a id="stdcpp_python_export.PathSet.__xor__"></a>

#### \_\_xor_\_(arg2: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return elements that are either in this set or in other but not in both.

<a id="stdcpp_python_export.PathSet.add"></a>

#### add(element: [Path](#stdcpp_python_export.Path))

Add element.

<a id="stdcpp_python_export.PathSet.difference"></a>

#### difference(other: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return elements of this set that are not in other.

<a id="stdcpp_python_export.PathSet.intersection"></a>

#### intersection(other: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return the intersection of this set and other.

<a id="stdcpp_python_export.PathSet.remove"></a>

#### remove(element: [Path](#stdcpp_python_export.Path))

Remove element.

<a id="stdcpp_python_export.PathSet.symmetric_difference"></a>

#### symmetric_difference(other: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return elements that are either in this set or in other but not in both.

<a id="stdcpp_python_export.PathSet.union"></a>

#### union(other: [PathSet](#stdcpp_python_export.PathSet)) → [PathSet](#stdcpp_python_export.PathSet)

Return the union of this set and other.

<a id="stdcpp_python_export.RelativeSplittedPath"></a>

## *class* stdcpp_python_export.RelativeSplittedPath

<a id="stdcpp_python_export.RelativeSplittedPath.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: [Path](#stdcpp_python_export.Path))

#### \_\_init_\_(arg2: [Path](#stdcpp_python_export.Path), arg3: [BasePathMode](#stdcpp_python_export.BasePathMode))

#### \_\_init_\_(arg2: [Path](#stdcpp_python_export.Path), arg3: [BasePathMode](#stdcpp_python_export.BasePathMode), arg4: [Path](#stdcpp_python_export.Path))

#### \_\_init_\_(arg2: [SplittedPath](#stdcpp_python_export.SplittedPath))

#### \_\_init_\_(arg2: [SplittedPath](#stdcpp_python_export.SplittedPath), arg3: [BasePathMode](#stdcpp_python_export.BasePathMode))

#### \_\_init_\_(arg2: [SplittedPath](#stdcpp_python_export.SplittedPath), arg3: [BasePathMode](#stdcpp_python_export.BasePathMode), arg4: [Path](#stdcpp_python_export.Path))

<a id="stdcpp_python_export.RelativeSplittedPath.base_path"></a>

#### *property* base_path

<a id="stdcpp_python_export.RelativeSplittedPath.base_path_mode"></a>

#### *property* base_path_mode

<a id="stdcpp_python_export.RelativeSplittedPath.splitted_path"></a>

#### *property* splitted_path

<a id="stdcpp_python_export.SizeSet"></a>

## *class* stdcpp_python_export.SizeSet

A mutable set.

<a id="stdcpp_python_export.SizeSet.__and__"></a>

#### \_\_and_\_(arg2: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return the intersection of this set and other.

<a id="stdcpp_python_export.SizeSet.__contains__"></a>

#### \_\_contains_\_(arg2: int) → bool

<a id="stdcpp_python_export.SizeSet.__delitem__"></a>

#### \_\_delitem_\_(arg2: int)

<a id="stdcpp_python_export.SizeSet.__hash__"></a>

#### \_\_hash_\_()

<a id="stdcpp_python_export.SizeSet.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.SizeSet.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.SizeSet.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.SizeSet.__or__"></a>

#### \_\_or_\_(arg2: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return the union of this set and other.

<a id="stdcpp_python_export.SizeSet.__sub__"></a>

#### \_\_sub_\_(arg2: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return elements of this set that are not in other.

<a id="stdcpp_python_export.SizeSet.__xor__"></a>

#### \_\_xor_\_(arg2: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return elements that are either in this set or in other but not in both.

<a id="stdcpp_python_export.SizeSet.add"></a>

#### add(element: int)

Add element.

<a id="stdcpp_python_export.SizeSet.difference"></a>

#### difference(other: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return elements of this set that are not in other.

<a id="stdcpp_python_export.SizeSet.intersection"></a>

#### intersection(other: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return the intersection of this set and other.

<a id="stdcpp_python_export.SizeSet.remove"></a>

#### remove(element: int)

Remove element.

<a id="stdcpp_python_export.SizeSet.symmetric_difference"></a>

#### symmetric_difference(other: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return elements that are either in this set or in other but not in both.

<a id="stdcpp_python_export.SizeSet.union"></a>

#### union(other: [SizeSet](#stdcpp_python_export.SizeSet)) → [SizeSet](#stdcpp_python_export.SizeSet)

Return the union of this set and other.

<a id="stdcpp_python_export.SplittedPath"></a>

## *class* stdcpp_python_export.SplittedPath

<a id="stdcpp_python_export.SplittedPath.__init__"></a>

#### \_\_init_\_()

#### \_\_init_\_(arg2: str)

#### \_\_init_\_(arg2: str, arg3: str)

#### \_\_init_\_(arg2: [Path](#stdcpp_python_export.Path))

#### \_\_init_\_(arg2: [Path](#stdcpp_python_export.Path), arg3: [Path](#stdcpp_python_export.Path))

<a id="stdcpp_python_export.SplittedPath.__str__"></a>

#### \_\_str_\_() → str

<a id="stdcpp_python_export.SplittedPath.head"></a>

#### *property* head

<a id="stdcpp_python_export.SplittedPath.isSplitted"></a>

#### isSplitted() → bool

<a id="stdcpp_python_export.SplittedPath.joined"></a>

#### joined() → [Path](#stdcpp_python_export.Path)

<a id="stdcpp_python_export.SplittedPath.tail"></a>

#### *property* tail

<a id="stdcpp_python_export.StrList"></a>

## *class* stdcpp_python_export.StrList

<a id="stdcpp_python_export.StrList.StrExportList"></a>

#### StrExportList() → [StrList](#stdcpp_python_export.StrList)

<a id="stdcpp_python_export.StrList.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.StrList.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.StrList.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.StrList.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.StrList.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.StrList.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.StrList.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.StrList.append"></a>

#### append(arg2: object)

<a id="stdcpp_python_export.StrList.extend"></a>

#### extend(arg2: object)

<a id="stdcpp_python_export.StrList.push_back"></a>

#### push_back(arg2: str)

<a id="stdcpp_python_export.StrList.size"></a>

#### size() → int

<a id="stdcpp_python_export.StrList.sort"></a>

#### sort()

<a id="stdcpp_python_export.StrPair"></a>

## *class* stdcpp_python_export.StrPair

<a id="stdcpp_python_export.StrPair.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.StrPair.first"></a>

#### *property* first

<a id="stdcpp_python_export.StrPair.second"></a>

#### *property* second

<a id="stdcpp_python_export.StrSet"></a>

## *class* stdcpp_python_export.StrSet

A mutable set.

<a id="stdcpp_python_export.StrSet.__and__"></a>

#### \_\_and_\_(arg2: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return the intersection of this set and other.

<a id="stdcpp_python_export.StrSet.__contains__"></a>

#### \_\_contains_\_(arg2: str) → bool

<a id="stdcpp_python_export.StrSet.__delitem__"></a>

#### \_\_delitem_\_(arg2: str)

<a id="stdcpp_python_export.StrSet.__hash__"></a>

#### \_\_hash_\_()

<a id="stdcpp_python_export.StrSet.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.StrSet.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.StrSet.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.StrSet.__or__"></a>

#### \_\_or_\_(arg2: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return the union of this set and other.

<a id="stdcpp_python_export.StrSet.__sub__"></a>

#### \_\_sub_\_(arg2: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return elements of this set that are not in other.

<a id="stdcpp_python_export.StrSet.__xor__"></a>

#### \_\_xor_\_(arg2: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return elements that are either in this set or in other but not in both.

<a id="stdcpp_python_export.StrSet.add"></a>

#### add(element: str)

Add element.

<a id="stdcpp_python_export.StrSet.difference"></a>

#### difference(other: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return elements of this set that are not in other.

<a id="stdcpp_python_export.StrSet.intersection"></a>

#### intersection(other: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return the intersection of this set and other.

<a id="stdcpp_python_export.StrSet.remove"></a>

#### remove(element: str)

Remove element.

<a id="stdcpp_python_export.StrSet.symmetric_difference"></a>

#### symmetric_difference(other: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return elements that are either in this set or in other but not in both.

<a id="stdcpp_python_export.StrSet.union"></a>

#### union(other: [StrSet](#stdcpp_python_export.StrSet)) → [StrSet](#stdcpp_python_export.StrSet)

Return the union of this set and other.

<a id="stdcpp_python_export.WStrList"></a>

## *class* stdcpp_python_export.WStrList

<a id="stdcpp_python_export.WStrList.StrExportList"></a>

#### StrExportList() → [WStrList](#stdcpp_python_export.WStrList)

<a id="stdcpp_python_export.WStrList.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.WStrList.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.WStrList.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.WStrList.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.WStrList.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.WStrList.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.WStrList.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.WStrList.append"></a>

#### append(arg2: object)

<a id="stdcpp_python_export.WStrList.extend"></a>

#### extend(arg2: object)

<a id="stdcpp_python_export.WStrList.push_back"></a>

#### push_back(arg2: str)

<a id="stdcpp_python_export.WStrList.size"></a>

#### size() → int

<a id="stdcpp_python_export.WStrList.sort"></a>

#### sort()

<a id="stdcpp_python_export.WStrPair"></a>

## *class* stdcpp_python_export.WStrPair

<a id="stdcpp_python_export.WStrPair.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.WStrPair.first"></a>

#### *property* first

<a id="stdcpp_python_export.WStrPair.second"></a>

#### *property* second

<a id="stdcpp_python_export.WStrSet"></a>

## *class* stdcpp_python_export.WStrSet

A mutable set.

<a id="stdcpp_python_export.WStrSet.__and__"></a>

#### \_\_and_\_(arg2: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return the intersection of this set and other.

<a id="stdcpp_python_export.WStrSet.__contains__"></a>

#### \_\_contains_\_(arg2: str) → bool

<a id="stdcpp_python_export.WStrSet.__delitem__"></a>

#### \_\_delitem_\_(arg2: str)

<a id="stdcpp_python_export.WStrSet.__hash__"></a>

#### \_\_hash_\_()

<a id="stdcpp_python_export.WStrSet.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.WStrSet.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.WStrSet.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.WStrSet.__or__"></a>

#### \_\_or_\_(arg2: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return the union of this set and other.

<a id="stdcpp_python_export.WStrSet.__sub__"></a>

#### \_\_sub_\_(arg2: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return elements of this set that are not in other.

<a id="stdcpp_python_export.WStrSet.__xor__"></a>

#### \_\_xor_\_(arg2: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return elements that are either in this set or in other but not in both.

<a id="stdcpp_python_export.WStrSet.add"></a>

#### add(element: str)

Add element.

<a id="stdcpp_python_export.WStrSet.difference"></a>

#### difference(other: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return elements of this set that are not in other.

<a id="stdcpp_python_export.WStrSet.intersection"></a>

#### intersection(other: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return the intersection of this set and other.

<a id="stdcpp_python_export.WStrSet.remove"></a>

#### remove(element: str)

Remove element.

<a id="stdcpp_python_export.WStrSet.symmetric_difference"></a>

#### symmetric_difference(other: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return elements that are either in this set or in other but not in both.

<a id="stdcpp_python_export.WStrSet.union"></a>

#### union(other: [WStrSet](#stdcpp_python_export.WStrSet)) → [WStrSet](#stdcpp_python_export.WStrSet)

Return the union of this set and other.

<a id="stdcpp_python_export.boolVec"></a>

## *class* stdcpp_python_export.boolVec

<a id="stdcpp_python_export.boolVec.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.boolVec.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.boolVec.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.boolVec.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.boolVec.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.boolVec.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.boolVec.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.boolVec.append"></a>

#### append(arg2: object)

<a id="stdcpp_python_export.boolVec.extend"></a>

#### extend(arg2: object)

<a id="stdcpp_python_export.boolVec.push_back"></a>

#### push_back(arg2: bool)

<a id="stdcpp_python_export.boolVec.size"></a>

#### size() → int

<a id="stdcpp_python_export.bool_list_to_vec"></a>

## stdcpp_python_export.bool_list_to_vec(arg1: list) → [boolVec](#stdcpp_python_export.boolVec)

<a id="stdcpp_python_export.convertList2Vec"></a>

## stdcpp_python_export.convertList2Vec(arg1: [StrList](#stdcpp_python_export.StrList)) → [stringVec](#stdcpp_python_export.stringVec)

<a id="stdcpp_python_export.convertPyList2WList"></a>

## stdcpp_python_export.convertPyList2WList(arg1: list) → [WStrList](#stdcpp_python_export.WStrList)

<a id="stdcpp_python_export.convertVec2List"></a>

## stdcpp_python_export.convertVec2List(arg1: [stringVec](#stdcpp_python_export.stringVec)) → [StrList](#stdcpp_python_export.StrList)

<a id="stdcpp_python_export.convertWList2PyList"></a>

## stdcpp_python_export.convertWList2PyList(arg1: [WStrList](#stdcpp_python_export.WStrList)) → list

<a id="stdcpp_python_export.convertWList2Vec"></a>

## stdcpp_python_export.convertWList2Vec(arg1: [WStrList](#stdcpp_python_export.WStrList)) → object

<a id="stdcpp_python_export.convertWVec2List"></a>

## stdcpp_python_export.convertWVec2List(arg1: object) → [WStrList](#stdcpp_python_export.WStrList)

<a id="stdcpp_python_export.doubleVec"></a>

## *class* stdcpp_python_export.doubleVec

<a id="stdcpp_python_export.doubleVec.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.doubleVec.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.doubleVec.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.doubleVec.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.doubleVec.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.doubleVec.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.doubleVec.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.doubleVec.append"></a>

#### append(arg2: object)

<a id="stdcpp_python_export.doubleVec.extend"></a>

#### extend(arg2: object)

<a id="stdcpp_python_export.doubleVec.push_back"></a>

#### push_back(arg2: float)

<a id="stdcpp_python_export.doubleVec.size"></a>

#### size() → int

<a id="stdcpp_python_export.doubleVecVec"></a>

## *class* stdcpp_python_export.doubleVecVec

<a id="stdcpp_python_export.doubleVecVec.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.doubleVecVec.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.doubleVecVec.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.doubleVecVec.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.doubleVecVec.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.doubleVecVec.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.doubleVecVec.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.doubleVecVec.append"></a>

#### append(arg2: object)

<a id="stdcpp_python_export.doubleVecVec.extend"></a>

#### extend(arg2: object)

<a id="stdcpp_python_export.doubleVecVec.push_back"></a>

#### push_back(arg2: [doubleVec](#stdcpp_python_export.doubleVec))

<a id="stdcpp_python_export.doubleVecVec.size"></a>

#### size() → int

<a id="stdcpp_python_export.doubleVec_list_to_vec"></a>

## stdcpp_python_export.doubleVec_list_to_vec(arg1: list) → [doubleVecVec](#stdcpp_python_export.doubleVecVec)

<a id="stdcpp_python_export.double_list_to_vec"></a>

## stdcpp_python_export.double_list_to_vec(arg1: list) → [doubleVec](#stdcpp_python_export.doubleVec)

<a id="stdcpp_python_export.eraseWListElement"></a>

## stdcpp_python_export.eraseWListElement(arg1: [WStrList](#stdcpp_python_export.WStrList), arg2: int)

<a id="stdcpp_python_export.intVec"></a>

## *class* stdcpp_python_export.intVec

<a id="stdcpp_python_export.intVec.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.intVec.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.intVec.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.intVec.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.intVec.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.intVec.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.intVec.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.intVec.append"></a>

#### append(arg2: object)

<a id="stdcpp_python_export.intVec.extend"></a>

#### extend(arg2: object)

<a id="stdcpp_python_export.intVec.push_back"></a>

#### push_back(arg2: int)

<a id="stdcpp_python_export.intVec.size"></a>

#### size() → int

<a id="stdcpp_python_export.int_list_to_vec"></a>

## stdcpp_python_export.int_list_to_vec(arg1: list) → [intVec](#stdcpp_python_export.intVec)

<a id="stdcpp_python_export.list_to_vec"></a>

## stdcpp_python_export.list_to_vec(arg1: list) → [intVec](#stdcpp_python_export.intVec)

## stdcpp_python_export.list_to_vec(arg1: list) → [uintVec](#stdcpp_python_export.uintVec)

## stdcpp_python_export.list_to_vec(arg1: list) → [doubleVec](#stdcpp_python_export.doubleVec)

## stdcpp_python_export.list_to_vec(arg1: list) → [stringVec](#stdcpp_python_export.stringVec)

## stdcpp_python_export.list_to_vec(arg1: list) → [doubleVecVec](#stdcpp_python_export.doubleVecVec)

## stdcpp_python_export.list_to_vec(arg1: list) → [boolVec](#stdcpp_python_export.boolVec)

<a id="stdcpp_python_export.map_indexing_suite_string_to_bool_map_entry"></a>

## *class* stdcpp_python_export.map_indexing_suite_string_to_bool_map_entry

<a id="stdcpp_python_export.map_indexing_suite_string_to_bool_map_entry.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.map_indexing_suite_string_to_bool_map_entry.__repr__"></a>

#### \_\_repr_\_() → object

<a id="stdcpp_python_export.map_indexing_suite_string_to_bool_map_entry.data"></a>

#### data() → bool

<a id="stdcpp_python_export.map_indexing_suite_string_to_bool_map_entry.key"></a>

#### key() → str

<a id="stdcpp_python_export.map_indexing_suite_string_to_double_map_entry"></a>

## *class* stdcpp_python_export.map_indexing_suite_string_to_double_map_entry

<a id="stdcpp_python_export.map_indexing_suite_string_to_double_map_entry.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.map_indexing_suite_string_to_double_map_entry.__repr__"></a>

#### \_\_repr_\_() → object

<a id="stdcpp_python_export.map_indexing_suite_string_to_double_map_entry.data"></a>

#### data() → float

<a id="stdcpp_python_export.map_indexing_suite_string_to_double_map_entry.key"></a>

#### key() → str

<a id="stdcpp_python_export.map_indexing_suite_string_to_uint_map_entry"></a>

## *class* stdcpp_python_export.map_indexing_suite_string_to_uint_map_entry

<a id="stdcpp_python_export.map_indexing_suite_string_to_uint_map_entry.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.map_indexing_suite_string_to_uint_map_entry.__repr__"></a>

#### \_\_repr_\_() → object

<a id="stdcpp_python_export.map_indexing_suite_string_to_uint_map_entry.data"></a>

#### data() → int

<a id="stdcpp_python_export.map_indexing_suite_string_to_uint_map_entry.key"></a>

#### key() → str

<a id="stdcpp_python_export.stringVec"></a>

## *class* stdcpp_python_export.stringVec

<a id="stdcpp_python_export.stringVec.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.stringVec.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.stringVec.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.stringVec.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.stringVec.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.stringVec.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.stringVec.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.stringVec.append"></a>

#### append(arg2: object)

<a id="stdcpp_python_export.stringVec.extend"></a>

#### extend(arg2: object)

<a id="stdcpp_python_export.stringVec.push_back"></a>

#### push_back(arg2: str)

<a id="stdcpp_python_export.stringVec.size"></a>

#### size() → int

<a id="stdcpp_python_export.string_list_to_vec"></a>

## stdcpp_python_export.string_list_to_vec(arg1: list) → [stringVec](#stdcpp_python_export.stringVec)

<a id="stdcpp_python_export.string_to_bool_map"></a>

## *class* stdcpp_python_export.string_to_bool_map

<a id="stdcpp_python_export.string_to_bool_map.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.string_to_bool_map.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.string_to_bool_map.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.string_to_bool_map.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.string_to_bool_map.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.string_to_bool_map.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.string_to_bool_map.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.string_to_double_map"></a>

## *class* stdcpp_python_export.string_to_double_map

<a id="stdcpp_python_export.string_to_double_map.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.string_to_double_map.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.string_to_double_map.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.string_to_double_map.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.string_to_double_map.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.string_to_double_map.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.string_to_double_map.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.string_to_uint_map"></a>

## *class* stdcpp_python_export.string_to_uint_map

<a id="stdcpp_python_export.string_to_uint_map.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.string_to_uint_map.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.string_to_uint_map.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.string_to_uint_map.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.string_to_uint_map.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.string_to_uint_map.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.string_to_uint_map.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.uintVec"></a>

## *class* stdcpp_python_export.uintVec

<a id="stdcpp_python_export.uintVec.__contains__"></a>

#### \_\_contains_\_(arg2: object) → bool

<a id="stdcpp_python_export.uintVec.__delitem__"></a>

#### \_\_delitem_\_(arg2: object)

<a id="stdcpp_python_export.uintVec.__getitem__"></a>

#### \_\_getitem_\_(arg2: object) → object

<a id="stdcpp_python_export.uintVec.__init__"></a>

#### \_\_init_\_()

<a id="stdcpp_python_export.uintVec.__iter__"></a>

#### \_\_iter_\_() → object

<a id="stdcpp_python_export.uintVec.__len__"></a>

#### \_\_len_\_() → int

<a id="stdcpp_python_export.uintVec.__setitem__"></a>

#### \_\_setitem_\_(arg2: object, arg3: object)

<a id="stdcpp_python_export.uintVec.append"></a>

#### append(arg2: object)

<a id="stdcpp_python_export.uintVec.extend"></a>

#### extend(arg2: object)

<a id="stdcpp_python_export.uintVec.push_back"></a>

#### push_back(arg2: int)

<a id="stdcpp_python_export.uintVec.size"></a>

#### size() → int

<a id="stdcpp_python_export.uint_list_to_vec"></a>

## stdcpp_python_export.uint_list_to_vec(arg1: list) → [uintVec](#stdcpp_python_export.uintVec)
