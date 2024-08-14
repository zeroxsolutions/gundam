import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts", // Entry point
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
    typescript({ tsconfig: "./tsconfig.json" }), // Compile TypeScript
  ],
  external: ["react", "react-dom"], // Treat peer dependencies as external
};
