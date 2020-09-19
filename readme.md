# Highway project structure by Layer Code:
This is intended as a mini tutorial in how we at Layer code maintain a clean structure for our web projects using highway js as key solution for transitions in our hybrid cordova apps. We demonstrate how to use custom js for each page and external css styles like bootstrap 

### Project Structure
```
-src
    -assets
        -css    
            -index.css
        -js
            -renderers
                index-render.js
                page2-render.js
            -transitions
                fade-in-bottom.js
                overlap.js
            core.js
    -index.html
    -page2.html
    -page n... .html
 ```
### Steps to try this structure
##### install dependencies

``$ npm install
``
##### run the the parcel bundler and launch localhost

``$ npm run dev
``
### Work with this structure
- ##### add a new page in the src folder root

```
-src
    index.html
    page2.html
 -> new-page.html 
 ```
- ##### HTML file
**Important! Just use underscores (_) for the data-router-view**
```HTML
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="initial-scale=1, width=device-width, viewport-fit=cover"
    />
    <link rel="stylesheet" href="./assets/css/index.css" />
    <title>Template</title>
  </head>
  <body>
      <div id="app" data-router-wrapper>
        <div data-router-view="new_page">
          <div class="container">
            <main>
              <h3 class="text-primary">Template</h3>
              <p>Hey! I am using bootstrap</p>
              <a href="./page2.html" >To page 2</a>
            </main>
          </div>
        </div>
      </div>

   
    <!--CORE SCRIPT-->
    <script src="./assets/js/core.js"></script>
  </body>
</html>

``` 

 - ##### add a new renderer for that page inside ./src/assets/js/renderers 

```
-src
    -index.html
    -page2.html
    -new-page.html
    -assets
        -renderers
            index-render.js
            page2-render.js
         -> new-page-render.js

 ```
- ##### renderer file
 
```javascript
//HIGHWAY
import Highway from "@dogstudio/highway";

//We also import our instance of core in case we need any method from it
import { highway_core } from "../core";
//Import page libraries here
//eg: import jquery from 'jquery';
export default class New_page_renderer extends Highway.Renderer {
  onEnter() {}
  onLeave() {}
  onEnterCompleted() {
    //page specific code here
  }
  onLeaveCompleted() {}
}

 ```

- ##### add the renderer to ./src/assets/js/core.js
```javascript
//highway
import Highway from "@dogstudio/highway";
//RENDERERS
import Index_renderer from "./renderers/index-renderer";
import Page2_renderer from "./renderers/page2-renderer";
/*-->*/ import New_page_renderer from "./renderers/new-page-renderer.js";
//TRANSITIONS
import Fade_in_bottom from "./transitions/fade-in-bottom";
import Overlap from "./transitions/overlap";
const highway_core = new Highway.Core({
  renderers: {
    index: Index_renderer,
    page2: Page2_renderer,
   /*-->*/ new_page: New_page_renderer,
  },
  transitions: {
    default: Fade_in_bottom,
    contextual: {
      Fade_in_bottom: Fade_in_bottom,
      overlap: Overlap,
    },
  },
});
export { highway_core };
 ```
And thats it! Just... **Save and reload**

### Adding external styles
if your are using parcel, the scripts provided by highway team to reload dynamically the js will most likely not work. instead just will have to only run 1 index.css file and import stuff there using the **@import rule**.
```css
/*import libraries css here*/

/*We are importing bootstrap from node modules*/
@import "bootstrap/dist/css/bootstrap.min.css";
/*Your styles here*/
a{
    color: red !important;
}

```

### Interacting with pages and adding libraries
Highway scopes the pages logic in renderers. this makes really straight forward 
to interact with that specific page



##### example renderer js file
```javascript
//HIGHWAY
import Highway from "@dogstudio/highway";

//We also import our instance of core in case we need any method from it
import { highway_core } from "../core";
//Import page libraries here
import $ from 'jquery';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';

export default class New_page_renderer extends Highway.Renderer {
  onEnter() {}
  onLeave() {}
  onEnterCompleted() {
    //page specific code here
    console.log($('#test-elem'));
  }
  onLeaveCompleted() {}
}

 ```
 important to add DOM code inside **onEnterCompleted** method since like that we make sure view has already been fully loaded
