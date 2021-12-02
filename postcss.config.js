module.exports = {
    plugins: [
        "postcss-custom-media",
        "postcss-flexbugs-fixes",
        [
            "postcss-preset-env",
            {
                "autoprefixer": {
                    "flexbox": "no-2009",
                    "grid": "autoplace",
                },
                "stage": 3,
                "features": {
                    "custom-properties": false,
                },
            },
        ],
    ],
};
