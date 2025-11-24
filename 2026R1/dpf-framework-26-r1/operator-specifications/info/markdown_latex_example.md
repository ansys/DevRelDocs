---
category: info
plugin: documentation
license: None
---

# info:Markdown LaTex example

**Version: 0.0.0**

## Description

This operator showcases the use of Markdown and LaTeX in operator and pin descriptions:
# Headings
## h2
### h3
#### h4
##### h5

# Text
This should result in a paragraph
it's that simple.


*italic*, **bold**

# Lists
* an *unordered list*
  * with **some hierarchy**
    1. and an ordered
    2. mixed
    * list
    * directly
  * inside

# Code
## Code block
```c
std::string a = 'test';
```
```js
var a = 'test';
```
```python
a: str = 'test'
```
## Inline code
And well `inline code` should also work.

# Quotes

> A Quote
>
> With *some text* **blocks inside**
>
> * even a list
> * should be
> * possible

## Links
Links such as [link](https://docs.pyansys.com/).

## Images
![an image](https://docs.pyansys.com/version/dev/_static/pyansys_logo_transparent_white.png)


## Separations

---

## Checklists

- [ ] how
- [ ] about
  - [ ] a
  - [x] nice
- [x] check
- [ ] list

## Tables

| Left header | middle header | last header |
|-------------|---------------|-------------|
| cell 1      | cell **2**    | cell 3      |
| cell 4      | cell 5        | cell 6      |


## LaTeX

An inline equation $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$ using LaTeX dollar delimiters.

An inline equation \(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\) using LaTeX parenthesis delimiters.

An equation on its own using dollar delimiters:
$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$$

An equation on its own using square bracket delimiters:
\[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\]


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  bogus_input |[`string`](../../core-concepts/dpf-types.md#standard-types) | This pin showcases the use of Markdown and LaTeX in pin descriptions:<br># Headings<br>## h2<br>### h3<br>#### h4<br>##### h5<br><br># Text<br>This should result in a paragraph<br>it's that simple.<br><br><br>*italic*, **bold**<br><br># Lists<br>* an *unordered list*<br>  * with **some hierarchy**<br>    1. and an ordered<br>    2. mixed<br>    * list<br>    * directly<br>  * inside<br><br># Code<br>## Code block<br>```c<br>std::string a = 'test';<br>```<br>```js<br>var a = 'test';<br>```<br>```python<br>a: str = 'test'<br>```<br>## Inline code<br>And well `inline code` should also work.<br><br># Quotes<br><br>> A Quote<br>><br>> With *some text* **blocks inside**<br>><br>> * even a list<br>> * should be<br>> * possible<br><br>## Links<br>Links such as [link](https://docs.pyansys.com/).<br><br>## Images<br>![an image](https://docs.pyansys.com/version/dev/_static/pyansys_logo_transparent_white.png)<br><br><br>## Separations<br><br>---<br><br>## Checklists<br><br>- [ ] how<br>- [ ] about<br>  - [ ] a<br>  - [x] nice<br>- [x] check<br>- [ ] list<br><br>## Tables<br><br>| Left header | middle header | last header |<br>|-------------|---------------|-------------|<br>| cell 1      | cell **2**    | cell 3      |<br>| cell 4      | cell 5        | cell 6      |<br><br><br>## LaTeX<br><br>An inline equation $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$ using LaTeX dollar delimiters.<br><br>An inline equation \(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\) using LaTeX parenthesis delimiters.<br><br>An equation on its own using dollar delimiters:<br>$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$$<br><br>An equation on its own using square bracket delimiters:<br>\[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\]<br> |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| bogus_output | | This pin showcases the use of Markdown and LaTeX in pin descriptions:
# Headings
## h2
### h3
#### h4
##### h5

# Text
This should result in a paragraph
it's that simple.


*italic*, **bold**

# Lists
* an *unordered list*
  * with **some hierarchy**
    1. and an ordered
    2. mixed
    * list
    * directly
  * inside

# Code
## Code block
```c
std::string a = 'test';
```
```js
var a = 'test';
```
```python
a: str = 'test'
```
## Inline code
And well `inline code` should also work.

# Quotes

> A Quote
>
> With *some text* **blocks inside**
>
> * even a list
> * should be
> * possible

## Links
Links such as [link](https://docs.pyansys.com/).

## Images
![an image](https://docs.pyansys.com/version/dev/_static/pyansys_logo_transparent_white.png)


## Separations

---

## Checklists

- [ ] how
- [ ] about
  - [ ] a
  - [x] nice
- [x] check
- [ ] list

## Tables

| Left header | middle header | last header |
|-------------|---------------|-------------|
| cell 1      | cell **2**    | cell 3      |
| cell 4      | cell 5        | cell 6      |


## LaTeX

An inline equation $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$ using LaTeX dollar delimiters.

An inline equation \(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\) using LaTeX parenthesis delimiters.

An equation on its own using dollar delimiters:
$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$$

An equation on its own using square bracket delimiters:
\[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\]
 |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

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