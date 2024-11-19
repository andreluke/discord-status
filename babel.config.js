module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '#types': './src/types',
            '#services': './src/services',
            '#hooks': './src/hooks',
            '#pages': './src/pages',
            '#styles': './src/styles',
            '#theme': './src/theme',
            '#routes': './src/routes',
            '#utils': './src/utils',
          },
        },
      ],
    ],
  };
  