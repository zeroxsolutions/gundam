import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { babel } from "@rollup/plugin-babel"

export default {
  input: "src/index.tsx", // Entry point
  output: [
    {
      file: "dist/index.js", // Output file
      format: "cjs", // CommonJS format
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js", // ES module output
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS to ES6 modules
    typescript({
      tsconfig: "./tsconfig.json",
      outputToFilesystem: true,
    }), // Compile TypeScript
    babel({
      extensions: [".ts", ".tsx"],
      babelHelpers: "bundled",
      presets: ["@babel/preset-typescript"],
    }),
  ],
  external: ["react", "react-dom"], // Treat peer dependencies as external
}
