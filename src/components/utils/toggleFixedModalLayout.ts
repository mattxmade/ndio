const toggleFixedModalLayout = (state: boolean, scrollYPosition: number) => {
  const html = document.querySelector("html");
  const body = document.querySelector("body");

  if (!html || !body) return;

  if (state) {
    // html
    [
      { property: "scroll-behavior", value: "auto" },
      //@ts-ignore
    ].forEach((style) => (html.style[style.property] = style.value));

    // body
    [
      { property: "position", value: "fixed" },
      { property: "padding-right", value: "17px" },
      { property: "top", value: -scrollYPosition + "px" },
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
    ["position", "padding-right", "top", "left", "right", "height"].forEach(
      (property) => body.style.removeProperty(property)
    );

    window.scroll(0, scrollYPosition);
  }
};

export default toggleFixedModalLayout;
