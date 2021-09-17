// Path: /.eslintrc.js

module.exports = {
  extends: ["airbnb"],
  plugins: ["react-hooks"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
      },
    ],
  },
};
