Ext.data.JsonP.Lumenize_TimelineIterator({"tagname":"class","name":"Lumenize.TimelineIterator","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Lumenize.TimelineIterator","members":{"cfg":[],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"Lumenize.TimelineIterator","meta":{},"id":"method-constructor"},{"name":"hasNext","tagname":"method","owner":"Lumenize.TimelineIterator","meta":{},"id":"method-hasNext"},{"name":"next","tagname":"method","owner":"Lumenize.TimelineIterator","meta":{},"id":"method-next"},{"name":"reset","tagname":"method","owner":"Lumenize.TimelineIterator","meta":{},"id":"method-reset"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":479,"files":[{"filename":"Timeline.coffee.js","href":"Timeline.coffee.html#Lumenize-TimelineIterator"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Timeline.coffee.html#Lumenize-TimelineIterator' target='_blank'>Timeline.coffee.js</a></div></pre><div class='doc-contents'><p>In most cases you'll want to call getAll() on Timeline. TimelineIterator is for use cases where you want to get the\nvalues in the Timeline one at a time.</p>\n\n<p>You usually get a TimelineIterator by calling getIterator() on a Timeline object.</p>\n\n<p>Iterate through days, months, years, etc. skipping weekends and holidays that you\nspecify. It will also iterate over hours, minutes, seconds, etc. and skip times that are not\nbetween the specified work hours.</p>\n\n<h2>Usage</h2>\n\n<pre><code>{TimelineIterator, Timeline, Time} = require('../')\n\ntl = new Timeline({\n  startOn:new Time({granularity: 'day', year: 2009, month:1, day: 1}),\n  endBefore:new Time({granularity: 'day', year: 2009, month:1, day: 8}),\n  workDays: 'Monday, Tuesday, Wednesday, Thursday, Friday',\n  holidays: [\n    {month: 1, day: 1},  # New Years day was a Thursday in 2009\n    {year: 2009, month: 1, day: 2}  # Also got Friday off in 2009\n  ]\n})\n\ntli = tl.getIterator()\n\nwhile (tli.hasNext())\n  console.log(tli.next().toString())\n\n# 2009-01-05\n# 2009-01-06\n# 2009-01-07\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.TimelineIterator'>Lumenize.TimelineIterator</span><br/><a href='source/Timeline.coffee.html#Lumenize-TimelineIterator-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Lumenize.TimelineIterator-method-constructor' class='name expandable'>Lumenize.TimelineIterator</a>( <span class='pre'>timeline, [emit], [childGranularity], [tz]</span> ) : <a href=\"#!/api/Lumenize.TimelineIterator\" rel=\"Lumenize.TimelineIterator\" class=\"docClass\">Lumenize.TimelineIterator</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timeline</span> : Timeline<div class='sub-desc'><p>A Timeline object</p>\n</div></li><li><span class='pre'>emit</span> : String (optional)<div class='sub-desc'><p>An optional String that specifies what should be emitted. Possible values are 'Time' (default),\n   'Timeline', 'Date' (javascript Date Object), and 'ISOString'.</p>\n</div></li><li><span class='pre'>childGranularity</span> : String (optional)<div class='sub-desc'><p>When emit is 'Timeline', this is the granularity for the startOn and endBefore of the\n   Timeline that is emitted.</p>\n</div></li><li><span class='pre'>tz</span> : String (optional)<div class='sub-desc'><p>A Sting specifying the timezone in the standard form,<code>America/New_York</code> for example. This is\n   required if <code>emit</code> is 'Date' or 'ISOString'.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Lumenize.TimelineIterator\" rel=\"Lumenize.TimelineIterator\" class=\"docClass\">Lumenize.TimelineIterator</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasNext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.TimelineIterator'>Lumenize.TimelineIterator</span><br/><a href='source/Timeline.coffee.html#Lumenize-TimelineIterator-method-hasNext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.TimelineIterator-method-hasNext' class='name expandable'>hasNext</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Returns true if there are still things left to iterator over. Note that if there are holidays,\n   weekends or non-workhours to skip, then hasNext() will take that into account. For example if the endBefore is a\n   Sunday, hasNext() will return true the next time it is called after the Friday is emitted.</p>\n</div></li></ul></div></div></div><div id='method-next' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.TimelineIterator'>Lumenize.TimelineIterator</span><br/><a href='source/Timeline.coffee.html#Lumenize-TimelineIterator-method-next' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.TimelineIterator-method-next' class='name expandable'>next</a>( <span class='pre'></span> ) : Time/Timeline/Date/String</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Time/Timeline/Date/String</span><div class='sub-desc'><p>Returns the next value of the iterator. The start will be the first value emitted unless it should\n   be skipped due to holiday, weekend, or workhour knockouts.</p>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Lumenize.TimelineIterator'>Lumenize.TimelineIterator</span><br/><a href='source/Timeline.coffee.html#Lumenize-TimelineIterator-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Lumenize.TimelineIterator-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Will go back to the where the iterator started. ...</div><div class='long'><p>Will go back to the where the iterator started.</p>\n</div></div></div></div></div></div></div>"});