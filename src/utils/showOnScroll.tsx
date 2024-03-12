export const showOnScroll = (data: string) => {
  let timeout: number;
  const elements = document.querySelectorAll(`[${data}]`);

  document.removeEventListener("scroll", () =>
    useThrottle(() => onScroll(), 100)
  );

  const onScroll = () => {
    elements.forEach((element) => {
      const top = element.getBoundingClientRect().top;
      const data = element.getAttribute("data-animate");
      if (top < window.innerHeight * 0.8 && data == "true") {
        element.setAttribute("data-animate", "false");
      }
    });
  };

  onScroll();

  const useThrottle = (callback: () => void, limit: number) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      clearTimeout(timeout);
      return callback();
    }, limit);
  };

  document.addEventListener("scroll", () => useThrottle(() => onScroll(), 100));
};
