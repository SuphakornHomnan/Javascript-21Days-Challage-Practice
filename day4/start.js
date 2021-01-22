(() => {
  function run() {
    const body_element = document.querySelector("body");
    const eye_element = document.querySelectorAll(".eye");

    function onMouseMove({ page_x: mouse_x, page_y: mouse_y }) {
      eye_element.forEach((eyeElem) => {
        const {
          left: eye_left,
          top: eye_top,
        } = eyeElem.getBoundingClientRect();

        const eyeCenterX = eye_left + eyeElem.offsetWidth / 2;
        const eyeCenterY = eye_top + eyeElem.offsetHeight / 2;
        const radian = Math.atan2(mouse_x - eyeCenterX, mouse_y - eyeCenterY);
        const angle = (radian / Math.PI) * -180;
        eyeElem.style.transform = `rotate(${angle}deg)`;
      });
    }

    body_element.addEventListener("mousemove", onMouseMove);
  }
  run();
})();
