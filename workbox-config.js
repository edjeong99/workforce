module.exports = {
  globDirectory: './',
  globPatterns: ['**/*.{css,html,js,webmanifest,jpg,PNG,ico}'],
  swDest: 'sw.js',

  // Define runtime caching rules.
  runtimeCaching: [
    {
      // Match any request that ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /https:\/\/cloud\.iexapis\.com\/stable/,
      // https://cloud.iexapis.com/stable/stock
      // Apply a cache-first strategy.
      handler: 'NetworkFirst',

      options: {
        // Use a custom cache name.
        cacheName: 'stockPrice',

        plugins: [
          // new ExpirationPlugin({
          //   maxAgeSeconds: 60 * 60,
          // }),
          // maxAgeSeconds,
          // 60 * 60, // 1 hour
        ],
      },
    },
  ],
};
