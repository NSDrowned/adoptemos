<script>
  import { Link } from "svelte-routing";

  export let to = "";
  export let classes;

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
        return { class: classes + " active" };
    } else {
        return { class: classes };
    }
    return {};
  }
</script>

<Link to="{to}" getProps="{getProps}">
  <slot />
</Link>