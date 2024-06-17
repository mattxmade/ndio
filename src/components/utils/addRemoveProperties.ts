const toggleFixedModalLayout = (state: boolean) => {
  const html = document.querySelector("html");
  const body = document.querySelector("body");

  if (!html || !body) return;

  html.style.scrollBehavior;

  if (state) {
    // html
    [
      { property: "padding-right", value: "17px" },
      { property: "scroll-behavior", value: "auto" },
      //@ts-ignore
    ].forEach((style) => (html.style[style.property] = style.value));

    // body
    [
      { property: "position", value: "fixed" },
      { property: "top", value: "0px" },
      { property: "left", value: "0px" },
      { property: "right", value: "0px" },
      { property: "height", value: "auto" },
      //@ts-ignore
    ].forEach((style) => (body.style[style.property] = style.value));
  }

  if (!state) {
    // html
    ["padding-right", "scroll-behavior"].forEach((property) =>
      html.style.removeProperty(property)
    );

    // body
    ["position", "top", "left", "right", "height"].forEach((property) =>
      body.style.removeProperty(property)
    );
  }
};

export default toggleFixedModalLayout;
