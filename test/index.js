var should = require('chai').should(),
    jsontoconfig = require('../index'),
    escape = jsontoconfig.escape,
    unescape = jsontoconfig.unescape;
    setnumb = jsontoconfig.setnumb;

describe('#escape', function() {
  it('converts & into &amp;', function() {
    escape('&').should.equal('&amp;');
  });

  it('converts " into &quot;', function() {
    escape('"').should.equal('&quot;');
  });

  it('converts \' into &#39;', function() {
    escape('\'').should.equal('&#39;');
  });

  it('converts < into &lt;', function() {
    escape('<').should.equal('&lt;');
  });

  it('converts > into &gt;', function() {
    escape('>').should.equal('&gt;');
  });
});

describe('#convert one number', function() {
  it('converts 2', function() {
    setnumb('2').should.equal(12);
  });

  it('converts 2', function() {
    setnumb('2').should.not.equal(11);
  });

  it('converts 5', function() {
    setnumb('5').should.equal(15);
  });

  it('converts -6', function() {
    setnumb('-6').should.equal(4);
  });

  it('converts 20', function() {
    setnumb('20').should.equal(30);
  });

  it('converts 21', function() {
    setnumb('21').should.equal(41);
  });
});

describe('#unescape', function() {
  it('converts &amp; into &', function() {
    unescape('&amp;').should.equal('&');
  });

  it('converts &quot; into "', function() {
    unescape('&quot;').should.equal('"');
  });

  it('converts &#39; into \'', function() {
    unescape('&#39;').should.equal('\'');
  });

  it('converts &lt; into <', function() {
    unescape('&lt;').should.equal('<');
  });

  it('converts &gt; into >', function() {
    unescape('&gt;').should.equal('>');
  });
});
