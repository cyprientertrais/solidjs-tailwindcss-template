import type { Component } from 'solid-js';
import Footer from "./Footer";

const App: Component = () => {
  return (
      <div>
    <div class="flex justify-center content-center h-full items-center absolute w-full">
      <p>Starter for <a href="https://www.solidjs.com/"> SolidJS TS</a> + <a href="https://tailwindcss.com/">tailwindcss</a></p>
    </div>
        <div class="absolute w-full bottom-0">
          <Footer/>
        </div>
      </div>
  );
};

export default App;
