import Prism from "prismjs";

// Include a theme:
import "prismjs/themes/prism-okaidia.css";

// Include some plugins:
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/highlight-keywords/prism-highlight-keywords";
import "prismjs/plugins/show-language/prism-show-language";
import "prismjs/plugins/autoloader/prism-autoloader";

export default defineNuxtPlugin(() => {
    return Prism;
})