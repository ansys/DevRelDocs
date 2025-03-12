

### *class* dynardo_py_algorithms.DOETYPES

**Enumeration**


#### ADVANCEDLATINHYPER *= dynardo_py_algorithms.DOETYPES.ADVANCEDLATINHYPER*


#### AXIAL *= dynardo_py_algorithms.DOETYPES.AXIAL*


#### BOXBEHNKEN *= dynardo_py_algorithms.DOETYPES.BOXBEHNKEN*


#### CENTERPOINT *= dynardo_py_algorithms.DOETYPES.CENTERPOINT*


#### CENTRALCOMPOSITE *= dynardo_py_algorithms.DOETYPES.CENTRALCOMPOSITE*


#### DOPTIMAL *= dynardo_py_algorithms.DOETYPES.DOPTIMAL*


#### DOPTIMALLINEAR *= dynardo_py_algorithms.DOETYPES.DOPTIMALLINEAR*


#### DOPTIMALQUADRATIC *= dynardo_py_algorithms.DOETYPES.DOPTIMALQUADRATIC*


#### FEKETE *= dynardo_py_algorithms.DOETYPES.FEKETE*


#### FULLCOMBINATORIAL *= dynardo_py_algorithms.DOETYPES.FULLCOMBINATORIAL*


#### FULLFACTORIAL *= dynardo_py_algorithms.DOETYPES.FULLFACTORIAL*


#### KOSHAL *= dynardo_py_algorithms.DOETYPES.KOSHAL*


#### KOSHALLINEAR *= dynardo_py_algorithms.DOETYPES.KOSHALLINEAR*


#### KOSHALQUADRATIC *= dynardo_py_algorithms.DOETYPES.KOSHALQUADRATIC*


#### LATINHYPER *= dynardo_py_algorithms.DOETYPES.LATINHYPER*


#### LATINHYPERDETERMINISTIC *= dynardo_py_algorithms.DOETYPES.LATINHYPERDETERMINISTIC*


#### MIXEDTERMS *= dynardo_py_algorithms.DOETYPES.MIXEDTERMS*


#### ORTHOLATINHYPERDETERMINISTIC *= dynardo_py_algorithms.DOETYPES.ORTHOLATINHYPERDETERMINISTIC*


#### PLAINMONTECARLO *= dynardo_py_algorithms.DOETYPES.PLAINMONTECARLO*


#### SOBOL *= dynardo_py_algorithms.DOETYPES.SOBOL*


#### SPACEFILLINGLATINHYPER *= dynardo_py_algorithms.DOETYPES.SPACEFILLINGLATINHYPER*


#### STARPOINTS *= dynardo_py_algorithms.DOETYPES.STARPOINTS*


### *class* dynardo_py_algorithms.DesignTypes

**Enumeration**


#### eGRADIENT *= dynardo_py_algorithms.DesignTypes.eGRADIENT*


#### eITERATION_BEST *= dynardo_py_algorithms.DesignTypes.eITERATION_BEST*


#### eNEW_POP *= dynardo_py_algorithms.DesignTypes.eNEW_POP*


#### eNONE *= dynardo_py_algorithms.DesignTypes.eNONE*


#### eOBJECTIVE *= dynardo_py_algorithms.DesignTypes.eOBJECTIVE*


#### eSUPPORT_POINT *= dynardo_py_algorithms.DesignTypes.eSUPPORT_POINT*


### *class* dynardo_py_algorithms.DeterministicType

**Enumeration**


#### CONTINUOUS *= dynardo_py_algorithms.DeterministicType.CONTINUOUS*


#### NOMINALDISCRETE *= dynardo_py_algorithms.DeterministicType.NOMINALDISCRETE*


#### ORDINALDISCRETE_INDEX *= dynardo_py_algorithms.DeterministicType.ORDINALDISCRETE_INDEX*


