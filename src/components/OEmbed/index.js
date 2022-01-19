/** Work in progress
 * If no cookies were accepted, show a warning to the user informing them
 * that the content they want to see is 3rd party content, and they need to
 * accept cookies to view it.
 */

/*
import { useState, useEffect } from "react";
import providerList from "./oembed-provider-list";

const allowedProviders = [
    "flickr",
    "giphy",
    "imgur",
    "instagram",
    "soundcloud",
    "spotify",
    "twitch",
    "twitter",
    "vimeo",
    "youtube",
];

const OEmbed = ({ url, maxWidth, maxHeight, ...props }) => {
    const [ embed, setEmbed ] = useState(null);

    useEffect(() => {
        if (url) {
            const fetchUrl = `https://noembed.com/embed?url=${url}`;

            fetch(fetchUrl)
                .then(response => response.json())
                .then(json => {
                    if (json.html) {
                        setEmbed(json.html);
                    }
                });
        }
    }, [ url ]);

    if (!embed) {
        return null;
    }

    return (
        <div
            className="oembed"
            style={{
                maxWidth: maxWidth,
                maxHeight: maxHeight,
            }}
            {...props}
        >
            <div
                className="oembed-content"
                dangerouslySetInnerHTML={{ __html: embed }}
            />
        </div>
    );
};

export default OEmbed;
*/
