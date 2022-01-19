/** TODO
 * Media // oEmbed
 * Iframes
 * Links
 * Horizontal Rules
 * Blockquotes
 * Code
 * Text
 *
 * Glass effect on header when scrolling down
 */

import images from '../utils/testimages';
import Article from '../components/Article';
import Figure from '../components/Figure';
// import OEmbed from '../components/OEmbed';

function Home() {
    return (
        <div className="container">
            <Article>
                <h1>The Importance Of Testing A Visual Type Scale On A Mobile Phone</h1>
                <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>
                {/* <OEmbed url="https://www.youtube.com/watch?v=tRFOjLIl7G0" /> */}
                <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
                <Figure src={images[0]} alt="A purple patch of grass" caption="This is a caption" />
                <h2>The Importance Of Testing A Visual Type Scale On A Mobile Phone</h2>
                <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>
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
                <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
                <h3>The Importance Of Testing A Visual Type Scale On A Mobile Phone</h3>
                <p>What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction.</p>
                <p>When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
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
                <Figure src={images[2]} alt="A purple patch of grass" caption="This image has no breakout" />
                <Article.Breakout size="small"><Figure src={images[2]} alt="A purple patch of grass" caption="This image has a small breakout" /></Article.Breakout>
                <Article.Breakout size="medium"><Figure src={images[2]} alt="A purple patch of grass" caption="This image has a medium breakout" /></Article.Breakout>
                <Article.Breakout size="large"><Figure src={images[2]} alt="A purple patch of grass" caption="This image has a large breakout" /></Article.Breakout>
                <Article.Breakout size="full"><Figure src={images[2]} alt="A purple patch of grass" caption="This image has a full breakout" /></Article.Breakout>
            </Article>
        </div>
    );
}

export default Home;
