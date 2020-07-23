import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

import pkg from "./package.json";

const extensions = [".ts", ".tsx"];
const input = "src/index.tsx";

const plugins = [
  resolve({ extensions }),
  typescript({ rollupCommonJSResolveHack: false, clean: true }),
  commonjs({
    include: /node_modules/,
  }),
  babel({
    extensions,
    exclude: /node_modules/,
    babelHelpers: "bundled",
    presets: ["@babel/preset-env", "@babel/preset-react"],
  }),
];

const config = {
  input,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins,
};

export default config;