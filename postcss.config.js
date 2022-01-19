module.exports = {
    plugins: [
        "postcss-custom-media",
        "postcss-flexbugs-fixes",
        [
            "postcss-preset-env",
            {
                "autoprefixer": {
                    "flexbox": "no-2009",
                    "grid": true,
                },
                "stage": 3,
                "features": {
                    "custom-properties": true,
                },
            },
        ],
    ],
};
