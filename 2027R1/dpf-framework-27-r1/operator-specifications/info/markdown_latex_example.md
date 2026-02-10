---
category: info
plugin: documentation
license: None
---

# info:Markdown LaTex example

**Version: 0.0.0**

## Description

This operator showcases the use of Markdown and LaTeX in operator and pin descriptions:
#### Headings
##### h2
###### h3

#### Text
This should result in a paragraph
it's that simple.


*italic*, **bold**

#### Lists
* an *unordered list*
  * with **some hierarchy**
    1. and an ordered
    2. mixed
    * list
    * directly
  * inside

#### Code
##### Code block
```c
std::string a = 'test';
```
```js
var a = 'test';
```
```python
a: str = 'test'
```
##### Inline code
And well `inline code` should also work.

#### Quotes

> A Quote
>
> With *some text* **blocks inside**
>
> * even a list
> * should be
> * possible

##### Links
Links such as [link](https://docs.pyansys.com/).

##### Images
![an image](https://docs.pyansys.com/version/dev/_static/pyansys_logo_transparent_white.png)


##### Separations

---

##### Checklists

- [ ] how
- [ ] about
  - [ ] a
  - [x] nice
- [x] check
- [ ] list

##### Tables

| Left header | middle header | last header |
|-------------|---------------|-------------|
| cell 1      | cell **2**    | cell 3      |
| cell 4      | cell 5        | cell 6      |


##### LaTeX

An inline equation $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$ using LaTeX dollar delimiters.

An inline equation $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$ using LaTeX parenthesis delimiters.

An equation on its own using dollar delimiters:
$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$$

An equation on its own using square bracket delimiters:
$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$$


## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong>|  [bogus_input](#input_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### bogus_input (Pin 0)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

This pin showcases the use of Markdown and LaTeX in pin descriptions:
#### Headings
##### h2
###### h3

#### Text
This should result in a paragraph
it's that simple.


*italic*, **bold**

#### Lists
* an *unordered list*
  * with **some hierarchy**
    1. and an ordered
    2. mixed
    * list
    * directly
  * inside

#### Code
##### Code block
```c
std::string a = 'test';
```
```js
var a = 'test';
```
```python
a: str = 'test'
```
##### Inline code
And well `inline code` should also work.

#### Quotes

> A Quote
>
> With *some text* **blocks inside**
>
> * even a list
> * should be
> * possible

##### Links
Links such as [link](https://docs.pyansys.com/).

##### Images
![an image](https://docs.pyansys.com/version/dev/_static/pyansys_logo_transparent_white.png)


##### Separations

---

##### Checklists

- [ ] how
- [ ] about
  - [ ] a
  - [x] nice
- [x] check
- [ ] list

##### Tables

| Left header | middle header | last header |
|-------------|---------------|-------------|
| cell 1      | cell **2**    | cell 3      |
| cell 4      | cell 5        | cell 6      |


##### LaTeX

An inline equation $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$ using LaTeX dollar delimiters.

An inline equation \\(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\\) using LaTeX parenthesis delimiters.

An equation on its own using dollar delimiters:
$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$$

An equation on its own using square bracket delimiters:
\\[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\\]



## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [bogus_output](#output_0) | |


<a id="output_0"></a>
### bogus_output (Pin 0)

- **Expected type(s):** 

This pin showcases the use of Markdown and LaTeX in pin descriptions:
#### Headings
##### h2
###### h3

#### Text
This should result in a paragraph
it's that simple.


*italic*, **bold**

#### Lists
* an *unordered list*
  * with **some hierarchy**
    1. and an ordered
    2. mixed
    * list
    * directly
  * inside

#### Code
##### Code block
```c
std::string a = 'test';
```
```js
var a = 'test';
```
```python
a: str = 'test'
```
##### Inline code
And well `inline code` should also work.

#### Quotes

> A Quote
>
> With *some text* **blocks inside**
>
> * even a list
> * should be
> * possible

##### Links
Links such as [link](https://docs.pyansys.com/).

##### Images
![an image](https://docs.pyansys.com/version/dev/_static/pyansys_logo_transparent_white.png)


##### Separations

---

##### Checklists

- [ ] how
- [ ] about
  - [ ] a
  - [x] nice
- [x] check
- [ ] list

##### Tables

| Left header | middle header | last header |
|-------------|---------------|-------------|
| cell 1      | cell **2**    | cell 3      |
| cell 4      | cell 5        | cell 6      |


##### LaTeX

An inline equation $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$ using LaTeX dollar delimiters.

An inline equation \\(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\\) using LaTeX parenthesis delimiters.

An equation on its own using dollar delimiters:
$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$$

An equation on its own using square bracket delimiters:
\\[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\\]



## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: info

 **Plugin**: documentation

 **Scripting name**: None

 **Full name**: None

 **Internal name**: markdown_latex_example

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("markdown_latex_example"); // operator instantiation
op.connect(0, my_bogus_input);
 my_bogus_output = op.getOutput<>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.info.None() # operator instantiation
op.inputs.bogus_input.connect(my_bogus_input)
my_bogus_output = op.outputs.bogus_output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.info.None() # operator instantiation
op.inputs.bogus_input.Connect(my_bogus_input)
my_bogus_output = op.outputs.bogus_output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.