#### ORDINALDISCRETE_VALUE *= dynardo_py_algorithms.DeterministicType.ORDINALDISCRETE_VALUE*


### *class* dynardo_py_algorithms.DeterministicTypeVec


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: [DeterministicType](#dynardo_py_algorithms.DeterministicType))


#### size() → int


### dynardo_py_algorithms.DeterministicType_list_to_vec(arg1: list) → [DeterministicTypeVec](#dynardo_py_algorithms.DeterministicTypeVec)

### dynardo_py_algorithms.DeterministicType_list_to_vec(arg1: list) → [DeterministicTypeVec](#dynardo_py_algorithms.DeterministicTypeVec)


### *class* dynardo_py_algorithms.ParameterType

**Enumeration**


#### DEPENDENT *= dynardo_py_algorithms.ParameterType.DEPENDENT*


#### DETERMINISTIC *= dynardo_py_algorithms.ParameterType.DETERMINISTIC*


#### MIXED *= dynardo_py_algorithms.ParameterType.MIXED*


#### STOCHASTIC *= dynardo_py_algorithms.ParameterType.STOCHASTIC*


### *class* dynardo_py_algorithms.RandomVariableKind

**Enumeration**


#### DETERMINISTIC *= dynardo_py_algorithms.RandomVariableKind.DETERMINISTIC*


#### EMPIRICAL_CONTINUOUS *= dynardo_py_algorithms.RandomVariableKind.EMPIRICAL_CONTINUOUS*


#### EMPIRICAL_DISCRETE *= dynardo_py_algorithms.RandomVariableKind.EMPIRICAL_DISCRETE*


#### MARGINALDISTRIBUTION *= dynardo_py_algorithms.RandomVariableKind.MARGINALDISTRIBUTION*


### *class* dynardo_py_algorithms.RandomVariableType

**Enumeration**


#### BERNOULLI *= dynardo_py_algorithms.RandomVariableType.BERNOULLI*


#### BETA *= dynardo_py_algorithms.RandomVariableType.BETA*


#### CHI_SQUARE *= dynardo_py_algorithms.RandomVariableType.CHI_SQUARE*


#### ERLANG *= dynardo_py_algorithms.RandomVariableType.ERLANG*


#### EXPONENTIAL *= dynardo_py_algorithms.RandomVariableType.EXPONENTIAL*


#### EXTERNAL *= dynardo_py_algorithms.RandomVariableType.EXTERNAL*


#### EXTERNALCOHERENCE *= dynardo_py_algorithms.RandomVariableType.EXTERNALCOHERENCE*


#### EXTREME_VALUE *= dynardo_py_algorithms.RandomVariableType.EXTREME_VALUE*


#### FISHER_F *= dynardo_py_algorithms.RandomVariableType.FISHER_F*


#### FISHER_TIPPETT *= dynardo_py_algorithms.RandomVariableType.FISHER_TIPPETT*


#### FISHER_Z *= dynardo_py_algorithms.RandomVariableType.FISHER_Z*


#### FRECHET *= dynardo_py_algorithms.RandomVariableType.FRECHET*


#### GAMMA *= dynardo_py_algorithms.RandomVariableType.GAMMA*


#### GENERAL_DISCRETE *= dynardo_py_algorithms.RandomVariableType.GENERAL_DISCRETE*


#### GUMBEL *= dynardo_py_algorithms.RandomVariableType.GUMBEL*


#### INVERSE_NORMAL *= dynardo_py_algorithms.RandomVariableType.INVERSE_NORMAL*


#### KERNEL *= dynardo_py_algorithms.RandomVariableType.KERNEL*


#### LAMBDA *= dynardo_py_algorithms.RandomVariableType.LAMBDA*


#### LAPLACE *= dynardo_py_algorithms.RandomVariableType.LAPLACE*


#### LARGE_I *= dynardo_py_algorithms.RandomVariableType.LARGE_I*


#### LARGE_II *= dynardo_py_algorithms.RandomVariableType.LARGE_II*


#### LARGE_III *= dynardo_py_algorithms.RandomVariableType.LARGE_III*


#### LEVY *= dynardo_py_algorithms.RandomVariableType.LEVY*


#### LOGISTIC *= dynardo_py_algorithms.RandomVariableType.LOGISTIC*


#### LOGNORMAL *= dynardo_py_algorithms.RandomVariableType.LOGNORMAL*


#### LOGUNIFORM *= dynardo_py_algorithms.RandomVariableType.LOGUNIFORM*


#### LOG_GAMMA *= dynardo_py_algorithms.RandomVariableType.LOG_GAMMA*


#### LOG_NORMAL *= dynardo_py_algorithms.RandomVariableType.LOG_NORMAL*


#### LORENTZ *= dynardo_py_algorithms.RandomVariableType.LORENTZ*


#### MAX_TYPE *= dynardo_py_algorithms.RandomVariableType.MAX_TYPE*


#### MULTIUNIFORM *= dynardo_py_algorithms.RandomVariableType.MULTIUNIFORM*


#### NORMAL *= dynardo_py_algorithms.RandomVariableType.NORMAL*


#### PARETO *= dynardo_py_algorithms.RandomVariableType.PARETO*


#### POISSON *= dynardo_py_algorithms.RandomVariableType.POISSON*


#### POLYMAP *= dynardo_py_algorithms.RandomVariableType.POLYMAP*


#### RAYLEIGH *= dynardo_py_algorithms.RandomVariableType.RAYLEIGH*


#### ROSSI *= dynardo_py_algorithms.RandomVariableType.ROSSI*


#### SMALL_I *= dynardo_py_algorithms.RandomVariableType.SMALL_I*


#### SMALL_II *= dynardo_py_algorithms.RandomVariableType.SMALL_II*


#### SMALL_III *= dynardo_py_algorithms.RandomVariableType.SMALL_III*


#### STUDENTS_T *= dynardo_py_algorithms.RandomVariableType.STUDENTS_T*


#### TRIANGULAR *= dynardo_py_algorithms.RandomVariableType.TRIANGULAR*


#### TRUNCATEDNORMAL *= dynardo_py_algorithms.RandomVariableType.TRUNCATEDNORMAL*


#### UNIFORM *= dynardo_py_algorithms.RandomVariableType.UNIFORM*


#### UNTYPED *= dynardo_py_algorithms.RandomVariableType.UNTYPED*


#### WEIBULL *= dynardo_py_algorithms.RandomVariableType.WEIBULL*


### *class* dynardo_py_algorithms.RandomVariableTypeVec


#### \_\_contains_\_(arg2: object) → bool


#### \_\_delitem_\_(arg2: object)


#### \_\_getitem_\_(arg2: object) → object


#### \_\_init_\_()


#### \_\_iter_\_() → object

#### \_\_iter_\_() → object


#### \_\_len_\_() → int


#### \_\_setitem_\_(arg2: object, arg3: object)


#### append(arg2: object)


#### extend(arg2: object)


#### push_back(arg2: [RandomVariableType](#dynardo_py_algorithms.RandomVariableType))


#### size() → int


### *class* dynardo_py_algorithms.SupportedAlgorithms

**Enumeration**


#### APPROXIMATION *= dynardo_py_algorithms.SupportedAlgorithms.APPROXIMATION*


#### ARSM *= dynardo_py_algorithms.SupportedAlgorithms.ARSM*


#### CMA *= dynardo_py_algorithms.SupportedAlgorithms.CMA*


#### CUSTOM_OPTIMIZATION *= dynardo_py_algorithms.SupportedAlgorithms.CUSTOM_OPTIMIZATION*


#### CUSTOM_SAMPLING *= dynardo_py_algorithms.SupportedAlgorithms.CUSTOM_SAMPLING*


#### CUSTOM_STOCHASTIC *= dynardo_py_algorithms.SupportedAlgorithms.CUSTOM_STOCHASTIC*


#### EA *= dynardo_py_algorithms.SupportedAlgorithms.EA*


#### IMPORTED *= dynardo_py_algorithms.SupportedAlgorithms.IMPORTED*


#### MEMETIC *= dynardo_py_algorithms.SupportedAlgorithms.MEMETIC*


#### MOP3 *= dynardo_py_algorithms.SupportedAlgorithms.MOP3*


#### NLPQL *= dynardo_py_algorithms.SupportedAlgorithms.NLPQL*


#### PARAMETRIC_SERVICE *= dynardo_py_algorithms.SupportedAlgorithms.PARAMETRIC_SERVICE*


#### PSO *= dynardo_py_algorithms.SupportedAlgorithms.PSO*


#### RDO *= dynardo_py_algorithms.SupportedAlgorithms.RDO*


#### RELIABILITY *= dynardo_py_algorithms.SupportedAlgorithms.RELIABILITY*


#### RELI_AS *= dynardo_py_algorithms.SupportedAlgorithms.RELI_AS*


#### RELI_DS *= dynardo_py_algorithms.SupportedAlgorithms.RELI_DS*


#### RELI_DS_ARSM *= dynardo_py_algorithms.SupportedAlgorithms.RELI_DS_ARSM*


#### RELI_FORM *= dynardo_py_algorithms.SupportedAlgorithms.RELI_FORM*


#### RELI_ISPUD *= dynardo_py_algorithms.SupportedAlgorithms.RELI_ISPUD*


#### RELI_MCS *= dynardo_py_algorithms.SupportedAlgorithms.RELI_MCS*


#### ROBUSTNESS *= dynardo_py_algorithms.SupportedAlgorithms.ROBUSTNESS*


#### SDI *= dynardo_py_algorithms.SupportedAlgorithms.SDI*


#### SENSITIVITY *= dynardo_py_algorithms.SupportedAlgorithms.SENSITIVITY*


#### SIMPLEX *= dynardo_py_algorithms.SupportedAlgorithms.SIMPLEX*


#### UNKNOWN *= dynardo_py_algorithms.SupportedAlgorithms.UNKNOWN*


### *class* dynardo_py_algorithms.bitset_type


#### \_\_init_\_()


### dynardo_py_algorithms.bool_list_to_bitset(bit_data: list) → [bitset_type](#dynardo_py_algorithms.bitset_type)


### dynardo_py_algorithms.get_row(matrix: [matrix_type](#dynardo_py_algorithms.matrix_type), rownum: int) → [vector_type](#dynardo_py_algorithms.vector_type)

Fetch row of index rownum from matrix and return it as a vector.


### dynardo_py_algorithms.list_list_to_dynardo_matrix(data: list) → [matrix_type](#dynardo_py_algorithms.matrix_type)

Create a matrix from a list of lists.


### dynardo_py_algorithms.list_to_dynardo_vector(data: list) → [vector_type](#dynardo_py_algorithms.vector_type)

Create a vector from a list.


### dynardo_py_algorithms.list_to_vec(arg1: list) → [DeterministicTypeVec](#dynardo_py_algorithms.DeterministicTypeVec)

### dynardo_py_algorithms.list_to_vec(arg1: list) → [DeterministicTypeVec](#dynardo_py_algorithms.DeterministicTypeVec)


### *class* dynardo_py_algorithms.matrix_type

Exposes optiSLang’s internal matrix representation.


#### \_\_call_\_(arg2: int, arg3: int) → float


#### \_\_init_\_(arg2: int, arg3: int)


#### cols() → int


#### rows() → int


#### size() → int


### *class* dynardo_py_algorithms.vector_type

Exposes optiSLang’s internal vector representation.


#### \_\_call_\_(arg2: int) → float


#### \_\_init_\_(arg2: int)


#### cols() → int


#### rows() → int


#### size() → int
