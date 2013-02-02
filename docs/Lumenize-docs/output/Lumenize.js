Ext.data.JsonP.Lumenize({"tagname":"class","name":"Lumenize","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Lumenize","members":{"cfg":[],"property":[],"method":[{"name":"arrayOfMaps_To_CSVStyleArray","tagname":"method","owner":"Lumenize","meta":{},"id":"method-arrayOfMaps_To_CSVStyleArray"},{"name":"arrayOfMaps_To_HighChartsSeries","tagname":"method","owner":"Lumenize","meta":{},"id":"method-arrayOfMaps_To_HighChartsSeries"},{"name":"csvStyleArray_To_ArrayOfMaps","tagname":"method","owner":"Lumenize","meta":{},"id":"method-csvStyleArray_To_ArrayOfMaps"},{"name":"histogram","tagname":"method","owner":"Lumenize","meta":{},"id":"method-histogram"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":3,"files":[{"filename":"lumenize.coffee.js","href":"lumenize.coffee.html#Lumenize"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/lumenize.coffee.html#Lumenize' target='_blank'>lumenize.coffee.js</a></div></pre><div class='doc-contents'><h1>Lumenize</h1>\n\n<p>Lumenize provides tools for aggregating data and creating time series and other temporal visualizations.</p>\n\n<p>The primary time-series aggregating functionality is provided by:\n  * <a href=\"#!/api/Lumenize.TimeSeriesCalculator\" rel=\"Lumenize.TimeSeriesCalculator\" class=\"docClass\">Lumenize.TimeSeriesCalculator</a> - Sets of single-metric series or group-by series\n  * <a href=\"#!/api/Lumenize.TransitionsCalculator\" rel=\"Lumenize.TransitionsCalculator\" class=\"docClass\">Lumenize.TransitionsCalculator</a> - Counts or sums for items moving from one state to another\n  * <a href=\"#!/api/Lumenize.TimeInStateCalculator\" rel=\"Lumenize.TimeInStateCalculator\" class=\"docClass\">Lumenize.TimeInStateCalculator</a> - Cumulative amount of time unique work items spend in a particular state</p>\n\n<p>Simple group-by, 2D pivot-table and even multi-dimensional aggregations (OLAP cube) are provided by:\n  * <a href=\"#!/api/Lumenize.OLAPCube\" rel=\"Lumenize.OLAPCube\" class=\"docClass\">Lumenize.OLAPCube</a> - Used by above three Calculators but also useful stand-alone, particularly for hierarchical roll-ups</p>\n\n<p>All of the above use the mathematical and statistical functions provided by:\n  * <a href=\"#!/api/Lumenize.functions\" rel=\"Lumenize.functions\" class=\"docClass\">Lumenize.functions</a> - count, sum, standardDeviation, p75, p99, p??, min, max, etc.</p>\n\n<p>Three transformation functions are provided:\n  * Lumenize.arrayOfMaps_To_CSVStyleArray - Used to transform from record to table format\n  * Lumenize.csvStyleArray_To_ArrayOfMaps - Used to transform from table to record format\n  * Lumenize.arrayOfMaps_To_HighChartsSeries - Used to transform from record format to the format expected by the</p>\n\n<pre><code>HighCharts charting library\n</code></pre>\n\n<p>And last, additional functionality is provided by:\n  * <a href=\"#!/api/Lumenize-method-histogram\" rel=\"Lumenize-method-histogram\" class=\"docClass\">Lumenize.histogram</a> - create a histogram of scatter data\n  * Lumenize.utils - utility methods used by the rest of Lumenize (type, clone, array/object functions, etc.)</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-arrayOfMaps_To_CSVStyleArray' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/dataTransform.coffee.html#Lumenize-method-arrayOfMaps_To_CSVStyleArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-arrayOfMaps_To_CSVStyleArray' class='name expandable'>arrayOfMaps_To_CSVStyleArray</a>( <span class='pre'>arrayOfMaps, [keys]</span> ) : Array[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arrayOfMaps</span> : Object[]<div class='sub-desc'>\n</div></li><li><span class='pre'>keys</span> : Object (optional)<div class='sub-desc'><p>If not provided, it will use the first row and get all fields</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array[]</span><div class='sub-desc'><p>The first row will be the column headers</p>\n\n<p><code>arrayOfMaps_To_CSVStyleArray</code> is a convenience function that will convert an array of maps like:</p>\n\n<pre><code>{arrayOfMaps_To_CSVStyleArray} = require('../')\n\narrayOfMaps = [\n  {column1: 10000, column2: 20000},\n  {column1: 30000, column2: 40000},\n  {column1: 50000, column2: 60000}\n]\n</code></pre>\n\n<p>to a CSV-style array like this:</p>\n\n<pre><code>console.log(arrayOfMaps_To_CSVStyleArray(arrayOfMaps))\n\n# [ [ 'column1', 'column2' ],\n#   [ 10000, 20000 ],\n#   [ 30000, 40000 ],\n#   [ 50000, 60000 ] ]\n</code></pre>\n\n<p>`</p>\n</div></li></ul></div></div></div><div id='method-arrayOfMaps_To_HighChartsSeries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/dataTransform.coffee.html#Lumenize-method-arrayOfMaps_To_HighChartsSeries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-arrayOfMaps_To_HighChartsSeries' class='name expandable'>arrayOfMaps_To_HighChartsSeries</a>( <span class='pre'>arrayOfMaps, config</span> ) : Object[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arrayOfMaps</span> : Array[]<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>You can use the same config you used to call aggregateAt() as long as it includes\n  your yAxis specifications</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>in HighCharts form</p>\n\n<p>Takes an array of arrays that came from a call to aggregateAt() and looks like this:</p>\n\n<pre><code>{arrayOfMaps_To_HighChartsSeries} = require('../')\n\narrayOfMaps = [\n  {\"Series 1\": 8, \"Series 2\": 5, \"Series3\": 10},\n  {\"Series 1\": 2, \"Series 2\": 3, \"Series3\": 20}\n]\n</code></pre>\n\n<p>and a list of series configurations</p>\n\n<pre><code>config = [\n  {name: \"Series 1\", yAxis: 1},\n  {name: \"Series 2\"}\n]\n</code></pre>\n\n<p>and extracts the data into seperate series</p>\n\n<pre><code>console.log(arrayOfMaps_To_HighChartsSeries(arrayOfMaps, config))\n# [ { name: 'Series 1', data: [ 8, 2 ], yAxis: 1 },\n#   { name: 'Series 2', data: [ 5, 3 ] } ]\n</code></pre>\n\n<p>Notice how the extra fields from the series array are included in the output.</p>\n</div></li></ul></div></div></div><div id='method-csvStyleArray_To_ArrayOfMaps' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/dataTransform.coffee.html#Lumenize-method-csvStyleArray_To_ArrayOfMaps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-csvStyleArray_To_ArrayOfMaps' class='name expandable'>csvStyleArray_To_ArrayOfMaps</a>( <span class='pre'>csvStyleArray, [rowKeys]</span> ) : Object[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>csvStyleArray</span> : Array[]<div class='sub-desc'><p>The first row is usually the list of column headers but if not, you can\n  provide your own such list in the second parameter</p>\n</div></li><li><span class='pre'>rowKeys</span> : String[] (optional)<div class='sub-desc'><p>specify the column headers like <code>['column1', 'column2']</code>. If not provided, it will use\n  the first row of the csvStyleArray</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p><code>csvStyleArry_To_ArryOfMaps</code> is a convenience function that will convert a csvStyleArray like:</p>\n\n<pre><code>{csvStyleArray_To_ArrayOfMaps} = require('../')\n\ncsvStyleArray = [\n  ['column1', 'column2'],\n  [1         , 2       ],\n  [3         , 4       ],\n  [5         , 6       ]\n]\n</code></pre>\n\n<p>to an Array of Maps like this:</p>\n\n<pre><code>console.log(csvStyleArray_To_ArrayOfMaps(csvStyleArray))\n\n# [ { column1: 1, column2: 2 },\n#   { column1: 3, column2: 4 },\n#   { column1: 5, column2: 6 } ]\n</code></pre>\n\n<p>`</p>\n</div></li></ul></div></div></div><div id='method-histogram' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize'>Lumenize</span><br/><a href='source/histogram.coffee.html#Lumenize-method-histogram' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize-method-histogram' class='name expandable'>histogram</a>( <span class='pre'>rows, valueField</span> ) : Object[]</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rows</span> : Object[]<div class='sub-desc'>\n</div></li><li><span class='pre'>valueField</span> : String<div class='sub-desc'><p>Specifies the field containing the data to calculate the histogram</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>Returns an object containing the following:</p>\n\n<ul>\n<li>buckets - An Array containing {label, count, rows, clippedChartValue}</li>\n<li>bucketSize - The size of each bucket (except the top one)</li>\n<li>chartMax - The maximum to use for charting using clipped values</li>\n<li>clipped - A Boolean indicating if the result is clipped</li>\n<li>valueMax - The actual maximum value found. Will always be >= chartMax</li>\n</ul>\n\n\n<p>Given an array of rows like:</p>\n\n<pre><code>{histogram} = require('../')\n\nrows = [\n  {age:  7},\n  {age: 25},\n  {age: 23},\n  {age: 27},\n  {age: 34},\n  {age: 55},\n  {age: 42},\n  {age: 13},\n  {age: 11},\n  {age: 23},\n  {age: 31},\n  {age: 32},\n  {age: 29},\n  {age: 16},\n  {age: 31},\n  {age: 22},\n  {age: 25},\n]\n</code></pre>\n\n<p>histogram will calculate a histogram. There will be sqrt(n) + 1 buckets</p>\n\n<pre><code>{buckets, chartMax} = histogram(rows, 'age')\nfor b in buckets\n  console.log(b.label, b.count)\n# 0-13 2\n# 13-26 7\n# 26-39 6\n# 39-52 1\n# 52-65 1\n\nconsole.log(chartMax)\n# 65\n</code></pre>\n\n<p>This histogram calculator will also attempt to lump outliers into a single bucket at the top.</p>\n\n<pre><code>rows.push({age: 85})\n\n{buckets, chartMax} = histogram(rows, 'age')\n\nlastBucket = buckets[buckets.length - 1]\nconsole.log(lastBucket.label, lastBucket.count)\n# 68-86* 1\n</code></pre>\n\n<p>The asterix <code>*</code> is there to indicate that this bucket is not the same size as the others and non-linear.\nThe histogram calculator will also \"clip\" the values for these outliers so that you can\ndisplay them in a scatter chart on a linear scale with the last band compressed.\nThe <code>clippedChartValue</code> will be guaranteed to be below the <code>chartMax</code> by interpolating it's position between\nthe bounds of the top band where the actual max value is scaled down to the <code>chartMax</code></p>\n\n<pre><code>lastBucket = buckets[buckets.length - 1]\nconsole.log(lastBucket.rows[0].age, lastBucket.rows[0].clippedChartValue)\n# 85 84.05555555555556\n</code></pre>\n</div></li></ul></div></div></div></div></div></div></div>"});