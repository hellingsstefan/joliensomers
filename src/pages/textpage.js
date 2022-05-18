import testImages from '@utils/testimages';
import Article from '@components/Article';
import Figure from '@components/Figure';
import Blockquote from '@components/Blockquote';

function Textpage() {
    return (
        <div className="container">
            <Article>
                <Article.Breakout className="h-text-center h-safe-padding">
                    <h1>The Importance Of Testing A Visual Type Scale On A Mobile Phone</h1>
                    <p className="summary">What <a href="https://www.google.com/" target="_blank" rel="noreferrer">looked like a small patch</a> of purple grass, above five feet square, was moving across the sand in their direction.</p>
                </Article.Breakout>
                <hr />
                <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
                <Figure src={testImages[0]} alt="A purple patch of grass" caption="This is a caption" />
                <h2>The Importance Of Testing A Visual Type Scale On A Mobile Phone</h2>
                <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>
                <small className='h-margin-bottom-3'>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</small>
                <ol>
                    <li>Item 1 has some text inside it</li>
                    <li>Item 2 has significantly more text in comparison to item number 1</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis dolor cumque perspiciatis esse quaerat numquam sapiente modi commodi incidunt est sed totam corporis, explicabo ea, labore magni maiores iste.</li>
                    <li>
                        Here comes a nested list:
                        <ol>
                            <li>This is a nested list that needs to be tested as wel</li>
                            <li>It will have less items inside</li>
                            <li>But that doesn&apos;t matter, it&apos;s just for testing</li>
                        </ol>
                    </li>
                    <li>Another item to finish it off</li>
                </ol>
                <hr />
                <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
                <h3>The Importance Of Testing A Visual Type Scale On A Mobile Phone</h3>
                <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>
                <p>When Dave asks HAL to open the pod bay door, HAL answers: <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">I&apos;m sorry, Dave. I&apos;m afraid I can&apos;t do that.</q></p>
                <Blockquote
                    quote='Superleuke foto&apos;s! Ook het maken van de reportage vonden onze jongens heel leuk en dan heb je natuurlijk blije gezichten op je foto&apos;s!'
                    caption="Ancy V." />
                <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
                <Blockquote
                    quote={(
                        <>
                            <p>Wij kozen-na een eerdere positieve ervaring bij Pixelkings - opnieuw voor een studio fotoshoot bij Jolien en Stefan.</p>
                            <p>Onze zoon houdt niet van drukte en heeft wat tijd nodig om te ontdooien en daar hielden Jolien en Stefan super rekening mee. Yarne (zoon) had niet het gevoel dat hij moest presteren en hij was de binnen de kortste keren op zijn gemak. Jolien kan zich volop concentreren op het foto&apos;s maken en haar partner Stefan zorgt voor de begeleiding. Hij doet de poses voor. Zorgt voor de juiste lach op het juiste moment!</p>
                            <p>Wij vinden ze als duo in ieder geval ideaal! Ze gaan zelf ook heel relaxed met elkaar om en dat straalt ook op &quot;het fotomodel&quot; af ;) Als je houdt van een ontspannen, rustige sfeer zonder druk en met een heel groot gevoel voor humor ben je bij Pixelkings op het juiste adres!!</p>
                            <p>Ook belangrijk dat de &quot;dienst na verkoop&quot; ook het vermelden waard is. Na onze keuze voor de foto&apos;s gemaakt te hebben, kregen we zeer snel onze hoge resolutie bestanden. Professioneel bewerkt. Jolien en Stefan. Doe zo verder!</p>
                        </>
                    )}
                    caption={(
                        <cite>
                            <a href="https://www.google.com/maps/contrib/111680607615899385832/reviews/@50.9970112,5.3450614,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-BE" target="_blank" rel="noreferrer">Kelly I.</a>
                        </cite>
                    )} />
                <h4>The Importance Of Testing A Visual Type Scale On A Mobile Phone</h4>
                <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>
                <ul>
                    <li>Item 1 has some text inside it</li>
                    <li>Item 2 has significantly more text in comparison to item number 1</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis dolor cumque perspiciatis esse quaerat numquam sapiente modi commodi incidunt est sed totam corporis, explicabo ea, labore magni maiores iste.</li>
                    <li>
                        Here comes a nested list:
                        <ul>
                            <li>This is a nested list that needs to be tested as wel</li>
                            <li>It will have less items inside</li>
                            <li>But that doesn&apos;t matter, it&apos;s just for testing</li>
                        </ul>
                    </li>
                    <li>Another item to finish it off</li>
                </ul>
                <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
                <h5>The Importance Of Testing A Visual Type Scale On A Mobile Phone</h5>
                <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>
                <p>The following is a description list</p>
                <dl>
                    <dt>Description list title</dt>
                    <dd>Description list devision</dd>

                    <dt>The Description List element</dt>
                    <dd>
                        <p>The <strong><code>&lt;dl&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element represents a description list. The element encloses a list of groups of terms (specified using the <a href="/en-US/docs/Web/HTML/Element/dt"><code>&lt;dt&gt;</code></a> element) and descriptions (provided by <a href="/en-US/docs/Web/HTML/Element/dd"><code>&lt;dd&gt;</code></a> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).</p>
                    </dd>

                    <dt><a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a></dt>
                    <dd>
                        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>, and if the <code>&lt;dl&gt;</code> element&apos;s children include one
                        name-value group, palpable content.
                    </dd>
                    <dt>Permitted content</dt>
                    <dd>
                        <p>
                            Either: Zero or more groups each consisting of one or more
                            &nbsp;<a href="/en-US/docs/Web/HTML/Element/dt"><code>&lt;dt&gt;</code></a> elements followed by one or more
                            &nbsp;<a href="/en-US/docs/Web/HTML/Element/dd"><code>&lt;dd&gt;</code></a> elements, optionally intermixed with
                            &nbsp;<a href="/en-US/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> and
                            &nbsp;<a href="/en-US/docs/Web/HTML/Element/template"><code>&lt;template&gt;</code></a> elements.<br />
                            Or: (in
                            <a href="/en-US/docs/Glossary/WHATWG">WHATWG</a> HTML, <a href="/en-US/docs/Glossary/W3C">W3C</a> HTML 5.2
                            and later) One or more <a href="/en-US/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a> elements,
                            optionally intermixed with <a href="/en-US/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> and
                            &nbsp;<a href="/en-US/docs/Web/HTML/Element/template"><code>&lt;template&gt;</code></a> elements.
                        </p>
                    </dd>
                    <dt>Tag omission</dt>
                    <dd>None, both the starting and ending tag are mandatory.</dd>
                    <dt>Permitted parents</dt>
                    <dd>
                        Any element that accepts <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">flow content</a>.
                    </dd>
                    <dt>Implicit ARIA role</dt>
                    <dd><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role" className="external" rel=" noopener">No corresponding role</a></dd>
                    <dt>Permitted ARIA roles</dt>
                    <dd>
                        <code><a href="https://w3c.github.io/aria/#group" className="external" rel=" noopener">group</a></code>,
                        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/list_role">list</a></code>, <code><a href="https://w3c.github.io/aria/#none" className="external" rel=" noopener">none</a></code>, <code><a href="https://w3c.github.io/aria/#presentation" className="external" rel=" noopener">presentation</a></code>
                    </dd>
                    <dt>DOM interface</dt>
                    <dd><a href="/en-US/docs/Web/API/HTMLDListElement"><code>HTMLDListElement</code></a></dd>
                </dl>
                <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
                <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>
                <div className="table-wrapper">
                    <table>
                        <caption>Table caption</caption>
                        <thead>
                            <tr>
                                <th>Table header</th>
                                <th>Table header</th>
                                <th>Table header</th>
                                <th>Table header</th>
                                <th>Table header</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Table footer</td>
                                <td>Table footer</td>
                                <td>Table footer</td>
                                <td>Table footer</td>
                                <td>Table footer</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
                <Figure src={testImages[2]} alt="A purple patch of grass" caption="This image has no breakout" />
                <Article.Breakout size="small"><Figure src={testImages[2]} alt="A purple patch of grass" caption="This image has a small breakout" /></Article.Breakout>
                <Article.Breakout size="medium"><Figure src={testImages[2]} alt="A purple patch of grass" caption="This image has a medium breakout" /></Article.Breakout>
                <Article.Breakout size="large"><Figure src={testImages[2]} alt="A purple patch of grass" caption="This image has a large breakout" /></Article.Breakout>
                <Article.Breakout size="full"><Figure src={testImages[2]} alt="A purple patch of grass" caption="This image has a full breakout" /></Article.Breakout>
            </Article>
        </div>
    );
}

export default Textpage;
